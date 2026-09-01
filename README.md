# eInnovator AI website

Commercial website for eInnovator, launching with Progressive Retrieval Attention (PRA) as the first product.

The implementation lives in `apps/web`. Product, engine, and benchmark content is data-driven so future products and integrations can be added without rewriting global navigation or page templates.

The temporary PRA documentation link points to `D:\git\rd\pdattention\site\index.html`. Set `DOCS_URL` before deployment to replace it with the hosted documentation URL.

See `apps/web/README.md` for development, validation, deployment, and content-editing instructions.

To create and view the additional static version:

```bash
cd apps/web
npm run build:static
npm run static:serve
```

Then open `http://127.0.0.1:4173`. The dynamic application remains available and unchanged through its existing `dev`, `build`, and `start` scripts.
