import posthog from 'posthog-js';

export const initPostHog = (consent: 'yes' | 'no' | 'undecided') => {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY!;

  posthog.init(posthogKey, {
    api_host: 'https://us.i.posthog.com',
    persistence: consent === 'yes' ? 'localStorage+cookie' : 'memory',
    autocapture: true,
    disable_session_recording: consent !== 'yes',
  });
};

export default posthog;
