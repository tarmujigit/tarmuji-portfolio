import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { SafeImage } from './safe-image';
import { isPlaceholderAsset } from '@/data/assets';
import { projectEvidence, type EvidenceAsset, type Project } from '@/data/portfolio';

export function EvidenceGallery({ assets, title = 'Galeri Karya' }: { assets: EvidenceAsset[]; title?: string }) {
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const visibleAssets = assets.filter(asset => asset.src && !isPlaceholderAsset(asset.src) && !failedSources.includes(asset.src));
  if (!visibleAssets.length) return null;
  return <section className="evidence-gallery" aria-label={title}>
    <div className="evidence-heading"><h3>{title}</h3></div>
    <div className="evidence-grid">{visibleAssets.map(asset => <figure className="evidence-frame has-evidence" key={asset.src}>
      <SafeImage src={asset.src} alt={asset.alt} label={asset.label} fallback={null} onUnavailable={() => { const src = asset.src; if (src) setFailedSources(previous => [...previous, src]); }} />
      <figcaption>{asset.label}</figcaption>
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