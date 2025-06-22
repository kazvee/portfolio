'use client';

import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import posthog, { initPostHog } from './posthogClient';
import { cookieConsentGiven } from './banner';

export function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initPostHog(cookieConsentGiven());
    setReady(true);
  }, []);

  if (!ready) return null;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
