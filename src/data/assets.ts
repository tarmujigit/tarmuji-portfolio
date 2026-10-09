// Real files uploaded to public/images/portfolio/
// Map each asset base name to its actual file extension.
export const replacedAssets: Record<string, 'jpg' | 'png' | 'webp'> = {
  'tarmuji-profile': 'jpg',
  'tarmuji-graduation-1': 'jpg',
  'tarmuji-graduation-2': 'jpg',
};

const BASE = '/images/portfolio/';

export function asset(name: string): string {
  return `${BASE}${name}.${replacedAssets[name] ?? 'svg'}`;
}

export function isPlaceholderAsset(src?: string): boolean {
  return !!src && src.startsWith(BASE) && src.endsWith('.svg');
}
