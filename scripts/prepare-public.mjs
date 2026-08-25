import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const out = join(root, 'public');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const entries = [
  'index.html',
  'assets',
  'links',
  'curriculo-branco.html',
  'curriculo-dark.html',
  'cv.pdf',
  'momo-love.html',
  'script.js',
  'style.css',
  'CNAME',
];

for (const entry of entries) {
  const source = join(root, entry);
  if (!existsSync(source)) continue;
  const target = join(out, entry);
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true });
}

const rootFavicon = join(root, 'assets', 'favicon.ico');
if (existsSync(rootFavicon)) {
  cpSync(rootFavicon, join(out, 'favicon.ico'));
}

console.log(`Prepared ${out}`);
