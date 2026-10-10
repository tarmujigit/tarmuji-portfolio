import type { Project } from '@/data/portfolio';
import { SafeImage } from './safe-image';

export function ProjectArt({ project, useCardCover = false }: { project: Project; useCardCover?: boolean }) {
  const cover = useCardCover ? project.cover ?? project.gallery[0] : project.gallery[0];
  const summary = <div className={`project-art project-summary-cover ${project.visual}-summary`}>
    <div className="cover-top"><span>{project.filter}</span><span>RINGKASAN PROYEK</span></div>
    <div className="cover-title">{project.id === 'linear' ? 'LINEAR REGRESSION' : project.id === 'svm' ? 'SUPPORT VECTOR MACHINE' : project.title}</div>
    <div className="cover-bottom"><span>{project.status}</span><span className="cover-number">{project.id === 'kokorolens' ? 'NLP' : project.id === 'video' ? 'SOLO' : project.id === 'svm' ? 'SVM' : '↗'}</span></div>
  </div>;
  if (!cover) return summary;
  return <SafeImage src={cover.src} alt={cover.alt} label={project.title} className="project-art w-full object-cover" fallback={summary} />;
}
