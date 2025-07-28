import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: '웹개발 외주 전문 | 초고속 랜딩페이지 제작 24시간 완성 - 데브원엘',
    template: '%s | 데브원엘 웹개발 외주'
  },
  description: '24시간 내 완성하는 초고속 랜딩페이지 제작 전문! React, Next.js 기반 반응형 웹사이트, 관리자 대시보드, 광고용 페이지를 빠른 납기로 제작합니다. 크몽 인증 개발자 데브원엘의 맞춤형 웹개발 서비스로 무제한 수정 지원까지 받아보세요.',
  keywords: [
    '웹개발 외주', '랜딩페이지 제작', '초고속 웹개발', '크몽 웹개발',
    '반응형 웹사이트', '관리자 대시보드', '광고용 웹페이지', 'React 개발',
    'Next.js 개발', '웹사이트 제작', '데브원엘', '맞춤형 웹개발',
    '24시간 제작', '빠른 납기', '웹개발 전문가'
  ],
  authors: [{ name: '데브원엘', url: 'https://kmong.com/@%EB%8D%B0%EB%B8%8C%EC%9B%90%EC%97%98' }],
  creator: '데브원엘 (DevOneL)',
  publisher: '데브원엘 웹개발 외주',
  category: 'Technology',
  classification: 'Web Development Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webapp-landing-maker.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      'naver-site-verification': process.env.NAVER_SITE_VERIFICATION || '',
    },
  },
  openGraph: {
    title: '초고속 랜딩페이지 제작 전문 | 24시간 내 완성 - 데브원엘',
    description: '크몽 인증 개발자가 만드는 고품질 웹사이트! React, Next.js 기반 반응형 랜딩페이지, 관리자 대시보드, 광고용 페이지를 24시간 내 제작. 무제한 수정 지원.',
    url: 'https://webapp-landing-maker.vercel.app',
    siteName: '데브원엘 웹개발 외주',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '데브원엘 초고속 랜딩페이지 제작 서비스 - 24시간 내 완성',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 400,
        height: 400,
        alt: '데브원엘 웹개발 외주 로고',
        type: 'image/jpeg',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
    emails: ['wjb127@naver.com'],
    phoneNumbers: [],
    faxNumbers: [],
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '초고속 랜딩페이지 제작 전문 - 데브원엘',
    description: '24시간 내 완성하는 고품질 웹사이트! React, Next.js 기반 반응형 웹개발 전문',
    images: ['/og-image.jpg'],
    creator: '@devoneel',
    site: '@devoneel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <head>
        <link rel="alternate" hrefLang="ko" href="https://webapp-landing-maker.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://webapp-landing-maker.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://kmong.com" />
        <link rel="dns-prefetch" href="https://portfolio-landing-peach.vercel.app" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17182549720"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17182549720');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
