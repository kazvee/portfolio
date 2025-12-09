export { };

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

declare module '@hcaptcha/react-hcaptcha' {
  import { ComponentType } from 'react';
  interface HCaptchaProps {
    sitekey: string;
    onVerify?: (token: string) => void;
    onExpire?: () => void;
    onError?: () => void;
    size?: 'compact' | 'invisible' | 'normal';
    theme?: 'light' | 'dark';
  }
  const HCaptcha: ComponentType<HCaptchaProps>;
  export default HCaptcha;
}