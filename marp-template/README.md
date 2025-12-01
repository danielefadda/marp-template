# Marp Template

Template autocontenuto per creare presentazioni con [Marp](https://marp.app/). Questo template include temi personalizzati, font e utilities per l'integrazione di chart Vega-Lite.

## 📁 Struttura

```
marp-template/
├── themes/           # Temi Marp in formato SCSS
│   ├── master.scss   # Tema principale (blu/rosso, IBM Plex)
│   └── alma.scss     # Tema alternativo (giallo/nero)
├── assets/
│   ├── fonts/        # Font personalizzati (IBM Plex Sans/Mono)
│   ├── logos/        # Loghi per le presentazioni
│   └── backgrounds/  # Sfondi personalizzati
├── js/
│   └── vega-insert-chart.js  # Utility per inserire chart Vega-Lite
└── README.md         # Questa documentazione
```

## 🚀 Installazione

### Opzione 1: Copia locale nel progetto

Copia la cartella `marp-template` nel tuo progetto:

```bash
cp -r /path/to/marp-template ./marp-template
```

### Opzione 2: Git Submodule (aggiornamento automatico)

Aggiungi come submodule per ricevere automaticamente gli aggiornamenti:

```bash
git submodule add https://github.com/your-repo/marp-template.git marp-template
git submodule update --init --recursive
```

Per aggiornare il template in futuro:

```bash
git submodule update --remote marp-template
```

### Opzione 3: Symlink (sviluppo locale)

Crea un symlink per condividere il template tra più progetti:

```bash
ln -s /path/to/marp-template ./marp-template
```

## 📝 Utilizzo Base

### 1. Creare una nuova presentazione

Crea un file markdown (es. `slides.md`) nella root del tuo progetto:

```markdown
---
marp: true
theme: master
header: 'Titolo Corso'
footer: 'Nome Presentazione <mark>ACRONIMO</mark>'
paginate: true
---

<!-- _class: cover -->
<!-- _paginate: skip -->

<div>
  <h1>Titolo della Presentazione</h1>
  <h2>Sottotitolo</h2>

  <div class="authors">
    <div class="author-label">docente</div>
    <div class="author-name">Nome Cognome</div>
  </div>

  <div class="university">
    <strong>Università</strong><br>
    Dipartimento<br>
    Anno Accademico: 2025    
  </div>
</div>

<div class="cover-image">
  <img src="path/to/logo.png" alt="" style="width:90%">
</div>

---

# Seconda Slide

Contenuto della slide...
```

### 2. Configurare Marp

Crea o aggiorna `.vscode/settings.json`:

```json
{
  "markdown.marp.themes": [
    "./marp-template/themes/master.scss",
    "./marp-template/themes/alma.scss"
  ],
  "markdown.marp.enableHtml": true
}
```

### 3. Compilare le presentazioni

Puoi usare:

- **VS Code Extension**: Installa [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- **CLI**: 
  ```bash
  npx @marp-team/marp-cli slides.md -o output.html
  npx @marp-team/marp-cli slides.md -o output.pdf
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
<script src="marp-template/js/vega-insert-chart.js"></script>
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

## 🤝 Contribuire

Per migliorare questo template:

1. Fai le modifiche necessarie
2. Testa su diversi browser e in esportazione PDF
3. Documenta le nuove feature in questo README
4. Commit e push delle modifiche

## 📄 Licenza

Questo template è distribuito sotto licenza MIT.

---

**Versione:** 1.0.0  
**Ultimo aggiornamento:** Dicembre 2025
