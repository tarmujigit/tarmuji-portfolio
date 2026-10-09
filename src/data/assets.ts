// ============================================
// TARMUJI PORTFOLIO — ASSET REGISTRY
// Lokasi: public/images/portfolio/
// ============================================

// Daftarkan ekstensi sesuai file yang benar-benar tersedia.
// Nama file harus sama persis, termasuk huruf besar/kecil.

export const replacedAssets: Record<
  string,
  'jpg' | 'png' | 'webp' | 'svg'
> = {
  'tarmuji-profile': 'svg',
  'tarmuji-graduation-1': 'svg',
  'tarmuji-graduation-2': 'svg',

  'certificate-bnsp-social-media': 'jpg',
  'certificate-jlpt-n4': 'jpg',

  'mega-apps-landing': 'jpg',
  'mega-apps-population-system': 'jpg',
};
export const replacedAssets: Record<
  string,
  'jpg' | 'png' | 'webp' | 'svg'
> = {
  // FOTO PROFIL DAN WISUDA
  'tarmuji-profile': 'svg',
  'tarmuji-graduation-1': 'svg',
  'tarmuji-graduation-2': 'svg',

  // SERTIFIKAT ASLI
  'certificate-bnsp-social-media': 'jpg',
  'certificate-jlpt-n4': 'jpg',

  // KOKOROLENS
  'kokorolens-dashboard': 'svg',
  'kokorolens-model-evaluation': 'svg',

  // MEGA APPS
  'mega-apps-landing': 'jpg',
  'mega-apps-population-system': 'jpg',

  // VINIX7
  'vinix7-promo': 'svg',
  'vinix7-brand-strategy': 'svg',

  // SEO DAN CONTENT MANAGEMENT
  'seo-google-ranking': 'svg',
  'seo-workflow': 'svg',

  // ROBLOX DEVELOPMENT
  'roblox-mount-higanbana': 'svg',
  'roblox-studio-scripting': 'svg',
  'roblox-environment': 'svg',

  // AYUMI NIHONGO GAKKOU
  'ayumi-instagram-grid': 'svg',

  // SERTIFIKAT TAMBAHAN
  'certificate-iite-2024': 'svg',
  'certificate-kaggle-pandas': 'svg',

  // VIDEO PORTFOLIO
  'video-iite-mega-apps': 'svg',
  'video-pkkmb-2023': 'svg',
  'video-mars-politeknik-takumi': 'svg',
  'video-bem-2024': 'svg',
  'video-vinix7-promo': 'svg',
  'video-ayumi-podcast': 'svg',
  'video-soubetsukai': 'svg',
  'video-ayumi-promo': 'svg',
};

// Base URL untuk semua gambar portfolio.
const BASE = '/images/portfolio/';

/**
 * Menghasilkan URL gambar berdasarkan nama aset.
 *
 * Contoh:
 * asset('tarmuji-profile')
 * -> /images/portfolio/tarmuji-profile.svg
 */
export function asset(name: string): string {
  const extension = replacedAssets[name] ?? 'svg';

  return `${BASE}${name}.${extension}`;
}

/**
 * Menandai file SVG sebagai placeholder.
 *
 * Catatan:
 * Fungsi ini mengasumsikan SVG adalah placeholder.
 * Jika suatu saat ada SVG asli, logikanya perlu
 * disesuaikan agar SVG asli tidak dianggap placeholder.
 */
export function isPlaceholderAsset(src?: string): boolean {
  return Boolean(
    src &&
    src.startsWith(BASE) &&
    src.endsWith('.svg')
  );
}
