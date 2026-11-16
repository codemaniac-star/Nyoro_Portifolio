from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


OUT = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
PAPER = colors.HexColor("#F9F7F1")
INK = colors.HexColor("#181816")
MUTED = colors.HexColor("#63615A")
GREEN = colors.HexColor("#2B4C3F")
RULE = colors.HexColor("#E3DEC9")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Times-Roman", fontSize=31, leading=34, textColor=INK, alignment=TA_LEFT, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Courier", fontSize=8, leading=12, textColor=GREEN, tracking=1.1, spaceAfter=7))
styles.add(ParagraphStyle(name="BodyCopy", parent=styles["BodyText"], fontName="Helvetica", fontSize=9, leading=14, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Times-Roman", fontSize=16, leading=20, textColor=INK, spaceBefore=10, spaceAfter=6))
styles.add(ParagraphStyle(name="ProjectTitle", parent=styles["Normal"], fontName="Times-Roman", fontSize=12, leading=14, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Courier", fontSize=7.5, leading=10, textColor=GREEN, spaceAfter=2))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(.6)
    canvas.line(20 * mm, 17 * mm, A4[0] - 20 * mm, 17 * mm)
    canvas.setFont("Courier", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(20 * mm, 11 * mm, "NEWTON NYORO  /  SYSTEMS ENGINEERING  /  NAIROBI · LONDON")
    canvas.drawRightString(A4[0] - 20 * mm, 11 * mm, f"{doc.page:02d}")
    canvas.restoreState()


doc = SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=20 * mm, leftMargin=20 * mm, topMargin=19 * mm, bottomMargin=23 * mm, title="Newton Nyoro — Resume", author="Newton Nyoro")
story = [
    Paragraph("Newton Nyoro", styles["Name"]),
    Paragraph("SOFTWARE ENGINEER  /  DISTRIBUTED SYSTEMS  /  EDITORIAL SOFTWARE", styles["Role"]),
    Paragraph("Nairobi, Kenya · Available for select global engagements · newton@nyoro.studio", styles["BodyCopy"]),
    Spacer(1, 5 * mm),
    Paragraph("Profile", styles["Section"]),
    Paragraph("Senior software engineer specializing in distributed backend consensus, high-concurrency systems in Rust and TypeScript, and digital print-editorial engines. Focused on deterministic behavior, measurable performance, and reader-first interfaces.", styles["BodyCopy"]),
    Paragraph("Selected work", styles["Section"]),
]

work = [
    ("AetherDB — Low-latency consensus cache", "2026  /  LEAD ARCHITECT  /  RUST · RAFT · TYPESCRIPT", "Designed a memory-mapped distributed storage engine for real-time telemetry. Recorded results: 0.84ms p99 reads at 50,000 concurrent operations, with a five-peer Raft cluster."),
    ("Monolith — Headless publishing engine", "2025  /  PRINCIPAL ENGINEER  /  NEXT.JS · POSTGRESQL · EDGE", "Built a markdown-driven editorial CMS with typographic baseline grids and incremental edge compilation. Recorded results: 142ms cold builds, CLS 0.000, and 8,000 published essays."),
    ("LedgerKit — Local-first accounting runtime", "2025  /  CORE SYSTEMS DEVELOPER  /  TYPESCRIPT · WASM · SQLITE", "Developed an offline-capable double-entry ledger using WebAssembly SQLite and CRDT replication for peer-to-peer reconciliation of immutable journals."),
]
for title, meta, desc in work:
    story.extend([Paragraph(title, styles["ProjectTitle"]), Paragraph(meta, styles["Meta"]), Paragraph(desc, styles["BodyCopy"]), Spacer(1, 2 * mm)])

story.extend([
    Paragraph("Technical practice", styles["Section"]),
    Paragraph("Systems: Rust, distributed consensus, Raft, Tokio, high-concurrency runtimes<br/>Product engineering: TypeScript, Next.js, React, Node.js<br/>Data &amp; local-first: PostgreSQL, SQLite, WebAssembly, CRDTs<br/>Editorial: MDX, typography systems, accessible responsive interfaces", styles["BodyCopy"]),
    Spacer(1, 4 * mm),
])
callout = Table([[Paragraph("WORKING PRINCIPLES", styles["Meta"])], [Paragraph("Strict determinism · small complexity budgets · tactile quietude", styles["BodyCopy"])]], colWidths=[170 * mm])
callout.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F2EEE4")), ("BOX", (0, 0), (-1, -1), .6, RULE), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
story.append(callout)

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUT)
