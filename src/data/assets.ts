// Real files uploaded to public/images/portfolio/ are registered here (base name -> extension).
// Anything not listed resolves to its labeled SVG placeholder, which is never presented as original work.
export const replacedAssets: Record<string, 'jpg' | 'png' | 'webp'> = {};

const BASE = '/images/portfolio/';

export function asset(name: string): string {
  return `${BASE}${name}.${replacedAssets[name] ?? 'svg'}`;
}

export function isPlaceholderAsset(src?: string): boolean {
  return !!src && src.startsWith(BASE) && src.endsWith('.svg');
}
