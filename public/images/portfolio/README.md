# Aset portfolio

Folder ini berisi **placeholder SVG** (bertuliskan "SLOT ASET · BELUM DIGANTI"). Placeholder ini **bukan karya asli** dan ditampilkan sebagai slot kosong yang rapi sampai file asli diunggah.

## Cara mengganti lewat GitHub
1. Buka folder `public/images/portfolio/` di GitHub → **Add file → Upload files**.
2. Unggah file asli dengan nama target persis (mis. `kokorolens-dashboard.jpg`). PNG juga boleh (`kokorolens-dashboard.png`).
3. Buka `src/data/assets.ts` dan tambahkan nama dasar file beserta ekstensinya ke objek `replacedAssets`, misalnya:
   ```ts
   export const replacedAssets: Record<string, 'jpg' | 'png' | 'webp'> = {
     'kokorolens-dashboard': 'jpg',
   };
   ```
4. Commit. Gambar asli langsung dipakai; jika file tidak ditemukan, situs otomatis menampilkan slot aman (bukan broken image).
5. Opsional: hapus file `.svg` placeholder yang sudah tidak dipakai.

Hanya unggah foto/screenshot/sertifikat asli milik Tarmuji. Jangan pakai foto stok.

## Peta file
| Nama target (asli) | Placeholder sementara | Dipakai untuk |
|---|---|---|
| `tarmuji-profile.jpg` | `tarmuji-profile.svg` | Foto profil |
| `tarmuji-graduation-1.jpg` | `tarmuji-graduation-1.svg` | Foto wisuda 1 |
| `tarmuji-graduation-2.jpg` | `tarmuji-graduation-2.svg` | Foto wisuda 2 |
| `kokorolens-dashboard.jpg` | `kokorolens-dashboard.svg` | KokoroLens · Dashboard |
| `kokorolens-model-evaluation.jpg` | `kokorolens-model-evaluation.svg` | KokoroLens · Evaluasi model |
| `mega-apps-landing.jpg` | `mega-apps-landing.svg` | Mega Apps · Landing UI |
| `mega-apps-population-system.jpg` | `mega-apps-population-system.svg` | Mega Apps · Sistem Kependudukan |
| `vinix7-promo.jpg` | `vinix7-promo.svg` | VINIX7 · Promo |
| `vinix7-brand-strategy.jpg` | `vinix7-brand-strategy.svg` | VINIX7 · Brand strategy |
| `seo-google-ranking.jpg` | `seo-google-ranking.svg` | SEO · Peringkat Google |
| `seo-workflow.jpg` | `seo-workflow.svg` | SEO · Workflow |
| `roblox-mount-higanbana.jpg` | `roblox-mount-higanbana.svg` | Roblox · Mount Higanbana |
| `roblox-studio-scripting.jpg` | `roblox-studio-scripting.svg` | Roblox · Studio scripting |
| `roblox-environment.jpg` | `roblox-environment.svg` | Roblox · Environment |
| `ayumi-instagram-grid.jpg` | `ayumi-instagram-grid.svg` | Ayumi · Desain Instagram |
| `certificate-jlpt-n4.jpg` | `certificate-jlpt-n4.svg` | Sertifikat JLPT N4 |
| `certificate-bnsp-social-media.jpg` | `certificate-bnsp-social-media.svg` | Sertifikat BNSP Social Media |
| `certificate-kaggle-pandas.jpg` | `certificate-kaggle-pandas.svg` | Sertifikat Kaggle Pandas |
| `certificate-iite-2024.jpg` | `certificate-iite-2024.svg` | Sertifikat IITE 2024 |
| `video-iite-mega-apps.jpg` | `video-iite-mega-apps.svg` | Thumbnail · IITE Mega Apps |
| `video-pkkmb-2023.jpg` | `video-pkkmb-2023.svg` | Thumbnail · PKKMB 2023 |
| `video-mars-politeknik-takumi.jpg` | `video-mars-politeknik-takumi.svg` | Thumbnail · Mars Politeknik Takumi |
| `video-bem-2024.jpg` | `video-bem-2024.svg` | Thumbnail · BEM 2024 |
| `video-vinix7-promo.jpg` | `video-vinix7-promo.svg` | Thumbnail · Promo VINIX7 |
| `video-ayumi-podcast.jpg` | `video-ayumi-podcast.svg` | Thumbnail · Podcast Ayumi |
| `video-soubetsukai.jpg` | `video-soubetsukai.svg` | Thumbnail · Soubetsukai |
| `video-ayumi-promo.jpg` | `video-ayumi-promo.svg` | Thumbnail · Promo Ayumi |
