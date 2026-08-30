# zmjafary.com

Personal site for Zille Muhammad Jafary, software engineer. One page, built
with Gatsby and styled-components, deployed to GitHub Pages.

## Running it

Node 20 is what CI uses, and what the build is verified against.

```sh
nvm use 20
yarn install
yarn develop      # http://localhost:8000
yarn build        # production build into public/
yarn serve        # serve the production build
```

## How it is put together

| Path | What lives there |
| --- | --- |
| `src/config.js` | All copy that is not tied to a layout: nav, stats, capabilities, how-I-work, jobs, stack. Edit the site's words here. |
| `src/components/ui.js` | Shared primitives: container, section, buttons, cards, chips, tags, bullets, frames. |
| `src/components/sections/` | One file per section of the page. |
| `src/components/head.js` | Every meta tag, the Person JSON-LD, and the Google Fonts link. |
| `src/styles/variables.js` | The design tokens. Nothing else defines a colour. |
| `src/images/work/` | Project screenshots, imported directly by `sections/work.js`. |

Project rows and recommendations keep their own data next to the component
that renders them, since both carry images or verbatim quotes.

## Design rules worth keeping

- **Tokens only.** No component hard-codes a hex. Colours, radii, shadows and
  fonts all come from `src/styles/variables.js`.
- **One accent.** Lime appears on primary buttons, section kickers, large
  numerals, one phrase in the h1, and the single call-to-action panel. Nowhere
  else.
- **One inverted band and one accent panel** per page.
- **Two faces.** Caprasimo for display, Figtree for everything else, including
  uppercase labels. Display type never sits below 20px except in the brand
  lockup and buttons.
- **Flush left.** Nothing is centred except the container.
- Every `fr` grid track is written as `minmax(0, 1fr)`.

## SEO

`src/components/head.js` emits the canonical URL, description, robots
directives, Open Graph and Twitter cards, and a `Person` JSON-LD block.
`gatsby-plugin-sitemap` writes `/sitemap/sitemap-index.xml` and
`gatsby-plugin-robots-txt` is configured to point at that exact path.

## Deploying

Pushing to `main` runs `.github/workflows/gatsby.yml`, which builds on Node 20
and publishes `public/` to GitHub Pages.
