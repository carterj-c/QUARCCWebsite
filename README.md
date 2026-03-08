# QUARCC Website

Astro-based QUARCC website with:

- file-based blog content in `src/content/blog`
- local structured site data for teams, events, and portfolio fallbacks
- static Astro pages and layouts
- React islands only where interactivity is still useful (`AsciiLogoAnimation`, CLI footer, portfolio dashboards)

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
```

## Content Structure

- `src/content/blog/*.md`: blog posts with typed frontmatter
- `src/content/events/*.json`: event entries
- `src/content/teams/*.json`: team sections and members
- `src/content/portfolios/*.json`: static paper-fund fallback data
- `src/data/site.ts`: shared page copy for home/about/join

## Blog Frontmatter

Each blog post supports:

- `title`
- `description`
- `pubDate`
- `updatedDate` optional
- `heroImage` optional
- `heroImageAlt` optional
- `tags` optional
- `draft` optional
- `featured` optional

## Live Paper Fund API

Set `PUBLIC_PAPER_FUND_API_BASE` to point at the separate live portfolio API. The site fetches:

```text
${PUBLIC_PAPER_FUND_API_BASE}/portfolios
```

Expected response shape:

```json
{
  "portfolios": [
    {
      "slug": "portfolio-alpha",
      "name": "Portfolio Alpha",
      "strategy": "Statistical Arbitrage",
      "status": "Active",
      "summary": "A research-led portfolio focused on market neutral pair trading.",
      "stats": {
        "equity": "$1,245,300.50",
        "dayChange": "+2.4%",
        "sharpe": "1.8",
        "beta": "0.45"
      },
      "holdings": [],
      "chartData": []
    }
  ]
}
```

If the variable is unset or the API is unavailable, the `paper-fund` page falls back to the file-based portfolio data in `src/content/portfolios`.
