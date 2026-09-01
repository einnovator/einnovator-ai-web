# eInnovator AI website

Commercial website for eInnovator, launching with Progressive Retrieval Attention (PRA) as the first product.

The implementation lives in `apps/web`. Product, engine, and benchmark content is data-driven so future products and integrations can be added without rewriting global navigation or page templates.

PRA documentation links use `DOCS_URL`; the public fallback points to the open-source repository until a dedicated documentation origin is configured.

See `apps/web/README.md` for development, validation, deployment, and content-editing instructions.

To create and view the additional static version:

```bash
cd apps/web
npm run build:static
npm run static:serve
```

Then open `http://127.0.0.1:4173`. The dynamic application remains available and unchanged through its existing `dev`, `build`, and `start` scripts.

For a browser-only version that needs no server, run `npm run build:offline` in `apps/web`, then double-click `apps/web/offline-site/index.html`.
