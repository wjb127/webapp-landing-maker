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
  Settings,
  CheckCircle
} from 'lucide-react'
import StructuredData from './components/StructuredData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">웹개발 외주 전문</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors">서비스</a>
              <a href="#process" className="text-gray-500 hover:text-gray-900 transition-colors">작업절차</a>
              {/* <a href="#portfolio" className="text-gray-500 hover:text-gray-900 transition-colors">포트폴리오</a> */}
              <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300/20 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-300/30 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-blue-400/25 rounded-full animate-pulse delay-1500"></div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-sm font-medium text-blue-200 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              현재 신규 프로젝트 접수 중
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                빠른 납기
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                + 깔끔한 완성도
              </span>
              <span className="block bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent">
                웹개발 외주 전문
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
              <span className="font-semibold text-white">3일 ~ 2주</span> 안에 완성하는 
              <span className="font-semibold text-yellow-300"> 맞춤형 웹사이트</span><br />
              <span className="text-lg sm:text-xl md:text-2xl text-blue-200">
                의뢰인이 만족할 때까지 무료 수정 지원
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 animate-slide-up delay-500">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
              >
                <span className="relative z-10">지금 의뢰하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#services" 
                className="group px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                서비스 둘러보기
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
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
              <span className="block">어떤 웹사이트든</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">완벽하게 제작</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              비즈니스 목적에 맞는 맞춤형 웹사이트를 빠르고 정확하게 제작합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  랜딩페이지
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  제품/서비스 홍보용 고품질 랜딩페이지 제작
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    반응형 디자인
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    SEO 최적화
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    빠른 로딩 속도
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  데이터 수집
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  자동화된 데이터 수집 및 분석 시스템 구축
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    웹 스크래핑
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    API 연동
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    데이터 시각화
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  관리자 대시보드
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  비즈니스 관리를 위한 직관적인 대시보드
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    실시간 모니터링
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    통계 분석
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    사용자 관리
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  광고용 웹페이지
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  높은 전환율을 위한 최적화된 광고 페이지
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    전환율 최적화
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    A/B 테스트
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    빠른 로딩 속도
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
              투명한 프로세스로 고객과 소통하며 최고의 품질을 만들어갑니다
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 transform -translate-y-1/2 rounded-full"></div>
            
            <div className="relative grid grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. 문의</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    요구사항 파악 및<br />
                    초기 상담 진행
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. 견적</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    상세 견적서 제공<br />
                    일정 및 비용 협의
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <Code className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. 제작</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    개발 진행 및<br />
                    중간 보고서 제공
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. 수정</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    피드백 반영 및<br />
                    최종 품질 조정
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative z-10">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-24 h-24 bg-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. 납품</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    배포 완료 및<br />
                    사후 지원 제공
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. 문의</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  요구사항 파악 및 초기 상담 진행
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-300 to-green-300"></div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. 견적</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  상세 견적서 제공 및 일정 협의
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-green-300 to-purple-300"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. 제작</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  개발 진행 및 중간 보고서 제공
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-purple-300 to-orange-300"></div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. 수정</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  피드백 반영 및 최종 품질 조정
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-orange-300 to-teal-300"></div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">5. 납품</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  배포 완료 및 사후 지원 제공
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Portfolio Section - Hidden for now */}
      {/* 
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              포트폴리오
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 업종의 성공적인 프로젝트 경험
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">이커머스 랜딩페이지</h3>
                <p className="text-gray-600 mb-4">제품 판매용 랜딩페이지 제작<br />결제 시스템 연동</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>작업기간: 1주</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">교육업체 관리시스템</h3>
                <p className="text-gray-600 mb-4">수강생 관리 대시보드<br />출석 체크 시스템</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>작업기간: 2주</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">광고용 이벤트 페이지</h3>
                <p className="text-gray-600 mb-4">구글 애즈 최적화<br />고전환율 달성</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>작업기간: 3일</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
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

          <div className="space-y-6">
            <div className="group bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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

            <div className="group bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
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

            <div className="group bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
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

            <div className="group bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
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

            <div className="group bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">이메일</h3>
              <p className="text-blue-100 text-sm mb-4">빠른 상담 및 견적 문의</p>
              <p className="text-white font-semibold">wjb127@naver.com</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">카카오톡</h3>
              <p className="text-blue-100 text-sm mb-4">실시간 채팅 상담</p>
              <p className="text-white font-semibold">loantail</p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">크몽</h3>
              <p className="text-blue-100 text-sm mb-4">안전한 결제 시스템</p>
              <p className="text-white font-semibold">프로필 보기</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:wjb127@naver.com" 
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                지금 의뢰하기
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="mailto:wjb127@naver.com" 
              className="group px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
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
                  프로필 링크
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
