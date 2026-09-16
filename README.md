# zmjafary.com

Personal site for Zille Muhammad Jafary, software engineer. One page of hand-written
HTML and CSS, deployed to GitHub Pages. No build step, no dependencies, no Node.

## Running it

Open `index.html` in a browser. That's it.

To exercise the absolute URLs (`/Zille_Muhammad_Jafary_Resume_2026.pdf`, `/assets/…`, `/404.html`) the way the
live site serves them, run any static server from the repo root:

```sh
python3 -m http.server 8000    # http://localhost:8000
```

## How it is put together

| Path | What lives there |
| --- | --- |
| `index.html` | The whole page. Tokens, styles, markup and the small amount of JS, in that order. |
| `404.html` | Not-found page. Carries its own trimmed copy of the styles it uses. |
| `assets/img/work/` | Project screenshots. |
| `assets/icons/` | PNG favicons and touch icons, referenced from both pages and `site.webmanifest`. |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Hand-maintained. Update `sitemap.xml` if a page is ever added. |
| `favicon.ico`, `og.png`, `resume.pdf` | Served from the root, so their public URLs stay stable. |

The `<style>` block in `index.html` is ordered tokens → base → layout primitives →
components → sections → motion. Section styles are commented with the section they
belong to.

**`404.html` duplicates the subset of CSS it renders.** It is the one piece of
duplication in the repo, and the tradeoff for having no build step. If a token or a
header/footer rule changes in `index.html`, change it there too.

## Design rules worth keeping

- **Tokens only.** No rule hard-codes a hex outside the `:root` block. Colours, radii,
  shadows and fonts all come from there.
- **One accent.** Lime is the only saturated colour on the page. It carries primary and
  ghost buttons, the brand mark, section kickers, large numerals, text links, the
  "Read more" toggles, the skip link, the two blobs, and the single call-to-action
  panel. There is never a second accent.
- **One inverted band and one accent panel** per page.
- **Two faces.** Caprasimo for display, Figtree for everything else, including uppercase
  labels. Display type never sits below 20px except in the brand lockup, buttons and
  the skip link.
- **Flush left.** Nothing is centred except the container.
- Every `fr` grid track is written as `minmax(0, 1fr)`.

## JavaScript

There is one inline script, and the page is fully readable without it:

- Derives "9+ / Years in, and ten on 17 January" from the `data-years-since` start
  date. The count, the ordinal word and the month name all come from that attribute, so
  none of it expires. Past twenty the word list runs out and it falls back to a numeral.
  Without JS the markup reads "9+ / Years in, since 17 January 2017", which stays true
  indefinitely.
- Sets the footer copyright year.
- Drives the recommendations "Read more" and "Show 5 more" toggles. All eight
  recommendations are in the HTML; five are hidden with a class.
- Unregisters the old Gatsby service worker and clears its caches, so returning
  visitors are not served the previous build out of cache. **Keep this until the
  traffic from before the rewrite has aged out.**

## SEO

Both pages carry their own canonical URL, description, robots directives, Open Graph
and Twitter cards. `index.html` also emits a `Person` JSON-LD block. `robots.txt`
points at `/sitemap.xml`.

Google Analytics (`G-T5TKLHCFBD`) loads at the bottom of `index.html` only.

## Deploying

Pushing to `main` runs `.github/workflows/pages.yml`, which copies the repo into
`_site/` minus the files that should not be public (`.git`, `.github`, `README.md`,
`LICENSE`, editor config) and publishes it to GitHub Pages. There is nothing to build.

The custom domain is configured in the repository's Pages settings rather than a
`CNAME` file, which is how it worked before the rewrite too.
