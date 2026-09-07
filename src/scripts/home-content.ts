import type { ContentBlock, FaqItem } from './seo-pages';

/** Ein Schritt der Anleitung - rendert sichtbar und als HowTo-JSON-LD. */
export interface HowToStep {
  name: string;
  text: string;
}

export const HOME_HOW_TO: { heading: string; steps: HowToStep[] } = {
  heading: 'How to test a YouTube thumbnail',
  steps: [
    {
      name: 'Upload your thumbnail',
      text: 'Drag your image into the upload field or click to pick a file. The image is rendered locally in your browser and never sent to a server.',
    },
    {
      name: 'Add your real title and channel name',
      text: 'Paste the title you actually plan to publish. In the feed the thumbnail and the title are read as one unit, so testing a placeholder tells you nothing about where the line breaks.',
    },
    {
      name: 'Switch between desktop and mobile',
      text: 'Use the view switcher above the preview. Mobile renders the thumbnail much smaller and clips the title earlier, which is where most thumbnails break.',
    },
    {
      name: 'Check the duration badge against the safe zone',
      text: 'Pick the badge type that matches your video length, then turn on the danger-zone overlay. Anything important inside that corner will be covered by YouTube.',
    },
    {
      name: 'Run the blur test',
      text: 'Raise the blur slider until fine detail is gone. If you can still tell what the video is about, the thumbnail has a clear visual hierarchy.',
    },
  ],
};

export const HOME_SECTIONS: ContentBlock[] = [
  {
    h2: 'What this preview actually simulates',
    paragraphs: [
      'A thumbnail almost never gets seen the way you designed it. You export a clean 1280x720 image, then YouTube scales it down, crops nothing but covers parts of it, and surrounds it with a title, a channel name, a view count and a timestamp badge. The click decision happens in that context, not in your image editor.',
      'This tester rebuilds that context in the browser so you can judge the thumbnail in the situation it has to survive: small, cluttered, and glanced at for a fraction of a second.',
    ],
    bullets: [
      'Desktop and mobile feed layouts, including the smaller mobile type sizes.',
      'The duration badge in short, long and LIVE variants, positioned like YouTube positions it.',
      'The red progress bar that appears for partially watched videos.',
      'A danger-zone overlay marking the corner most likely to be covered.',
      'A blur filter for checking visual hierarchy at a glance.',
      'Your real title and channel name, so you can see where the text is truncated.',
    ],
  },
  {
    h2: 'YouTube thumbnail requirements',
    paragraphs: [
      'Before you worry about design, get the file right. YouTube rejects or downgrades thumbnails that miss the technical specification, and an image below the recommended resolution will look soft on large screens.',
    ],
    bullets: [
      'Resolution: 1280x720 pixels recommended, with a minimum width of 640 pixels.',
      'Aspect ratio: 16:9, which is what every feed surface expects.',
      'File size: under 2 MB.',
      'Formats: JPG, PNG, GIF or WEBP.',
      'Custom thumbnails require a verified YouTube account.',
    ],
  },
  {
    h2: 'The three failure modes worth testing for',
    paragraphs: [
      'Thumbnails rarely fail for exotic reasons. In practice almost every weak thumbnail fails in one of three ways, and each one has its own check on this site.',
      'The first is scale: it works at full size but turns to mush on a phone, which is the surface most of your audience is on. The second is occlusion: something important sits in the bottom right corner where YouTube draws the duration badge. The third is hierarchy: nothing in the frame dominates, so the eye has nothing to lock onto while scrolling.',
    ],
  },
  {
    h2: 'Nothing you upload leaves your browser',
    paragraphs: [
      'The preview is a static page with client-side JavaScript. Your image is turned into a temporary object URL and rendered locally, so there is no upload, no processing on a server and no copy of your thumbnail anywhere. Close the tab and it is gone.',
      'That also means you can safely test unpublished thumbnails for videos that are not announced yet.',
    ],
  },
];

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'What is the correct YouTube thumbnail size?',
    answer:
      'YouTube recommends 1280x720 pixels in a 16:9 aspect ratio, with a minimum width of 640 pixels and a file size under 2 MB. Accepted formats are JPG, PNG, GIF and WEBP.',
  },
  {
    question: 'Is this thumbnail tester free?',
    answer:
      'Yes. There is no account, no sign-up and no limit on how many thumbnails you check.',
  },
  {
    question: 'Do you store or upload my thumbnail?',
    answer:
      'No. Your image is rendered locally in your browser through a temporary object URL. It is never transmitted to a server and nothing persists after you close the tab.',
  },
  {
    question: 'Why does my thumbnail look different on YouTube than in my editor?',
    answer:
      'Because YouTube scales it down and draws its own interface on top of it. The duration badge covers the bottom right corner, a progress bar can clip the bottom edge, and on mobile the whole image is rendered at a fraction of the size you designed at. This tester reproduces that.',
  },
  {
    question: 'Can I A/B test two thumbnails here?',
    answer:
      'This tool previews one thumbnail at a time in a realistic feed context. For real A/B testing against live traffic, YouTube offers thumbnail testing inside YouTube Studio for eligible channels. Use this preview first to rule out the obvious problems, then test the survivors on real viewers.',
  },
  {
    question: 'Does the thumbnail affect my click-through rate?',
    answer:
      'It is one of the two things a viewer sees before clicking, alongside the title, so it has a direct influence on click-through rate. That is also why it pays to check it in feed context rather than in isolation.',
  },
];
