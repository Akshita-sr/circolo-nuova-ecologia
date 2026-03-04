/**
 * main.js — Circolo Nuova Ecologia Genova
 * Vanilla JS: mobile menu, back-to-top, gallery lightbox, active nav
 */

(function () {
  'use strict';

  /* --------------------------------------------------------
     1. MOBILE HAMBURGER MENU
  -------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* --------------------------------------------------------
     2. ACTIVE NAV LINK (based on current page filename)
  -------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* --------------------------------------------------------
     3. BACK TO TOP BUTTON
  -------------------------------------------------------- */
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    const toggleVisibility = () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------
     4. GALLERY LIGHTBOX
  -------------------------------------------------------- */
  const lightbox      = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightbox) {
    const openLightbox = (item) => {
      const imgSrc   = item.dataset.imgSrc;
      const caption  = item.dataset.caption || '';
      const bgColor  = item.dataset.bg || 'linear-gradient(135deg,#2E7D32,#81C784)';
      const emoji    = item.dataset.emoji || '🌿';

      if (lightboxCaption) lightboxCaption.textContent = caption;

      if (imgSrc && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = caption;
        lightboxImg.style.display = 'block';
        if (lightboxPlaceholder) lightboxPlaceholder.style.display = 'none';
      } else if (lightboxPlaceholder) {
        lightboxPlaceholder.style.background = bgColor;
        lightboxPlaceholder.querySelector('.lb-emoji').textContent = emoji;
        lightboxPlaceholder.style.display = 'flex';
        if (lightboxImg) lightboxImg.style.display = 'none';
      }

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      lightboxClose && lightboxClose.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.gallery-item[data-caption]').forEach(item => {
      item.addEventListener('click', () => openLightbox(item));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(item); }
      });
    });

    lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* --------------------------------------------------------
     5. SMOOTH SCROLL for anchor links
  -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 70;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --------------------------------------------------------
     6. NAVBAR SHADOW on scroll
  -------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,.14)'
        : '0 2px 8px rgba(0,0,0,.08)';
    }, { passive: true });
  }

  /* --------------------------------------------------------
     7. GALLERY FILTER BUTTONS
  -------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item[data-category]');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        galleryItems.forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

})();
