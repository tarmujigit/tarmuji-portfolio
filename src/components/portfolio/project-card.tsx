import { ArrowUpRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectArt } from './project-art';
import { ProjectGallery, ProjectMetrics, ProjectPipeline } from './evidence';
import type { Project } from '@/data/portfolio';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const flagship = project.id === 'kokorolens';
  const featured = project.id === 'mega';
  return <article className={`project-card ${flagship ? 'flagship-project' : ''} ${featured ? 'achievement-project' : ''}`}>
    <div className="project-cover-wrap"><ProjectArt project={project} useCardCover />{flagship && <span className="project-feature-label">PROYEK UTAMA / TUGAS AKHIR</span>}{featured && <span className="project-feature-label award-label"><Award /> GOLD MEDAL · IITE 2024</span>}</div>
    <div className="project-info"><div className="project-category">{project.category}</div><div className="project-name-row"><h3>{project.title}</h3><ArrowUpRight aria-hidden="true" /></div><p>{project.description}</p><div className="project-card-status">{project.status}</div>
    {featured && <p className="featured-role">Ketua Kelompok · Business Analysis, Data Analysis, Research, UI/UX, Presentation</p>}
    {flagship && <><ProjectMetrics project={project} /><p className="card-evidence-note">Hasil dataset pengujian, bukan performa universal model.</p><ProjectPipeline project={project} /></>}
    {project.highlights && <div className="project-highlights">{project.highlights.slice(0, 6).map(item => <span key={item}>{item}</span>)}</div>}
    {project.id === 'seo' && <p className="card-result">#1 Google · satu artikel untuk “gaji magang Jepang”</p>}
    {project.id === 'ayumi' && <p className="card-result">{project.result}</p>}
    <Button variant="quiet" className="case-link" onClick={() => onOpen(project)} aria-label={`Lihat studi kasus: ${project.title}`}>Lihat Studi Kasus <ArrowUpRight /></Button>
    </div>
  </article>;
}