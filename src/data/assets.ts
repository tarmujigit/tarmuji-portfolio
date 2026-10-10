// ============================================
// TARMUJI PORTFOLIO — ASSET REGISTRY
// Lokasi: public/images/portfolio/
// ============================================

export const replacedAssets: Record<
  string,
  'jpg' | 'png' | 'webp' | 'svg'
> = {
  // FOTO PROFIL DAN WISUDA
  'tarmuji-profile': 'svg',
  'tarmuji-graduation-1': 'svg',
  'tarmuji-graduation-2': 'svg',

  // SERTIFIKAT
  'certificate-bnsp-social-media': 'jpg',
  'certificate-jlpt-n4': 'jpg',
  'certificate-iite-2024': 'jpg',
  'certificate-kaggle-pandas': 'jpg',
  'certificate-komdigi-video-content-creator': 'svg' ,
  'certificate-komdigi-digital-mindset': 'svg' ,
  'certificate-public-speaking': 'jpg' ,
  'certificate-ukbi': 'jpg' ,
  'certificate-professional-master-of-ceremony': 'jpg' ,
  'certificate-komdigi-social-media-marketing': 'jpg' ,
  'certificate-komdigi-social-media-management': 'jpg' ,
  'certificate-komdigi-instagram-insights': 'jpg' ,
  'certificate-komdigi-digital-marketing-strategy': 'jpg' ,
  'certificate-komdigi-crm-umkm': 'jpg' ,
  'certificate-kaggle-intro-programming': 'jpg' ,
  'certificate-coursera-minnesota-manage-human-resources': 'jpg' ,
  'certificate-coursera-introduction-data-analytics': 'jpg' ,
  'certificate-coursera-illinois-marketing-digital-world': 'jpg' ,
  'certificate-coursera-illinois-digital-marketing-revolution': 'jpg' ,
  'certificate-coursera-illinois-digital-marketing-implementation': 'jpg' ,
  'certificate-coursera-illinois-digital-marketing-analytics': 'jpg' ,
  'certificate-coursera-ibm-python-data-science': 'jpg' ,
  'certificate-coursera-ibm-excel-data-analysis': 'jpg' ,
  'certificate-coursera-hr-management-fundamentals': 'jpg' ,
  'certificate-coursera-adobe-digital-marketing': 'jpg' ,
  'certificate-corporate-trainer': 'jpg' ,
  'certificate-administrasi-perkantoran': 'jpg' ,
  'certificate-minori-seo-project-2025': 'jpg' ,
  'certificate-toefl-prediction': 'jpg' ,
  
  
  
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

const BASE = '/images/portfolio/';

export function asset(name: string): string {
  const extension = replacedAssets[name] ?? 'svg';
  return `${BASE}${name}.${extension}`;
}

export function isPlaceholderAsset(src?: string): boolean {
  return Boolean(
    src &&
    src.startsWith(BASE) &&
    src.endsWith('.svg')
  );
}
