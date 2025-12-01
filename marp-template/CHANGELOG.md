# Changelog

Tutte le modifiche significative a questo template saranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e questo progetto aderisce a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-01

### Aggiunto
- ✨ Struttura iniziale del template Marp autocontenuto
- 🎨 Tema `master` (blu/rosso, IBM Plex Sans/Mono)
- 🎨 Tema `alma` (giallo/nero, Poppins)
- 📊 Utility JavaScript per integrare chart Vega-Lite (`vega-insert-chart.js`)
- 🔤 Font IBM Plex Sans (normale e italic, variable font)
- 🔤 Font IBM Plex Mono (normale e bold)
- 🔤 Font Sofia Sans per tema alma
- 📁 Struttura cartelle organizzata: themes/, assets/, js/
- 📖 Documentazione completa (README.md)
- 📝 File di esempio completo (esempio.md)
- 🚀 Guida quick start (QUICKSTART.md)
- 📄 Licenza MIT

### Classi Slide Disponibili
- `.cover` - Slide di copertina a due colonne
- `.chapter` - Slide capitolo con sfondo colorato
- `.title-slide` - Slide con titolo centrato su sfondo colorato
- `.all-image` - Slide con immagine di sfondo e titolo sovrapposto (sx)
- `.all-image-right` - Come sopra ma titolo a destra
- `.big-text` - Testo più grande del normale
- `.columns-1` - Layout a colonna singola con padding
- `.columns-2` - Layout a due colonne
- `.columns-3` - Layout a tre colonne
- `.columns-4` - Layout a quattro colonne
- `.small-text` - Testo ridotto
- `.caption` - Didascalie immagini

### Caratteristiche Temi
- Variabili CSS personalizzabili per colori
- Font-face declarations per font custom
- Responsive layouts
- Print-friendly (con fallback per chart)
- Header e footer configurabili
- Numerazione pagine personalizzata
- Supporto per elementi HTML avanzati

### Utilities JavaScript
- `insertChart()` - Inserisce chart da file JSON Vega-Lite
- `insertChartFromSpec()` - Inserisce chart da oggetto JavaScript
- Fallback automatico a immagini statiche per PDF
- Media queries per nascondere elementi in base al media

### Struttura Percorsi
Tutti i percorsi relativi funzionano correttamente:
- Font: `../assets/fonts/`
- Assets: `../assets/`
- Temi importabili con percorsi relativi dal progetto

### Documentazione
- README completo con esempi
- QUICKSTART per iniziare rapidamente
- Commenti inline nel codice
- Esempi pratici in esempio.md

## [Unreleased]

### Previsto per versioni future
- [ ] Temi aggiuntivi (varianti colore)
- [ ] Più font preconfigurati
- [ ] Template per slide specifiche (timeline, comparazioni, etc)
- [ ] Esempi avanzati di chart Vega-Lite
- [ ] Script di build automatizzato
- [ ] CI/CD per test automatici
- [ ] Galleria di esempi

---

Per dettagli completi su ogni versione, consultare i commit su GitHub.
