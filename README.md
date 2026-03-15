# FAIS IT — Website

Official website for **FAIS (Fighting Antisemitism in Schools)**, a student-led nonprofit that educates and empowers teenagers to recognize, speak up against, and change antisemitic and anti-Israel curriculum in their schools, communities, and online.

## Tech Stack

- **Next.js 12** — React framework with file-based routing
- **next-intl** — i18n / localization
- **JSX scoped styles** — per-page `<style jsx>` blocks
- **CSS custom properties** — global design tokens in `pages/style.css`
- **dangerous-html** — safe injection of third-party embeds (JotForm)
- **Vercel** — deployment

## Project Structure

```
pages/           # All routes (Next.js file-based routing)
  index.js       # Home
  about.js       # Our Story
  about-fais.js  # About FAIS
  fais-method.js # The F.A.I.S Method
  team.js        # Team
  media.js       # Media coverage
  resources.js   # External resources
  get-involved.js
  contact.js
  donate.js
  events.js
  need-help.js   # noindex — hidden from nav
  news.js        # noindex — hidden from nav
  style.css      # Global styles + typography variables
  _app.js
  _document.js

components/
  header.js      # Site-wide nav
  footer.js      # Site-wide footer + scroll-to-top

public/          # Static assets (images, sitemap, favicon)
locales/         # i18n translation files
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Typography System

Global CSS variables are defined in `pages/style.css`:

| Variable | Value |
|---|---|
| `--fais-font-display` | 80px |
| `--fais-font-h1` | 64px |
| `--fais-font-h2` | 48px |
| `--fais-font-h3` | 32px |
| `--fais-font-body-lg` | 20px |
| `--fais-font-body` | 18px |
| `--fais-font-body-sm` | 16px |

Responsive breakpoints: 1024px, 767px, 479px.

## Deployment

Deployed on Vercel. Push to `main` triggers a production deploy.
