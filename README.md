# Newton Nyoro — Portfolio

The personal portfolio of Newton Nyoro, an interactive software developer. The site presents selected software projects, an about and résumé page, contact details, and a small support page in a warm, editorial style inspired by an archival print catalogue.

**Live website:** [My_Portifolio](https://newtonnyoro.vercel.app/)

## What’s in the site

- **Home (`/`)** — introduction, featured projects, and an about teaser.
- **Project archive (`/projects`)** — searchable catalogue with filters for project categories and technologies.
- **Project case studies (`/projects/<slug>`)** — project background, role, technology, outcomes, and available screenshots or links.
- **About (`/about`)** — biography, skills, education, experience, and résumé download.
- **Contact (`/contact`)** — direct email, copy-email action, social links, and a contact form.
- **Support (`/donate`)** — a modest page for supporting the work.
- **Not found** — a custom editorial 404 page.

The visual system uses warm cream paper, charcoal ink, forest-green accents, fine rules, paper grain, mono-spaced catalogue details, hand-drawn marks, and responsive archival-style project layouts. The design tokens and implementation notes are documented in [AGENTS.md](AGENTS.md).

## Featured work

- **Tomorrow Kenya** — a civic accountability platform centered on a manifesto, a corruption tracker, and petitions. [Live project](https://tomorrow-kenya.vercel.app/) · [Source](https://github.com/codemaniac-star/tomorrow-kenya)
- **AetherDB** — a systems engineering study exploring distributed memory, consensus, and low-latency telemetry.
- **Cura Doula App** — a perinatal care experience for doula matching and birth support. This was Newton’s first shipped project. [Live project](https://v0-cura-doula-app.vercel.app/) · [Source](https://github.com/codemaniac-star/cura-doula-app)

The archive also includes Monolith, LedgerKit, and an ongoing data-science portfolio about learning predictive machine learning through food-price data.

## Technology

- [Next.js](https://nextjs.org/) 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4, with the site’s editorial styles in `app/globals.css`
- Framer Motion for restrained reveal effects
- `gray-matter` for project content front matter
- Vercel for hosting and production deployments from GitHub

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/codemaniac-star/Nyoro_Portifolio.git
cd Nyoro_Portifolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run the production build locally:

```bash
npm run build
npm run start
```

On this Windows workstation, OneDrive can interfere with Next.js’s generated `.next` directory. If that happens, use a separate output directory for local work:

```powershell
$env:NEXT_DIST_DIR = ".next-local"
npm run dev
```

The Vercel deployment uses the standard `.next` output directory.

## Editing projects

Project data is split between `content/projects/` and `lib/projects.ts`:

1. Create or edit a matching Markdown file in `content/projects/`, for example `content/projects/my-project.mdx`. Include front matter for `title` and `slug`, then write the case study using Markdown headings and paragraphs.
2. Add or update the corresponding entry in `lib/projects.ts`. This file supplies the archive and card metadata: `slug`, `number`, `title`, `category`, `year`, `role`, `stack`, `description`, `outcome`, `figure`, and whether the project is `featured`.
3. Put screenshots in `public/images/`. Reference them with a root-relative URL such as `/images/my-project-home.png`. Set `image` and `imageAlt` for the main image; add `gallery` entries when the case study should show multiple images.
4. Add the project’s `liveUrl` and `githubUrl` when those links are available. Omit optional links that do not exist.

The home page displays projects marked as featured (currently the first three); the archive shows the full project catalogue. Keep `number` values in the intended display order. Use descriptive alt text for all project images.

## Assets and documents

- `public/images/` — project screenshots, design references, and Open Graph image.
- `public/doodles/` — local SVG illustrations and paper-grain texture.
- `public/certificates/` — certificates available on the site.
- `public/resume.pdf` — the résumé download.
- `stitch_export/` — source export and design reference material.

Files in `public/` are served from the site root. For example, `public/resume.pdf` is available at `/resume.pdf`.

## Contact form configuration

The contact form validates submissions through the Next.js route handler at `/api/contact`. It sends email using Resend when the following variables are configured:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used to send messages. |
| `CONTACT_TO_EMAIL` | Inbox that receives portfolio inquiries. |
| `CONTACT_FROM_EMAIL` | Verified sender identity configured in Resend. |
| `NEXT_PUBLIC_SITE_URL` | Optional canonical site origin used for metadata. |

Copy `.env.example` to `.env.local` and fill in the values for local development. Add the same secrets in the Vercel project’s environment-variable settings for production. `.env.local` is ignored by Git; never commit API keys. Without a Resend key, the form responds with a message directing visitors to email Newton directly at [newtnmukuha06@gmail.com](mailto:newtnmukuha06@gmail.com).

## Build and deployment

Vercel is connected to the GitHub repository and deploys changes pushed to the production branch. Before a production push, check the application with:

```bash
npm run build
```

The deployment’s build output and status are available in the Vercel project dashboard. The site metadata, Open Graph preview, and favicon are configured in `app/layout.tsx`; the canonical origin can be set with `NEXT_PUBLIC_SITE_URL`.

## Repository structure

```text
app/                  App Router pages, global styles, and API route
components/           Shared site shell and interactive UI
content/projects/     Markdown case studies
lib/projects.ts       Project catalogue and card metadata
public/               Images, doodles, documents, and favicon
scripts/              Supporting scripts
stitch_export/        Original design export and references
```

## License

This repository contains a personal portfolio and its original design assets. All rights are reserved unless a particular file or asset states otherwise. Please contact Newton before reusing the portfolio’s branding, copy, or artwork.
