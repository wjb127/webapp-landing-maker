import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '웹개발 외주 전문 | 빠른 납기, 깔끔한 완성도',
  description: '랜딩페이지, 관리자 대시보드, 광고용 웹페이지 제작 전문. 최신 기술 스택 기반 맞춤형 웹개발 서비스',
  keywords: '웹개발, 외주, 랜딩페이지, 광고용 웹페이지, 관리자 대시보드, 맞춤형 웹사이트',
  authors: [{ name: '웹개발 외주 전문가' }],
  creator: '웹개발 외주 전문가',
  publisher: '웹개발 외주 전문가',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webapp-landing-maker.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '웹개발 외주 전문 | 빠른 납기, 깔끔한 완성도',
    description: '랜딩페이지, 관리자 대시보드, 광고용 웹페이지 제작 전문. 최신 기술 스택 기반 맞춤형 웹개발 서비스',
    url: 'https://webapp-landing-maker.vercel.app',
    siteName: '웹개발 외주 전문',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '웹개발 외주 전문 서비스',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '웹개발 외주 전문 | 빠른 납기, 깔끔한 완성도',
    description: '랜딩페이지, 관리자 대시보드, 광고용 웹페이지 제작 전문',
    images: ['/og-image.jpg'],
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
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
