# Stock Market Education

Beginner-friendly notes for learning the **stock market** from scratch, focused on the India
context (NSE/BSE, SEBI, Demat, SIP, ₹). Inspired by the structure of
[Zerodha Varsity](https://zerodha.com/varsity/modules/), written as original, simplified notes.

The **content lives in plain Markdown files** (`content/**/*.md`); each page is a thin HTML shell
that fetches its Markdown and renders it in the browser. No build step, no framework — just
[marked](https://marked.js.org/) + one small script, published with **GitHub Pages**.

## Live website

**<https://rt2756.github.io/Stock-Market-Education/>**

## Editing the content

Open the Markdown file for the page under `content/` and edit the text — that's it. Save and
reload; `git diff` shows a clean, readable change. The conventions:

| You write | You get |
|---|---|
| `# Title` | the page heading (first line) |
| `## 1. Section` | a numbered section (also builds the "In this module" contents list) |
| `**bold**`, `*italic*`, `` `code` `` | normal Markdown emphasis |
| `- item` / `1. step` | bullet and numbered lists |
| pipe tables | tables |
| `> [!NOTE] My label` | a blue note box titled "MY LABEL" (`[!TIP]` green, `[!WARNING]` amber) |
| `Eg:` at the start of a line | the teal "Eg:" example lead-in |
| `==text==` | teal highlight (the `.eg` style) |
| `![caption](../assets/img/diagrams/name.svg)` | a diagram card (caption shown below) |
| `## Section {#id}` | a section with a fixed anchor id (for cross-page links) |

Callout label can be omitted — `> [!TIP]` defaults to "TIP", `> [!WARNING]` to "REMEMBER".

### Diagrams

Each diagram is a self-contained **SVG file** in `assets/img/diagrams/` (it embeds its own
fonts/colours so it renders standalone). Reference it from Markdown as a one-line image; the page
wraps it in the white diagram card automatically. To tweak a diagram, edit its `.svg`.

### Adding a page

1. Create `content/<folder>/<name>.md` starting with a `# Title` line.
2. Add an entry to `content/manifest.json` (title, group, blurb, `reviewed` date, and order — the
   array order is the Prev/Next reading order and the home-page card order).
3. Create the shell `<folder>/<name>.html` by copying any existing one and updating the three
   `data-*` attributes (`data-md`, `data-root`, `data-page`).

## Project structure

```
index.html                     # Home shell (cards are generated from the manifest)
content/
├── manifest.json              # Page order, titles, groups, blurbs, reviewed dates, footers
├── home.md                    # Home intro + hero
├── modules/01-…md … 10-…md     # The 10 learning modules
└── how-to/*.md                # The how-to guides + glossary + scam safety
assets/
├── css/style.css              # The single stylesheet
├── js/marked.min.js           # Markdown parser (vendored)
├── js/site.js                 # Loads a page's Markdown and builds nav, contents, pager, footer
└── img/diagrams/*.svg         # Hand-drawn diagrams, one file each
modules/*.html, how-to/*.html  # Thin shells (one <div id="app"> + two <script> tags)
```

## Local preview

The pages load their Markdown with `fetch`, so they need a tiny local server —
**double-clicking `index.html` won't work** (browsers block `file://` reads). From the repo root:

    python3 -m http.server 8753

then open <http://localhost:8753>.

## Note

The content is for **learning only** and is **not financial advice**. It is simplified on purpose,
and any tax figures or rules can change over time. Markets carry real risk.
