# Pine Stake Documentation

Documentation site for [Pine Stake](https://twitter.com/PineStake), a Solana validator focused on decentralization, education, and empowering Brazilian creators. Built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js 18+

## Local development

```bash
npm install
npm start
```

Starts a dev server at `http://localhost:3000` with live reload.

## Build

```bash
npm run build
```

Generates static files into `build/`. Preview the production build with:

```bash
npm run serve
```

## Project structure

- `docs/` — the documentation content, one file per page, served at the site root (no separate landing page). Sidebar order is controlled by the `sidebar_position` frontmatter field in each file; `docs/introduction.mdx` (`slug: /`) is the homepage.
- `src/css/custom.css` — theme colors (dark pine-green palette) and global style overrides.
- `docusaurus.config.ts` — site metadata, navbar, footer, social links.
- `static/img/` — logo, favicon, and social card image.

## TODO before going live

- [ ] Replace `static/img/logo.svg` and `static/img/favicon.ico` with real Pine Stake branding (currently Docusaurus placeholders).
- [ ] Replace `static/img/docusaurus-social-card.jpg` with a real Pine Stake social share image (1200×630).
- [ ] Add the real Discord invite link in `docusaurus.config.ts` (footer) and `docs/links-and-resources.mdx`.
- [ ] Confirm `organizationName`/`projectName` in `docusaurus.config.ts` once the GitHub org/repo exists, and re-add an `editUrl` under `presets[0][1].docs` if you want "Edit this page" links.
- [ ] Point the `pinestake.com` domain at the Vercel deployment once it's ready.

## Deployment (Vercel)

This is a static Docusaurus site, so Vercel needs no special config beyond the defaults:

- **Build command:** `npm run build`
- **Output directory:** `build`

Steps:

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo → Vercel auto-detects Docusaurus.
3. Deploy. Every push to the main branch redeploys automatically.
4. Once `pinestake.com` is ready, add it as a custom domain in the Vercel project settings.
