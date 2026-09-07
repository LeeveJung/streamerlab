import type { TesterState } from './thumbnail-engine';

/** Ein Textblock im Fliesstext unter dem Tool. */
export interface ContentBlock {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

/** Frage/Antwort-Paar - rendert als <details> und als FAQPage-JSON-LD. */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoPageConfig {
  slug: string;
  /** Kurzform fuer die Hauptnavigation. */
  navLabel: string;
  title: string;
  h1: string;
  description: string;
  introText: string;
  initialStateProps: Partial<TesterState>;
  /** Eigener Fliesstext - haelt die Landingpages voneinander unterscheidbar. */
  sections: ContentBlock[];
  faq: FaqItem[];
}

export const SEO_PAGES: SeoPageConfig[] = [
  {
    slug: 'youtube-thumbnail-mobile-preview',
    navLabel: 'Mobile Preview',
    title: 'YouTube Thumbnail Mobile Preview Tester (Free)',
    h1: 'YouTube Thumbnail Mobile Preview Check',
    description:
      'Preview your YouTube thumbnail at mobile app size and see how it holds up next to a truncated title. Free, and nothing is uploaded.',
    introText:
      'On mobile devices thumbnails are far smaller and video titles get cut off much earlier. Check how yours holds up in the mobile feed.',
    initialStateProps: {
      viewContext: 'mobile',
      badgeType: 'short',
    },
    sections: [
      {
        h2: 'Why a thumbnail that works on desktop can fail on a phone',
        paragraphs: [
          'Most YouTube watch time comes from phones and tablets, but almost nobody designs a thumbnail on one. You build it in Photoshop or Canva at 1280x720 on a large monitor, where every detail is crisp and every word is readable. In the mobile app that same image is rendered at roughly the width of the screen, inside a much tighter layout.',
          'The result is a predictable set of failures: five words of text shrink into an unreadable smudge, a thin outline around your subject disappears, a logo in the corner becomes a grey dot, and a face that filled the frame on desktop now competes with the channel name and view count below it.',
        ],
        bullets: [
          'Text set below roughly 4% of the image height stops being legible at mobile size.',
          'Low-contrast combinations such as white type on a light background collapse first.',
          'Fine outlines, soft drop shadows and thin fonts lose definition before anything else.',
          'Busy backgrounds turn into visual noise once the image is scaled down.',
        ],
      },
      {
        h2: 'The title is part of the thumbnail',
        paragraphs: [
          'In the feed, viewers read the thumbnail and the title as one unit. Mobile shows the title in a smaller type size and clips it after two lines, so a long title gets truncated exactly where the phone runs out of room. If your hook lives in word twelve, mobile viewers never see it.',
          'Type your real title into the settings panel, then switch between Desktop and Mobile App. Watch where the line break lands and where the text gets cut. Then check whether the thumbnail still makes sense on its own, because on mobile it often has to carry the click by itself.',
        ],
      },
      {
        h2: 'How to run the mobile check',
        paragraphs: [
          'Drop your image into the upload field. This page starts in Mobile App view with a short timestamp badge already applied, so you are looking at the phone layout immediately. Nothing is uploaded anywhere: the file is rendered locally in your browser.',
          'Then step back from your screen, or hold your phone at arm’s length. If you cannot tell within a second what the video is about, the thumbnail is too complex for the feed. Simplify it: one subject, one short line of text, high contrast.',
        ],
      },
    ],
    faq: [
      {
        question: 'How large is a YouTube thumbnail on mobile?',
        answer:
          'In the mobile app the thumbnail spans nearly the full screen width, so on a typical phone it is displayed somewhere around 360 to 430 CSS pixels wide instead of the 1280 pixels you designed at. The file itself is still uploaded at 1280x720; it is only rendered smaller.',
      },
      {
        question: 'Should I design a separate thumbnail for mobile?',
        answer:
          'You cannot. YouTube serves one thumbnail per video and scales it for every surface, from the mobile feed to the desktop sidebar. That is exactly why it pays to design for the smallest size and let it scale up, rather than the other way around.',
      },
      {
        question: 'How many characters of my title are visible on mobile?',
        answer:
          'It depends on device width and on the words themselves, but mobile clips the title after two lines at a smaller type size than desktop, so plan for meaningfully less than the roughly 60 to 70 characters desktop tends to fit. Put the important words first and confirm the break point in the preview.',
      },
      {
        question: 'Is my image uploaded to a server?',
        answer:
          'No. The preview runs entirely in your browser. Your thumbnail never leaves your device and nothing is stored once you close the tab.',
      },
    ],
  },
  {
    slug: 'youtube-thumbnail-safe-zone',
    navLabel: 'Safe Zone',
    title: 'YouTube Thumbnail Safe Zone Checker (Timestamp Overlay)',
    h1: 'YouTube Thumbnail Safe-Zone Overlay',
    description:
      'Check whether the YouTube timestamp badge, the LIVE label or the progress bar covers part of your thumbnail. Free safe-zone overlay, no upload.',
    introText:
      'The timestamp badge in the bottom right corner covers roughly 15% of your thumbnail. Check your safe zone before you upload.',
    initialStateProps: {
      showDangerZone: true,
      badgeType: 'long',
    },
    sections: [
      {
        h2: 'What the safe zone is',
        paragraphs: [
          'YouTube draws its own interface elements on top of your thumbnail in the feed. You upload a clean 1280x720 image, but viewers never see all of it. The bottom right corner carries the duration badge, the bottom edge can carry a red progress bar for videos the viewer already started, and live streams get a red LIVE label in the same corner.',
          'The safe zone is the part of the frame that survives all of that. The overlay on this page marks the opposite: the danger zone in the bottom right, where your own content is most likely to be covered. Toggle it in the settings panel and move anything important out of it.',
        ],
        bullets: [
          'Duration badge: bottom right, sized to the runtime. "1:15:30" is noticeably wider than "9:58".',
          'LIVE badge: bottom right, solid red, replaces the duration on live streams and premieres.',
          'Progress bar: a red line along the bottom edge for partially watched videos.',
          'Channel avatar and title sit below the image rather than on it, but they still compete for attention.',
        ],
      },
      {
        h2: 'The badge is not always the same width',
        paragraphs: [
          'This is the trap most creators miss. If you check your layout against a short timestamp like 8:42 and then publish a 90-minute video, the badge grows to something like 1:15:30 and eats a wider strip of the corner. Text that cleared the short badge can end up half hidden behind the long one.',
          'Use the badge selector to cycle through Short, Long and LIVE. Whatever your longest planned video is, test against that. If you stream, test the LIVE badge too: it is a solid red block that pulls the eye away from your own design.',
        ],
      },
      {
        h2: 'Where to put your text instead',
        paragraphs: [
          'The bottom right is the worst place for text. In practice the strongest positions are the left third and the upper half of the frame, which stay clear of every overlay YouTube adds. If your design needs text low in the frame, keep it on the left and leave the right corner to YouTube.',
          'Watch the very bottom edge as well. Text sitting flush against it can be clipped by the progress bar for anyone who already started the video, which is exactly the audience you most want to bring back.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much of a YouTube thumbnail does the timestamp cover?',
        answer:
          'The badge itself is small, but it sits in the bottom right corner and its width scales with the duration text. Treat roughly the bottom right eighth of the frame as unusable, and more if your videos run over an hour. The overlay on this page marks a deliberately generous danger zone so you keep a margin.',
      },
      {
        question: 'Does the duration badge appear everywhere?',
        answer:
          'It appears on essentially every surface where a duration makes sense: home feed, search results, suggested videos and the desktop sidebar. Live streams show a red LIVE badge in the same spot instead, and Shorts are a separate format without a duration badge.',
      },
      {
        question: 'What about the red progress bar?',
        answer:
          'YouTube draws a thin red bar along the bottom edge of the thumbnail for videos a viewer has partially watched. It only appears for that viewer, but it will clip anything flush against the bottom of your image. You can toggle it in the settings panel.',
      },
      {
        question: 'Is there an official safe-zone template from YouTube?',
        answer:
          'YouTube publishes the technical requirements (1280x720, 16:9, under 2 MB) but no official safe-zone template for the badge overlay. That is why an overlay preview is useful: you check your actual image against the actual interface instead of guessing from a spec sheet.',
      },
    ],
  },
  {
    slug: 'youtube-thumbnail-blur-test',
    navLabel: 'Blur Test',
    title: 'YouTube Thumbnail Readability & Blur Test Tool',
    h1: 'Thumbnail Readability & Focus Test',
    description:
      'Blur your YouTube thumbnail to test its visual hierarchy. If it still reads at a glance it will survive the feed. Free, runs in your browser.',
    introText:
      'A good thumbnail works even when viewers only glance at it while scrolling. Use the blur filter for a quick focus check.',
    initialStateProps: {
      blurLevel: 3,
    },
    sections: [
      {
        h2: 'The squint test, without the squinting',
        paragraphs: [
          'Designers have used the squint test for decades: step back from the work, half close your eyes, and see what still holds together. What survives is your visual hierarchy. What dissolves was never carrying any weight in the first place.',
          'A blur filter does the same thing more consistently. This page starts with a moderate blur already applied, so you see your thumbnail roughly the way a viewer sees it in peripheral vision, a fraction of a second before deciding whether to look at it properly at all.',
        ],
      },
      {
        h2: 'How to read the result',
        paragraphs: [
          'Slide the blur up and watch the order in which things disappear. In a thumbnail that works, one clear shape holds on longest: a face, a bold word, a strong silhouette against a contrasting background. In a thumbnail that does not work, everything fades into an even grey-brown field at the same time, because nothing was ever dominant.',
        ],
        bullets: [
          'Blurred and still obvious what the video is about? The hierarchy is doing its job.',
          'One shape survives and the rest dissolves? Correct. That shape is your hook.',
          'Everything blurs into mush at once? Nothing dominates. Raise the contrast, cut elements, enlarge the subject.',
          'The text survives but the subject vanishes? Fine if the words are the hook, a problem if the face was meant to be.',
        ],
      },
      {
        h2: 'Contrast beats detail',
        paragraphs: [
          'Blur removes detail but preserves contrast, which is precisely why it is a good proxy for how a thumbnail performs in the feed. Viewers scrolling quickly are not reading your thumbnail, they are reacting to its large shapes and tonal contrast. Detail you added at full size contributes almost nothing at that speed.',
          'That is also the practical fix when a thumbnail fails this test: do not add more, subtract. Fewer elements, larger subject, harder separation between foreground and background. Then combine this check with the mobile preview and the safe-zone overlay to confirm the simplified version still holds at small size and clears the badge.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why would I deliberately blur my thumbnail?',
        answer:
          'To test its visual hierarchy. Viewers in a feed process a thumbnail in a fraction of a second and mostly perceive its large shapes and contrast, not its detail. Blurring simulates that glance and shows you which element actually dominates.',
      },
      {
        question: 'How much blur should I use?',
        answer:
          'Enough that fine detail is gone but the main shapes remain, which is around 3 to 5 pixels in this preview. If your thumbnail is still recognisable there, it will hold up in the feed. Push the slider further as a stress test.',
      },
      {
        question: 'Does the blur change my image file?',
        answer:
          'No. The blur is a CSS filter applied to the preview only. Your file on disk is untouched, and nothing is uploaded or saved.',
      },
      {
        question: 'What makes a thumbnail readable at a glance?',
        answer:
          'One dominant subject, strong contrast between foreground and background, and at most a few large words. Thumbnails that fail the blur test almost always fail for the same reason: too many elements competing at similar size and similar tone.',
      },
    ],
  },
];

/** Alle Tool-Seiten ausser der aktuellen - fuer den "Related tools" Block. */
export const getRelatedPages = (currentSlug: string): SeoPageConfig[] =>
  SEO_PAGES.filter((page) => page.slug !== currentSlug);
