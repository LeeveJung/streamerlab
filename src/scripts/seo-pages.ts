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
    title: 'YouTube Thumbnail Mobile Preview Tester (Free)',
    h1: 'YouTube Thumbnail Mobile Preview Check',
    description: 'Test your YouTube thumbnail specifically for smartphones and the mobile YouTube app.',
    introText: 'On mobile devices thumbnails are far smaller and video titles get cut off much earlier. Check how yours holds up in the mobile feed.',
    initialStateProps: {
      viewContext: 'mobile',
      badgeType: 'short',
    },
  },
  {
    slug: 'youtube-thumbnail-safe-zone',
    title: 'YouTube Thumbnail Safe Zone Checker (Timestamp Overlay)',
    h1: 'YouTube Thumbnail Safe-Zone Overlay',
    description: 'Avoid text hidden behind timestamps and badges in the bottom right corner of your YouTube thumbnails.',
    introText: 'The timestamp badge in the bottom right corner covers roughly 15% of your thumbnail. Check your safe zone before you upload.',
    initialStateProps: {
      showDangerZone: true,
      badgeType: 'long',
    },
  },
  {
    slug: 'youtube-thumbnail-blur-test',
    title: 'YouTube Thumbnail Readability & Blur Test Tool',
    h1: 'Thumbnail Readability & Focus Test',
    description: 'Simulate blur and small screen sizes to test the visual hierarchy of your thumbnail.',
    introText: 'A good thumbnail works even when viewers only glance at it while scrolling. Use the blur filter for a quick focus check.',
    initialStateProps: {
      blurLevel: 3,
    },
  },
];
