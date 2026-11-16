import Link from "next/link";

export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand" aria-label="Newton Nyoro home"><span className="brand-mark">NN</span><span className="brand-copy"><strong>Newton Nyoro</strong><small>Physical Systems &amp; Software Studio</small></span></Link>
    <nav className="top-nav" aria-label="Main navigation"><Link className="ink-link" href="/projects">⌕ Project files</Link><Link className="button button-primary nav-cta" href="/contact">Hire me <span>↗</span></Link></nav>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><div className="footer-brand"><span>Newton Nyoro</span><i>—</i><small>Archive № 2026-N</small></div><p>All architectural rights preserved · Clean deterministic engineering · Nairobi &amp; London</p></div><nav aria-label="Social links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com" target="_blank" rel="noreferrer">X / Dispatch</a><Link href="/contact">Direct wire</Link><a href="#top">Top of index ↑</a></nav></div></footer>;
}

export function PageFrame() {
  return <><div className="grain" aria-hidden="true"/><aside className="margin-rail" aria-hidden="true"><span>PRINT ARCHIVE // CAT. 2026-N</span><span>+120MM</span><span>+240MM</span><span>+360MM</span><span>///</span><span>END_OF_PAGE</span></aside></>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="section-label"><span/> {children}</div>; }
