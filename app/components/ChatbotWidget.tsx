'use client';
import { useEffect } from 'react';

export default function ChatBotWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];

      s1.async = true;
      s1.src = 'https://embed.tawk.to/687296488a0a5f1914737d1a/1ivvpm2qa';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}
