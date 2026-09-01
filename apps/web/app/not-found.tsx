import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero wrap" id="main"><p className="eyebrow">404</p><h1>This context was not materialized.</h1><p className="lede">The requested page does not exist or is not part of the launch surface.</p><div className="hero-actions"><Link className="button" href="/">Return home</Link><Link className="button button-ghost" href="/products/pra">Explore PRA</Link></div></section>;
}
