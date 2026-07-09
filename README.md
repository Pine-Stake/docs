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
