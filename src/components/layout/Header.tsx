import Link from "next/link";

const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Contact Us", "/contact"]];

export default function Header() {
  return <header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/" aria-label="DM Finance home"><span className="brand-mark">DM</span><span>DM <b>FINANCE</b></span></Link><nav aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div></header>;
}
