import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';

function Navbar() {
  const location = useLocation();
  const [hamburgerAnimation, setHamburgerAnimation] = useState(null);
  const hamburgerRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lottie 애니메이션 로드
  useEffect(() => {
    fetch('https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json')
      .then(response => response.json())
      .then(data => setHamburgerAnimation(data))
      .catch(error => console.error('Lottie 로딩 실패:', error));
  }, []);

  // 햄버거 메뉴 토글
  const handleHamburgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    if (hamburgerRef.current) {
      if (!mobileMenuOpen) {
        // 메뉴 열기: 20 → 40 프레임 (X 아이콘으로 변경)
        hamburgerRef.current.playSegments([20, 40], true);
        // 스크롤 방지
        document.body.style.overflowY = 'hidden';
      } else {
        // 메뉴 닫기: 40 → 20 프레임 (햄버거 아이콘으로 복귀)
        hamburgerRef.current.playSegments([40, 20], true);
        // 스크롤 재개
        document.body.style.overflowY = 'auto';
      }
    }
  };

  // 링크 클릭 시 모바일 메뉴 자동 닫기
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      if (hamburgerRef.current) {
        hamburgerRef.current.playSegments([40, 20], true);
      }
      document.body.style.overflowY = 'auto';
    }
  };

  // 컴포넌트 언마운트 시 스크롤 복구
  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <>
      <style>{`
        /* 모바일 메뉴 전용 스타일 */
        @media screen and (max-width: 479px) {
          .nav-links-wrapper {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            min-height: 100vh !important;
            background-color: #000 !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            z-index: 1 !important;
            transform: translateY(-101%) !important;
            transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1) !important;
            display: flex !important;
          }
          
          .nav-links-wrapper.mobile-menu-open {
            transform: translateY(0) !important;
          }
          
          .hamburger-wrapper {
            z-index: 2 !important;
            position: relative !important;
            cursor: pointer !important;
          }
          
          .nav-link {
            font-size: 2em !important;
            padding: 0.5em 0 !important;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards;
          }
          
          .mobile-menu-open .nav-link:nth-child(1) {
            animation-delay: 0.3s;
          }
          
          .mobile-menu-open .nav-link:nth-child(2) {
            animation-delay: 0.4s;
          }
          
          .mobile-menu-open .nav-link:nth-child(3) {
            animation-delay: 0.5s;
          }
          
          .mobile-menu-open .nav-link:nth-child(4) {
            animation-delay: 0.6s;
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* X 버튼 스타일 개선 */
          .hamburger-wrapper.menu-active {
            mix-blend-mode: normal !important;
          }
          
          .hamburger-wrapper.menu-active .hamburger-lottie {
            filter: invert(1);
          }
        }
        
        /* 태블릿 및 데스크탑에서는 기존 스타일 유지 */
        @media screen and (min-width: 480px) {
          .nav-links-wrapper {
            transform: none !important;
          }
          
          .hamburger-wrapper {
            display: none !important;
          }
        }
        
        /* 부드러운 전환 효과 */
        .nav-links-wrapper {
          will-change: transform;
        }
      `}</style>
      
      <div className="section nav">
        <div className="container nav">
          <div className={`nav-links-wrapper ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'w--current' : ''}`}
              data-value="Introduction"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'w--current' : ''}`}
              data-value="About"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/product" 
              className={`nav-link ${location.pathname === '/product' ? 'w--current' : ''}`}
              data-value="Resources"
              onClick={handleLinkClick}
            >
              Product
            </Link>
            <Link 
              to="/partnership" 
              className={`nav-link ${location.pathname === '/partnership' ? 'w--current' : ''}`}
              data-value="Partnership"
              onClick={handleLinkClick}
            >
              Partnership
            </Link>
            
          </div>
          
          <div 
            className={`hamburger-wrapper ${mobileMenuOpen ? 'menu-active' : ''}`} 
            onClick={handleHamburgerClick}
          >
            {hamburgerAnimation && (
              <Lottie 
                lottieRef={hamburgerRef}
                animationData={hamburgerAnimation}
                loop={false}
                autoplay={false}
                className="hamburger-lottie"
                style={{ width: '100%', height: '100%' }}
                initialSegment={[20, 20]} // 초기 상태를 햄버거로 설정
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;