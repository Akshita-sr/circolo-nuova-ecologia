# Cartella Immagini — Circolo Nuova Ecologia Genova

Questa cartella contiene le immagini del sito web del Circolo Nuova Ecologia Genova.

## Come aggiungere le foto reali

Il sito usa attualmente degli **sfondi grafici colorati** al posto delle fotografie. Per sostituirli con le foto reali, segui queste istruzioni:

### Nomi file attesi

| File | Descrizione |
|------|-------------|
| `volantino-trasporti.jpg` | Volantino/flyer dell'assemblea pubblica sui trasporti pubblici a San Fruttuoso — linee bus 18, 46, 44 e riattivazione stazione Terralba. Organizzata con "Cittadini residenti sconquAsse Marassi" e "Circolo Nuova Ecologia" |
| `marcia-sopraelevata.jpg` | Soci del Circolo Nuova Ecologia Genova in marcia su una sopraelevata/autostrada, con lo striscione giallo "Circolo Nuova Ecologia Genova" e cielo nuvoloso sullo sfondo |
| `corteo-centro-storico.jpg` | Soci del Circolo Nuova Ecologia Genova in corteo attraverso una via del centro storico di Genova, con lo striscione giallo "Circolo Nuova Ecologia Genova" |
| `manifestazione-legambiente.jpg` | Soci del Circolo a una manifestazione con lo striscione giallo "Circolo Nuova Ecologia Genova LEGAMBIENTE" e il logo Legambiente |

### Procedura di sostituzione

1. **Rinomina le tue foto** con i nomi esatti indicati nella tabella sopra.
2. **Copia i file** in questa cartella `images/`.
3. Il sito caricherà automaticamente le foto reali nella galleria e in qualsiasi altra sezione che le utilizza.

### Formato e dimensioni consigliate

- **Formato**: JPEG (`.jpg`) o WebP (`.webp`)
- **Dimensioni massime**: 2000×1500 px per foto di galleria
- **Dimensioni minime**: 800×600 px
- **Dimensioni file**: Cerca di mantenere ogni file sotto i 500 KB per garantire tempi di caricamento veloci
- **Orientamento**: Preferibilmente orizzontale (landscape) per adattarsi al layout della galleria

### Strumenti per ottimizzare le immagini

Se le foto sono troppo grandi, puoi ridurle con:
- **Online**: [Squoosh](https://squoosh.app/), [TinyJPG](https://tinyjpg.com/)
- **macOS**: Anteprima → Strumenti → Adatta dimensioni
- **Windows**: Paint → Ridimensiona

### Aggiungere altre foto

Per aggiungere foto aggiuntive alla galleria, aggiungi i nuovi file in questa cartella e poi modifica il file `galleria.html`, aggiungendo un nuovo blocco `<div class="gallery-item">` seguendo il pattern già esistente.

---

## Struttura della cartella

```
images/
├── README.md                     ← Questo file
├── volantino-trasporti.jpg        ← Aggiungere
├── marcia-sopraelevata.jpg        ← Aggiungere
├── corteo-centro-storico.jpg      ← Aggiungere
└── manifestazione-legambiente.jpg ← Aggiungere
```

---

Per assistenza, scrivere a: [circolo.negenova@libero.it](mailto:circolo.negenova@libero.it)
