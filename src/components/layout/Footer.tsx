import Link from "next/link";
import { company } from "@/data/company";
import { serviceCategories } from "@/data/services";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-about"><Link className="brand brand-light" href="/"><span className="brand-mark">DM</span><span>DM <b>FINANCE</b></span></Link><p>{company.description}</p></div><div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/contact">Contact us</Link></div><div><h3>Services</h3>{serviceCategories.map((c) => <Link key={c.slug} href={`/services#${c.slug}`}>{c.title}</Link>)}</div><div><h3>Visit or call</h3><p>{company.phone}</p><p>{company.email}</p><p>{company.address}</p><p>{company.hours}</p><small>{company.saturdayNote}</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} DM Finance. All rights reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div></div></footer>;
}
