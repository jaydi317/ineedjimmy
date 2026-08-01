# README-FIRST — Fable · Steven Wittenauer Website Concepts

*Private draft. Not deployed. Not to be published without Steven's approval.*

---

## What's inside this ZIP

```
FABLE-STEVEN-WEBSITE-CONCEPTS/
├── README-FIRST.md          ← this file
├── STRATEGY.md              ← strategic reasoning + recommendation + 60-second reveal script
├── index.html               ← comparison landing page (open this first)
├── concept-a/
│   └── index.html           ← Concept A · The Bench (editorial, people-first)
├── concept-b/
│   └── index.html           ← Concept B · The Coverage Map (civic, network-first)
└── assets/                  ← reserved; both concepts are self-contained, so this is intentionally empty
```

Both concept pages are single-file HTML with inline CSS and inline SVG illustrations. There are **no external images, fonts, scripts, forms, analytics, or dependencies of any kind.** They will render identically online and offline.

---

## How to preview locally

**Simplest: double-click `index.html`.**
It will open in your default browser and give you a comparison page with links to both concepts and both documents.

**From a terminal:**
```
open index.html            # macOS
xdg-open index.html        # Linux
start index.html           # Windows
```

**Optional (recommended if the browser blocks local file navigation):**
```
python3 -m http.server 8000
```
Then visit http://localhost:8000 in a browser. Requires only stock Python 3.

**Mobile preview:** open `index.html` on any modern phone browser. Both pages are responsive down to ~360px width and were designed mobile-first for headline landing, tappable buttons, no horizontal scrolling, and legible proof numbers.

---

## Which folder Codex should copy into `ineedjimmy.com/steve`

Copy the **entire `FABLE-STEVEN-WEBSITE-CONCEPTS/` directory** as-is into whatever staging path Codex uses under `ineedjimmy.com/steve`. Recommended target:

```
ineedjimmy.com/steve/fable/
├── index.html
├── concept-a/index.html
├── concept-b/index.html
├── README-FIRST.md
└── STRATEGY.md
```

All internal links in the pages are **relative**, so no path rewrites are needed regardless of the parent URL Codex chooses. Please do **not** rename the `concept-a/` or `concept-b/` folders — the comparison page links to them by name.

If Codex is integrating the two Fable concepts into the single live Steve Council Room alongside Codex's own mockups (mockup-a and mockup-b), the recommended flat layout is:

```
ineedjimmy.com/steve/
├── mockups/                 (existing Codex comparison page — untouched)
├── mockup-a/                (existing Codex — untouched)
├── mockup-b/                (existing Codex — untouched)
└── fable/                   (this ZIP, dropped in whole)
```

Fable has **not** touched, modified, or read any file inside `mockups/`, `mockup-a/`, or `mockup-b/`. This build was blind by design.

---

## External dependencies

**None.**

- No CDN calls.
- No Google Fonts. Both concepts use system fonts (`Iowan Old Style / Palatino / Georgia` on Concept A; `system-ui / Segoe UI / Helvetica Neue` on Concept B).
- No JavaScript frameworks or libraries.
- No image files. Every illustration is inline SVG.
- No form submissions. Every CTA is an anchor to `#call` on the same page.
- No analytics, tracking pixels, or cookies.
- No API keys or credentials.

The `assets/` folder ships empty (with a `.keep` sentinel) so the directory structure matches the ZIP contract.

---

## Verification performed by Fable before delivery

- [x] ZIP contains the required root structure exactly as specified in the build brief.
- [x] `README-FIRST.md`, `STRATEGY.md`, `index.html`, `concept-a/index.html`, `concept-b/index.html`, and `assets/` all present.
- [x] Opening `index.html` locally works. Both concept links resolve.
- [x] Both concept pages are visibly, structurally, and strategically different — not color swaps.
- [x] Both concepts include: opening viewport, one-sentence explanation, one primary CTA, visual explanation of how the company works, 50+/1,500+/190+ credibility numbers, buyer-trigger situations, simplified service architecture, proof/case-story treatment, clear next step, and a visible `PRIVATE CONCEPT — PROPOSED MESSAGING` label.
- [x] Mobile layout tested at 360px, 414px, 768px, and 1024px viewport widths. No horizontal scroll. Headlines do not overflow.
- [x] No unsupported factual claim is stated as fact. Proposed messaging, illustrative case notes, and the stylized Indiana map are all labeled as such on the pages themselves.
- [x] No credentials, no submission endpoints, no analytics, no tracking, no third-party requests, no forms that transmit data.
- [x] No existing INeedJimmy files were opened, read, or modified. Codex's `mockups/`, `mockup-a/`, and `mockup-b/` were not accessed. This was a genuinely blind build.

---

## For Jimmy — the short version

1. Open `index.html`.
2. Click both concept previews.
3. Read `STRATEGY.md` for the strategic reasoning and the 60-second reveal script for Steven.
4. Fable recommends **leading with Concept A · The Bench**. See STRATEGY.md for why, and for the conditions under which that recommendation should flip.

---

*End of README-FIRST.md*
