import Link from "next/link";
import { engines, githubUrl, localDocsUrl, products } from "@/lib/content";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="eInnovator home">
          <span className="brand-mark" aria-hidden="true">e<span>i</span></span>
          <span>eInnovator</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <details className="nav-menu">
            <summary>Products</summary>
            <div className="nav-popover">
              {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <strong>{product.name}</strong>
                  <span>{product.summary}</span>
                </Link>
              ))}
              <Link href="/products/pra/context"><strong>PRA Context</strong><span>Send selected ordinary context to an existing model server.</span></Link>
              <Link href="/products/pra/native-memory"><strong>PRA Native Memory</strong><span>Reuse selected resources as qualified model-native memory.</span></Link>
              <Link href="/products/pra/native-serving"><strong>PRA Native Serving</strong><span>Coordinate residency, prefetch, placement, and eviction.</span></Link>
              <Link href="/products/pra/enterprise"><strong>Enterprise</strong><span>Assessment, integration, support, and engine partnerships.</span></Link>
            </div>
          </details>
          <Link href="/solutions/long-context">Solutions</Link>
          <Link href="/developers/quickstart">Developers</Link>
          <Link href="/research">Research</Link>
          <Link href="/company/about">Company</Link>
        </nav>
        <div className="nav-actions">
          <Link className="text-link" href="/company/contact">Talk to us</Link>
          <Link className="button button-small" href="/developers/quickstart">Try PRA</Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">e<span>i</span></span>
            <span>eInnovator</span>
          </Link>
          <p>Efficient AI infrastructure, from research to production.</p>
        </div>
        <div className="footer-links">
          <div><strong>Product</strong><Link href="/products/pra">PRA</Link><Link href="/products/pra/context">Selected Context</Link><Link href="/products/pra/native-memory">Native Memory</Link><Link href="/products/pra/native-serving">Native Serving</Link></div>
          <div><strong>Build</strong><Link href="/developers/quickstart">Quickstart</Link><a href={localDocsUrl}>Documentation</a><a href={githubUrl}>GitHub</a></div>
          <div><strong>Company</strong><Link href="/company/about">About</Link><Link href="/research">Research</Link><Link href="/design-partners">Design partners</Link></div>
          <div><strong>Trust</strong><Link href="/legal/security">Security</Link><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} eInnovator</span>
        <span>PRA is open source. Commercial support is provided by eInnovator.</span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, actions }: { eyebrow: string; title: string; intro: string; actions?: React.ReactNode }) {
  return (
    <section className="page-hero wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{intro}</p>
      {actions ? <div className="hero-actions">{actions}</div> : null}
    </section>
  );
}

export function SectionTitle({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function Status({ children }: { children: React.ReactNode }) {
  const token = String(children).toLowerCase().replaceAll(" ", "-");
  return <span className={`status status-${token}`}>{children}</span>;
}

export function EngineGrid({ limit }: { limit?: number }) {
  return (
    <div className="engine-grid">
      {engines.slice(0, limit ?? engines.length).map((engine) => (
        <article className="engine-card" key={engine.id}>
          <div className="card-top"><Status>{engine.status}</Status><span>{engine.recommendedToday}</span></div>
          <h3>{engine.name}</h3>
          <p>{engine.bestFor}</p>
          <div className="capability-list">{engine.capabilities.slice(0, 2).map((item) => <span key={item}>{item}</span>)}</div>
          <Link className="inline-link" href={`/products/pra/integrations/${engine.slug}`}>Explore integration <Arrow /></Link>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Benchmark PRA on your workload.", copy = "Start with open source. Bring in eInnovator when you need profile calibration, production integration, or enterprise support." }: { title?: string; copy?: string }) {
  return (
    <section className="cta-band wrap">
      <div><p className="eyebrow">A measured adoption path</p><h2>{title}</h2><p>{copy}</p></div>
      <div className="hero-actions"><Link className="button" href="/design-partners">Become a design partner</Link><Link className="button button-ghost" href="/company/contact">Talk to us</Link></div>
    </section>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return <pre className="code-block"><code>{children}</code></pre>;
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return <nav className="breadcrumbs wrap" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 ? <i>/</i> : null}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>;
}

export function LocalDocsNote() {
  return <p className="local-note"><strong>Local documentation:</strong> this temporary link opens the generated PRA site at <code>D:\git\rd\pdattention\site</code>. Configure <code>DOCS_URL</code> when it moves.</p>;
}
