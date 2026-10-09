import { asset } from './assets';
export const profile = {
  name: 'Tarmuji', year: 2026,
  positioning: 'Digital Business & Creative Professional',
  headline: 'Dari data, ide, dan kreativitas menjadi pengalaman digital.',
  introduction: 'Pengalaman lintas digital marketing, data analytics, creative content, technology, dan manufaktur Jepang membentuk cara saya memahami masalah dan mengembangkan solusi.',
  portrait: asset('tarmuji-profile'), graduation: '',
  contact: { email: 'Tarmujimm18@gmail.com', linkedin: 'https://www.linkedin.com/in/tarmuji-mongel/' },
  stats: [
    { value: '900 JAM', label: 'Magang industri VINIX7', context: '28 Agu–28 Des 2025' },
    { value: '94,12%', label: 'Accuracy KokoroLens', context: 'Evaluasi dataset · 51 komentar' },
    { value: '5.600+', label: 'Followers Instagram Ayumi', context: 'Pada akhir periode pengelolaan' },
    { value: 'GOLD MEDAL', label: 'Mega Apps · IITE 2024', context: 'Kategori Ready Made Product' },
  ],
};
export const navigation = [
  { label: 'Beranda', id: 'home' }, { label: 'Tentang Saya', id: 'about' },
  { label: 'Pengalaman', id: 'experience' }, { label: 'Keahlian', id: 'skills' },
  { label: 'Proyek', id: 'projects' }, { label: 'Sertifikasi', id: 'certificates' },
  { label: 'Prestasi', id: 'achievements' }, { label: 'Pendidikan', id: 'education' },
  { label: 'Hubungi Saya', id: 'contact' },
];
export const experience = [
  { date: 'Mei–Agu 2026', role: 'Assistant Director', company: 'Politeknik Takumi', area: 'Pendidikan & kepemimpinan' },
  { date: 'Jan–Mei 2026', role: 'Roblox Developer & Scripter', company: 'Freelance / Proyek Pribadi', area: 'Pengembangan & scripting' },
  { date: 'Agu–Des 2025', role: 'Brand Design & Marketer', company: 'PT Vinix Seven Aurum', area: 'Brand & pemasaran' },
  { date: 'Feb 2024–Agu 2025', role: 'Administration & Digital Marketing', company: 'PT Ayumi Nihongo Gakkou', area: 'Administrasi & pemasaran digital' },
  { date: 'Jan 2021–Okt 2022', role: 'Operator Produksi', company: 'Daihatsu Motor Co., Ltd. · Shiga, Jepang', area: 'Manufaktur' },
  { date: 'Jul 2018–Jul 2019', role: 'Final Inspection', company: 'PT Enkei Marutoyo Painting Indonesia', area: 'Manufaktur' },
  { date: 'Mar 2017–Mar 2018', role: 'Staff Indirect Final Assembly', company: 'PT Yamaha Music Manufacturing Asia', area: 'Manufaktur' },
];
export const skills = [
  { name: 'Digital Marketing', items: ['SEO / SEM', 'Ads', 'Analytics', 'Social Media', 'Content'] },
  { name: 'Data & BI', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Tableau', 'Data Visualization', 'Business Intelligence'] },
  { name: 'Creative', items: ['Video Production', 'Video Editing', 'Brand Design', 'Content Creation'] },
  { name: 'Technology', items: ['Roblox Studio', 'Luau / Lua', 'Web / Application Thinking'] },
  { name: 'Professional', items: ['Problem Solving', 'Analytical Thinking', 'Project Management', 'Leadership', 'Cross-cultural Communication'] },
];
export type EvidenceAsset = { src?: string; alt: string; label: string };
export type VideoWork = { title: string; url?: string; thumbnail?: string };
// Populate src only with approved original media; empty slots are never work samples.
export const storyAssets: EvidenceAsset[] = [
  { label: 'Wisuda Politeknik Takumi · 1', alt: 'Tarmuji saat wisuda di Politeknik Takumi', src: asset('tarmuji-graduation-1') },
  { label: 'Wisuda Politeknik Takumi · 2', alt: 'Tarmuji saat wisuda di Politeknik Takumi', src: asset('tarmuji-graduation-2') },
];
export const projectEvidence: Record<string, EvidenceAsset[]> = {
  kokorolens: [
    { label: 'Dashboard analisis sentimen', alt: 'Screenshot asli dashboard KOKOROLENS', src: asset('kokorolens-dashboard') },
    { label: 'Evaluasi model', alt: 'Screenshot asli evaluasi model KOKOROLENS', src: asset('kokorolens-model-evaluation') },
  ],
  mega: [
    { label: 'Landing UI', alt: 'Screenshot asli landing UI MEGA APPS', src: asset('mega-apps-landing') },
    { label: 'Sistem Informasi Kependudukan', alt: 'Screenshot asli Sistem Informasi Kependudukan MEGA APPS', src: asset('mega-apps-population-system') },
  ],
  vinix: [{ label: 'Materi promosi', alt: 'Materi promosi VINIX7 yang melibatkan Tarmuji', src: asset('vinix7-promo') }, { label: 'Brand strategy', alt: 'Dokumen brand strategy VINIX7', src: asset('vinix7-brand-strategy') }],
  seo: [{ label: 'Peringkat Google · “gaji magang Jepang”', alt: 'Screenshot asli peringkat Google artikel karya Tarmuji', src: asset('seo-google-ranking') }, { label: 'Workflow konten', alt: 'Workflow pengelolaan konten SEO', src: asset('seo-workflow') }],
  roblox: [{ label: 'Mount Higanbana', alt: 'Screenshot asli Mount Higanbana', src: asset('roblox-mount-higanbana') }, { label: 'Roblox Studio scripting', alt: 'Screenshot asli scripting di Roblox Studio', src: asset('roblox-studio-scripting') }, { label: 'Environment', alt: 'Screenshot asli environment Roblox', src: asset('roblox-environment') }],
  ayumi: [{ label: 'Desain Instagram', alt: 'Desain Instagram Ayumi yang dibuat Tarmuji', src: asset('ayumi-instagram-grid') }],
};
export type Project = {
  id: string; title: string; category: string; filter: string; description: string; visual: string; status: string;
  overview: string; challenge?: string; role?: string; process?: string; tools?: string; output?: string; result?: string; team?: string;
  pipeline?: string[]; highlights?: string[]; metrics?: { label: string; value: string }[]; evidenceNote?: string;
  videos?: VideoWork[]; gallery: { src: string; alt: string }[];
};
export const projectCategories = ['Semua', 'Data & Machine Learning', 'Bisnis & Produk', 'Brand & Marketing', 'SEO & Konten', 'Game Development', 'Video & Creative'];
export const projects: Project[] = [
  {
    id: 'kokorolens', title: 'KOKOROLENS', category: 'Data Analytics · Machine Learning · NLP · Web Application', filter: 'Data & Machine Learning', visual: 'data',
    description: 'Sistem Analisis Sentimen Media Sosial Berbasis Web.', status: 'Tugas Akhir / Proyek Individual — 2026',
    overview: 'KOKOROLENS adalah sistem berbasis web untuk mengolah komentar media sosial menjadi analisis sentimen, visualisasi, insight, dan rekomendasi AI.',
    role: 'Peneliti & Pengembang. Proyek individual sebagai tugas akhir tahun 2026.',
    pipeline: ['Dataset', 'Preprocessing', 'TF-IDF', 'Multinomial Naive Bayes', 'Evaluasi', 'Visualisasi', 'Insight', 'AI Recommendation'],
    tools: 'TF-IDF, Multinomial Naive Bayes, NLP, machine learning, dan aplikasi web.',
    metrics: [{ label: 'Accuracy', value: '94,12%' }, { label: 'Precision', value: '94,38%' }, { label: 'Recall', value: '94,12%' }, { label: 'F1-Score', value: '93,97%' }],
    evidenceNote: 'Hasil evaluasi dataset pengujian: 51 komentar dan 105 fitur TF-IDF. Angka ini hanya menggambarkan evaluasi tersebut, bukan jaminan performa pada semua data atau kondisi penggunaan.',
    output: 'Sistem analisis sentimen berbasis web, visualisasi hasil, insight, dan rekomendasi AI.', gallery: [],
  },
  {
    id: 'mega', title: 'MEGA APPS', category: 'Business Analytics · Digital Business · Product Innovation', filter: 'Bisnis & Produk', visual: 'mega',
    description: 'Konsep produk digital untuk menghubungkan kebutuhan usaha dan komunitas.', status: 'Concept & UI Design · Product Design / Prototype',
    overview: 'Konsep aplikasi tim untuk administrasi usaha kecil dan komunitas di Mega Regency, Cikarang. Produk dirancang dalam bentuk konsep dan prototipe UI, bukan aplikasi produksi yang sepenuhnya fungsional.',
    role: 'Ketua Kelompok. Tanggung jawab: Business Analysis, Data Analysis, Research, UI/UX, dan Presentation.',
    challenge: 'Pengelolaan pesanan dan keuangan melalui WhatsApp, pelacakan pesan, pencatatan manual, serta kebutuhan analisis usaha dan layanan komunitas.',
    process: 'Riset kebutuhan dan analisis bisnis untuk merancang pengelolaan inventaris, penjualan, pemasaran, keuangan, data warga, pengaduan, dan komunitas. Pengujian terbatas pada warga Mega Regency.',
    output: 'Konsep produk dan prototipe UI. Tidak mengklaim implementasi produksi atau dampak bisnis terukur.',
    result: 'Gold Medal — 4th International Innovation Technology Expo (IITE) 2024, kategori Ready Made Product.',
    team: 'Tarmuji, Arif Prayoga, Fadiel Muhammad, Eria', gallery: [],
  },
  {
    id: 'vinix', title: 'VINIX7', category: 'Brand Design · Digital Marketing', filter: 'Brand & Marketing', visual: 'vinix',
    description: 'Riset pasar, identitas brand, dan konten untuk kebutuhan pemasaran digital.', status: '28 Agu–28 Des 2025 · 900 jam',
    overview: 'Pengalaman Brand Design & Marketer di PT Vinix Seven Aurum. Periode kegiatan 28 Agustus–28 Desember 2025, dengan durasi 900 jam.',
    role: 'Brand Design & Marketer. Terlibat dalam branding dan marketing plan, brand identity, market research, positioning, content creation, dan digital marketing.',
     highlights: ['Market Research', 'Brand Strategy', 'Brand Identity', 'Content Creation', 'Digital Marketing'],
    process: 'Terlibat dalam riset melalui kuesioner kepada 29 responden dari 3 provinsi dan 8 kota, untuk mendukung pemahaman pasar dan positioning.',
    output: 'Branding/marketing plan, identitas brand, riset pasar, positioning, konten, dan materi pemasaran digital.',
    evidenceNote: 'Kontribusi tim yang belum terbukti secara individual ditulis sebagai “terlibat dalam”; tidak mengklaim seluruh hasil tim sebagai karya pribadi.', gallery: [],
  },
  {
    id: 'seo', title: 'SEO & CONTENT MANAGEMENT', category: 'SEO · Content Writing · Content Management · WordPress · Account Management', filter: 'SEO & Konten', visual: 'seo',
    description: 'Dari perencanaan artikel hingga koordinasi akun dan publikasi WordPress.', status: 'Account Manager & Author',
    overview: 'Pengelolaan konten dan koordinasi akun untuk PT Nagomi Kaigo Gakkou, Politeknik Takumi, PT Minori, dan PT Akari Jawa Indonesia (AJI).',
    role: 'Account Manager & Author.', pipeline: ['Perencanaan', 'Penulisan', 'Quality Control', 'Revisi', 'Koordinasi internal & eksternal', 'Publikasi WordPress'],
    tools: 'SEO, content writing, content management, WordPress, dan account management.',
    result: 'Salah satu artikel yang saya tulis berhasil mencapai peringkat #1 halaman pertama Google untuk keyword ‘gaji magang Jepang’.',
    evidenceNote: 'Pencapaian ini merujuk pada satu artikel dan keyword tersebut; bukan klaim bahwa seluruh artikel atau akun memiliki peringkat yang sama.', gallery: [],
  },
  {
    id: 'roblox', title: 'ROBLOX DEVELOPMENT', category: 'Roblox Studio · Luau · Game Development', filter: 'Game Development', visual: 'roblox',
    description: 'Pengembangan sistem gameplay, antarmuka, audio, dan lingkungan permainan.', status: 'Freelance / Proyek Pribadi · Jan–Mei 2026',
    overview: 'Pengembangan dan scripting Roblox pada Januari–Mei 2026. Mount Higanbana adalah salah satu proyek dalam pengalaman ini, bukan satu-satunya proyek.',
    role: 'Roblox Developer & Scripter.', tools: 'Roblox Studio, Luau / Lua.',
    highlights: ['Gameplay / System Scripting', 'UI / UX', 'Music & Audio', 'Environment / Level Design', 'Event / VFX', 'Debugging / Optimization'],
    evidenceNote: 'Nama proyek lain tidak ditampilkan karena belum diberikan. Tidak mengklaim metrik pemain atau pendapatan.', gallery: [],
  },
  {
    id: 'video', title: 'VIDEO PRODUCTION & CREATIVE CONTENT', category: 'Video Production · Scriptwriting · Video Editing', filter: 'Video & Creative', visual: 'video',
    description: 'Delapan karya video, diproduksi secara solo dari konsep hingga hasil akhir.', status: 'End-to-End Solo Production · Tanpa bantuan produksi',
    overview: 'Seluruh proses produksi karya video dikerjakan sendiri tanpa bantuan, mulai dari pengembangan konsep hingga produksi akhir.',
    role: 'Concept Developer · Scriptwriter · Producer · Editor.',
    pipeline: ['Concept Development', 'Scriptwriting', 'Scene Planning', 'Voice Over Script', 'Production', 'Video Editing', 'Final Production'],
    videos: [
      { title: 'Video Lomba IITE — Mega Apps', url: 'https://youtu.be/c_s6QLaJPLo?si=Lcx3X1mriudrCEPl', thumbnail: asset('video-iite-mega-apps') },
      { title: 'Video Perkenalan Angkatan PKKMB Politeknik Takumi 2023', url: 'https://drive.google.com/file/d/1NDS5E6kb1TKl8_iVpD-m4KdFw-SI0TMG/view?usp=sharing', thumbnail: asset('video-pkkmb-2023') },
      { title: 'Video Klip Mars Politeknik Takumi', url: 'https://drive.google.com/file/d/1rXB04Pk5CjbHxLHwxwqBhcKh__djp4G1/view?usp=sharing', thumbnail: asset('video-mars-politeknik-takumi') },
      { title: 'Video Perkenalan BEM Politeknik Takumi 2024', url: 'https://drive.google.com/file/d/1T9gz6J59LetH9jnIXlqgmkIFEZGRVbEU/view?usp=sharing', thumbnail: asset('video-bem-2024') },
      { title: 'Video Promosi VINIX7', thumbnail: asset('video-vinix7-promo') },
      { title: 'Video Podcast — PT Ayumi Nihongo Gakkou', url: 'https://youtu.be/zgcHf77XT7M?si=6Q13FSTHFAeeHQ5R', thumbnail: asset('video-ayumi-podcast') },
      { title: 'Dokumentasi 送別会 (Soubetsukai) — JFT-Basic Batch 4 PT Ayumi Nihongo Gakkou', url: 'https://youtu.be/vLw0ugsxnqc?si=mjGkJ2JBT1KS9imR', thumbnail: asset('video-soubetsukai') },
      { title: 'Video Promosi PT Ayumi Nihongo Gakkou', url: 'https://drive.google.com/file/d/1ip7C8WDshF8tfoOV3RDkZ8-OqsufT_3w/view?usp=sharing', thumbnail: asset('video-ayumi-promo') },
    ], gallery: [],
  },
  {
    id: 'linear', title: 'MACHINE LEARNING — LINEAR REGRESSION', category: 'Machine Learning · Pandas · Eksplorasi Data', filter: 'Data & Machine Learning', visual: 'data',
    description: 'Eksplorasi dataset gaji Indonesia dan perbandingan rata-rata gaji antarwilayah.', status: 'Proyek Machine Learning Akademik',
    overview: 'Proyek akademik menggunakan Salary Indonesia.csv dengan 870 baris dan 3 kolom: REGION, SALARY, YEAR.',
    process: 'Eksplorasi menggunakan Pandas, pemeriksaan missing value, visualisasi rata-rata gaji per wilayah, dan penyaringan regional.',
    tools: 'Pandas, dataset Salary Indonesia.csv.', output: 'Eksplorasi dan visualisasi gaji per wilayah.',
    evidenceNote: 'Tidak menampilkan R² atau RMSE karena hasil evaluasi tersebut belum diberikan.', gallery: [],
  },
  {
    id: 'svm', title: 'MACHINE LEARNING — SVM', category: 'Machine Learning · SVM · Kualitas Air', filter: 'Data & Machine Learning', visual: 'data',
    description: 'Alur klasifikasi potabilitas air menggunakan Support Vector Machine.', status: 'Proyek Machine Learning Akademik',
    overview: 'Dataset kualitas air mencakup pH, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic Carbon, Trihalomethanes, Turbidity, dan Potability.',
    pipeline: ['Pandas / NumPy', 'Preprocessing', 'StandardScaler', 'train_test_split 80/20', 'SVC linear', 'accuracy_score'],
    process: 'Pembagian data menggunakan stratify dan random_state=2. Klasifikasi menggunakan SVC kernel linear; evaluasi melalui accuracy_score.',
    tools: 'Pandas, NumPy, Scikit-learn, StandardScaler, SVC.',
    evidenceNote: 'Nilai akurasi tidak ditampilkan karena belum diberikan.', gallery: [],
  },
  {
    id: 'ayumi', title: 'AYUMI NIHONGO GAKKOU', category: 'Administration · Digital Marketing · Social Media', filter: 'Brand & Marketing', visual: 'ayumi',
    description: 'Administrasi, pengelolaan media sosial, dan konten pemasaran digital.', status: 'Pengalaman Profesional · Feb 2024–Agu 2025',
    overview: 'Pengalaman administrasi dan digital marketing di PT Ayumi Nihongo Gakkou.', role: 'Administration & Digital Marketing.',
    process: 'Pengelolaan media sosial dan pembuatan konten pemasaran selama periode kerja.',
    result: 'Mendukung pertumbuhan akun Instagram dari sekitar 1.500 menjadi 5.600+ followers selama periode pengelolaan.',
    evidenceNote: 'Galeri hanya memuat desain yang dibuat Tarmuji, bukan unggahan karyawan setelah periode pengelolaan. Data Insights pribadi tidak dipublikasikan.', gallery: [],
  },
];
export const leadership = [
  ['2024', 'Ketua Divisi Kesejahteraan & Kewirausahaan', 'BEM Takumi'],
  ['2023–2024', 'Ketua Divisi Sosial Media', 'HIMA Bisnis Digital'],
  ['2023–2024', 'Ketua Unit Kegiatan Mahasiswa', 'Promotion & Design'],
  ['2024', 'Ketua Panitia', 'Bisnis Digital Competition Mobile Legend Season 1'],
  ['2025', 'Ketua Panitia', 'Bazar Takumi'],
  ['2023 & 2024', 'PIC Divisi Dokumentasi', 'PKKMB Politeknik Takumi'],
];
export const achievement = { title: 'Gold Medal', event: '4th International Innovation Technology Expo (IITE) 2024', category: 'Ready Made Product', product: 'Mega Apps', certificate: '1868 / DI / INDO / VII / 2024' };
export const certificateCategories = ['Semua', 'Bahasa', 'BNSP', 'Data & Python', 'Digital Marketing & SEO', 'Prestasi'];
const certificateImages: Record<string, string> = {
  'JLPT N4': asset('certificate-jlpt-n4'), 'BNSP Social Media Marketing': asset('certificate-bnsp-social-media'),
  'Pandas Data Analysis': asset('certificate-kaggle-pandas'), 'Gold Medal — IITE': asset('certificate-iite-2024'),
};
export const certificates = [
  ['JLPT N4', '2022', 'Bahasa', ''],
  ['BNSP Social Media Marketing', '2026', 'BNSP', 'BNSP'],
  ['Python for Data Science, AI & Development', '2025', 'Data & Python', ''],
  ['Pandas Data Analysis', '2024', 'Data & Python', 'Kaggle'],
  ['Intro to Data Analytics', '2025', 'Data & Python', ''],
  ['Digital Marketing', '2023', 'Digital Marketing & SEO', 'LEFA'],
  ['SEO Project', '2024', 'Digital Marketing & SEO', 'LEFA'],
  ['Advanced SEO Project', '2024', 'Digital Marketing & SEO', 'LEFA'],
  ['Gold Medal — IITE', '2024', 'Prestasi', 'IITE'],
].map(([name, year, category, issuer], id) => ({ id, name, year, category, issuer, image: certificateImages[name ?? ''] ?? '' }));
export const education = [
  { degree: 'D4 Bisnis Digital', school: 'Politeknik Takumi', date: '2022–2026', detail: 'IPK 3,52', focus: 'Digital Marketing, Business Analytics, Data Science, Market Research, dan Technology Innovation.' },
  { degree: 'Teknik Otomotif', school: 'SMKN 1 Ampelgading', date: '2013–2016', detail: '', focus: 'Pendidikan teknik otomotif.' },
];
export const languages = [['Indonesia', 'Native'], ['English', 'Intermediate'], ['Japanese', 'JLPT N4']];
