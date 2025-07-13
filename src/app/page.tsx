import { 
  Code, 
  Zap, 
  Mail, 
  MessageCircle,
  Clock,
  Star,
  Monitor,
  BarChart3,
  Globe
} from 'lucide-react'
import StructuredData from './components/StructuredData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">웹개발 외주 전문</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-500 hover:text-gray-900">서비스</a>
              <a href="#process" className="text-gray-500 hover:text-gray-900">작업절차</a>
              <a href="#portfolio" className="text-gray-500 hover:text-gray-900">포트폴리오</a>
              <a href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">연락처</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              빠른 납기, 깔끔한 완성도로<br />
              <span className="text-blue-200">신뢰받는 웹개발 파트너</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              최신 기술 스택 기반 맞춤형 웹개발 서비스<br />
              랜딩페이지부터 관리자 대시보드까지 원스톱 솔루션
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                지금 의뢰하기
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                포트폴리오 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              제공하는 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              고객의 니즈에 맞춘 맞춤형 웹개발 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">랜딩페이지 제작</h3>
              <p className="text-gray-600">
                전환율 높은 랜딩페이지<br />
                반응형 디자인 적용
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">데이터 수집 기능</h3>
              <p className="text-gray-600">
                설문폼, 클릭 데이터 수집<br />
                이메일 저장 시스템
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Monitor className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">관리자 대시보드</h3>
              <p className="text-gray-600">
                회원가입, 로그인 시스템<br />
                데이터 관리 인터페이스
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">광고용 웹페이지</h3>
              <p className="text-gray-600">
                구글 애즈 최적화 구조<br />
                빠른 로딩 속도
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              작업 절차
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              체계적인 프로세스로 안정적인 결과물을 보장합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">문의</h3>
              <p className="text-gray-600">요구사항 파악 및<br />상담 진행</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">견적</h3>
              <p className="text-gray-600">상세 견적서 제공<br />일정 협의</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">제작</h3>
              <p className="text-gray-600">개발 진행 및<br />중간 보고</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2">수정</h3>
              <p className="text-gray-600">피드백 반영 및<br />최종 조정</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
              <h3 className="text-lg font-semibold mb-2">납품</h3>
              <p className="text-gray-600">배포 완료 및<br />사후 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">작업 기간은 얼마나 걸리나요?</h3>
              <p className="text-gray-600">
                프로젝트 규모에 따라 다르지만, 일반적인 랜딩페이지는 3-7일, 관리자 대시보드는 1-2주 정도 소요됩니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">결제 방식은 어떻게 되나요?</h3>
              <p className="text-gray-600">
                크몽을 통한 안전결제 또는 계좌이체 모두 가능합니다. 프로젝트 규모에 따라 결제 방식을 협의하여 진행합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">수정은 몇 번까지 가능한가요?</h3>
              <p className="text-gray-600">
                기본적으로 2-3회 수정이 포함되어 있으며, 대폭적인 변경이 아닌 세부 조정은 추가 비용 없이 진행됩니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">사후 지원은 어떻게 되나요?</h3>
              <p className="text-gray-600">
                납품 후 1개월간 무료 A/S를 제공하며, 이후 수정 1건당 1천원 수준으로 제공해드립니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">어떤 기술을 사용하나요?</h3>
              <p className="text-gray-600">
                React, TypeScript, Tailwind CSS 등 최신 기술 스택을 사용하여 안정적이고 확장 가능한 웹사이트를 제작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프로젝트 시작하기
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            지금 바로 상담받고 견적을 확인해보세요
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">이메일</h3>
              <p className="text-blue-100">wjb127@naver.com</p>
            </div>

            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">카카오톡</h3>
              <p className="text-blue-100">@your-kakao-id</p>
            </div>

            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">크몽</h3>
              <p className="text-blue-100">크몽 프로필 링크</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              지금 의뢰하기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              상담 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">웹개발 외주 전문</span>
              </div>
              <p className="text-gray-400">
                빠른 납기, 깔끔한 완성도로<br />
                신뢰받는 웹개발 파트너
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>랜딩페이지 제작</li>
                <li>관리자 대시보드</li>
                <li>광고용 웹페이지</li>
                <li>데이터 수집 시스템</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">기술 스택</h3>
              <ul className="space-y-2 text-gray-400">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Modern Web APIs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: wjb127@naver.com</li>
                <li>카카오톡: @your-kakao-id</li>
                <li>크몽: 프로필 링크</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 웹개발 외주 전문. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
