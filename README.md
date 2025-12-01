# Marp Presentation Template

Template professionale e autocontenuto per creare presentazioni con [Marp](https://marp.app/).

## ✨ Features

- 🎨 **2 Temi personalizzati** (Master blue/red, Alma yellow/black)
- 🔤 **Font professionali** (IBM Plex Sans/Mono, Sofia Sans)
- 📊 **Chart Vega-Lite** interattivi con fallback PDF
- 📐 **Layout flessibili** (colonne, cover, chapter, all-image)
- 📝 **Esempio completo** con 30+ slide demo

## 🚀 Quick Start

### Prova il template

1. Installa [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
2. Apri `esempio.md` in VS Code
3. Premi **Cmd/Ctrl + K, V** per l'anteprima Marp

### Usa in un nuovo progetto

Consulta **[QUICKSTART.md](QUICKSTART.md)** per istruzioni su come:
- Importare il template come Git submodule
- Configurare VS Code
- Creare la tua prima presentazione

## 📁 Struttura

```
marp-template/
├── themes/           # Temi SCSS (master, alma)
├── assets/fonts/     # IBM Plex Sans/Mono, Sofia Sans
├── js/               # vega-insert-chart.js
└── README.md         # Docs del template
```

## 🎨 Temi Disponibili

### Master (default)
- **Colori**: Blu #11296b, Rosso #de1f36
- **Font**: IBM Plex Sans/Mono
- **Stile**: Professionale, accademico

### Alma
- **Colori**: Giallo #f4dd4d, Nero
- **Font**: Sofia Sans
- **Stile**: Moderno, vivace

## 📐 Classi Slide

| Classe | Uso |
|--------|-----|
| `.cover` | Copertina a 2 colonne |
| `.chapter` | Separatore capitolo |
| `.title-slide` | Titolo centrato full-screen |
| `.all-image` | Immagine background con overlay |
| `.columns-2/3/4` | Layout a colonne |
| `.small-text` | Testo ridotto |

## 📝 Esempio Minimo

```markdown
---
marp: true
theme: master
header: "Corso XYZ"
footer: "Lezione 01"
paginate: true
---

<!-- _class: cover -->

# Titolo Presentazione

---

# Prima Slide

Contenuto...
```

## 📊 Chart Vega-Lite

Aggiungi gli script nel frontmatter:

```markdown
<script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
<script src="marp-template/js/vega-insert-chart.js"></script>
```

Poi inserisci il chart:

```markdown
<div class="interactive-chart" id="chart1"></div>
<div class="img-chart">
  <img src="chart-fallback.png" alt=""/>
</div>

<script>
  insertChart('chart1', './charts/spec.json', '100%', '400px');
</script>
```

## 🔧 Compilazione

### Da VS Code
1. Apri file `.md`
2. **Cmd/Ctrl + K, V** per anteprima
3. Click **Export** per PDF/HTML

### Da CLI
```bash
# HTML
npx @marp-team/marp-cli slides.md -o output.html

# PDF
npx @marp-team/marp-cli slides.md -o output.pdf --allow-local-files
```

## 🎯 Tips

- Usa virgolette doppie `"` per apostrofi nel footer: `footer: "Lezione d'uso"`
- Ricarica VS Code dopo modifiche al tema: **Cmd+Shift+P** → "Reload Window"
- Testa sempre l'export PDF prima di condividere

## 📚 Documentazione

- **[QUICKSTART.md](QUICKSTART.md)** - Setup e primi passi
- **[esempio.md](esempio.md)** - Esempi completi (30+ slide)
- **[marp-template/README.md](marp-template/README.md)** - Dettagli tecnici

## 📄 Licenza & Crediti

**MIT License** - Libero per uso personale e commerciale

Creato da **Daniele Fadda** per il corso Data Visualization and Visual Analytics.

---

**[Marp](https://marp.app/)** • **[Vega-Lite](https://vega.github.io/vega-lite/)** • **[IBM Plex](https://www.ibm.com/plex/)**