// Google Ads 전환 추적 함수들
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetIdOrAction: string,
      config?: Record<string, string | number>
    ) => void;
  }
}

type GtagEvent = 'conversion' | 'click' | 'contact';
type GtagConfig = Record<string, string | number>;

export const trackConversion = (conversionLabel?: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: GtagConfig = {
      'send_to': `AW-17182549720${conversionLabel ? `/${conversionLabel}` : ''}`,
      'value': 1.0,
      'currency': 'KRW'
    };
    window.gtag('event', 'conversion', config);
  }
};

export const trackButtonClick = (buttonType: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: GtagConfig = {
      'event_category': 'engagement',
      'event_label': buttonType,
      'value': 1
    };
    window.gtag('event', 'click', config);
  }
};

export const trackPageView = (pagePath?: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: GtagConfig = pagePath ? { page_path: pagePath } : {};
    window.gtag('config', 'AW-17182549720', config);
  }
};

export const trackContactForm = (): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    const config: GtagConfig = {
      'event_category': 'engagement',
      'event_label': 'contact_form_click',
      'value': 1
    };
    window.gtag('event', 'contact', config);
    
    // 전환 추적도 함께 실행
    trackConversion();
  }
}; 