import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-card";
import { SectionLabel } from "@/components/site";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug);
  return project ? { title: project.title, description: project.description, openGraph: { title: project.title, description: project.description, images: ["/og-image.png"] } } : { title: "Project not found" };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8"); const content = matter(source).content;
  const sections = content.split(/(?=^## )/m).map((section) => { const [heading, ...body] = section.trim().split("\n"); return { heading: heading?.replace(/^##\s+/, ""), body: body.join(" ").trim() }; }).filter((section) => section.heading);
  const next = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];
  return <main className="page-container page-main"><div className="page-heading"><SectionLabel>Case file // {project.catalogId}</SectionLabel><p className="eyebrow">{project.category}</p><h1>{project.title}</h1></div><div className="detail-top"><div><p className="detail-lede">{project.description}</p><div className="detail-meta"><div><span>YEAR</span><b>{project.year}</b></div><div><span>ROLE</span><b>{project.role}</b></div><div><span>CATALOG ID</span><b>{project.catalogId}</b></div></div><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>{(project.liveUrl || project.githubUrl) && <div className="detail-actions">{project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>}{project.githubUrl && <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div>}</div><ProjectVisual project={project}/></div><div className="case-content">{sections.map((section) => <section className="case-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<Link href={`/projects/${next.slug}`} className="next-project"><span>Next project →<br/><b>{next.number} / {next.category}</b></span><strong>{next.title} ↗</strong></Link></div></main>;
}
