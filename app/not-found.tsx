import Link from "next/link";

export default function NotFound() { return <main className="page-container not-found"><strong>404</strong><div className="section-label" style={{justifyContent:"center"}}><span/> Leaf missing from the archive</div><h1 style={{font:"400 42px var(--serif)",margin:"15px 0"}}>This page isn’t in the index.</h1><p style={{color:"var(--muted)"}}>The page may have moved or the address may be incomplete.</p><Link className="button button-primary" href="/">Return to the front page ↗</Link></main>; }
