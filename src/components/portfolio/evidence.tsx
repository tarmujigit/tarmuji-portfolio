import { ArrowRight } from 'lucide-react';
import { projectEvidence, type EvidenceAsset, type Project } from '@/data/portfolio';

export function EvidenceGallery({ assets, title = 'Galeri Karya' }: { assets: EvidenceAsset[]; title?: string }) {
  if (!assets.length) return null;
  return <section className="evidence-gallery" aria-label={title}>
    <div className="evidence-heading"><h3>{title}</h3>{assets.some(asset => !asset.src) && <span>Menunggu dokumentasi asli</span>}</div>
    <div className="evidence-grid">{assets.map((asset, i) => <figure className={`evidence-frame ${asset.src ? 'has-evidence' : ''}`} key={asset.label}>
      {asset.src ? <img src={asset.src} alt={asset.alt} loading="lazy" /> : <div className="evidence-slot"><span className="evidence-index">{String(i + 1).padStart(2, '0')} / DOKUMENTASI</span><span className="evidence-slot-name">{asset.label}</span><span className="evidence-pending">Belum dipublikasikan</span></div>}
      {asset.src && <figcaption>{asset.label}</figcaption>}
    </figure>)}</div>
  </section>;
}

export function ProjectGallery({ project }: { project: Project }) {
  const assets: EvidenceAsset[] = project.gallery.length ? project.gallery.map(image => ({ ...image, label: image.alt })) : projectEvidence[project.id] ?? [];
  return <EvidenceGallery assets={assets} />;
}

export function ProjectMetrics({ project }: { project: Project }) {
  if (!project.metrics) return null;
  return <section className="case-evaluation" aria-label="Evaluasi 51 komentar">
    <div className="evidence-heading"><h3>Evaluasi 51 komentar</h3><span>105 fitur TF-IDF</span></div>
    <div className="metrics-grid">{project.metrics.map(metric => <div className="metric-item" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
  </section>;
}

export function ProjectPipeline({ project }: { project: Project }) {
  if (!project.pipeline) return null;
  return <section className="case-pipeline"><h3>Alur Kerja</h3><ol>{project.pipeline.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span><strong>{step}</strong>{i < (project.pipeline?.length ?? 0) - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol></section>;
}