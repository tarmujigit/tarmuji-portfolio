import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { EvidenceGallery } from '@/components/portfolio/evidence';
import { SafeImage } from '@/components/portfolio/safe-image';
import { CaseStudy } from '@/components/portfolio/case-study';
import { projects } from '@/data/portfolio';

afterEach(cleanup);

describe('Public media rendering', () => {
  it('hides empty and placeholder galleries', () => {
    const { container } = render(<EvidenceGallery assets={[
      { label: 'Empty', alt: 'Empty' },
      { label: 'Slot', alt: 'Slot', src: '/images/portfolio/mega-apps-landing.svg' },
    ]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('keeps supplied SVG media and hides failed gallery frames', () => {
    render(<EvidenceGallery assets={[{ label: 'Dashboard', alt: 'Dashboard', src: '/images/portfolio/kokorolens-dashboard.svg' }]} />);
    expect(screen.getByRole('heading', { name: 'Galeri Karya' })).toBeInTheDocument();
    fireEvent.error(screen.getByRole('img'));
    expect(screen.queryByRole('heading', { name: 'Galeri Karya' })).not.toBeInTheDocument();
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
  });

  it('removes the media frame when an image fails', () => {
    const { container } = render(<SafeImage src="/missing.jpg" alt="Media" label="Media" frameClassName="certificate-preview" fallback={null} />);
    fireEvent.error(screen.getByRole('img'));
    expect(container).toBeEmptyDOMElement();
  });

  it('keeps eight video titles with only seven available watch links', () => {
    const project = projects.find(project => project.id === 'video');
    if (!project) throw new Error('Video project required');
    render(<CaseStudy project={project} onClose={() => {}} />);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(8);
    expect(screen.getAllByRole('link', { name: /Tonton Karya:/ })).toHaveLength(7);
    expect(screen.queryByRole('button', { name: /Tonton Karya:/ })).not.toBeInTheDocument();
    expect(screen.getByRole('dialog').textContent).not.toMatch(/belum|menunggu|slot aset/i);
  });
});