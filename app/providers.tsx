'use client';

import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import posthog, { initPostHog } from './posthogClient';
import { cookieConsentGiven } from './banner';

export function Providers({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<'yes' | 'no' | 'undecided'>('undecided');

  useEffect(() => {
    const initialConsent = cookieConsentGiven();
    setConsent(initialConsent);

    if (initialConsent !== 'undecided') {
      initPostHog(initialConsent);
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
