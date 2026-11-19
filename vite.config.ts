import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const configuredUrl = loadEnv(mode, process.cwd(), 'SITE_URL').SITE_URL?.trim();
  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const siteUrl = configuredUrl || (vercelDomain ? `https://${vercelDomain}` : undefined);
  const canonical = siteUrl ? new URL(siteUrl) : undefined;
  if (canonical && (
    !['http:', 'https:'].includes(canonical.protocol) ||
    canonical.username || canonical.password || canonical.search || canonical.hash
  )) {
    throw new Error('SITE_URL must be the public portfolio URL without credentials, query parameters, or a fragment.');
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'portfolio-social-preview',
        transformIndexHtml() {
          if (!canonical) return [];

          return [
            { tag: 'link', attrs: { rel: 'canonical', href: canonical.href } },
            { tag: 'meta', attrs: { property: 'og:url', content: canonical.href } },
            { tag: 'meta', attrs: { property: 'og:image', content: new URL('/assets/projects/brightsmile.jpg', canonical).href } },
            { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Bright Smile Dental Clinic homepage, a featured portfolio project' } },
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
          ];
        },
      },
    ],
    server: {
      host: '127.0.0.1',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
