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
    if (saved === 'yes') initAnalytics(true)
    if (saved === 'no') initAnalytics(false)
  }, []);

  const initAnalytics = (allowCookies: boolean) => {
    if (allowCookies && !document.querySelector('#cf-analytics')) {
      const cf = document.createElement('script')
      cf.id = 'cf-analytics'
      cf.src = 'https://static.cloudflareinsights.com/beacon.min.js'
      cf.defer = true
      cf.setAttribute(
        'data-cf-beacon',
        `{"token":"${process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN}"}`
      )
      document.head.appendChild(cf);

      // console.log(
      //   '%c✅ Cloudflare initialized with cookies ☁️',
      //   'color: #be185d; font-weight: bold; font-size: 14px;'
      // );
    }

    if (!allowCookies) {
      // console.log(
      //   '%c⛔ Cloudflare initialized cookieless ☁️',
      //   'color: #be185d; font-weight: bold; font-size: 14px;'
      // );
    }

    if (!document.querySelector('#umami-analytics')) {
      const u = document.createElement('script');
      u.id = 'umami-analytics';
      u.defer = true;
      u.src = process.env.NEXT_PUBLIC_UMAMI_URL!;
      u.setAttribute('data-website-id', process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID!);
      document.head.appendChild(u);

      // console.log(
      //   allowCookies
      //     ? '%c✅ Umami initialized with cookies 🍪'
      //     : '%c⛔ Umami initialized cookieless 🍪',
      //   'color: #be185d; font-weight: bold; font-size: 14px;'
      // );
    }

    if (!window.posthog) {
      const s = document.createElement('script')
      s.src = `${process.env.NEXT_PUBLIC_POSTHOG_REVERSE_PROXY}/static/array.js`
      s.async = true
      s.onload = () => {
        window.posthog?.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_REVERSE_PROXY!,
          ui_host: 'https://us.posthog.com',
          person_profiles: 'identified_only',
          autocapture: true,
          capture_pageview: true,
          capture_pageleave: true,
          cookieless_mode: allowCookies ? undefined : 'on_reject',
          mask_all_text: true,
          mask_all_element_attributes: true,
        })

        // console.log(
        //   `%c${allowCookies ? '✅ PostHog initialized with cookies 🦔' : '⛔ PostHog initialized cookieless 🦔'}`,
        //   'color: #be185d; font-weight: bold; font-size: 14px;'
        // );
      };
      document.body.appendChild(s);
    }

    document.addEventListener('click', (e) => {
      if (!window.posthog) return;
      const target = (e.target as HTMLElement).closest('a')
      if (!target || !target.href) return
      if (!target.href.startsWith(window.location.origin)) {
        window.posthog.capture('external_link_click', {
          href: target.href,
          text: target.textContent,
        })
      }
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id && window.posthog)
              window.posthog.capture('section_view', { section: id })
          }
        })
      }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec))
  }

  const removeCookies = () => {

    document.cookie
      .split(';')
      .forEach((c) => {
        if (c.trim().startsWith('ph_')) {
          document.cookie = `${c.trim()};expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      });

    document.cookie
      .split(';')
      .forEach((c) => {
        if (c.trim().startsWith('_umami_')) {
          document.cookie = `${c.trim()};expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      });

    // console.log(
    //   '%c🛡️ Cookies declined. Developer sadness contained. 🥹',
    //   'color: #be185d; font-weight: bold; font-size: 14px;'
    // );
  };

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsent('yes');
    // console.log(
    //   '%c🤩 Cookies accepted! Developer happiness +10! 📈',
    //   'color: #be185d; font-weight: bold; font-size: 14px;'
    // );
    initAnalytics(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsent('no');
    removeCookies();
    initAnalytics(false);
  };

  if (consent !== 'undecided') return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: 'rgba(190, 24, 93, 0.75)',
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
