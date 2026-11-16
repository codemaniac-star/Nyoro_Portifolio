# Portfolio implementation notes

## Visual tokens extracted from the Stitch export

- Canvas: `#F9F7F1` (warm English cream); card paper: `#F2EEE4`; hover paper: `#EAE4D5`.
- Ink: `#181816`; muted metadata: `#63615A`; structural hairline: `#E3DEC9`; forest accent: `#2B4C3F`.
- Typography: Newsreader (editorial display), Plus Jakarta Sans (body), JetBrains Mono (metadata and code), Caveat (handwritten annotations).
- Layout: max content width 1180px, 32px desktop gutters, single column under 900px, 16px mobile page gutters.
- Spacing rhythm: 4, 8, 16, 24, 40, 64px. Editorial rules use 1px lines; archival project mounts use crisp borders and offset tonal planes.
- Export inventory: `stitch_export/code.html`, `stitch_export/DESIGN.md`, and `stitch_export/screen.png`. The export has no standalone font, stylesheet, or SVG files. Illustrations and flourishes were inline in its HTML. Screenshot references supplied by the user are under `public/images/`.

## Structure

- `app/`: Next.js App Router routes, metadata, and `/api/contact` handler.
- `components/`: shared editorial shell, project graphics, filters, and contact interactions.
- `content/projects/*.mdx`: source case-study prose; project listing metadata is in `lib/projects.ts`.
- `public/images/`: supplied Stitch preview and reference screenshots, plus the Open Graph preview.
- Add project screenshots to `public/images/`, then set that project's `image` and `imageAlt` in `lib/projects.ts`. Add optional extra case-study shots to its `gallery` array; the card and detail view render them automatically.
- `public/doodles/`: local SVG grain and hand-drawn marks extracted/recreated from the HTML export.
- `public/files/`: downloadable public documents (place the approved resume PDF here).

## Environment

- `.env.local` is excluded in `.gitignore`.
- Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to enable contact form delivery.
- `NEXT_PUBLIC_SITE_URL` can be set to the canonical deployment origin for metadata.
- Configure a checkout URL before replacing the support page's email placeholder.
