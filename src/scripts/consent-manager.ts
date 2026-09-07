const CONSENT_KEY = 'yt_tools_ad_consent';

export type ConsentStatus = 'granted' | 'denied' | 'pending';

export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'granted' || stored === 'denied') return stored;
  return 'pending';
}

export function setConsentStatus(status: 'granted' | 'denied'): void {
  localStorage.setItem(CONSENT_KEY, status);
  window.dispatchEvent(
    new CustomEvent('ad-consent-updated', { detail: { status } })
  );
}

export function loadAdSenseScript(clientPublisherId: string): void {
  if (document.getElementById('adsbygoogle-js')) return; // Bereits geladen

  const script = document.createElement('script');
  script.id = 'adsbygoogle-js';
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientPublisherId}`;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}