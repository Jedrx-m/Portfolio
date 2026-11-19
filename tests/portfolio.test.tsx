import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { resolveConfig } from 'vite';
import { ExperienceTimeline } from '../src/components/ExperienceTimeline';
import { ProjectShowcase } from '../src/components/ProjectShowcase';
import { ResumeModal } from '../src/components/ResumeModal';
import { portfolioConfig } from '../src/portfolio.config';

const noop = () => {};

test('the default development command listens on loopback', async () => {
  const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.doesNotMatch(manifest.scripts.dev, /(?:^|\s)--host(?:[=\s]|$)/);
  const config = await resolveConfig({}, 'serve');
  assert.equal(config.server.host, '127.0.0.1');
});

test('the background and resume show additional entries in every section', () => {
  const { education, experience, technicalTraining } = portfolioConfig.resume;
  const markers = ['Additional degree', 'Additional role', 'Additional training'] as const;
  const [degree, role, title] = markers;

  education.push({ degree, school: 'Test University', location: 'Test City', graduationYear: '2030', coursework: 'Test coursework' });
  experience.push({ role, period: '2030', company: 'Test Company', location: 'Test City', summary: 'Test summary', achievements: [], skills: [] });
  technicalTraining.push({ title, institution: 'Test Academy', period: '2030', details: [], skills: [] });

  try {
    const background = renderToStaticMarkup(<ExperienceTimeline onResumeClick={noop} />);
    const resume = renderToStaticMarkup(<ResumeModal isOpen onClose={noop} />);
    for (const marker of markers) {
      assert.ok(background.includes(marker), `Background is missing ${marker}`);
      assert.ok(resume.includes(marker), `Resume is missing ${marker}`);
    }
  } finally {
    education.pop();
    experience.pop();
    technicalTraining.pop();
  }
});

test('every project exposes a case-study button and its local media exists', async () => {
  const { projects, resume } = portfolioConfig;
  const html = renderToStaticMarkup(<ProjectShowcase projects={projects} onSelectProject={noop} />);

  for (const { title, previewMedia } of projects) {
    assert.ok(html.includes(`aria-label="View case study: ${title}"`), `Missing case-study button for ${title}`);
    await access(new URL(`../public${previewMedia.image}`, import.meta.url));
    await access(new URL(`../public${previewMedia.video}`, import.meta.url));
  }

  await access(new URL(`../public${resume.pdfUrl}`, import.meta.url));
});
