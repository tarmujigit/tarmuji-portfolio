import { Award, Play, Search } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectArt({ project }: { project: Project }) {
  return <div className="project-art" aria-label={`Conceptual cover illustration for ${project.title}, not a project screenshot`} role="img">
    <div className={`project-art-inner ${project.visual}-art`} aria-hidden="true">
      {project.visual === 'mega' && <>{['Business', 'Community'].map((label) => <div className="phone-mockup" key={label}><div className="phone-notch" /><div className="phone-brand">MEGA APPS<span className="gradient-text">.</span></div><div className="phone-caption">BUSINESS & COMMUNITY</div><div className="phone-banner">One community.<br />More possibilities.</div><div className="phone-tiles">{[label, 'Analytics', 'Services', 'Finance'].map(x => <div key={x}>{x}</div>)}</div></div>)}</>}
      {project.visual === 'ayumi' && <><div className="poster"><small>AYUMI NIHONGO GAKKOU</small><strong>A new<br />perspective.</strong><span className="japanese">日本</span></div><div className="poster"><small>LANGUAGE · CULTURE</small><span className="japanese">学ぶ</span><strong>Connect.<br />Discover.</strong></div></>}
      {project.visual === 'vinix' && <div className="brand-board"><div className="brand-box"><strong>VINIX.</strong><span>VISUAL IDENTITY CONCEPT</span></div><div className="brand-swatches"><i /><i /><i /></div></div>}
      {project.visual === 'roblox' && <div className="world-grid">{Array.from({ length: 25 },(_,i) => <i key={i} />)}</div>}
      {project.visual === 'seo' && <div className="search-window"><div className="search-bar"><Search size={14} />Turning intent into discovery</div><div className="search-bars">{Array.from({ length: 9 },(_,i) => <i key={i} />)}</div></div>}
      {project.visual === 'video' && <div className="editor-window"><div className="video-preview"><Play /></div><div className="video-track"><i /><i /><i /><i /></div><div className="video-track"><i /><i /><i /></div></div>}
    </div>
    {project.id === 'mega' && <span className="project-award"><Award /> Gold Medal · IITE 2024</span>}
    <span className="concept-label">CONCEPTUAL COVER · NOT A PROJECT SCREENSHOT</span>
  </div>;
}
