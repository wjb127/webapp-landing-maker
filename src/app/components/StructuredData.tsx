export default function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "데브원엘 웹개발 외주",
      "alternateName": "DevOneL",
      "description": "24시간 내 완성하는 초고속 랜딩페이지 제작 전문. React, Next.js 기반 반응형 웹사이트, 관리자 대시보드, 광고용 페이지 제작 서비스.",
      "url": "https://webapp-landing-maker.vercel.app",
      "sameAs": [
        "https://kmong.com/@%EB%8D%B0%EB%B8%8C%EC%9B%90%EC%97%98",
        "https://kmong.com/gig/657211",
        "https://portfolio-landing-peach.vercel.app"
      ],
      "email": "wjb127@naver.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressLocality": "서울"
      },
      "serviceType": "웹개발 외주 서비스",
      "areaServed": {
        "@type": "Country",
        "name": "대한민국"
      },
      "availableLanguage": ["ko", "en"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "웹개발 서비스",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "초고속 랜딩페이지 제작",
              "description": "24시간 내 완성하는 전환율 높은 랜딩페이지, 반응형 디자인 적용",
              "provider": {
                "@type": "Person",
                "name": "데브원엘"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "관리자 대시보드 제작",
              "description": "회원가입, 로그인 시스템, 데이터 관리 인터페이스 개발",
              "provider": {
                "@type": "Person",
                "name": "데브원엘"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "광고용 웹페이지 제작",
              "description": "구글 애즈 최적화 구조, 빠른 로딩 속도의 광고 전용 페이지",
              "provider": {
                "@type": "Person",
                "name": "데브원엘"
              }
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
      "paymentAccepted": ["현금", "계좌이체", "크몽 결제"],
      "currenciesAccepted": "KRW",
      "openingHours": "Mo-Su 00:00-23:59"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "데브원엘 웹개발 외주",
      "url": "https://webapp-landing-maker.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://webapp-landing-maker.vercel.app/#services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "데브원엘",
      "alternateName": "DevOneL",
      "jobTitle": "웹개발 전문가",
      "worksFor": {
        "@type": "Organization",
        "name": "프리랜서"
      },
      "email": "wjb127@naver.com",
      "url": "https://portfolio-landing-peach.vercel.app",
      "sameAs": [
        "https://kmong.com/@%EB%8D%B0%EB%B8%8C%EC%9B%90%EC%97%98"
      ],
      "knowsAbout": [
        "React", "Next.js", "TypeScript", "JavaScript", "웹개발", "랜딩페이지 제작"
      ]
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 