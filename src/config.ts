export const SITE_CONFIG = {
  siteName: 'YouTube Thumbnail Tester',
  showAds: false, // Auf 'true' stellen, sobald du Ads schalten möchtest
  /**
   * Pfad zum Share-Bild (1200x630) relativ zur Domain, z.B. '/og-image.png'.
   * Solange null, werden og:image und die große Twitter-Card weggelassen -
   * besser als ein Tag, das auf eine fehlende Datei zeigt.
   */
  ogImage: null as string | null,
};
