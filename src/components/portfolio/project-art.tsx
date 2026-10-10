import type { Project } from '@/data/portfolio';
import { useState } from 'react';

export function ProjectArt({ project, useCardCover = false }: { project: Project; useCardCover?: boolean }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const cover = useCardCover ? project.cover ?? project.gallery[0] : project.gallery[0];
  const summary = <div className={`project-art project-summary-cover ${project.visual}-summary`}>
    <div className="cover-top"><span>{project.filter}</span><span>RINGKASAN PROYEK</span></div>
    <div className="cover-title">{project.id === 'linear' ? 'LINEAR REGRESSION' : project.id === 'svm' ? 'SUPPORT VECTOR MACHINE' : project.title}</div>
    <div className="cover-bottom"><span>{project.status}</span><span className="cover-number">{project.id === 'kokorolens' ? 'NLP' : project.id === 'video' ? 'SOLO' : project.id === 'svm' ? 'SVM' : '↗'}</span></div>
  </div>;
  if (!cover || failedSrc === cover.src) return summary;
  return <div className="project-art"><img src={cover.src} alt={cover.alt} className="verified-cover" loading="lazy" decoding="async" onError={() => setFailedSrc(cover.src)} /></div>;
}
