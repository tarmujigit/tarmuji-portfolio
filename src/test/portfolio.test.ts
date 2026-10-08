import { describe, expect, it } from 'vitest';
import { certificates, education, navigation, profile, projects, projectEvidence, storyAssets } from '@/data/portfolio';

describe('Approved portfolio evidence', () => {
  it('keeps the featured order and explicit navigation IDs', () => {
    expect(projects.slice(0, 8).map(p => p.id)).toEqual(['kokorolens', 'mega', 'vinix', 'seo', 'roblox', 'video', 'linear', 'svm']);
    expect(new Set(navigation.map(n => n.id)).size).toBe(9);
  });
  it('limits evaluation metrics to the supplied dataset', () => {
    const project = projects.find(p => p.id === 'kokorolens');
    expect(project?.evidenceNote).toContain('51 komentar');
    expect(project?.evidenceNote).toContain('105 fitur');
    expect(project?.metrics?.map(m => m.value)).toEqual(['94,12%', '94,38%', '94,12%', '93,97%']);
    expect(projects.find(p => p.id === 'svm')?.metrics).toBeUndefined();
  });
  it('keeps eight video works without inventing the unavailable link', () => {
    const videos = projects.find(p => p.id === 'video')?.videos;
    expect(videos).toHaveLength(8);
    expect(videos?.filter(v => v.url)).toHaveLength(7);
    expect(videos?.find(v => v.title === 'Video Promosi VINIX7')?.url).toBeUndefined();
  });
  it('uses approved education and contacts with curated certificates', () => {
    expect(education[1]?.date).toBe('2013–2016');
    expect(education[0]?.detail).toBe('IPK 3,52');
    expect(profile.contact.email).toBe('Tarmujimm18@gmail.com');
    expect(certificates.length).toBeLessThan(12);
  });
  it('keeps career stats contextual and original media slots honest', () => {
    expect(profile.stats.map(stat => stat.value)).toEqual(['900 JAM', '94,12%', '5.600+', 'GOLD MEDAL']);
    expect(profile.stats[1]?.context).toContain('51 komentar');
    expect(profile.stats[2]?.context).toBe('Pada akhir periode pengelolaan');
    expect(projectEvidence.kokorolens).toHaveLength(2);
    expect(projectEvidence.mega).toHaveLength(2);
    expect(Object.values(projectEvidence).flat().every(asset => !asset.src)).toBe(true);
    expect(storyAssets.every(asset => !asset.src)).toBe(true);
    expect(certificates.every(certificate => !certificate.image)).toBe(true);
    expect(projects.map(project => project.id)).toEqual(['kokorolens', 'mega', 'vinix', 'seo', 'roblox', 'video', 'linear', 'svm', 'ayumi']);
  });
});