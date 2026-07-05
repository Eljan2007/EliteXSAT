# Reading library

A graded library of **public-domain** texts (Project Gutenberg) for the **Reading Article** section of EliteXSAT, with CEFR word highlighting, click-to-define, and PDF export.

## How it's built

```
reading-sources.json      ← list of 50 titles + difficulty bands (you curate)
        │
        ▼  python tmp/build.py
assets/data/reading/library.js   ← generated passages: window Apex.reading.passages
```

`tmp/build.py` resolves each title via the [Gutendex](https://gutendex.com) API, downloads the plain text from gutenberg.org, strips the Project Gutenberg license header/footer, removes `[Illustration]`/footnote noise, reflows hard-wrapped lines into paragraphs, extracts the named piece (whole story · by-heading · Aesop fable · McGuffey lessons · excerpt), and splits it into **~450–700-word passages** at paragraph boundaries (long works capped at 8 passages).

Each passage is `{ id, title, author, band, body }`, where `body` uses `\n\n` between paragraphs and `band` is `easy | middle | hard`.

> **Network:** building needs access to `gutendex.com` and `gutenberg.org`. The generated `library.js` is committed, so the app runs offline — you only re-run the builder to add/refresh texts.

## Files

| File | What |
|------|------|
| `reading-sources.json` | The curated title list + bands (builder input). |
| `tmp/build.py` | The builder (download → clean → split → emit). |
| `assets/data/reading/library.js` | Generated passages, loaded via `<script>` in `app.html`. |
| `assets/data/cefr-words.js` | CEFR word→level map (A1–C2). |

## Add a new passage

**Option A — from Project Gutenberg (recommended):** add a row to `reading-sources.json`:

```json
{ "id": "my-story", "band": "middle", "title": "The Story Title", "author": "Author Name", "note": "full short story" }
```

then map how to find it in the `P` dict near the top of `tmp/build.py`:

```python
"my-story": (GUTENBERG_ID, "heading", "story title"),   # method: whole | heading | fable | lessons
```

Run `python tmp/build.py` and reload the app. (`heading` extracts the story whose heading contains your key from a collection; `whole` takes the entire book.)

**Option B — paste your own text:** append an object to `Apex.reading.passages` in `assets/data/reading/library.js`:

```js
{ "id": "custom-1", "title": "My Passage", "author": "", "band": "easy",
  "body": "First paragraph...\n\nSecond paragraph..." }
```

## Expand the CEFR word list

Edit `assets/data/cefr-words.js` and add **base-form, lowercase** words to the right level array:

```js
A2: ["...existing...", "weather", "journey"],
```

The reading view lemmatizes words before lookup (strips `-s/-es/-ies`, `-ed`, `-ing`, `-ly`, `-er/-est`, doubled consonants), so add only the base form (`achieve`, not `achieved`). The lemmatizer is a **heuristic**, not a full morphological analyzer — it will miss irregular forms (`went` → `go`) and can occasionally over-strip. Add irregular forms explicitly if you need them highlighted.

## How the reading UI works

- **Band filter** — All / Easy / Middle / Hard on the library list.
- **CEFR highlight** — toggle A1–C2; each level gets a distinct color (A1 green → C2 red) so multiple active levels stay legible.
- **Click-to-define** — clicking a word fetches a definition from `dictionaryapi.dev` (no key), with a small bundled fallback (the app's vocabulary words) for offline/blocked cases; shows part of speech, definition, and clickable synonyms.
- **Download PDF** — exports a clean title + body PDF via `html2pdf.js` (loaded on demand from a CDN).

All of it reuses the app's existing CSS variables and components, works in light/dark mode, and is responsive at 375px.
