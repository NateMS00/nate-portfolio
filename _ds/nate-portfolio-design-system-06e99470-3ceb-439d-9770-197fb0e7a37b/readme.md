# Nate Portfolio — Design System

The design language behind **Nathan Manuel's (Nate) personal portfolio**: a senior product designer's site built as static, self-contained HTML — no build step, no framework, one file per page with CSS and images inlined, deployed by dragging the folder to Vercel.

There is one product here: the portfolio site itself, with three surfaces — **Home**, **About**, and **project case studies** (an 11-block structure). No app, no docs site, no marketing surface.

## Source of this import

- **Primary source:** a published Claude Design artifact, *Nate Portfolio — Design System* — `https://claude.ai/artifact/9tADQcHSywb3ygsQk8j4a6`. That URL is **not fetchable from this environment**; the user exported it and uploaded the contents, which are kept verbatim at `sources/nate-portfolio-design-system.md` (brand guide + the exact `tokens.json`).
- **Secondary context:** the `nathan-portfolio` project skill (approved design decisions, page inventory, content, known bugs and their fixes).
- **Not available here:** the site's real `index.html` / `about.html` / `project-pos-redesign.html`, the embedded photography (three public-domain Met images on Home, the portrait, prototype screenshots), the CV PDF, and any font binaries. Everything in this system was derived from the two sources above — no values were inferred from screenshots.

Every color, type, spacing, radius and shadow value in `tokens/` is copied exactly from that `tokens.json`. Nothing was rounded or snapped to a grid.

## Personality

Confident and quiet at the same time. The site makes one loud gesture — a scarce, deliberate yellow — and otherwise stays in warm ink-on-white typography with no decoration. Every claim is backed by a number (+35% faster sales, +40% adoption), so the visual language is evidence-based, not decorative: flat surfaces, real photography, no gradients, no illustration.

## Content fundamentals

- **Voice:** direct, first person, understated. Headlines state what was built and for whom, not how clever the process was. "Designing for the people behind the screen." — not "Crafting delightful experiences."
- **Casing:** sentence case everywhere except the Home hero headline (all caps) and 12px labels/eyebrows (uppercase, `letter-spacing: .06em`).
- **I, not we.** The bio and case studies are written in first person; team credit is explicit in the meta row ("2 designers · 6 engineers") rather than a royal "we" in the prose.
- **Numbers do the bragging.** Each project closes on 2–3 real metrics in small green success chips — never a giant animated counter, never a whole card painted the success color. Reductions are written with a minus glyph and a down arrow: "−70% handoff time".
- **Sections are numbered.** Every section opens with a `SectionEyebrow` ("— 01 · At a glance"), so a case study reads as an argument in order.
- **Punchlines are short and unhedged:** "Built on data, made for the human eye." The positioning line puts the rotating role at the end: "Over 5 years making complex products seamless as a senior *Product Designer*".
- **No emoji, anywhere.** No exclamation marks. No "we're excited to". Placeholder or missing content is labelled plainly ("Before — legacy checkout screen") rather than faked.

## Visual foundations

**Color.** Two themes, light and dark, both AA-verified (4.5:1 body, 3:1 large) before anything ships. No true black and no true white in the warm world: ink is `#282825`, dark-mode text is `#f5f2ec`. The footer is dark in **both** themes — the deliberate sandwich: light hero → light content → dark footer, every page, every theme. `--bg-hero` equals `--bg` on purpose; the cream `#F4EFE6` that existed earlier was explicitly removed and must not return. Maximum two background values per page (page + footer).

**Yellow, rationed.** It appears in exactly four places: the CTA button, the footer, accent icons/eyebrows in light mode (as `--yellow-deep`), and the signature mark behind "Nate". The hero headline is monochrome ink — explicitly, so the yellow keeps its impact by staying rare. Bright `#F5C542` is a *fill* only; as light-mode text or icon color it fails AA, so light mode uses `--yellow-deep` `#8a5e0a` (4.97:1 on white), which becomes the bright yellow in dark mode.

