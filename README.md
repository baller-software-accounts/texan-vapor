# Texan Vapor & CBD — Website

Static business website for Texan Vapor & CBD, a vape and smoke shop in Forney, TX. Built with Astro 5 and Tailwind CSS v4, deployed to GitHub Pages.

## Prerequisites

- Node.js 20 LTS or higher
- npm

## Local Development Setup

```bash
git clone <repo-url>
cd <project-dir>
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── components/
│   ├── Header.astro        # Sticky navigation with mobile menu
│   ├── Footer.astro        # Four-column footer
│   ├── ContactForm.astro   # Reusable validated contact form
│   └── ChatWidget.astro    # Floating demo chatbot widget
├── layouts/
│   └── BaseLayout.astro    # Base HTML shell used by all pages
├── pages/
│   ├── index.astro         # Home page
│   ├── about.astro         # About page
│   └── contact.astro       # Contact page with form
└── styles/
    └── global.css          # Design tokens and Tailwind imports
public/
└── favicon.svg
```

## Environment Variables

No environment variables are required for local development.

For production form submissions, update the Formspree endpoint in `src/pages/contact.astro`:

```astro
<ContactForm endpoint="https://formspree.io/f/YOUR_FORM_ID" />
```

Create a free Formspree account at https://formspree.io and replace `YOUR_FORM_ID` with your form's ID.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the included GitHub Actions workflow (`.github/workflows/deploy.yml`).

See `DEPLOYMENT.md` for full deployment instructions.
