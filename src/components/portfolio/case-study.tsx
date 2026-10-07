import { ArrowUpRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/portfolio';

export function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  const sections = [
    ['Gambaran Proyek', project.overview], ['Tantangan', project.challenge],
    ['Peran & Kontribusi', project.role], ['Proses', project.process],
    ['Teknologi & Perangkat', project.tools], ['Hasil Karya', project.output], ['Pencapaian', project.result],
  ];
  return <Dialog open onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="case-dialog">
    <DialogTitle className="case-title">{project.title}</DialogTitle>
    <DialogDescription>{project.category}</DialogDescription>
    <div className="case-status">{project.status}</div>
    {project.team && <p className="text-xs text-muted-foreground">Tim: {project.team}</p>}
    {project.metrics && <section className="case-evaluation" aria-label="Hasil evaluasi dataset pengujian"><h3>Evaluasi Dataset Pengujian</h3><div className="metrics-grid">{project.metrics.map(metric => <div className="metric-item" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>}
    {project.evidenceNote && <p className="evidence-note">{project.evidenceNote}</p>}
    <div className="case-sections">{sections.filter(([, text]) => text).map(([title, text]) => <section className="case-section" key={title}><h3>{title}</h3><p>{text}</p></section>)}</div>
    {project.pipeline && <section className="case-pipeline"><h3>Alur Kerja</h3><ol>{project.pipeline.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span>{step}</li>)}</ol></section>}
    {project.highlights && <section className="case-highlights"><h3>Sorotan Pengembangan</h3><div className="skill-chips">{project.highlights.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></section>}
    {project.videos && <section className="video-library"><h3>Karya Video · Produksi Solo</h3>{project.videos.map((work, i) => <article className="video-work" key={work.title}><span className="video-index">{String(i + 1).padStart(2, '0')}</span><div><h4>{work.title}</h4>{work.url ? <Button variant="quiet" asChild><a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`Tonton Karya: ${work.title}`}><Play />Tonton Karya<ArrowUpRight /></a></Button> : <><Button variant="quiet" disabled aria-label={`Tonton Karya: ${work.title} — tautan belum tersedia`}><Play />Tonton Karya</Button><p>Tautan atau berkas video belum tersedia.</p></>}</div></article>)}</section>}
    {project.gallery.length > 0 && <section className="case-gallery"><h3>Galeri Karya</h3>{project.gallery.map(image => <img src={image.src} alt={image.alt} key={image.src} loading="lazy" />)}</section>}
  </DialogContent></Dialog>;
}
