---
marp: true
theme: master
header: 'Marp Template Demo'
footer: "Esempio d'uso <mark>DEMO</mark>"
paginate: true
---

<!-- Importa le librerie Vega per chart interattivi -->
<script src="https://cdn.jsdelivr.net/npm/vega@5.30.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@5.21.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@6.26.0"></script>
<script src="template/js/vega-insert-chart.js"></script>


<!-- _class: cover -->
<!-- _paginate: skip -->

<div>
  <h1>Marp Template</h1>
  <h2>Esempio di Presentazione</h2>

  <div class="authors">
    <div class="author-label">autore</div>
    <div class="author-name">Nome Cognome</div>
    <br>
    <div class="author-label">organizzazione</div>
    <div class="author-name">Università o Azienda</div>
  </div>

  <div class="university">
    <strong>Marp Template v1.0</strong><br>
    Template per presentazioni professionali<br>
    Anno: 2025    
  </div>
</div>

<div class="cover-image">
  <img src="https://marp.app/assets/marp.svg" alt="" style="width:60%">
</div>

---

# Benvenuto! 👋

Questo è un esempio di presentazione creata con il **Marp Template**.

Il template include:
- ✨ Temi personalizzati
- 🎨 Font professionali (IBM Plex)
- 📊 Supporto per chart Vega-Lite
- 📐 Layout flessibili
- 🖼️ Classi predefinite per slide speciali

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 1. Layout di Base

---

# Slide Standard

Questa è una slide standard con:

- **Elenchi puntati** per organizzare le informazioni
- `Codice inline` per evidenziare elementi tecnici
- Testo con <mark>evidenziazione</mark> per concetti chiave

Puoi anche inserire link: [Documentazione Marp](https://marp.app/)

```python
# Esempio di blocco codice
def hello_world():
    print("Hello from Marp!")
```

---

# Layout a Due Colonne

<div class="columns-2">

<div>

**Colonna Sinistra**

Qui puoi inserire:
- Testo
- Elenchi
- Immagini
- Codice

</div>

<div>

**Colonna Destra**

E qui altro contenuto complementare:
- Confronti
- Esempi
- Grafici
- Note

</div>

</div>

---

# Layout a Tre Colonne

<div class="columns-3">

<div>

**Prima**
- Item A
- Item B

</div>

<div>

**Seconda**
- Item X
- Item Y

</div>

<div>

**Terza**
- Item 1
- Item 2

</div>

</div>

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 2. Elementi Speciali

---

# Testo Evidenziato

Usa `<mark>` per evidenziare concetti importanti:

Il template supporta <mark>elementi chiave</mark> che catturano l'attenzione.

---

# Testi di Dimensioni Diverse

<div class="small-text">

Testo piccolo per note, disclaimer o informazioni secondarie.

</div>

Testo normale per il contenuto principale.

<div class="caption">

Testo caption per didascalie o citazioni.

</div>

---

# Citazioni e Separatori

> "Il design non è solo come appare e come si sente.  
> Il design è come funziona."  
> — Steve Jobs

---

Separatore orizzontale per dividere sezioni:

---

**Prima sezione**

Contenuto della prima parte

---

**Seconda sezione**

Contenuto della seconda parte

---

<!-- _class: title-slide -->
<!-- _paginate: skip -->

# Slide Titolo Sezione

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 3. Immagini e Media

---

# Immagini

Le immagini possono essere centrate usando `![center]`:

![center width:400px](https://marp.app/assets/marp.svg)

<div class="caption">
Didascalia dell'immagine
</div>

---

# Immagini in Colonne

<div class="columns-2">

<div>

![width:300px](https://marp.app/assets/marp.svg)

<div class="caption">Prima immagine</div>

</div>

<div>

![width:300px](https://marp.app/assets/marp.svg)

<div class="caption">Seconda immagine</div>

</div>

</div>

---

<!-- _class: all-image -->

# Slide con Sfondo

## Sottotitolo opzionale

![bg](https://images.unsplash.com/photo-1557683316-973673baf926?w=1200)

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 4. Tabelle e Dati

---

# Tabelle

| Colonna 1 | Colonna 2 | Colonna 3 |
|-----------|-----------|-----------|
| Dato A    | 100       | ✅        |
| Dato B    | 200       | ✅        |
| Dato C    | 150       | ❌        |

<div class="caption">
Esempio di tabella con dati
</div>

---

# Tabella con Testo Piccolo

<div class="small-text">

| Feature | Standard | Premium | Enterprise |
|---------|----------|---------|------------|
| Users | 10 | 100 | Unlimited |
| Storage | 10GB | 100GB | 1TB |
| Support | Email | Priority | 24/7 |
| Price | $10/mo | $50/mo | Custom |

</div>

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 5. Chart Interattivi

---

# Chart Vega-Lite

Esempio di chart interattivo (visibile solo nella versione HTML):

<div class="columns-2">

<div>

**Caratteristiche:**
- Interattivo su HTML
- Statico su PDF
- Facile da integrare
- Basato su JSON

</div>

<div>

<div class="interactive-chart" id="example-chart"></div>
<div class="img-chart">
  <img src="https://via.placeholder.com/400x300?text=Chart+Placeholder" alt="Chart fallback"/>
</div>

<script>
// Esempio di chart inline
insertChartFromSpec('example-chart', {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category": "A", "value": 28},
      {"category": "B", "value": 55},
      {"category": "C", "value": 43},
      {"category": "D", "value": 91}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "type": "nominal"},
    "y": {"field": "value", "type": "quantitative"}
  }
}, '100%', '300px');
</script>

</div>

</div>

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 6. Best Practices

---

# Consigli per Slide Efficaci

<div class="columns-2">

<div>

**DO ✅**
- Una idea per slide
- Testo conciso
- Immagini significative
- Contrasto adeguato
- Dimensioni leggibili

</div>

<div>

**DON'T ❌**
- Troppo testo
- Troppe informazioni
- Font piccoli
- Colori poco contrastati
- Troppi effetti

</div>

</div>

---

# Organizzazione dei Contenuti

1. **Introduzione chiara**
   - Presenta il topic
   - Definisci gli obiettivi

2. **Sviluppo strutturato**
   - Usa capitoli (slide `chapter`)
   - Mantieni coerenza visiva

3. **Conclusione efficace**
   - Riassumi i punti chiave
   - Call to action

---

# Accessibilità

Ricorda di:
- Usare **alto contrasto** tra testo e sfondo
- Fornire **alt text** per le immagini
- Usare **dimensioni leggibili** (min 18pt)
- Limitare le **animazioni** eccessive
- Testare su **diversi dispositivi**

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# 7. Varianti di Tema

---

# Altri Temi Disponibili

Questo template include diversi temi:

- **master** (corrente): Blu/rosso, IBM Plex, professionale
- **alma**: Giallo/nero, Poppins, moderno

Per cambiare tema, modifica il front matter:

```yaml
---
marp: true
theme: alma  # invece di master
---
```

---

<!-- _class: all-image -->

# Grazie! 🙏

## Inizia a creare le tue presentazioni

![bg opacity:0.3](https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200)

---

# Risorse e Collegamenti

<div class="columns-2">

<div>

**Documentazione**
- [Marp](https://marp.app/)
- [Vega-Lite](https://vega.github.io/vega-lite/)
- [Markdown Guide](https://www.markdownguide.org/)

</div>

<div>

**Template**
- GitHub: your-repo/marp-template
- README completo
- Esempi inclusi

</div>

</div>

---

<!-- _class: all-image -->

# Buon lavoro! 🚀

![bg](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200)
