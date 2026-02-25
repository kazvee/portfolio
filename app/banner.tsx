'use client';

import { useEffect, useState } from 'react';

export function cookieConsentGiven(): 'yes' | 'no' | 'undecided' {
  if (typeof window === 'undefined') return 'undecided';
  return (localStorage.getItem('cookie_consent') as 'yes' | 'no') ?? 'undecided';
}

export default function Banner() {
  const [consent, setConsent] = useState<'yes' | 'no' | 'undecided'>('undecided');

  useEffect(() => {
    const saved = cookieConsentGiven();
    setConsent(saved);
    if (saved === 'yes') window.posthog?.opt_in_capturing()
    if (saved === 'no') window.posthog?.opt_out_capturing()
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsent('yes');

    if (!document.querySelector('#cf-analytics')) {
      const cf = document.createElement('script')
      cf.id = 'cf-analytics'
      cf.src = 'https://static.cloudflareinsights.com/beacon.min.js'
      cf.defer = true
      cf.setAttribute(
        'data-cf-beacon',
        `{"token":"${process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`
      )
      document.head.appendChild(cf)
    }

    if (!window.posthog) {
      const s = document.createElement('script')
      s.src = 'https://app.posthog.com/static/array.js'
      s.async = true
      s.onload = () => {
        window.posthog?.init('phc_fS8id3L1tcXRmcm14zACwCNdtCEBYZUqX9LfgKoCOpq', {
          api_host: 'https://us.i.posthog.com',
          person_profiles: 'identified_only',
          autocapture: true,
          capture_pageview: true,
          capture_pageleave: true,
          mask_all_text: true,
          mask_all_element_attributes: true,
        })

        document.addEventListener('click', (e) => {
          const target = (e.target as HTMLElement).closest('a')
          if (!target || !target.href) return
          const isExternal = !target.href.startsWith(window.location.origin)
          if (isExternal) {
            window.posthog?.capture('external_link_click', {
              href: target.href,
              text: target.textContent,
            })
          }
        })

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id
              if (id) {
                window.posthog?.capture('section_view', { section: id })
              }
            }
          })
        }, { threshold: 0.5 })

        document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec))
      }
      document.body.appendChild(s)
    }

    console.log(
      '%c🍪 Cookies accepted. Analytics unlocked. Developer happiness +10. 🤩',
      'color: #be185d; font-weight: bold; font-size: 14px;'
    );
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsent('no');
    console.log(
      '%c🛡️ Cookies declined. Developer sadness contained. 🥹',
      'color: #be185d; font-weight: bold; font-size: 14px;'
    );
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
