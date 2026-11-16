export type Project = {
  slug: string; number: string; title: string; category: string; year: string;
  role: string; stack: string[]; catalogId: string; description: string;
  outcome: string; figure: string; liveUrl?: string; githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aetherdb", number: "01", title: "AetherDB: Low-latency consensus cache", category: "Distributed Memory Engine", year: "2026", role: "Lead Architect", stack: ["Rust", "Raft Consensus", "TypeScript", "Memory-Mapped"], catalogId: "#NY-084", featured: true,
    description: "A high-throughput distributed memory-mapped storage engine built for real-time telemetry streaming and high-frequency writes. Achieved sustained sub-millisecond p99 read latencies under 50,000 concurrent client operations without centralized locking bottlenecks.",
    outcome: "Sustained 0.84ms p99 read latency while serving 50,000 concurrent operations, using a lock-free ring buffer and a five-peer Raft cluster.", figure: "Lock-free Ring Buffer Telemetry"
  },
  {
    slug: "monolith", number: "02", title: "Monolith: Headless publishing engine for architectural reviews", category: "Headless Print Essay Engine", year: "2025", role: "Principal Engineer", stack: ["Next.js 14", "Tailwind CSS", "PostgreSQL", "Edge Workers"], catalogId: "#NY-091", featured: true,
    description: "Engineered a bespoke markdown-driven CMS delivering zero-layout-shift visual essays for longform criticism. It features mathematical baseline grids, automated typographic ligature binding, and high-performance edge compilation across 8,000 published essays.",
    outcome: "Reduced cold builds from 4.2 minutes to 142ms and held cumulative layout shift at 0.000 across a catalogue of 8,000 essays.", figure: "Zero-shift Typography Raster"
  },
  {
    slug: "ledgerkit", number: "03", title: "LedgerKit: Local-first double-entry accounting runtime", category: "Local-first Financial Engine", year: "2025", role: "Core Systems Developer", stack: ["TypeScript", "WebAssembly", "SQLite", "Yjs CRDTs"], catalogId: "#NY-098", featured: true,
    description: "An offline-capable embedded ledger engine using conflict-free replicated data types and WebAssembly SQLite. It enables continuous peer-to-peer reconciliation of immutable financial journals without central locking or online connectivity.",
    outcome: "Journal entries converge across peers offline and reconcile automatically on reconnect, with balanced double-entry invariants maintained locally.", figure: "Autonomous Client-side Convergence"
  }
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
