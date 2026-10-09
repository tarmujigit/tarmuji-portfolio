import { useState, type ReactNode } from 'react';
import { isPlaceholderAsset } from '@/data/assets';

/** Renders an image; placeholder slots get honest alt text and a missing file falls back to `fallback`. */
export function SafeImage({ src, alt, label, fallback, className }: { src?: string | undefined; alt: string; label: string; fallback: ReactNode; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <>{fallback}</>;
  const placeholder = isPlaceholderAsset(src);
  return <img className={className} src={src} alt={placeholder ? `Slot aset belum diganti: ${label}` : alt} loading="lazy" decoding="async" data-placeholder={placeholder || undefined} onError={() => setFailed(true)} />;
}