**Type.** Inter Tight for everything (400/500/600/700, italic 500/600); Poppins 500 for the word "Nate" only. Hero: uppercase, `clamp(40px, 7vw, 92px)`, line-height .98, the rotating role in italic. Headings 56 / 34 / 26; body 16/1.6, small 15/1.6, labels 12 uppercase. Negative tracking (−.02em) on display and h1/h2 only.

**Spacing & layout.** A 4 → 8 → 12 → 20 → 28 → 40 → 64 scale. Card padding 28, card grid gutter 20, two-column gutter 40, section rhythm 64. `.wrap` is `max-width: 1400px` — not 1180, not 1280. Sections are separated by a 1px `--line` hairline, never by a color band. The Home hero is `1fr 340px` (fixed photo column); the photo fills the text column's exact height via `position:absolute; inset:0; object-fit:cover` inside a relative container. Body copy sits around a 60–70 character measure; the hero description carries **no** max-width.

**Backgrounds & imagery.** Sections are flat — the yellow corner glow that used to live in `.section-surface` was moved onto the solid cards themselves (see *GlassCard corner glow* below), so a section is page background and nothing else. Otherwise flat surfaces only: no gradients as decoration, no patterns, no textures, no hand-drawn illustration. The only gradient in the system is the functional left-to-right dark tint over a photo inside `PhotoCard`. Imagery is real photography — warm, mid-contrast, slightly desaturated, full-bleed inside a card, never a cut-out or a mockup on a colored stage.

**Elevation — glass vs. solid, never guess.** This is the rule most likely to get broken:
- **Glass (blur + translucency) only works with a photo directly behind it.** Home featured-project cards, persona cards, next-project cards: photo + dark tint gradient + `backdrop-filter: blur(10px) saturate(1.3)` on a masked text panel, so the photo stays sharp on the other side. → `PhotoCard`.
- **Everywhere else use a solid card:** `--card` fill, `--border-strong` border, `--shadow-card`. Stat cards, principle cards, meta cards get zero `backdrop-filter`. Blur over a flat background renders as dead gray — tried, rejected, not coming back. → `GlassCard`.
- Icons inside solid cards take the accent (`--yellow-deep` light / `--yellow` dark), never gray — a gray icon on a white card reads as unstyled.
- **GlassCard corner glow.** Every solid card carries its own yellow glow in the top-left corner — a radial gradient layered over `--card` (`--glow-light` 16% light, `--glow-dark` 10% dark). One glow per card, never on a section background and never on a `PhotoCard`, where the tint gradient is the only gradient allowed over a photo.

**Selected work band.** The Home featured-project list sits in a full-bleed `.work-band` on `--bg-foot` — the footer color, dark in both themes — with the section title centered above the cards (`.work-band-title`, 30px, white). No date range beside it: the year moved onto each card. The band and the footer share one background value, so the page still holds to two. The band carries its own top-left corner glow (`--glow-dark`, same treatment as GlassCard but on the section, not a card — see *corner glow on dark section containers* below) and rounds its top corners only (`--card-radius`); the bottom stays square because the footer sits flush against it (`.foot-sec.flush`, see *flush dark-section stacking*). Vertical rhythm: the gap from the band's top edge to the title equals the gap from the title to the first card (`--work-band-title-gap`, 40px, used in both places) — the bottom padding (`--work-band-pad`, 76px) is independent of that rhythm.

**Corner glow on dark section containers.** A second, distinct application of the corner-glow idea: a full-bleed dark section (currently the work band) gets the same top-left radial gradient as GlassCard, but scoped to the section itself, always using `--glow-dark` since these containers are permanently on `--bg-foot` regardless of theme. Keep this separate from the GlassCard rule — a card's glow and a section's glow are two different selectors so one can change without the other. `PhotoCard` still never gets a glow of any kind; its tint gradient is the only gradient allowed over a photo. Position and opacity stay corner-pinned and low so it never reduces contrast on centered or left-aligned white title text.

