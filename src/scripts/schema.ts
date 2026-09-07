import type { FaqItem } from './seo-pages';

/**
 * Builder fuer die JSON-LD Graphen, die BaseLayout in den <head> schreibt.
 *
 * Bewusst NICHT dabei: HowTo. Google hat die HowTo-Rich-Results 2023
 * abgeschaltet, das Markup bringt also nichts mehr - die Schritte stehen
 * stattdessen als sichtbare <ol> auf der Seite.
 */

/** Das Tool selbst. Kann als Rich Result ausgespielt werden. */
export const softwareApplicationSchema = (opts: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: opts.name,
  description: opts.description,
  url: opts.url,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any (web browser)',
  browserRequirements: 'Requires JavaScript',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
});

/**
 * FAQ-Markup. Google zeigt FAQ-Rich-Results inzwischen nur noch fuer
 * behoerdliche und medizinische Quellen an - fuer die Interpretation der
 * Seite durch Suchmaschinen und AI-Antworten ist es trotzdem hilfreich.
 */
export const faqSchema = (items: FaqItem[]): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

/** Breadcrumbs werden in den SERPs weiterhin ausgespielt. */
export const breadcrumbSchema = (
  crumbs: { name: string; url: string }[]
): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
