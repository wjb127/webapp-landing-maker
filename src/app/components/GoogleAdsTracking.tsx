// Google Ads 전환 추적 함수들
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const trackConversion = (conversionLabel?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `AW-17182549720${conversionLabel ? `/${conversionLabel}` : ''}`,
      'value': 1.0,
      'currency': 'KRW'
    });
  }
};

export const trackButtonClick = (buttonType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': buttonType,
      'value': 1
    });
  }
};

export const trackPageView = (pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-17182549720', {
      page_path: pagePath,
    });
  }
};

export const trackContactForm = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      'event_category': 'engagement',
      'event_label': 'contact_form_click',
      'value': 1
    });
    
    // 전환 추적도 함께 실행
    trackConversion();
  }
}; 