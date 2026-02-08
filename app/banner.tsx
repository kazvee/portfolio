'use client';

import { useEffect, useState } from 'react';
import { usePostHog } from 'posthog-js/react';
import { initPostHog } from './posthogClient';

export function cookieConsentGiven(): 'yes' | 'no' | 'undecided' {
  if (typeof window === 'undefined') return 'undecided';
  return (
    (localStorage.getItem('cookie_consent') as 'yes' | 'no') ?? 'undecided'
  );
}

export default function Banner() {
  const [consent, setConsent] = useState<'yes' | 'no' | 'undecided'>(
    'undecided',
  );
  const posthog = usePostHog();

  useEffect(() => {
    setConsent(cookieConsentGiven());
  }, []);

  useEffect(() => {
    if (consent !== 'undecided') {
      posthog.set_config({
        persistence: consent === 'yes' ? 'localStorage+cookie' : 'memory',
      });
    }
  }, [consent, posthog]);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    initPostHog('yes');
    setConsent('yes');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    initPostHog('no');
    setConsent('no');
  };

  if (consent !== 'undecided') return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: 'rgba(190, 24, 93, 0.75)',
        // background: 'linear-gradient(90deg, #be185d  0%, #831843  100%)',
        // background: 'linear-gradient(90deg, #482B56 0%, #170E1B 100%)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1000,
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
      }}
    >
      <p style={{ margin: '0 0 1rem', maxWidth: '80%' }}>
        This site uses cookies so I can tell if anyone scrolls past the header.
        😄 Please accept cookies to help me keep improving this site. ❤️
      </p>
      <div style={{ marginLeft: '1rem' }}>
        <button
          type="button"
          onClick={acceptCookies}
          style={{
            backgroundColor: 'green',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            marginRight: '0.5rem',
            fontWeight: '600',
          }}
        >
          Accept Cookies
        </button>
        <button
          type="button"
          onClick={declineCookies}
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Decline Cookies
        </button>
      </div>
    </div>
  );
}
