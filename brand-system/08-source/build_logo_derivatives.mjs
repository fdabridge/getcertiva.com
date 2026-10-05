// Rebuild print/social logo derivatives from the unchanged production SVGs.
// Run from any directory: node brand-system/08-source/build_logo_derivatives.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoDir = path.join(root, '01-logos');
const inter = (await fs.readFile(path.join(logoDir, 'fonts/Inter-opsz-wght.ttf'))).toString('base64');
const raster = {};

for (const variant of ['primary', 'reversed']) {
  const source = await fs.readFile(path.join(logoDir, `certiva-wordmark-${variant}.svg`), 'utf8');
  const withEmbeddedFont = source
    .replace(/@import url\([^;]+;/, '')
    .replace(/(<svg[^>]*>)/, `$1<style>@font-face{font-family:Inter;src:url(data:font/ttf;base64,${inter}) format('truetype');font-weight:400}</style>`);
  const target = path.join(logoDir, `certiva-wordmark-${variant}-640.png`);
  await sharp(Buffer.from(withEmbeddedFont)).resize(640, 176).png().toFile(target);
  raster[variant] = (await fs.readFile(target)).toString('base64');
}

for (const folder of ['04-document-system', '05-social']) {
  const directory = path.join(root, folder);
  for (const name of await fs.readdir(directory)) {
    if (!name.endsWith('.svg')) continue;
    const target = path.join(directory, name);
    const source = await fs.readFile(target, 'utf8');
    const updated = source.replace(
      /<g transform="translate\((\d+) (\d+)\)">([\s\S]*?)<\/g>/g,
      (whole, x, y, content) => {
        if (!content.includes('>certiva</text>')) return whole;
        const iconSize = Number(content.match(/<rect\s+width="(\d+)"\s+height="\d+"/)?.[1]);
        if (!iconSize || iconSize > 80) throw new Error(`Unexpected logo specimen in ${name}`);
        const variant = /<text[^>]*fill="(?:white|#FFFFFF)"[^>]*>certiva<\/text>/.test(content)
          ? 'reversed' : 'primary';
        const width = Math.round(iconSize * 160 / 44);
        return `<image href="data:image/png;base64,${raster[variant]}" x="${x}" y="${y}" width="${width}" height="${iconSize}" aria-label="Certiva logo"/>`;
      },
    );
    if (updated !== source) {
      await fs.writeFile(target, updated);
      console.log(`Embedded production logo in ${folder}/${name}`);
    }
  }
}
