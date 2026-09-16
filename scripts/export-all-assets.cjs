const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + (count * dirEntrySize);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function exportAll() {
  const assetsDir = 'E:/resin_by_nikeeta_rawat/scripts/pdf-assets';
  const publicDir = 'E:/resin_by_nikeeta_rawat/public';
  const appDir = 'E:/resin_by_nikeeta_rawat/app';
  const publicImagesDir = path.join(publicDir, 'images');

  if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });

  const buf1200 = await sharp(path.join(assetsDir, 'asset_1_1200x630.png')).png().toBuffer();
  // Ensure alpha (RGBA) for all icon PNGs so ICO and Turbopack decode flawlessly
  const buf16 = await sharp(path.join(assetsDir, 'asset_2_16x16.png')).ensureAlpha().png().toBuffer();
  const buf32 = await sharp(path.join(assetsDir, 'asset_3_32x32.png')).ensureAlpha().png().toBuffer();
  const buf48 = await sharp(path.join(assetsDir, 'asset_4_48x48.png')).ensureAlpha().png().toBuffer();
  const buf192 = await sharp(path.join(assetsDir, 'asset_5_192x192.png')).ensureAlpha().png().toBuffer();
  const buf512 = await sharp(path.join(assetsDir, 'asset_6_512x512.png')).ensureAlpha().png().toBuffer();
  const bufMaskable512 = await sharp(path.join(assetsDir, 'asset_7_512x512.png')).ensureAlpha().png().toBuffer();
  const buf180 = await sharp(path.join(assetsDir, 'asset_8_180x180.png')).ensureAlpha().png().toBuffer();
  const bufLogoMark = fs.readFileSync(path.join(assetsDir, 'logo-mark-clean.png'));

  // 1. Generate multi-resolution favicon.ico (16, 32, 48) in RGBA format
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico (16/32/48 RGBA)');

  // 2. Favicon PNGs
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), buf16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), buf32);
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), buf48);
  fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), buf32);
  fs.writeFileSync(path.join(appDir, 'icon.png'), buf32);
  console.log('Saved favicon PNGs');

  // 3. Apple Touch Icon
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), buf180);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), buf180);
  console.log('Saved apple-touch-icon (180x180)');

  // 4. PWA Icons
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), buf192);
  fs.writeFileSync(path.join(publicDir, 'pwa-192.png'), buf192);

  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), buf512);
  fs.writeFileSync(path.join(publicDir, 'pwa-512.png'), buf512);

  fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512.png'), bufMaskable512);
  console.log('Saved PWA icons');

  // 5. OpenGraph & Twitter Images
  fs.writeFileSync(path.join(publicDir, 'og-image.png'), buf1200);
  fs.writeFileSync(path.join(publicImagesDir, 'og-image.png'), buf1200);
  fs.writeFileSync(path.join(appDir, 'opengraph-image.png'), buf1200);
  console.log('Saved OpenGraph images (1200x630)');

  // 6. Transparent Logo Mark & Logo files
  fs.writeFileSync(path.join(publicImagesDir, 'logo-mark.png'), bufLogoMark);
  fs.writeFileSync(path.join(publicDir, 'logo-mark.png'), bufLogoMark);
  fs.writeFileSync(path.join(publicImagesDir, 'logo.png'), buf512);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), buf512);
  console.log('Saved logo-mark.png and logo.png');
}

exportAll().catch(console.error);
