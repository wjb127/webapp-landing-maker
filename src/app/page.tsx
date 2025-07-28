'use client'

import { 
  Mail, 
  MessageCircle, 
  Star, 
  Code, 
  Zap,
  BarChart3,
  Globe,
  Database,
  FileText,
  Settings
} from 'lucide-react'
import StructuredData from './components/StructuredData'
import FAQStructuredData from './components/FAQStructuredData'
import MobileMenu from './components/MobileMenu'
import { trackContactForm, trackButtonClick } from './components/GoogleAdsTracking'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <FAQStructuredData />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-6">
            <div className="flex items-center">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="ml-2 text-base sm:text-lg md:text-xl font-bold text-gray-900">웹개발 외주 전문</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" aria-label="메인 내비게이션">
              <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="서비스 섹션으로 이동">서비스</a>
              <a href="#process" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="작업절차 섹션으로 이동">작업절차</a>
              <a href="#portfolio" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="포트폴리오 섹션으로 이동">포트폴리오</a>
              <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="자주 묻는 질문 섹션으로 이동">FAQ</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="연락처 섹션으로 이동">연락처</a>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu onContactClick={() => trackContactForm()} />
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[600px] sm:min-h-[700px] h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Code/Website Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-24 h-16 border-2 border-white/20 rounded-lg"></div>
            <div className="absolute top-20 right-20 w-20 h-12 border-2 border-blue-300/20 rounded"></div>
            <div className="absolute bottom-20 left-20 w-24 h-14 border-2 border-purple-300/20 rounded-lg"></div>
            <div className="absolute top-1/2 right-10 w-16 h-10 border-2 border-pink-300/20 rounded"></div>
          </div>
          {/* Floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>

        {/* Main Content - Mobile Optimized Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              {/* Top Line */}
              <p className="text-base sm:text-lg text-yellow-300 font-medium animate-slide-up">
                오늘 문의하면 내일 결과가 나오는
              </p>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-slide-up delay-300" itemProp="name">
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                  초고속
                </span>
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  랜딩페이지 제작
                </span>
              </h1>

              
              {/* CTA Button */}
              <div className="animate-slide-up delay-1000 pt-2">
                <a 
                  href="https://kmong.com/gig/657211" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactForm()}
                  className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 font-black text-base sm:text-lg rounded-full hover:from-yellow-300 hover:to-red-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/40 min-h-[48px] min-w-[48px] touch-manipulation"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="relative z-10">지금 문의하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Right Side - Landing Page Visual */}
            <div className="flex justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0">
              <div className="relative">
                {/* Desktop Browser Window Mockup */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl w-72 sm:w-80 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Browser Header */}
                  <div className="bg-gray-200 rounded-t-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white mx-2 sm:mx-3 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs text-gray-500 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full"></div>
                      <span className="text-xs">yoursite.com</span>
                    </div>
                  </div>
                  
                  {/* Landing Page Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    {/* Hero Section */}
                    <div className="text-center space-y-3">
                      <div className="h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg mx-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
                      </div>
                      <div className="h-8 bg-yellow-400 rounded-lg w-1/3 mx-auto"></div>
                    </div>
                    
                    {/* Features Section */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <div className="h-6 bg-blue-100 rounded"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-6 bg-green-100 rounded"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-6 bg-purple-100 rounded"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Speed Lines */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex flex-col gap-1 opacity-60">
                    <div className="h-1 w-8 bg-yellow-400 rounded animate-pulse"></div>
                    <div className="h-1 w-12 bg-yellow-400 rounded animate-pulse delay-200"></div>
                    <div className="h-1 w-6 bg-yellow-400 rounded animate-pulse delay-400"></div>
                  </div>
                </div>
                
                {/* Lightning Icon */}
                <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2 animate-bounce">
                  <Zap className="h-5 w-5 text-gray-900" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              전문 서비스
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="block">맞춤형 웹개발 서비스로</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">완벽한 웹사이트 제작</span>
            </h2>
                          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                비즈니스 목적에 맞는 <strong>맞춤형 웹개발 서비스</strong>로 <em>빠른 납기</em>와 고품질의 반응형 웹사이트를 제작합니다
              </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 border border-yellow-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-yellow-500 mb-1 sm:mb-2">24H</div>
                <div className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800 mb-1">초고속</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">빠른 완성</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 border border-green-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-green-500 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800 mb-1">맞춤형</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">완벽 부합</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 border border-purple-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-lg sm:text-2xl lg:text-4xl font-bold text-purple-500 mb-1 sm:mb-2">무제한</div>
                <div className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800 mb-1">수정</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight">무료 지원</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300" role="img" aria-label="랜딩페이지 제작 서비스 아이콘">
                  <Globe className="h-5 w-5 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  랜딩페이지
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6 leading-tight">
                  고품질 홍보 페이지<br className="sm:hidden" />
                  <span className="hidden sm:inline">SEO 최적화와 </span>빠른 로딩
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
                    반응형
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
                    SEO
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
                    고속
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-green-600 transition-colors">
                  데이터 수집
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6 leading-tight">
                  자동화 수집<br className="sm:hidden" />
                  <span className="hidden sm:inline">및 </span>분석 시스템
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                    스크래핑
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                    API 연동
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                    시각화
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-purple-600 transition-colors">
                  관리 대시보드
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6 leading-tight">
                  비즈니스 관리<br className="sm:hidden" />
                  <span className="hidden sm:inline">위한 </span>직관적 대시보드
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full mr-1 sm:mr-2"></div>
                    실시간
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full mr-1 sm:mr-2"></div>
                    통계 분석
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full mr-1 sm:mr-2"></div>
                    사용자
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-orange-600 transition-colors">
                  광고 페이지
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6 leading-tight">
                  높은 전환율<br className="sm:hidden" />
                  <span className="hidden sm:inline">위한 </span>최적화 페이지
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-500">
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mr-1 sm:mr-2"></div>
                    전환율
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mr-1 sm:mr-2"></div>
                    A/B 테스트
                  </li>
                  <li className="flex items-center justify-center sm:justify-start">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mr-1 sm:mr-2"></div>
                    고속 로딩
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                어떤 프로젝트든 상담해보세요
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                아이디어만 있으면 됩니다. 나머지는 저희가 해결해드릴게요.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                무료 상담 받기
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              작업 프로세스
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="block">체계적인 작업 절차로</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">완벽한 결과물 보장</span>
            </h2>
                          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <strong>3년간의 웹개발 경험</strong>과 투명한 프로세스로 고객과 소통하며 <em>검증된 품질</em>의 웹사이트를 제작합니다
              </p>
          </div>

          {/* Desktop and Mobile Process Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {/* Step 1 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">1. 문의</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  요구사항 파악<br className="sm:hidden" />
                  <span className="hidden sm:inline">및 </span>초기 상담
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">2. 제작</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  개발 진행<br className="sm:hidden" />
                  <span className="hidden sm:inline">및 </span>중간 보고
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">3. 결제</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  견적 확인<br className="sm:hidden" />
                  <span className="hidden sm:inline">및 </span>안전 결제
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">4. 수정</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                  피드백 반영<br className="sm:hidden" />
                  <span className="hidden sm:inline">및 </span>최종 완성
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>



      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              포트폴리오
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="block">실제 제작 사례로</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">검증된 실력 확인</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              다양한 분야의 웹사이트 제작 경험과 실제 운영 중인 서비스들을 확인해보세요
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Portfolio Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">데브원엘 포트폴리오</h3>
                    <p className="text-gray-600">풀스택 개발자 | 웹사이트 제작 전문가</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">React, Next.js, TypeScript 기반 현대적 웹 솔루션</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">반응형 디자인 및 성능 최적화</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">다양한 분야의 실제 운영 서비스 제작 경험</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">고객 만족도</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">24H</div>
                    <div className="text-sm text-gray-600">평균 응답시간</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">최신</div>
                    <div className="text-sm text-gray-600">기술 스택</div>
                  </div>
                </div>

                <a 
                  href="https://portfolio-landing-peach.vercel.app/#portfolio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackButtonClick('portfolio_view')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Globe className="h-5 w-5" />
                  <span>포트폴리오 상세보기</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              {/* Right Side - Portfolio Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 relative overflow-hidden">
                  {/* Browser mockup */}
                  <div className="bg-white rounded-xl shadow-lg">
                    <div className="bg-gray-200 rounded-t-xl px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white mx-4 px-3 py-1 rounded text-xs text-gray-500">
                        portfolio-landing-peach.vercel.app
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="text-center space-y-3">
                        <div className="h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-8"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-500 rounded"></div>
                        </div>
                        <div className="h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-green-500 rounded"></div>
                        </div>
                        <div className="h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-purple-500 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-12 bg-gray-100 rounded-lg"></div>
                        <div className="h-12 bg-gray-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200/50 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-pink-200/50 rounded-full"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              자주 묻는 질문
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="block">궁금한 점이 있으신가요?</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">여기서 답을 찾아보세요</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              고객들이 가장 많이 궁금해하는 질문들을 모았습니다
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="group bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    작업 기간은 얼마나 걸리나요?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    프로젝트 규모에 따라 다르지만, 일반적인 랜딩페이지는 <span className="font-semibold text-blue-600">1-3일</span>, 
                    관리자 대시보드는 <span className="font-semibold text-blue-600">1-2주</span> 정도 소요됩니다. 
                    급한 경우 추가 비용으로 단축 가능합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                    결제 방식은 어떻게 되나요?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-green-600">크몽을 통한 안전결제</span> 또는 계좌이체 모두 가능합니다. 
                    프로젝트 규모에 따라 결제 방식을 협의하여 진행하며, 
                    대형 프로젝트의 경우 분할 결제도 가능합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                    수정은 몇 번까지 가능한가요?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    기본적으로 <span className="font-semibold text-orange-600">2-3회 수정</span>이 포함되어 있으며, 
                    대폭적인 변경이 아닌 세부 조정은 추가 비용 없이 진행됩니다. 
                    고객 만족까지 최선을 다합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                    사후 지원은 어떻게 되나요?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    납품 후 <span className="font-semibold text-purple-600">1개월간 무료 A/S</span>를 제공하며, 
                    이후 수정 1건당 1천원 수준으로 제공해드립니다. 
                    긴급한 문제는 24시간 내 해결해드립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                    어떤 기술을 사용하나요?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-teal-600">React, TypeScript, Tailwind CSS</span> 등 
                    최신 기술 스택을 사용하여 안정적이고 확장 가능한 웹사이트를 제작합니다. 
                    모든 기술은 업계 표준을 따릅니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              지금 바로 시작하세요
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                프로젝트 시작하기
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-yellow-300">24시간 내 답변</span> 보장<br />
              지금 바로 상담받고 견적을 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
            <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold mb-1">이메일</h3>
              <p className="text-blue-100 text-xs leading-tight mb-1 sm:mb-2">빠른 상담</p>
              <p className="text-white font-semibold text-xs sm:text-sm lg:text-base break-all">wjb127@naver.com</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold mb-1">카카오톡</h3>
              <p className="text-blue-100 text-xs leading-tight mb-1 sm:mb-2">실시간 상담</p>
              <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">loantail</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold mb-1">크몽</h3>
              <p className="text-blue-100 text-xs leading-tight mb-1 sm:mb-2">안전 결제</p>
              <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">프로필 보기</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a 
              href="https://kmong.com/gig/657211" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactForm()}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-base sm:text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 min-h-[48px] touch-manipulation"
            >
              <span className="relative z-10 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                지금 의뢰하기
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="mailto:wjb127@naver.com" 
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center min-h-[48px] touch-manipulation"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
              상담 문의하기
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  웹개발 외주 전문
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                빠른 납기와 깔끔한 완성도로<br />
                신뢰받는 웹개발 파트너가 되겠습니다.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                  <Star className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">서비스</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">랜딩페이지 제작</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">관리자 대시보드</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">광고용 웹페이지</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">데이터 수집 시스템</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">기술 스택</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">React & Next.js</li>
                <li className="text-gray-400">TypeScript</li>
                <li className="text-gray-400">Tailwind CSS</li>
                <li className="text-gray-400">Modern Web APIs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">연락처</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <span className="block font-semibold text-white mb-1">이메일</span>
                  wjb127@naver.com
                </li>
                <li className="text-gray-400">
                  <span className="block font-semibold text-white mb-1">카카오톡</span>
                  loantail
                </li>
                <li className="text-gray-400">
                  <span className="block font-semibold text-white mb-1">크몽</span>
                  <a 
                    href="https://kmong.com/@%EB%8D%B0%EB%B8%8C%EC%9B%90%EC%97%98" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    프로필 보기
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 웹개발 외주 전문. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  현재 프로젝트 접수 중
                </span>
                <span>평균 응답시간: 2시간</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
