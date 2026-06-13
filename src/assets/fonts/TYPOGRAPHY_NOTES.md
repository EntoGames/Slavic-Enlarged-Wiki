# Typography notes — Slavic Enlarged

Notatki referencyjne do fontów własnych SE (`SlavicEnlarged.otf`, `SlavicaWiki.ttf`)
oraz hierarchii typograficznej manuskryptowej (z referencji TTRPG sesji 2026-06-13).

---

## Stack typograficzny w wiki

Aktualny (`tokens.css`):
- `--font-display` — Paradox King Script (hero), SatyrSP, SlavicEnlarged (fallbacki), Cinzel
- `--font-body` — Lato (200/300/400/600/700)
- `--font-mono` — system mono

Propozycja rozszerzenia (jeśli zrobimy "manuscript layouts" w wiki):
- `--font-decorative` — uncial decorative (np. Aquiline Two, Goudy Medieval) dla section titles złotem
- `--font-slab` — slab serif (np. Bookman, PT Serif, Lora) dla body manuskryptowego

---

## Hierarchia 4-warstwowa (z referencji)

| Warstwa | Krój | Użycie | Kolor token |
|---|---|---|---|
| **Hero** | Slab serif heavy (Clarendon/Bodoni Egyptian) | Wielki tytuł rozdziału ("APOTHECARY") | `--wf-ink` |
| **Section** | Uncial decorative (Aquiline/Goudy Medieval) | Section titles ("Alchemy I", "Medicine I") | `--gold-deep` |
| **Body** | Slab serif text (Bookman/PT Serif/Lora) | Main narration | `--wf-ink-soft` |
| **Body italic** | Ten sam slab, italic | Podpunkty, opisy tagów | `--wf-ink-soft` |
| **Mechanical** | Typewritter / monospace | Sidebar techniczny | `--wf-ink` |
| **Rubric** | Body slab serif, czerwony | Listy 1-N, kluczowe terminy | `--wf-rubric` |

Wcześniejsza intuicja "blackletter" była błędna — to **slab serif + uncial decorative**,
estetyka William Morris / Kelmscott Press, NIE średniowieczny gotyk.

---

## Cechy krojów display do podpatrzenia

Uncial decorative (jak "Alchemy I", "Tutelage" z referencji):
- Wysokie, smukłe wersaliki z lekko zakręconymi terminacjami
- Charakterystyczne uszka/zawijasy na T, S, J, P (końcówki w spiralę)
- Otwarte brzuszki w g, e (humanistyczna miękkość)
- Średniowieczny rytm bez ostrości gotyku — bliżej uncjały / karolińskiej minuskuły
- Ball terminals (kulki) na końcach niektórych pociągnięć
- Złoty/sepia kolor, NIE czarny

Slab serif heavy (jak "APOTHECARY"):
- Bardzo grube serifki (slab/egyptian)
- Bezpieczna czytelność wielkiego nagłówka
- Czarny tusz, mocno drukarski

---

## Referencje fontowe (open source)

| Cel | Krój | Licencja | Polish support |
|---|---|---|---|
| Decorative uncial | **Goudy Medieval** | Public domain | częściowy |
| Decorative uncial | **Aquiline Two** | Free for commercial | tak |
| Decorative uncial | **Cantaria** | OFL | tak |
| Slab serif body | **Bookman Old Style** | System (Win/Mac) | tak |
| Slab serif body | **PT Serif** | OFL | tak |
| Slab serif body | **Lora** | OFL | tak |
| Slab serif heavy | **Clarendon** | komercyjny | tak |
| Slab serif heavy | **Roboto Slab Black** | Apache 2.0 | tak |

---

## Wytyczne dla własnych fontów SE (`SlavicEnlarged.otf`, `SlavicaWiki.ttf`)

Jeśli rozbudowujemy własne fonty, kierunek to:
- Architektura **uncjały** (okrągłe, miękkie formy) — nie gotyk
- Słowiańskie dekoracje w terminacjach: plecionki / węzły perunowe zamiast celtyckich zawijasów
- Otwarte brzuszki dla czytelności
- Wersaliki z podwyższonym kontrastem, drobne ozdobniki na S, P, W, Ł
- Pełen zakres polskich znaków (ąćęłńóśźż) + cyrylica historyczna (opcjonalnie)

---

## Powiązane dokumenty

- `design-docs/VISUAL_STYLE_SEPIA_SKETCH.md` — pełny styl wizualny (kreska, kolorowanie, kompozycja)
- `Slavic Enlarged - Wiki/src/styles/tokens.css` — semantyczne tokeny `--t-*-*` (Hero/Title/Subtitle/H2/...)
