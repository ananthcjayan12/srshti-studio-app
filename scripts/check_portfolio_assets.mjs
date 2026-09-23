import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { carousels } from '../src/content.js';

const expected = new Map([
  ['smilecraft-tools', 5],
  ['smilecraft-braces', 5],
  ['smilecraft-whitening', 5],
  ['milano-story', 4],
  ['orbi-story', 3],
  ['chayam-story', 3],
]);
const errors = [];
if (carousels.length !== expected.size) errors.push(`Expected ${expected.size} projects, got ${carousels.length}`);

let total = 0;
for (const project of carousels) {
  const prefix = project.slides[0]?.replace(/^portfolio\//, '').replace(/-01$/, '');
  const count = expected.get(prefix);
  if (!count) {
    errors.push(`Unexpected project: ${project.id}`);
    continue;
  }
  expected.delete(prefix);
  if (project.slides.length !== count) errors.push(`${project.id}: expected ${count} slides, got ${project.slides.length}`);
  if (project.cover !== project.slides[0]) errors.push(`${project.id}: cover must be first slide`);
  project.slides.forEach((item, index) => {
    total++;
    const expectedPath = `portfolio/${prefix}-${String(index + 1).padStart(2,'0')}`;
    if (item !== expectedPath) errors.push(`${project.id}: unexpected slide path ${item}`);
    const path = resolve('public/images', `${item}.webp`);
    if (!existsSync(path)) {
      errors.push(`Missing: ${path}`);
      return;
    }
    if (statSync(path).size < 5000) errors.push(`Suspiciously small WebP: ${path}`);
    const bytes = readFileSync(path);
    if (bytes.toString('ascii',0,4)!=='RIFF' || bytes.toString('ascii',8,12)!=='WEBP') {
      errors.push(`Invalid WebP header: ${path}`);
    }
  });
}
if (total !== 25) errors.push(`Expected 25 slides, found ${total}`);
if (expected.size) errors.push('Missing project series: ' + [...expected.keys()].join(', '));
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Validated ${carousels.length} portfolio projects and ${total} local WebP slides.`);
