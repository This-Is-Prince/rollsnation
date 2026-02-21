/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

const foldersToProcess = [
  'FRANCHISE OWNERS ROLLS NATION',
  'RN FOOD IMAGES'
];

async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const parsedPath = path.parse(fullPath);
      const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

      try {
        await sharp(fullPath)
          .resize({ width: 1920, withoutEnlargement: true }) 
          .webp({ quality: 80, effort: 6 }) 
          .toFile(outputPath);

        const oldSize = (fs.statSync(fullPath).size / (1024 * 1024)).toFixed(2);
        const newSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

        console.log(`✅ ${entry.name} compressed: ${oldSize}MB -> ${newSize}KB`);

        fs.unlinkSync(fullPath);
      } catch (error) {
        console.error(`❌ Error compressing ${entry.name}:`, error);
      }
    }
  }
}

async function run() {
  console.log('🚀 Starting size-optimized compression for Rolls Nation...');
  for (const folder of foldersToProcess) {
    const targetPath = path.join(publicDir, folder);
    if (fs.existsSync(targetPath)) {
      console.log(`\n📂 Processing folder: ${folder}...`);
      await processDirectory(targetPath);
    } else {
      console.log(`⚠️ Folder not found: ${targetPath}`);
    }
  }
  console.log('\n🎉 All images resized and compressed perfectly!');
}

run();