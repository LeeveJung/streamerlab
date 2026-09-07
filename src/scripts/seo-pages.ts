import type { TesterState } from './thumbnail-engine';

export interface SeoPageConfig {
  slug: string;
  title: string;
  h1: string;
  description: string;
  introText: string;
  initialStateProps: Partial<TesterState>;
}

export const SEO_PAGES: SeoPageConfig[] = [
  {
    slug: 'youtube-thumbnail-mobile-preview',
    title: 'YouTube Thumbnail Mobile Preview Tester (Kostenlos)',
    h1: 'YouTube Thumbnail Mobile Preview Check',
    description: 'Test dein YouTube-Thumbnail speziell für Smartphones und die mobile YouTube App.',
    introText: 'Auf Mobilgeräten sind Thumbnails deutlich kleiner und Videotitel werden früher abgeschnitten. Prüfe hier die Lesbarkeit im mobilen Feed.',
    initialStateProps: {
      viewContext: 'mobile',
      badgeType: 'short',
    },
  },
  {
    slug: 'youtube-thumbnail-safe-zone',
    title: 'YouTube Thumbnail Safe Zone Checker (Timestamp Overlay)',
    h1: 'YouTube Thumbnail Safe-Zone Overlay',
    description: 'Vermeide verdeckten Text durch Zeitstempel und Badges unten rechts auf deinen YouTube Thumbnails.',
    introText: 'Der Zeitstempel-Badge unten rechts überdeckt rund 15% deines Thumbnails. Teste deine Safe-Zone vor dem Upload.',
    initialStateProps: {
      showDangerZone: true,
      badgeType: 'long',
    },
  },
  {
    slug: 'youtube-thumbnail-blur-test',
    title: 'YouTube Thumbnail Readability & Blur Test Tool',
    h1: 'Thumbnail Lesbarkeit & Fokus-Test',
    description: 'Simuliere Unschärfe und kleine Displaygrößen, um die visuelle Hierarchie deines Thumbnails zu testen.',
    introText: 'Ein gutes Thumbnail funktioniert auch dann, wenn der Nutzer nur flüchtig darüber scrollt. Nutze den Blur-Filter für den Fokus-Check.',
    initialStateProps: {
      blurLevel: 3,
    },
  },
];