**Flush dark-section stacking.** When a full-bleed dark section (the work band, a full-bleed next-project card) closes a page with nothing but the footer after it, add `.flush` to `.foot-sec` to zero its standard top margin so the two blocks read as one continuous dark surface. This is a markup/JS toggle (the page router adds the class per page), not a blanket CSS rule — pages that close on a bordered content block (About's CTA row) keep the normal footer gap.

**Project-card date.** The year sits in the card's top-right corner (`.card-date`), at title size (`--card-date-size` 30px) in white at 55% (`--card-date-color`). Large enough to register as structure, transparent enough not to compete with the project title. It is no longer part of the meta row.

**Full-bleed next-project card.** The closing "Next project" card breaks the `.wrap` and runs edge to edge with the viewport (`.card-fullbleed`): square corners always (never a rounded, "contained" card once it's full-bleed), and height that hugs its content instead of the fixed 280px it used to have. It sits flush against the footer below it (see *flush dark-section stacking*). Because it has no surrounding whitespace to draw an outset ring into, its `:focus-visible` state is an inset ring in bright `--yellow` (not `--yellow-deep`) instead of the site's default offset outline — visible over both photography and a dark footer.

**Borders, radii, shadows.** Cards and tags: 1px `--border-strong`. Section dividers: 1px `--line`. Radii: 10px controls, 18px cards, 999px chips/tags/the circular go button. Shadow is soft and low-contact — `0 1px 2px rgba(0,0,0,.03), 0 16px 32px -22px rgba(0,0,0,.22)` in light, a deeper variant in dark, and a single `--shadow-hover` lift reserved for photo cards. No inner shadows. No glow.

**Animation.** Sparse and slow-out. The role slot machine pushes vertically under a mask: 2000ms interval, 1.5s transition, `cubic-bezier(.16,1,.3,1)`. Nothing bounces, nothing spins. Never rotate a single word mid-sentence — rotate the whole role phrase at the end of the line. Two motion patterns are shared across the site, both defined in `tokens/motion.css`:

- **Scroll reveal** (`.ds-reveal`, driven by `motion/scroll-reveal.js`): section eyebrows, headings and subtitles fade up once — `opacity 0 -> 1`, `translateY(20px) -> 0`, `--reveal-duration` 550ms `ease-out` — the first time they enter the viewport, and never again on the way back up. Siblings in the same section stagger by `--reveal-stagger` 90ms, applied as a `transition-delay`. The class is added by the script, so with JS off content renders in its final state; `prefers-reduced-motion: reduce` skips the animation entirely. Reserved for headings and subtitles — body paragraphs, cards, images and the hero do not reveal.
- **Hover elevation** (`.glass-card` / `[data-ds-elevate]`): `translateY(var(--elevate-lift))` -3px plus `--shadow-hover` over `--elevate-duration` .22s `ease`. Originally only on `PhotoCard`, now shared with the solid `GlassCard` (stat cards, principles, at-a-glance) so every card in the site lifts the same amount. Suppressed under `prefers-reduced-motion` and on `hover: none` pointers.

**States.** Nav links: muted → ink on hover, active page carries a 2px yellow underline plus `aria-current="page"`. Never a bordered button for "Resume". Text links: accent → ink with an offset underline. The yellow CTA inverts to ink-on-page on hover. The photo card's ↗ button is glass at rest and fills yellow on hover. Press states shift color only — nothing scales down.

**Transparency and blur.** Only in three places: the `PhotoCard` text panel, its ↗ button, and the 10–14% accent tint behind an icon. The mobile nav popover must stay **fully opaque** (`--menu-bg`) — a transparent popover was a real bug, caused by a missing border token.

## Iconography

Line icons only: **Lucide** (feather lineage), 18px at a 1.7–1.8px stroke, sitting in a 38px circular badge tinted with the accent at 10–14% opacity. No filled icons, no duotone, no two-tone, no emoji, no unicode dingbats used as icons — with two deliberate exceptions, both typographic glyphs rather than icons: the `↗` in the photo-card go button and the `↑`/`↓` inside a `Badge`.

The source system shipped **no icon assets** (no sprite, no icon font, no SVG set) — photography and glyphs lived inline in each page. This system therefore links Lucide from CDN (`https://unpkg.com/lucide@0.544.0`) in every card and UI-kit page, and components accept the icon as a `ReactNode` prop rather than bundling a set. **Flagged substitution:** Lucide is the closest match to the site's stroke weight and open style, but it was not verified against the real page markup. If the site actually uses a different set, send a page and it will be swapped.

## Fonts — flagged substitution

No font binaries came with the source. Inter Tight and Poppins are loaded from Google Fonts in `tokens/fonts.css`, which is what the live site does, so there are **no `@font-face` rules and no shipped webfont files** in this system. If you want self-hosted binaries (offline previews, PDF export), send the `.woff2` files and they'll be added with real `@font-face` rules.

## Logo

The source contains **no logo file**. The wordmark is rendered in plain type — Poppins 500, the word "Nate" — with a yellow circular mark overlapping the top-right, behind the "e". On the real site that mark is an oil-paint-textured circle generated with SVG `feTurbulence`/`feDiffuseLighting` filters; that filter code was not part of the import, so components here use a flat yellow circle and the texture is a known gap. Nothing was drawn or reconstructed from memory.

## Components

Seven families, exactly the inventory the source defines — no additions.

| Component | Group | What it is |
|---|---|---|
| `Nav` | `components/navigation/` | Site header: wordmark, text links, theme toggle, solid mobile popover |
| `Footer` | `components/navigation/` | Dark-in-both-themes footer with the email CTA |
| `GlassCard` | `components/surfaces/` | The **solid** content card (stats, principles, at-a-glance) — no backdrop-filter |
| `PhotoCard` | `components/surfaces/` | The real glass treatment: photo + tint + masked blur panel |
| `Badge` | `components/content/` | The small solid success chip |
| `MetaTag` | `components/content/` | Icon + label/value row for project hero meta |
| `SectionEyebrow` | `components/content/` | The numbered "— 01" rule that opens every section |

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` preview HTML.

**Intentional additions:** none. `GlassCard` keeps its source name even though it renders a solid card — renaming it would break the vocabulary the site's author already uses.

**Deliberate divergence from the source:** the source system shipped tokens + static HTML only and noted that a component library, if built, should stay framework-free. This project's compiler requires React components, so the seven families are authored as small, dependency-free React functions that style themselves purely through the CSS custom properties. The CSS is portable: copy the rule blocks out of any `.jsx` into a static page and it behaves identically.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css` (light + `[data-theme="dark"]` + semantic aliases), `typography.css`, `spacing.css`, `radius.css`, `shadow.css`, `motion.css` (reveal + elevation tokens and their two patterns), `base.css`.
- `patterns/surfaces.css` — card/section patterns added after the import: GlassCard corner glow, the flat `.section-surface`, the `.work-band`, `.card-date`, and the full-bleed `.card-fullbleed`.
- `motion/scroll-reveal.js` — the once-only IntersectionObserver that drives the scroll-reveal pattern. Mark the page container `data-reveal-root`; call `window.NateScrollReveal.refresh()` after routing or injecting content.
- `components/navigation/`, `components/surfaces/`, `components/content/` — the seven components, their types, prompts and preview cards.
- `guidelines/` — 17 foundation specimen cards (colors, type, spacing, brand rules incl. the glass-vs-solid card and the iconography card).
- `ui_kits/portfolio/` — Home / About / case-study recreation, click-through; see its `README.md`.
- `assets/placeholder-photo.svg` — the only image asset; stands in for the site's page-specific photography.
- `sources/nate-portfolio-design-system.md` — the imported brand guide and exact `tokens.json`.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skills wrapper.
