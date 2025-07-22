export default function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "작업 기간은 얼마나 걸리나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "프로젝트 규모에 따라 다르지만, 일반적인 랜딩페이지는 1-3일, 관리자 대시보드는 1-2주 정도 소요됩니다. 급한 경우 추가 비용으로 단축 가능합니다."
        }
      },
      {
        "@type": "Question",
        "name": "결제 방식은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "크몽을 통한 안전결제 또는 계좌이체 모두 가능합니다. 프로젝트 규모에 따라 결제 방식을 협의하여 진행하며, 대형 프로젝트의 경우 분할 결제도 가능합니다."
        }
      },
      {
        "@type": "Question",
        "name": "수정은 몇 번까지 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "기본적으로 2-3회 수정이 포함되어 있으며, 대폭적인 변경이 아닌 세부 조정은 추가 비용 없이 진행됩니다. 고객 만족까지 최선을 다합니다."
        }
      },
      {
        "@type": "Question",
        "name": "사후 지원은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "납품 후 1개월간 무료 A/S를 제공하며, 이후 수정 1건당 1천원 수준으로 제공해드립니다. 긴급한 문제는 24시간 내 해결해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "어떤 기술을 사용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "React, TypeScript, Tailwind CSS 등 최신 기술 스택을 사용하여 안정적이고 확장 가능한 웹사이트를 제작합니다. 모든 기술은 업계 표준을 따릅니다."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
} 