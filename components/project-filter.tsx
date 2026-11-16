"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

const filters = ["All", "Full-Stack", "Frontend", "TypeScript", "Next.js", "Rust", "WebAssembly"];
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => projects.filter((project) => active === "All" || (active === "Full-Stack" ? ["aetherdb", "ledgerkit", "tomorrow-kenya"].includes(project.slug) : active === "Frontend" ? ["monolith", "tomorrow-kenya"].includes(project.slug) : project.stack.some((tech) => tech.toLowerCase().includes(active.toLowerCase())))), [projects, active]);
  return <><div className="filter-bar" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={active === filter ? "filter-chip active" : "filter-chip"} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}</div><div className="archive-list" aria-live="polite">{filtered.map((project) => <ProjectCard project={project} key={project.slug} compact/>)}{filtered.length === 0 && <p className="empty-state">No projects in this section yet.</p>}</div></>;
}
