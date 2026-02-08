'use client';

import { useEffect } from 'react';
import { cookieConsentGiven } from './banner';

export default function CloudflareAnalytics() {
  useEffect(() => {
    if (cookieConsentGiven() === 'yes') {
      const script = document.createElement('script');
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.defer = true;
      script.setAttribute(
        'data-cf-beacon',
        `{"token":"${process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`,
      );
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
