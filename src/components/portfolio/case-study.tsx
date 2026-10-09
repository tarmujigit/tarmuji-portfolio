import { ArrowUpRight, Play, X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SafeImage } from './safe-image';
import { ProjectArt } from './project-art';
import { ProjectGallery, ProjectMetrics, ProjectPipeline } from './evidence';
import type { Project } from '@/data/portfolio';

export function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  const sections = [
    ['Gambaran Proyek', project.overview], ['Tantangan', project.challenge],
    ['Peran & Kontribusi', project.role], ['Proses', project.process],
    ['Teknologi & Perangkat', project.tools], ['Hasil Karya', project.output], ['Pencapaian', project.result],
  ];
  return <Dialog open onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="case-dialog" showCloseButton={false} onCloseAutoFocus={event => { event.preventDefault(); document.querySelector<HTMLButtonElement>(`button[aria-label="Lihat studi kasus: ${project.title}"]`)?.focus(); }}>
    <div className="case-sticky-bar"><span>STUDI KASUS / {project.title}</span><DialogClose asChild><Button variant="ghost" size="icon" aria-label="Tutup studi kasus"><X /></Button></DialogClose></div>
    <div className="case-hero"><ProjectArt project={project} /></div>
    <div className="case-body">
    <DialogTitle className="case-title">{project.title}</DialogTitle>
    <DialogDescription>{project.category}</DialogDescription>
    <div className="case-status">{project.status}</div>
    {project.team && <p className="text-xs text-muted-foreground">Tim: {project.team}</p>}
    <ProjectMetrics project={project} />
    {project.evidenceNote && <p className="evidence-note">{project.evidenceNote}</p>}
    <div className="case-sections">{sections.filter(([, text]) => text).map(([title, text]) => <section className="case-section" key={title}><h3>{title}</h3><p>{text}</p></section>)}</div>
    <ProjectPipeline project={project} />
    {project.highlights && <section className="case-highlights"><h3>Sorotan Pengembangan</h3><div className="skill-chips">{project.highlights.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></section>}
    {project.videos && <section className="video-library"><h3>Karya Video · End-to-End Solo Production</h3><div className="video-grid">{project.videos.map((work, i) => <article className="video-work" key={work.title}>
      <div className="video-thumbnail"><SafeImage src={work.thumbnail} alt={`Thumbnail asli ${work.title}`} label={`Thumbnail ${work.title}`} fallback={<><span className="video-index">{String(i + 1).padStart(2, '0')}</span><span className="video-thumbnail-label">PRODUKSI SOLO</span><span className="video-preview-status">Thumbnail belum dipublikasikan</span></>} /></div>
      <div className="video-info"><h4>{work.title}</h4>{work.url ? <Button variant="quiet" asChild><a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`Tonton Karya: ${work.title}`}><Play />Tonton Karya<ArrowUpRight /></a></Button> : <><Button variant="quiet" disabled aria-label={`Tonton Karya: ${work.title} — tautan belum tersedia`}><Play />Tonton Karya</Button><p>Tautan atau berkas video belum tersedia.</p></>}</div></article>)}</div></section>}
    <ProjectGallery project={project} /></div>
  </DialogContent></Dialog>;
}
