import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

let initialized = false;

export default function ChatBotWidget() {
  useEffect(() => {
    if (initialized) return;
    if (typeof window === 'undefined') return;

    initialized = true;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/687296488a0a5f1914737d1a/1ivvpm2qa';
    script.setAttribute('crossorigin', 'anonymous');

    document.body.appendChild(script);
  }, []);

  return null;
}
