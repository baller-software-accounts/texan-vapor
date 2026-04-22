# Deployment Guide

## Hosting Environment

The site is deployed to **GitHub Pages** as a static site.

- **URL**: Configured in `astro.config.mjs` under `site`
- **Branch**: Deploys from `main` branch via GitHub Actions

## Pre-Deployment Checklist

- [ ] Build succeeds locally: `npm run build`
- [ ] All pages render correctly in preview: `npm run preview`
- [ ] Contact form Formspree endpoint is configured in `src/pages/contact.astro`
- [ ] GitHub Pages is enabled in repo Settings → Pages → Source: GitHub Actions

## Deployment Steps

Deployment is fully automated via GitHub Actions:

1. Push changes to the `main` branch
2. The `deploy.yml` workflow triggers automatically
3. It installs dependencies, builds the site, and deploys to GitHub Pages
4. The site is live within ~2 minutes of the push

For PRs, the build step runs but deployment is skipped until the PR is merged to `main`.

## Post-Deployment Verification

1. Visit the deployed URL (shown in the Actions run summary)
2. Confirm all three pages load: Home (`/`), About (`/about`), Contact (`/contact`)
3. Verify the chat widget opens and responds to quick-reply buttons
4. Submit a test message through the contact form and verify it arrives via Formspree

## Rollback Procedure

To revert to a previous version:

```bash
git revert HEAD
git push origin main
```

This triggers a new deployment with the reverted code. Alternatively, use GitHub Actions to re-run a previous successful deploy workflow.

## Domain & DNS

The site is currently configured for the custom domain `texanvaporandcbd.com` in `astro.config.mjs`. To change this:

1. Update `site` in `astro.config.mjs`
2. If using a GitHub Pages project subdomain (`username.github.io/repo`), set `base: '/repo-name'` in `astro.config.mjs`
3. Configure your DNS provider to point the domain to GitHub Pages (CNAME to `username.github.io`)
4. Add the custom domain in GitHub repo Settings → Pages → Custom domain
