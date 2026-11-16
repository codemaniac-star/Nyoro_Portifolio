---
name: Warm Editorial Portfolio
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0edea'
  surface-container-high: '#ebe8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#446557'
  primary: '#143529'
  on-primary: '#ffffff'
  primary-container: '#2b4c3f'
  on-primary-container: '#98bbab'
  inverse-primary: '#aacfbd'
  secondary: '#605e57'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2d9'
  on-secondary-container: '#66645d'
  tertiary: '#482524'
  on-tertiary: '#ffffff'
  tertiary-container: '#623b39'
  on-tertiary-container: '#dca6a3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6ebd9'
  primary-fixed-dim: '#aacfbd'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#2c4d40'
  secondary-fixed: '#e6e2d9'
  secondary-fixed-dim: '#cac6be'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#484740'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#f0b9b6'
  on-tertiary-fixed: '#311211'
  on-tertiary-fixed-variant: '#633c3a'
  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26.4px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  metadata-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  metadata-num:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system embodies the quiet precision of Swiss graphic design fused with the tactile warmth of high-end architectural monographs and European print publications. Designed specifically for senior software engineers, computational designers, and technical writers, the aesthetic projects restraint, intellectual rigor, and disciplined craft.

The interface prioritizes typographic cadence, structural alignment, and strict planar elevation. It rejects modern digital skeuomorphs—gradients, drop shadows, and synthetic blurs are strictly forbidden. Depth and separation are achieved entirely through intentional tonal shifts between cream papers and crisp hairline rules. The resulting atmosphere feels permanent, tactile, and editorial rather than fleetingly digital.

## Colors

The palette is rooted in tactile paper stocks, archival printing inks, and a deep architectural accent. Contrast ratios exceed WCAG AAA standards for reading comfort.

- **Primary Background (`#F9F7F1`):** Warm English cream, forming the base canvas of the viewport.
- **Card Surface (`#F2EEE4`):** Subtly deepened cream stock used to delineate modules, project cards, and reading containers.
- **Hover Surface (`#EAE4D5`):** Pressed tone indicating active and hover states on interactive containers.
- **Hairline Border & Rules (`#E3DEC9`):** 1px structural framing tone for grids, table rules, and container perimeters.
- **Primary Ink (`#181816`):** Carbon black ink for headlines, primary narrative text, and dominant navigational anchors.
- **Muted Ink (`#63615A`):** Dry graphite gray for secondary commentary, structural indices, captions, and subtle labels.
- **Accent Green (`#2B4C3F`):** Deep British racing/forest green reserved for active statuses, highlighted links, terminal indicators, and deliberate points of focus.

## Typography

Typographic discipline provides the structural tension of this system:
- **Headlines (Newsreader):** Traditional editorial display serif with optical sizing enabled. Kerning must remain tightly tracked (`-0.02em`) to mirror hot-metal and modern architectural magazine titling. Italic cuts may be utilized sparingly for project epigraphs and emphasis.
- **Narrative Body (Plus Jakarta Sans):** A clear, highly readable grotesque sans set at `16px` with an expansive `1.65` line height (`26.4px`). Long-form technical essays and project descriptions must never exceed `68ch` in measure.
- **Metadata, Tags, and Indices (JetBrains Mono):** Precision monospaced type set strictly at `11px` to `12px` in uppercase with wide tracking (`0.06em` to `0.08em`). Used for numbering (`01 / ARCHITECTURE`), technical stacks, commit hashes, and temporal timestamps.

## Layout & Spacing

The layout operates on an asymmetric 12-column Swiss grid system contained within a maximum width of `1280px`, surrounded by generous margin gutters that evoke printed publication margins.

- **Desktop (≥ 1024px):** 12 columns with `2rem` gutters and `4rem` outer margins. Left-aligned technical index / metadata rails occupy 3 columns, narrative and visual showcases occupy the remaining 9 columns.
- **Tablet (768px – 1023px):** 8 columns with `1.5rem` gutters and `2.5rem` outer canvas padding.
- **Mobile (< 768px):** Single-column stacked fluid layout with `1.25rem` outer canvas padding. Section metadata collapses to small uppercase mono flags sitting directly above article headings.

