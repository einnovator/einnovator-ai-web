# eInnovator commercial website

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The local server prints its URL, normally `http://localhost:3000`.

## Static version

Create the standalone static website without replacing the dynamic app:

```bash
npm run build:static
npm run static:serve
```

Open `http://127.0.0.1:4173` in a browser. The generated site is written to `static-site`; publish the contents of that directory as the web root on any static host. Run `npm run build:static` again after changing site content.

The original dynamic version remains available through `npm run dev`, `npm run build`, and `npm run start`.

## Validation

```bash
npm run lint
npm test
```

`npm test` creates both production builds and runs rendered-HTML, registry, route, static-asset, and broken-internal-link checks.

## Content editing

- `data/products.json` is the product registry used by shared navigation and product surfaces.
- `data/engines.json` is the canonical website export for engine pages and the comparison matrix.
- `data/benchmarks.json` is the checked-in evidence export used by benchmark cards and tables.
- JSON schemas document required product and benchmark fields.
- `app/content-pages.tsx` contains launch page prose and reusable page structures.
- `app/globals.css` contains the visual system and responsive behavior.

Never use zero for a missing metric. Use `Not measured`, `Blocked`, `Candidate`, or another explicit evidence state. Do not promote an observed engine mechanism into a validated deployment level.

## Environment

Copy `.env.example` to `.env.local` for local overrides.

- `SITE_URL`: canonical public origin.
- `DOCS_URL`: PRA documentation URL. The default is the current local generated site.
- `GITHUB_URL`: PRA source repository.
- `CONTACT_ENDPOINT`: form endpoint; local fallback opens email.
- `NEXT_PUBLIC_ANALYTICS_SCRIPT_URL`: optional privacy-conscious analytics adapter script. No provider is enabled by default.

## Deployment

The dynamic site uses vinext and emits Cloudflare Worker-compatible ESM. The separate `static-site` export contains pre-rendered HTML and assets for generic static hosting.

For Cloudflare/Sites, build with `npm run build` and publish the generated `dist` output through the hosting workflow. Configure environment values in the hosting provider; do not commit secrets.

Before a public launch, replace the temporary local docs URL, connect the contact endpoint, complete legal review, and verify external links from the deployment environment.
