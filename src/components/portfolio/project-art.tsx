import { Award, BarChart3, Code2, FileText, Film, Layers3, Palette } from 'lucide-react';
import type { Project } from '@/data/portfolio';

const icons = { data: BarChart3, mega: Layers3, vinix: Palette, seo: FileText, roblox: Code2, video: Film, ayumi: Palette };
export function ProjectArt({ project }: { project: Project }) {
  const Icon = icons[project.visual as keyof typeof icons] ?? FileText;
  const cover = project.gallery[0];
  if (cover) return <div className="project-art"><img className="verified-cover" src={cover.src} alt={cover.alt} loading="lazy" /></div>;
  return <div className={`project-art project-summary-cover ${project.visual}-summary`}>
    <div className="cover-top"><Icon aria-hidden="true" /><span>{project.id === 'kokorolens' ? 'TUGAS AKHIR · 2026' : project.filter}</span></div>
    <div className="cover-title">{project.id === 'kokorolens' ? 'KOKOROLENS' : project.title}</div>
    <div className="cover-bottom">{project.id === 'mega' ? <span className="cover-award"><Award aria-hidden="true" /> Gold Medal · IITE 2024</span> : <span>{project.status}</span>}<span className="cover-number">{project.id === 'kokorolens' ? 'NLP' : project.id === 'video' ? 'SOLO' : project.id === 'svm' ? 'SVM' : '↗'}</span></div>
  </div>;
}
