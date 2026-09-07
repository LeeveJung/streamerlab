import type { APIRoute } from 'astro';
import { SEO_PAGES } from '../scripts/seo-pages';

/**
 * Erzeugt /sitemap.xml beim Build.
 *
 * Die statischen Seiten werden per import.meta.glob aus src/pages eingesammelt,
 * damit eine neu angelegte Seite automatisch in der Sitemap landet. Dynamische
 * Routen kann der Glob nicht auflösen - die eine, die es gibt ([slug].astro),
 * wird unten explizit aus SEO_PAGES expandiert.
 */
const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

const toRoute = (file: string): string | null => {
  const path = file.replace(/^\.\//, '').replace(/\.astro$/, '');

  if (path.startsWith('_')) return null; // Partials und Layouts
  if (path.includes('[')) return null; // Dynamische Routen, siehe unten
  if (path === 'index') return '/';

  // build.format ist 'directory', die URLs enden also auf einen Slash.
  return `/${path.replace(/\/index$/, '')}/`;
};

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error(
      'sitemap.xml braucht die `site`-Option aus astro.config.mjs.'
    );
  }

  const routes = [
    ...pageFiles.map(toRoute).filter((route): route is string => route !== null),
    ...SEO_PAGES.map((page) => `/${page.slug}/`),
  ];

  // Kein <lastmod>: ein Datum, das bei jedem Build auf "heute" springt, ist
  // fuer Suchmaschinen wertlos und wird ohnehin ignoriert.
  const urls = [...new Set(routes)].sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
