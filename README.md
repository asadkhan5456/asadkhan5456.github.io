# asadkhan5456.github.io

Personal site of Asad Faiyyaz Khan, Senior AI Engineer. Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

## Content

| What | Where |
|---|---|
| Case studies | `src/content/case-studies/*.md` |
| Projects | `src/content/projects/*.md` (`repoPublic: true` shows the repo link) |
| Posts | `src/content/posts/*.md` (`draft: true` posts are not built) |
| Bio, experience, skills | `src/data/profile.ts` |
| Architecture diagrams | `src/data/diagrams.ts` (rendered as inline SVG) |
| Interface text | `src/i18n/ui.ts` |

Public content uses generic descriptions only: no client names, figures or client-specific architecture details.

## CV

The CV PDF is generated from `cv/cv.html` with WeasyPrint and committed to `public/cv/`.

```bash
pip install weasyprint
npm run cv        # builds the PDF and runs cv/check.sh
```

`cv/check.sh` checks page count, metadata, heading order, key terms, and that no phone number, date of birth or street address appears in the extracted text.

## Open Graph image

`public/og.png` is rendered from `scripts/og.html` with Playwright: `node scripts/og.cjs`.

## Adding German (`/de/`)

1. Add `de` to `locales` in `astro.config.mjs` and to `languages` in `src/i18n/ui.ts`, with a `de` block of strings.
2. Create the German pages under `src/pages/de/`, passing `lang="de"` to the layout.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` (official `withastro/action`). In the repository settings, Pages → Source must be set to **GitHub Actions**.

## Licence

Code: MIT. Inter font: SIL Open Font License (`cv/fonts/OFL-LICENSE.txt`).
