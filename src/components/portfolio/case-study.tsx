import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/data/portfolio';

export function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  const sections = [
    ['Overview', project.overview], ['Challenge', project.challenge],
    [project.id === 'mega' ? 'My Role / My Contribution' : 'My Role', project.role],
    ['Process', project.process], ['Tools', project.tools], ['Output', project.output], ['Result', project.result],
  ];
  return <Dialog open onOpenChange={open => { if (!open) onClose(); }}><DialogContent className="case-dialog">
    <DialogTitle className="case-title">{project.title}</DialogTitle>
    <DialogDescription>{project.category}</DialogDescription>
    <div className="case-status">{project.status}</div>
    {project.team && <p className="text-xs text-muted-foreground">Team: {project.team}</p>}
    <div className="case-sections">{sections.map(([title, text]) => <section className="case-section" key={title}><h3>{title}</h3><p className={!text ? 'editable-placeholder' : undefined}>{text || `Editable placeholder — ${title === 'My Role / My Contribution' ? "Tarmuji’s exact contribution is awaiting confirmation." : `${title} details awaiting confirmation.`}`}</p></section>)}</div>
    <section className="case-gallery"><h3>Gallery</h3>{project.gallery.length ? project.gallery.map(image => <img src={image.src} alt={image.alt} key={image.src} loading="lazy" />) : <p className="editable-placeholder">Editable placeholder — approved project images will be added here.</p>}</section>
  </DialogContent></Dialog>;
}
