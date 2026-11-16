import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";
import { SectionLabel } from "@/components/site";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Project Archive", description: "Browse Newton Nyoro’s engineering project archive by discipline and technology." };
export default function ProjectsPage() { return <main className="page-container page-main"><div className="page-heading"><SectionLabel>Archival catalogue // all works</SectionLabel><h1>Project Archive</h1><p>Selected systems, publishing tools, and quiet interfaces. Filter the catalogue by discipline or stack.</p></div><ProjectFilter projects={projects}/></main>; }
