import Link from "next/link";
export default function NotFound(){return <section className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>We can’t find that page.</h1><p>The page may have moved or the address may be incorrect.</p><Link className="button button-primary" href="/">Return home <span>→</span></Link></section>}
