import type { PostHog } from '@posthog/types'

export {};

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
    posthog?: PostHog
  }
}