Rhythm is strictly mathematical. Section breaks rely on `space-2xl` paired with full-bleed `1px solid #E3DEC9` rules rather than floating gap voids.

## Elevation & Depth

This system operates under a strict **Zero-Shadow, Flat-Plane Policy**:

- **No Drops or Blurs:** Drop shadows, ambient box-shadows, directional lights, and translucent backdrop filters are completely barred.
- **Tonal Stepping:** Layering occurs purely across 2D paper tones: canvas (`#F9F7F1`), surface module (`#F2EEE4`), and hover/focus plane (`#EAE4D5`).
- **Hairline Definition:** Structural depth and containment are marked using crisp `1px solid #E3DEC9` borders.
- **Overlays & Drawers:** Modal sheets, slide-outs, or expanded source drawers slide into the grid using solid background fills delimited by a dominant `1px solid #181816` or `#E3DEC9` stroke, casting no shadow onto the underlying plane.

## Shapes

The geometric framework balances architectural precision with quiet organic softness:

- **Cards, Images, Code Blocks, and Panels:** Governed by an exact `6px` radius (`roundedness: 1`). This provides a tailored edge that prevents the severity of raw `0px` cutouts while retaining structural rectilinearity.
- **Interactive Badges, Buttons, and Pill Counters:** Set to a strict `999px` full-pill radius. This creates a tactile, physical contrast against rectangular card frames.
- **Dividers & Rules:** Sharp, non-rounded vector lines of uniform `1px` stroke.

## Components

### Buttons
- **Primary Pill:** Background `#2B4C3F`, text `#F9F7F1`, typography `JetBrains Mono` 12px uppercase (`0.06em` tracking), border `1px solid #2B4C3F`, border-radius `999px`. Padding: `0.6rem 1.25rem`. Hover state: background `#181816`, border-color `#181816`.
- **Secondary / Outline Pill:** Background transparent, text `#181816`, border `1px solid #E3DEC9`, border-radius `999px`. Hover state: background `#F2EEE4`, border-color `#63615A`.
- **Text Link:** Newsreader italic or Plus Jakarta Sans with a hairline underline offset by `4px`, transitioning color to `#2B4C3F` on hover.

### Badges & Filter Chips
- **Category & Status Chips:** Pill-shaped (`999px` radius), padding `0.25rem 0.75rem`, set in `JetBrains Mono` 11px uppercase. Background `#F2EEE4`, border `1px solid #E3DEC9`, text `#63615A`.
- **Active Filter:** Background `#2B4C3F`, text `#F9F7F1`, border-color `#2B4C3F`.

### Cards & Project Showcases
- **Container:** Background `#F2EEE4`, border `1px solid #E3DEC9`, border-radius `6px`, padding `space-lg` to `space-xl`. Zero shadow.
- **Hover Transition:** Background transitions to `#EAE4D5` over `150ms ease-out`; border remains crisp `#E3DEC9` or deepens to `#63615A`.
- **Image Assets:** Displayed with an inner `6px` radius or flush top border, framed with a 1px border.

### Lists & Archival Tables
- **Index List:** Row items separated by `1px solid #E3DEC9`. Each row displays a 3-part layout: Mono index number (e.g., `01`, `02`) left, title in Newsreader center, year and tech stack in Mono right.
- **Hover Interaction:** Entire row background shifts smoothly to `#F2EEE4`.

### Input Fields & Controls
- **Form Inputs:** Background `#F9F7F1`, border `1px solid #E3DEC9`, border-radius `6px`, text `#181816`, font `Plus Jakarta Sans` 14px. Focus state: border-color `#2B4C3F` with zero focus glow ring.
- **Checkbox & Radios:** `16px` squares or circles framed in `1px solid #63615A`. Checked state fills solid with `#2B4C3F` with an off-white micro-mark.

### Code Blocks & Architecture Snippets
- **Container:** Background `#F2EEE4`, border `1px solid #E3DEC9`, border-radius `6px`, padding `space-md`. Header displays file path in `JetBrains Mono` 11px muted caps with a trailing `1px solid #E3DEC9` horizontal divider.