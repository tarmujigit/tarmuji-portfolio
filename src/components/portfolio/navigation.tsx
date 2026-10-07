import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/data/portfolio';

export function Wordmark() { return <span className="wordmark"><span className="brand-symbol">✳</span>TARMUJI<span className="gradient-text">.</span></span>; }
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 25);
    update(); window.addEventListener('scroll', update, { passive: true });
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-15% 0px -65% 0px' });
    navigation.forEach(item => { const el = document.getElementById(item.id); if (el) observer.observe(el); });
    return () => { window.removeEventListener('scroll', update); observer.disconnect(); };
  }, []);
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <header className={`portfolio-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}><div className="nav-inner">
    <a href="#home" aria-label="Beranda Tarmuji" onClick={() => setOpen(false)}><Wordmark /></a>
    <nav className="desktop-links" aria-label="Navigasi utama">{navigation.map(item => <a href={`#${item.id}`} key={item.id} className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
    <Button asChild variant="portfolio" className="nav-cta"><a href="#contact" onClick={() => setOpen(false)}>Hubungi Saya <ArrowUpRight /></a></Button>
    <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-links" id="mobile-navigation" aria-label="Navigasi seluler">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>}</header>;
}
