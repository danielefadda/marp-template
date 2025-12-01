# Marp Template

Risorse condivise (temi, font, utilities) per creare presentazioni con [Marp](https://marp.app/).

**Questo è un modulo da importare.** Per un progetto completo pronto all'uso, vedi [marp-slides-starter](https://github.com/danielefadda/marp-slides-starter).

## 📁 Contenuto

```
template/
├── themes/           # Temi Marp in formato SCSS
│   ├── master.scss   # Tema principale (blu/rosso, IBM Plex)
│   └── alma.scss     # Tema alternativo (giallo/nero)
├── assets/
│   ├── fonts/        # Font personalizzati (IBM Plex Sans/Mono, Sofia Sans)
│   ├── logos/        # Loghi per le presentazioni
│   └── backgrounds/  # Sfondi personalizzati
└── js/
    └── vega-insert-chart.js  # Utility per chart Vega-Lite
```

## 🚀 Utilizzo

### Metodo Consigliato: Usa marp-slides-starter

Il modo più semplice per iniziare è usare il progetto template completo:

```bash
git clone --recurse-submodules https://github.com/danielefadda/marp-slides-starter.git mio-progetto
cd mio-progetto
```

### Metodo Avanzato: Import manuale

Se vuoi aggiungere questo template a un progetto esistente:

**Git Submodule** (ricevi aggiornamenti):
```bash
cd tuo-progetto
git submodule add https://github.com/danielefadda/marp-template.git template
```

**Copia diretta** (nessun aggiornamento):
```bash
cp -r /path/to/marp-template ./template
```

## 📝 Configurazione

### VS Code Settings

Crea `.vscode/settings.json` nel tuo progetto:

```json
{
  "markdown.marp.themes": [
    "${workspaceFolder}/template/themes/master.scss",
    "${workspaceFolder}/template/themes/alma.scss"
  ],
  "markdown.marp.html": "all",
  "markdown.marp.outlineExtension": true
}
```

### File .marprc.yml (opzionale)

Per export da CLI:

```yaml
inputDir: .
themeSet:
  - template/themes/master.scss
  - template/themes/alma.scss
html: true
allowLocalFiles: true
```

## 🎨 Temi Disponibili

### Master Theme (`theme: master`)

Tema principale con colori blu (#11296b) e rosso (#de1f36), font IBM Plex Sans/Mono.

**Classi disponibili:**
- `.cover` - Slide di copertina a due colonne
- `.chapter` - Slide di capitolo con sfondo colorato
- `.title-slide` - Slide con titolo centrato
- `.all-image` - Slide con immagine a tutto schermo e titolo sovrapposto
- `.all-image-right` - Come sopra, ma titolo a destra
- `.big-text` - Testo più grande del normale
- `.columns-2`, `.columns-3`, `.columns-4` - Layout a colonne
- `.small-text` - Testo più piccolo
- `.caption` - Didascalia per immagini

### Alma Theme (`theme: alma`)

Tema alternativo con colori giallo (#f4dd4d) e nero, font Poppins.

## 📊 Integrare Chart Vega-Lite

### Setup

Aggiungi gli script necessari nel front matter del tuo markdown:

```markdown
---
marp: true
theme: master
---

<script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
<script src="template/js/vega-insert-chart.js"></script>
```

### Inserire un chart

```markdown
# Slide con Chart

<div class="interactive-chart" id="my-chart"></div>
<div class="img-chart">
  <img src="charts/my-chart-fallback.png" alt="Chart fallback"/>
</div>

<script>
  insertChart('my-chart', './charts/my-spec.json', '100%', '450px');
</script>
```

**Note:**
- `.interactive-chart` è visibile solo su HTML (nascosto in PDF)
- `.img-chart` è visibile solo in PDF (nascosto su schermo)
- Questo permette di avere chart interattivi su HTML e immagini statiche su PDF

### Esempio di specifica Vega-Lite

Crea `charts/my-spec.json`:

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}
```

## 🎯 Esempi di Layout

### Layout a due colonne

```markdown
<div class="columns-2">

<div>

**Colonna sinistra**
- Punto 1
- Punto 2

</div>

<div>

**Colonna destra**
- Punto A
- Punto B

</div>

</div>
```

### Slide capitolo

```markdown
<!-- _class: chapter -->
<!-- _paginate: skip -->

# Nome del Capitolo

<div class="cover-image">
  <img src="image.png" alt=""/>
</div>
```

### Evidenziare testo

```markdown
Questo è un testo con una parola <mark>evidenziata</mark>.
```

## 🔧 Personalizzazione

### Modificare i colori

Edita le variabili CSS in `themes/master.scss` o `themes/alma.scss`:

```scss
:root {
  --vamain: #11296b;    // Colore principale
  --vamain2: #de1f36;   // Colore secondario
  --vablack: #000000;
  --vawhite: #ffffff;
  --vagrey: #6B6B6B;
}
```

### Aggiungere un nuovo tema

1. Crea un nuovo file SCSS in `marp-template/themes/`
2. Segui la struttura dei temi esistenti
3. Importa il tema base: `@import 'default';`
4. Aggiungi il percorso in `.vscode/settings.json`

### Aggiungere font personalizzati

1. Copia i font in `marp-template/assets/fonts/NomeFont/`
2. Dichiara i font nel tema SCSS:

```scss
@font-face {
  font-family: 'Nome Font';
  src: url('../assets/fonts/NomeFont/file.ttf');
}

section {
  font-family: 'Nome Font', sans-serif !important;
}
```

## 📚 Risorse

- [Documentazione Marp](https://marpit.marp.app/)
- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
- [Markdown Guide](https://www.markdownguide.org/)

## 🔄 Aggiornamenti

Per aggiornare il template in un progetto che lo usa come submodule:

```bash
git submodule update --remote template
git add template
git commit -m "Update template"
```

## 📚 Risorse

- **[marp-slides-starter](https://github.com/danielefadda/marp-slides-starter)** - Progetto completo pronto all'uso
- [Documentazione Marp](https://marpit.marp.app/)
- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)

## 📄 Licenza

MIT License

---

**Versione:** 2.0.0  
**Ultimo aggiornamento:** Dicembre 2025
