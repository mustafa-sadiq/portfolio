# Mustafa Sadiq - Portfolio

[![Production pipeline](https://github.com/mustafasadiq/portfolio/actions/workflows/production.yml/badge.svg)](https://github.com/mustafasadiq/portfolio/actions/workflows/production.yml)

Static personal portfolio for [www.mustafasadiq.com](https://www.mustafasadiq.com). It is built with Next.js, React, TypeScript, the U.S. Web Design System, and shadcn-style UI primitives, then exported as static files for GitHub Pages.

## Architecture

- `app/` - the page, metadata, structured data, crawl directives, and USWDS theme
- `components/ui/` - reusable shadcn-style interface primitives
- `lib/` - shared utilities
- `public/` - production static assets
- `tests/unit/` - Vitest and Testing Library unit tests
- `tests/e2e/` - Playwright browser tests
- `.github/workflows/production.yml` - validation, test, and deployment pipeline

The site has no server runtime, database, API keys, or backend. `next build` writes the deployable site to `out/`.

## Requirements

- Node.js 22 or newer
- npm

Using `nvm`:

```bash
nvm use
npm ci
```

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Commands

| Command                      | Purpose                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| `npm run dev`                | Start the Next.js development server                       |
| `npm run build`              | Create the static production export                        |
| `npm run preview`            | Serve the generated `out/` directory                       |
| `npm run format`             | Format the codebase with Prettier                          |
| `npm run validate`           | Check formatting, ESLint, and TypeScript                   |
| `npm run security:check`     | Fail on high or critical production dependency advisories  |
| `npm run test:unit`          | Run unit tests once                                        |
| `npm run test:unit:coverage` | Run unit tests with coverage thresholds                    |
| `npm run test:e2e`           | Build, serve, and test the production export in Playwright |
| `npm test`                   | Run unit and end-to-end tests                              |

Install the local Playwright browser once before the first end-to-end run:

```bash
npx playwright install chromium
```

## Testing strategy

Unit tests verify the page's core content, navigation contracts, shared UI primitives, and class merging. Coverage is enforced at 80% for lines, functions, and statements, with a 70% branch threshold.

Playwright runs the exported production site in desktop and mobile Chromium. It verifies:

- core profile and impact content
- canonical and social metadata
- navigation and contact links
- responsive layout without horizontal overflow
- JSON-LD structured data, sitemap, robots, and web manifest

Failed browser runs retain screenshots, videos, traces, and an HTML report.

## Production pipeline

Pull requests and pushes to `main` run three independent quality gates:

1. **CLI validation** - Prettier, ESLint, TypeScript, and high-severity dependency auditing
2. **Unit tests** - Vitest with an uploaded coverage report
3. **Playwright tests** - production build tested on desktop and mobile

The GitHub Pages deployment job runs only on `main`, and only after all three gates pass. Configure branch protection to require these checks before merging:

- `CLI validation`
- `Unit tests`
- `Playwright tests`

## GitHub Pages and custom domain

In the repository settings:

1. Set **Pages > Build and deployment > Source** to **GitHub Actions**.
2. Set the custom domain to `www.mustafasadiq.com`. GitHub Pages will redirect the apex domain to `www` when both DNS variants point to GitHub Pages.
3. Enable **Enforce HTTPS** after DNS propagation completes.

DNS records:

| Type  | Name  | Value                    |
| ----- | ----- | ------------------------ |
| A     | `@`   | `185.199.108.153`        |
| A     | `@`   | `185.199.109.153`        |
| A     | `@`   | `185.199.110.153`        |
| A     | `@`   | `185.199.111.153`        |
| CNAME | `www` | `mustafasadiq.github.io` |

## Contribution flow

1. Create a short-lived branch.
2. Make the change and add or update tests.
3. Run `npm run validate` and `npm test`.
4. Open a pull request into `main`.
5. Merge only after the required checks pass.
