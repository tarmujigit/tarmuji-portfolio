import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Award, BarChart3, BriefcaseBusiness, ChevronDown, Code2, Database, Linkedin, Mail, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation, Wordmark } from '@/components/portfolio/navigation';
import { ProjectCard } from '@/components/portfolio/project-card';
import { Portrait } from '@/components/portfolio/portrait';
import { EvidenceGallery } from '@/components/portfolio/evidence';
import { SafeImage } from '@/components/portfolio/safe-image';
import { CaseStudy } from '@/components/portfolio/case-study';
import { achievement, certificates, certificateCategories, education, experience, languages, leadership, profile, projectCategories, projects, skills, storyAssets, type Project } from '@/data/portfolio';
import { asset } from '@/data/assets';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Tarmuji Portfolio' },
    { name: 'description', content: 'Portfolio Tarmuji: perjalanan manufaktur Jepang, digital marketing, data analytics, karya kreatif, dan pengembangan teknologi berbasis bukti.' },
    { property: 'og:title', content: 'Tarmuji — Digital Business & Creative Professional' },
    { property: 'og:description', content: 'Dari data, ide, dan kreativitas menjadi pengalaman digital. Jelajahi proyek, pengalaman, sertifikasi, dan prestasi Tarmuji.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Index,
});
function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2 className="section-title">{title}</h2></div>{description && <p className="section-intro">{description}</p>}</div>;
}
const skillIcons = [BarChart3, Database, Palette, Code2, BriefcaseBusiness];
function IntroScreen() {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) return;

    const audio = document.getElementById(
      "intro-audio"
    ) as HTMLAudioElement | null;

    if (audio) {
      audio.volume = 0.15;
      audio.loop = true;

      audio.play().catch(() => {});
    }

    const playMusic = () => {
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("click", playMusic);
    document.addEventListener("touchstart", playMusic);

    const start = Date.now();

    const timer = window.setInterval(() => {
      const value = Math.min(
        100,
        ((Date.now() - start) / 30000) * 100
      );

      setProgress(value);

      if (value >= 100) {
        window.clearInterval(timer);
        setEntered(true);
      }
    }, 50);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("click", playMusic);
      document.removeEventListener("touchstart", playMusic);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [entered]);

  if (entered) return null;

  return (
    <div className="intro-screen">
      <audio
        id="intro-audio"
        src="/audio/intro.mp3"
        preload="auto"
        loop
      />

      <div className="intro-panel">
        <div className="intro-tags">
          <span>● SYSTEM READY</span>
          <span>PORTFOLIO</span>
          <span>2026</span>
        </div>

        <div className="intro-content">
          <div className="intro-copy">
            <p className="intro-kicker">
              DIGITAL PORTFOLIO
            </p>

            <h1>
              Tarmuji, S.Tr.Bns
              <br />
              Portofolio
            </h1>

            <p>
              Building ideas into meaningful digital experiences.
            </p>

            <div className="intro-status">
              <span>LOADING PORTFOLIO</span>
              <span>{Math.floor(progress)}%</span>
            </div>

            <div
              className="intro-progress"
              role="progressbar"
              aria-valuenow={Math.floor(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="intro-actions">
              <button onClick={() => setEntered(true)}>
                SKIP INTRO ↗
              </button>
            </div>
          </div>

          <div className="intro-visual">
            <img
              className="intro-photo"
              src="/images/portfolio/intro-photo.jpg"
              alt="Foto Tarmuji"
            />

            <div className="intro-record-area">
              <div className="intro-vinyl">
                <div className="intro-vinyl-center">
                  <span>TM</span>
                </div>
              </div>

              <span className="intro-online">
                ● Every Step Will Lead Me Home
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [certificateFilter, setCertificateFilter] = useState('Semua');
  const [projectFilter, setProjectFilter] = useState('Semua');

  useEffect(() => {
    const audio = document.getElementById('main-audio') as HTMLAudioElement | null;
    if (!audio) return;

    audio.volume = 0.03;
    audio.loop = true;

    const tryPlay = () => {
      const introAudio = document.getElementById('intro-audio') as HTMLAudioElement | null;
      const introScreen = document.querySelector('.intro-screen');

      if (introScreen || (introAudio && !introAudio.paused)) {
        audio.pause();
        return;
      }

      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };

    tryPlay();
    const timer = window.setInterval(tryPlay, 500);
    document.addEventListener('click', tryPlay);
    document.addEventListener('touchstart', tryPlay);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
      audio.pause();
    };
  }, []);

  const filteredCertificates = certificates.filter(c => certificateFilter === 'Semua' || c.category === certificateFilter);
  const filteredProjects = projects.filter(p => projectFilter === 'Semua' || p.filter === projectFilter);

  return <>
    <audio id="main-audio" src="/audio/background.mp3" preload="auto" loop />
    <IntroScreen />
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-card focus:p-3">Langsung ke konten</a>
    <Navigation />
    <main id="main">
      <section id="home" className="hero-section"><div className="container-shell"><div className="hero-main">
        <div className="reveal"><div className="eyebrow">{profile.positioning}</div><h1 className="hero-name">{profile.name}<span className="gradient-text">.</span></h1>
          <h2 className="hero-title">Dari data, ide, dan kreativitas menjadi <span className="gradient-text">pengalaman digital.</span></h2>
          <p className="hero-copy">{profile.introduction}</p>
          <div className="hero-actions"><Button variant="portfolio" asChild><a href="#projects">Lihat Proyek <ArrowUpRight /></a></Button><Button variant="quiet" asChild><a href="#contact">Hubungi Saya <ArrowRight /></a></Button></div>
        </div>
        <Portrait />
      </div><div className="hero-bottom"><a href="#about" className="scroll-link"><ArrowDown size={13} /> KENALI PERJALANAN SAYA</a><span>BERANGKAT DARI PENGALAMAN. BERKARYA DENGAN TUJUAN.</span></div>
      <div className="stats-grid">{profile.stats.map(s => <div className="stat" key={s.value}><div className="stat-value">{s.value}</div><div className="stat-label">{s.label}</div><div className="stat-context">{s.context}</div></div>)}</div></div></section>
      <section id="about" className="section"><div className="container-shell"><div className="about-layout"><div><div className="eyebrow">01 / TENTANG SAYA</div><h2 className="section-title">Lintas disiplin.<br /><span className="gradient-text">Satu cara berpikir.</span></h2><div className="about-signature">Ketelitian bertemu kreativitas.</div></div><div className="about-copy"><p>Saya <strong>Tarmuji</strong>, seorang Digital Business & Creative Professional dengan perjalanan dari manufaktur menuju bisnis digital, pemasaran, data, karya kreatif, dan teknologi.</p><p>Pengalaman manufaktur di Indonesia dan <strong>Shiga, Jepang</strong> membentuk fondasi ketelitian, disiplin, kualitas, dan kerja sama. Melalui pendidikan Bisnis Digital, saya mengembangkan fondasi tersebut ke digital marketing, analisis data, dan produksi konten.</p><p>Kini, saya menghubungkan riset, ide, dan kreativitas dalam berbagai proyek: analisis sentimen, rancangan produk, konten digital, video, hingga pengembangan Roblox.</p></div></div><div className="journey" aria-label="Perjalanan profesional">{['MANUFAKTUR','JEPANG','BISNIS DIGITAL','DIGITAL MARKETING','DATA','CREATIVE','TECHNOLOGY'].map((step,i) => <span className="inline-flex items-center gap-3" key={step}>{i > 0 && <ArrowRight />}{step}</span>)}</div><EvidenceGallery title="Perjalanan pendidikan" assets={storyAssets.map(asset => { const src = profile.graduation || asset.src; return src ? { ...asset, src } : { alt: asset.alt, label: asset.label }; })} /></div></section>
      <section id="experience" className="section"><div className="container-shell"><SectionHeading eyebrow="02 / PENGALAMAN" title={<>Perjalanan yang dibentuk <span className="gradient-text">pengalaman nyata.</span></>} description="Dari ketelitian di lantai produksi hingga pengembangan karya dan strategi digital." />{experience.slice(0,4).map(e => <ExperienceRow key={e.company} item={e} />)}<details className="older-experience"><summary>Pengalaman sebelumnya · Manufaktur & Jepang <ChevronDown /></summary>{experience.slice(4).map(e => <ExperienceRow key={e.company} item={e} />)}</details></div></section>
      <section id="skills" className="section"><div className="container-shell"><SectionHeading eyebrow="03 / KEAHLIAN" title={<>Keahlian beragam. <span className="gradient-text">Pemikiran terhubung.</span></>} description="Bidang dan perangkat yang mendukung pekerjaan saya dalam strategi, analisis, kreativitas, dan pengembangan." /><div className="skill-grid">{skills.map((s,i) => { const Icon = skillIcons[i] ?? Code2; return <article className="skill-card" key={s.name}><Icon className="skill-icon" /><h3>{s.name}</h3><div className="skill-chips">{s.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></article>; })}</div></div></section>
      <section id="projects" className="section"><div className="container-shell"><SectionHeading eyebrow="04 / PROYEK PILIHAN" title={<>Dari pemikiran menjadi <span className="gradient-text">karya.</span></>} description="Karya akademik, profesional, dan pribadi, dengan peran dan batasan hasil yang jelas." /><div className="filter-row" aria-label="Filter proyek">{projectCategories.map(cat => <Button variant="filter" key={cat} aria-pressed={projectFilter === cat} onClick={() => setProjectFilter(cat)}>{cat}</Button>)}</div><p className="results-count" aria-live="polite">{filteredProjects.length} proyek · {projectFilter}</p><div className="project-grid">{filteredProjects.map(p => <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />)}</div></div></section>
      <section id="certificates" className="section"><div className="container-shell"><SectionHeading eyebrow="05 / SERTIFIKASI" title={<>Terus belajar. <span className="gradient-text">Terus berkembang.</span></>} description="Pilihan sertifikasi bahasa, data, pemasaran digital, dan kompetensi profesional yang relevan dengan pekerjaan saya." /><div className="filter-row" aria-label="Filter sertifikasi">{certificateCategories.map(cat => <Button variant="filter" key={cat} aria-pressed={certificateFilter === cat} onClick={() => setCertificateFilter(cat)}>{cat}</Button>)}</div><p className="results-count" aria-live="polite">{filteredCertificates.length} sertifikasi · {certificateFilter}</p><div className="certificate-grid">{filteredCertificates.map(c => <article key={c.id} className="certificate-card"><SafeImage frameClassName="certificate-preview" src={c.image} alt={`Sertifikat ${c.name}`} label={`Sertifikat ${c.name}`} fallback={null} /><div className="certificate-info"><h3>{c.name}</h3><p>{c.issuer ? `${c.issuer} · ` : ''}{c.year}<br />{c.category}</p></div></article>)}</div></div></section>
      <section id="achievements" className="section"><div className="container-shell"><div className="achievement" aria-labelledby="achievement-title"><div className="award-emblem"><img className="achievement-photo" src={asset('achievement-iite-2024')} alt="Tarmuji memegang medali Gold Medal IITE 2024" loading="lazy" /></div><div className="achievement-copy"><div className="eyebrow">06 / PRESTASI</div><h2 id="achievement-title">{achievement.title}{' '}<span className="gradient-text">— IITE 2024</span></h2><p>{achievement.event}</p><p>Kategori {achievement.category} · Produk {achievement.product}</p><p className="award-certificate">No. sertifikat: {achievement.certificate}</p></div><span className="award-year" aria-hidden="true">2024</span></div><SectionHeading eyebrow="KEPEMIMPINAN & ORGANISASI" title={<>Berkarya bersama. <span className="gradient-text">Memimpin dengan tujuan.</span></>} /><div className="leadership-grid">{leadership.map(([year, role, org, image]) => (<article className="leadership-item" key={`${org}-${role}`}><img className="leadership-image" src={image} alt="" loading="lazy" /><span>{year}</span><div><h3>{role}</h3><p>{org}</p></div></article>))}</div></div></section>
      <section id="education" className="section"><div className="container-shell education-layout"><div><SectionHeading eyebrow="07 / PENDIDIKAN" title="Fondasi akademik." />{education.map(e => (<article className="education-item" key={e.school}><div className="education-title-row"><img className="education-logo" src={e.logo} alt={`Logo ${e.school}`} loading="lazy" /><h3>{e.degree}</h3></div><div className="education-meta"><span>{e.school}</span><span>{e.date}</span></div>{e.detail && <p>{e.detail}</p>}<p>{e.focus}</p>{e.school === 'Politeknik Takumi' && <a className="education-story-link" href="#about">Perjalanan pendidikan <ArrowUpRight size={16} /></a>}</article>))}</div><div><SectionHeading eyebrow="KOMUNIKASI LINTAS BUDAYA" title="Bahasa" /><div className="language-list">{languages.map(([name, level]) => (<div className="language-row" key={name}><span className="language-name"><span className="language-flag">{name === 'Bahasa Indonesia' ? '🇮🇩' : name === 'Bahasa Inggris' ? '🇬🇧' : name === 'Bahasa Jepang' ? '🇯🇵' : '🌐'}</span><span>{name}</span></span><span className="language-level">{level}</span></div>))}</div></div></div></section>
      <section id="contact" className="contact-section"><div className="container-shell"><div className="eyebrow">08 / HUBUNGI SAYA</div><h2 className="contact-title">PUNYA IDE?<br /><span className="gradient-text">MARI TERHUBUNG.</span></h2><p className="contact-subtext">Untuk percakapan tentang peluang kerja, kolaborasi, karya kreatif, dan tantangan bisnis digital.</p><Button variant="portfolio" asChild><a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer">Kirim Email <ArrowUpRight /></a></Button><div className="contact-links"><a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer"><Mail />{profile.contact.email}<ArrowUpRight size={12} /></a><a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn<ArrowUpRight size={12} /></a><a href="https://wa.me/6287871022298" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-label="WhatsApp"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.97L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.78a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 1 1 8.39 4.65Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>WhatsApp<ArrowUpRight size={12} /></a><a href="https://www.instagram.com/itsventzy_?rpxt=MWN4MmllMWF1djV1ag==" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Instagram"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>Instagram<ArrowUpRight size={12} /></a><a href="https://www.tiktok.com/@ventzy__?_r=1&_t=ZS-9ASb7jLsdDI" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-label="TikTok"><path d="M19.6 7.2a6.8 6.8 0 0 1-4.1-1.4v8.1a6.2 6.2 0 1 1-5.4-6.1v3.4a2.9 2.9 0 1 0 2.1 2.8V2h3.3a6.7 6.7 0 0 0 4.1 4.1v1.1Z"/></svg>TikTok<ArrowUpRight size={12} /></a></div></div></section>
    </main>
    <footer className="container-shell footer"><a href="#home" aria-label="Beranda Tarmuji"><Wordmark /></a><p>© {profile.year} Tarmuji. Seluruh hak cipta dilindungi.</p><a href="#home" className="inline-flex items-center gap-2">Kembali ke atas <ArrowUp size={12} /></a></footer>
    <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>;
}
function ExperienceRow({ item }: { item: typeof experience[number] }) { return <article className="experience-row"><span className="experience-date">{item.date}</span><div><h3>{item.role}</h3><p>{item.company}</p></div><span className="category-tag">{item.area}</span></article>; }
