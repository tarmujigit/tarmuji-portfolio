import { useState, type ReactNode } from 'react';
import { isPlaceholderAsset } from '@/data/assets';

/** Only supplied media is public; missing images use the caller's fallback. */
export function SafeImage({ src, alt, fallback, className, frameClassName, onUnavailable }: { src?: string | undefined; alt: string; label: string; fallback: ReactNode; className?: string; frameClassName?: string; onUnavailable?: () => void }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed || isPlaceholderAsset(src)) return <>{fallback}</>;
  const image = <img className={className} src={src} alt={alt} loading="lazy" decoding="async" onError={() => { setFailed(true); onUnavailable?.(); }} />;
  return frameClassName ? <div className={frameClassName}>{image}</div> : image;
}
