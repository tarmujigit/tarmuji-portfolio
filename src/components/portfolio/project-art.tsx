import type { Project } from '@/data/portfolio';

export function ProjectArt({ project }: { project: Project }) {
  const cover = project.gallery[0];
  if (cover) return <div className="project-art"><img className="verified-cover" src={cover.src} alt={cover.alt} loading="lazy" /></div>;
  return <div className={`project-art project-summary-cover ${project.visual}-summary`}>
    <div className="cover-top"><span>{project.filter}</span><span>RINGKASAN PROYEK</span></div>
    <div className="cover-title">{project.id === 'linear' ? 'LINEAR REGRESSION' : project.id === 'svm' ? 'SUPPORT VECTOR MACHINE' : project.title}</div>
    <div className="cover-bottom"><span>{project.status}</span><span className="cover-number">{project.id === 'kokorolens' ? 'NLP' : project.id === 'video' ? 'SOLO' : project.id === 'svm' ? 'SVM' : '↗'}</span></div>
  </div>;
}
