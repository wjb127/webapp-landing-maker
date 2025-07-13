export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "웹개발 외주 전문",
    "description": "랜딩페이지, 관리자 대시보드, 광고용 웹페이지 제작 전문. 최신 기술 스택 기반 맞춤형 웹개발 서비스",
    "url": "https://webapp-landing-maker.vercel.app",
    "telephone": "+82-10-0000-0000",
    "email": "wjb127@naver.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressLocality": "서울"
    },
    "serviceType": "웹개발 외주 서비스",
    "areaServed": "대한민국",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "웹개발 서비스",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "랜딩페이지 제작",
            "description": "전환율 높은 랜딩페이지 제작, 반응형 디자인 적용"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "관리자 대시보드",
            "description": "회원가입, 로그인 시스템, 데이터 관리 인터페이스"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "광고용 웹페이지",
            "description": "구글 애즈 최적화 구조, 빠른 로딩 속도"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "priceRange": "$$",
    "paymentAccepted": "현금, 계좌이체, 크몽 결제",
    "currenciesAccepted": "KRW"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 