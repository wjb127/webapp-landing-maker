'use client'

import { useState } from 'react'
import { Menu, X, Code, MessageCircle } from 'lucide-react'

interface MobileMenuProps {
  onContactClick: () => void
}

export default function MobileMenu({ onContactClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const handleLinkClick = (href: string) => {
    closeMenu()
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    closeMenu()
    onContactClick()
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-900" />
        ) : (
          <Menu className="h-6 w-6 text-gray-900" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-lg font-bold text-gray-900">웹개발 외주</span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="메뉴 닫기"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6" aria-label="모바일 내비게이션">
            <ul className="space-y-6">
              <li>
                <button
                  onClick={() => handleLinkClick('#services')}
                  className="flex items-center w-full text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors touch-manipulation py-3"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('#process')}
                  className="flex items-center w-full text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors touch-manipulation py-3"
                >
                  작업절차
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('#portfolio')}
                  className="flex items-center w-full text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors touch-manipulation py-3"
                >
                  포트폴리오
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('#faq')}
                  className="flex items-center w-full text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors touch-manipulation py-3"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('#contact')}
                  className="flex items-center w-full text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors touch-manipulation py-3"
                >
                  연락처
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <a
              href="https://kmong.com/gig/657211"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleContactClick}
              className="flex items-center justify-center w-full gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
            >
              <MessageCircle className="h-5 w-5" />
              지금 문의하기
            </a>
          </div>
        </div>
      </div>
    </>
  )
}