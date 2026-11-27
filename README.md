# asadkhan5456.github.io

Personal site of Asad Faiyyaz Khan, Senior AI Engineer. Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 (German), /en/ (English)
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Content

German is the main language at `/`; English lives under `/en/`.

| What | Where |
|---|---|
| Interface text (DE/EN) | `src/i18n/ui.ts` |
| Bio, experience, skills, public repos | `src/data/profile.ts` |
| Case studies | `src/content/case-studies/{de,en}/*.md` |
| Projects | `src/content/projects/*.md` (`repoPublic: true` shows the repo link) |
| Blog posts | `src/content/posts/*.md` (`draft: true` posts only appear as "coming soon") |
| Architecture diagrams | `src/data/diagrams.ts` |
| Photo | `src/assets/asad.jpg` |

Public content uses generic descriptions only: no client names, figures or client-specific architecture details.

## CV

Two CVs with the same facts, generated with WeasyPrint and committed to `public/cv/` together with page previews:

- `cv/cv.html` → `Asad_Faiyyaz_Khan_CV.pdf` (English)
- `cv/cv-de.html` → `Asad_Faiyyaz_Khan_Lebenslauf.pdf` (German)

```bash
pip install weasyprint
npm run cv        # builds both PDFs + previews, then runs cv/check.sh
```

`cv/check.sh` checks page count, metadata, heading order, key terms, and that no phone number, date of birth or street address appears.

## Fonts and images

- `public/fonts/bricolage-display.woff2`: Bricolage Grotesque (OFL), subset to Latin + German with weight 600–800 and width 75–100.
- IBM Plex Sans / Mono come from `@fontsource`. Inter in `cv/fonts/` is used for the CV only.
- `public/og-de.png` / `og-en.png` are rendered from `scripts/og.html`: `node scripts/og.cjs`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (official `withastro/action`). In the repository settings, Pages → Source must be set to **GitHub Actions**.

## Licence

Code: MIT. Inter font: SIL Open Font License (`cv/fonts/OFL-LICENSE.txt`).
