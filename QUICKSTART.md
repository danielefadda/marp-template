# Marp Template - Quick Start

## 🚀 Setup Iniziale

### 1. Importa il Template

**Metodo Git Submodule** (consigliato - ricevi aggiornamenti):

```bash
cd tuo-progetto
git init
git submodule add https://github.com/danielefadda/marp-template.git template
git submodule update --init
```

**Metodo Copia Diretta** (semplice - nessun aggiornamento):

```bash
cp -r /path/to/marp-template ./template
```

### 2. Configura VS Code

Installa [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode), poi crea `.vscode/settings.json`:

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

### 3. Crea la tua prima presentazione

Crea `mia-presentazione.md`:

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

<div class="authors">
  <div class="author-label">docente</div>
  <div class="author-name">Tuo Nome</div>
</div>

---

# Prima Slide

Il tuo contenuto qui...
```

### 4. Anteprima ed Export

- **Anteprima**: Apri in VS Code e premi **Cmd/Ctrl + K, V**
- **Export PDF**: Click sul pulsante "Export" nell'anteprima
- **CLI**: `npx @marp-team/marp-cli mia-presentazione.md -o output.pdf`

## 📊 Chart Vega-Lite (opzionale)

Aggiungi script nel frontmatter:

```markdown
<script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
<script src="template/js/vega-insert-chart.js"></script>
```

Poi nella slide:

```markdown
<div class="interactive-chart" id="chart1"></div>
<div class="img-chart"><img src="fallback.png" alt=""/></div>

<script>
  insertChart('chart1', './charts/spec.json', '100%', '400px');
</script>
```

## 🎨 Layout e Classi

### Layout a Colonne

```markdown
<div class="columns-2">
<div>Colonna 1</div>
<div>Colonna 2</div>
</div>
```

### Slide Speciali

```markdown
<!-- _class: cover -->      # Copertina
<!-- _class: chapter -->    # Capitolo
<!-- _class: title-slide --> # Titolo centrato
<!-- _class: all-image -->  # Background image
```

### Formattazione

- `<mark>evidenzia</mark>` - Testo evidenziato
- `<!-- _paginate: skip -->` - Nascondi numero pagina
- `![center w:400](img.png)` - Immagine centrata

## 💡 Tips Importanti

⚠️ **Apostrofi nel frontmatter**: Usa virgolette doppie per evitare errori:
```yaml
footer: "Lezione d'uso"  # ✅ OK
footer: 'Lezione d\'uso' # ❌ Errore
```

🔄 **Tema non carica**: Ricarica VS Code → **Cmd+Shift+P** → "Reload Window"

📄 **Testa PDF**: Esporta sempre in PDF prima di condividere

## 📚 Prossimi Passi

- Vedi **[esempio.md](esempio.md)** per 30+ slide demo
- Leggi **[README.md](README.md)** per panoramica completa
- Consulta **[template/README.md](template/README.md)** per dettagli tecnici del template

## 🔄 Aggiornare Template (Git Submodule)

```bash
git submodule update --remote template
git add template
git commit -m "Update template"
```

---

**Domande?** Vedi [README.md](README.md) o consulta la [documentazione Marp](https://marp.app/)
