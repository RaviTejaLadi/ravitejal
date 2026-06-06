import sharp from 'sharp';
import { mkdir } from 'fs/promises';

await mkdir('public/images', { recursive: true });

await sharp('src/assets/avatar1.jpg')
  .resize(512, 512, { fit: 'cover' })
  .webp({ quality: 82 })
  .toFile('public/images/avatar.webp');

const projectImages = [
  ['src/assets/kalkiUi.png', 'public/images/kalkiUi.webp', 700],
  ['src/assets/kalkiUiToast.png', 'public/images/kalkiUiToast.webp', 700],
  ['src/assets/rue.png', 'public/images/rue.webp', 700],
  ['src/assets/ruei.png', 'public/images/ruei.webp', 700],
];

for (const [src, dest, width] of projectImages) {
  await sharp(src).resize(width, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
}

console.log('Images optimized to public/images/');
