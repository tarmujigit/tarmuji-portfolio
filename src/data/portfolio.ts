export const profile = {
  name: 'Tarmuji', year: 2026,
  contact: { email: '', linkedin: '', instagram: '', whatsapp: '' },
  stats: [
    { value: '4+', label: 'Years of experience' },
    { value: '900K+', label: 'Monthly impressions', note: 'As stated in CV; editable claim.' },
    { value: '20+', label: 'Certifications', note: 'Draft count; editable.' },
    { value: 'Gold Medal', label: 'IITE 2024' },
  ],
};
export const navigation = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certificates', 'Contact'];
export const experience = [
  { date: '2026', role: 'Assistant Director', company: 'Politeknik Takumi', area: 'Education & leadership' },
  { date: '2026', role: 'Roblox Developer & Scripter', company: 'Freelance / Personal Project', area: 'Development & scripting' },
  { date: '2025', role: 'Brand Design & Marketer', company: 'PT Vinix Seven Aurum', area: 'Brand & marketing' },
  { date: '2024–2025', role: 'Administration & Digital Marketing', company: 'PT Ayumi Nihongo Gakkou', area: 'Operations & digital marketing' },
  { date: '2021–2022', role: 'Operator Produksi', company: 'Daihatsu Motor Co., Ltd. · Shiga, Japan', area: 'Manufacturing' },
  { date: '2018–2019', role: 'Final Inspection', company: 'PT Enkei Marutoyo Painting Indonesia', area: 'Manufacturing' },
  { date: '2017–2018', role: 'Staff Indirect Final Assembly', company: 'PT Yamaha Music Manufacturing Asia', area: 'Manufacturing' },
];
export const skills = [
  { name: 'Digital Marketing', items: ['SEO / SEM', 'Social Media Marketing', 'Digital Advertising', 'Analytics', 'Content Strategy'] },
  { name: 'Data & BI', items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'SQL', 'Tableau', 'Data Visualization', 'Business Intelligence'] },
  { name: 'Creative', items: ['Brand Design', 'Social Media Content', 'Video Editing'] },
  { name: 'Technology', items: ['Roblox Studio', 'Lua', 'Gameplay Systems', 'UI / UX'] },
  { name: 'Professional', items: ['Problem Solving', 'Analytical Thinking', 'Project Management', 'Leadership', 'Cross-cultural Communication'] },
];
export type Project = {
  id: string; title: string; category: string; description: string; visual: string; status: string;
  overview: string; challenge?: string; role?: string; process?: string; tools?: string; output?: string; result?: string; team?: string; gallery: { src: string; alt: string }[];
};
export const projects: Project[] = [
  { id: 'mega', title: 'MEGA APPS', category: 'Business Analytics · Digital Business · Product Innovation', description: 'Connecting small businesses and communities through one integrated digital concept.', visual: 'mega', status: 'Concept / UI design prototype',
    overview: 'A team application design/prototype for integrated small-business and community administration in Mega Regency, Cikarang, a community of approximately 15,000 households, including small-business owners.',
    challenge: 'Orders and finances managed through WhatsApp, difficult message tracking and market expansion, limited business analytics, manual data entry, and limited access to government and community services.',
    process: 'Solution areas: business management (inventory, sales, marketing, finance and analytics); digital population management and community complaints; business communities, forums and events. Testing was limited to Mega Regency residents.',
    output: 'Application concept and UI design prototype; not a fully functional production application. The goal is to streamline population-data updates and improve small-business sales, income and expense management.',
    result: 'Gold Medal — International Technology Expo (IITE) 2024. No production deployment or measured business impact is claimed.', team: 'Tarmuji, Arif Prayoga, Fadiel Muhammad, Eria', gallery: [] },
  { id: 'ayumi', title: 'AYUMI NIHONGO GAKKOU', category: 'Digital Marketing & Social Media', description: 'Data-informed campaigns, creative content, and more connected digital operations.', visual: 'ayumi', status: 'Professional experience', overview: 'Administration and digital campaign management for PT Ayumi Nihongo Gakkou.', role: 'Administration & Digital Marketing, 2024–2025.', process: 'Data-based reporting, KPI monitoring, content and campaign work.', output: 'Digital campaigns, content and performance reporting.', result: 'CV-reported claims: >900K monthly impressions and up to 30% efficiency improvement. These figures remain editable and are not independently verified here.', gallery: [] },
  { id: 'vinix', title: 'PT VINIX SEVEN AURUM', category: 'Brand Design & Marketing', description: 'Visual concepts and purposeful content for a consistent brand presence.', visual: 'vinix', status: 'Professional experience', overview: 'Brand design and marketing work for PT Vinix Seven Aurum.', role: 'Brand Design & Marketer, 2025.', process: 'Brand visual concepts, content calendar development and performance analysis.', output: 'Social media content, promotional banners and digital materials.', gallery: [] },
  { id: 'roblox', title: 'ROBLOX GAME DEVELOPMENT', category: 'Development & Scripting', description: 'Building interactive worlds, gameplay systems, and player-first experiences.', visual: 'roblox', status: 'Freelance / Personal Project', overview: 'Roblox development and scripting across gameplay and environment experiences.', role: 'Roblox Developer & Scripter, 2026.', process: 'Maps, gameplay, teleport and quest systems, UI, inventory, debugging, optimization, environment/UX and collaboration.', tools: 'Roblox Studio, Lua.', gallery: [] },
  { id: 'seo', title: 'SEO / SEM & CONTENT STRATEGY', category: 'Search & Content', description: 'Connecting audience intent with useful content and search visibility.', visual: 'seo', status: 'Selected practice', overview: 'Search and content strategy work including keyword research, SEO articles, link building and search performance.', process: 'Keyword research, SEO article creation, link building and search-performance monitoring.', gallery: [] },
  { id: 'video', title: 'VIDEO EDITING & CREATIVE CONTENT', category: 'Video & Creative', description: 'Stories shaped through motion, rhythm, and thoughtful visual editing.', visual: 'video', status: 'Selected creative work', overview: 'Creative content across promotional videos, activities, international competition, podcasts and BEM-related work.', output: 'Promotional and activity videos, international competition content, podcast and BEM-related creative work.', gallery: [] },
];
export const leadership = [
  ['2024', 'Ketua Divisi Kesejahteraan & Kewirausahaan', 'BEM Takumi'],
  ['2023–2024', 'Ketua Divisi Sosial Media', 'HIMA Bisnis Digital'],
  ['2023–2024', 'Ketua Unit Kegiatan Mahasiswa', 'Promotion & Design'],
  ['2024', 'Ketua Panitia', 'Bisnis Digital Competition Mobile Legend Season 1'],
  ['2025', 'Ketua Panitia', 'Bazar Takumi'],
  ['2023 & 2024', 'PIC Divisi Dokumentasi', 'PKKMB Politeknik Takumi'],
];
export const certificateCategories = ['All', 'Digital Marketing', 'Data', 'Language', 'Professional', 'BNSP'];
export const certificates = [
  ['JLPT N4', '2022', 'Language', ''],
  ['Intro To Programming', '2023', 'Data', 'Kaggle'],
  ['Strategic Marketing & Communication', '2023', 'Digital Marketing', 'LEFA'],
  ['Digital Marketing', '2023', 'Digital Marketing', 'LEFA'],
  ['SEO Project', '2024', 'Digital Marketing', 'LEFA'],
  ['Advanced SEO Project', '2024', 'Digital Marketing', 'LEFA'],
  ['Pandas Data Analysis', '2024', 'Data', 'Kaggle'],
  ['TOEFL Prediction Score 497', '2025', 'Language', ''],
  ['Administrasi dan Tata Kelola Perkantoran', '2025', 'Professional', ''],
  ['Public Speaking / CPS', '2025', 'Professional', ''],
  ['Corporate Trainer / C.CTr', '2025', 'Professional', ''],
  ['Professional Master of Ceremony / CPMC', '2025', 'Professional', ''],
  ['Intro to Data Analytics', '2025', 'Data', ''],
  ['Excel for Data Analysis', '2025', 'Data', ''],
  ['Python for Data Science, AI & Development', '2025', 'Data', ''],
  ['HR Management Fundamentals', '2025', 'Professional', ''],
  ['Digital Marketing', '2025', 'Digital Marketing', ''],
  ['Marketing in a Digital World', '2025', 'Digital Marketing', ''],
  ['Preparing to Manage Human Resources', '2025', 'Professional', ''],
  ['Digital Marketing Revolution', '2025', 'Digital Marketing', ''],
  ['UKBI Score Level Madya 548', '2025', 'Language', ''],
  ['BNSP Social Media Marketing', '2026', 'BNSP', 'BNSP'],
].map(([name, year, category, issuer], i) => ({ id: i, name, year, category, issuer }));
export const education = [
  { degree: 'D4 Bisnis Digital', school: 'Politeknik Takumi', date: '2022–2026', detail: 'IPK 3.52', focus: 'Digital Marketing, Business Analytics, Data Science, Market Research, Technology Innovation.' },
  { degree: 'Teknik Otomotif', school: 'SMKN 1 Ampelgading', date: '2013–2016', detail: '', focus: 'Specialization in automotive machinery.' },
];
export const languages = [['Indonesian', 'Native'], ['English', 'Intermediate'], ['Japanese', 'JLPT N4']];
