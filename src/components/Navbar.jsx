import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';

function Navbar() {
  const location = useLocation();
  const [hamburgerAnimation, setHamburgerAnimation] = useState(null);
  const hamburgerRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOS, setMobileOS] = useState('unknown'); // 'ios', 'android', 'desktop'

  // Lottie 애니메이션 로드
  useEffect(() => {
    fetch('https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json')
      .then(response => response.json())
      .then(data => setHamburgerAnimation(data))
      .catch(error => console.error('Lottie 로딩 실패:', error));
  }, []);

  // OS 감지
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setMobileOS('ios');
    } else if (/android/i.test(userAgent)) {
      setMobileOS('android');
    } else {
      setMobileOS('desktop');
    }
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
            display: block !important;
            width: 50px !important; /* Explicit width */
            height: 50px !important; /* Explicit height */
            margin-left: auto; /* Push to the right if in flex container */
          }
          
          .nav-link {
            font-size: 2em !important;
            padding: 0.5em 0 !important;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards;
          }
          
          .mobile-menu-open .nav-link:nth-child(1) { animation-delay: 0.3s; }
          .mobile-menu-open .nav-link:nth-child(2) { animation-delay: 0.4s; }
          .mobile-menu-open .nav-link:nth-child(3) { animation-delay: 0.5s; }
          .mobile-menu-open .nav-link:nth-child(4) { animation-delay: 0.6s; }
          .mobile-menu-open .nav-link:nth-child(5) { animation-delay: 0.7s; } /* Download button */
          
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
        
        /* 태블릿 및 데스크탑에서는 기존 스타일 유지 및 정렬 수정 */
        @media screen and (min-width: 480px) {
          .nav-links-wrapper {
            transform: none !important;
            display: flex !important;
            align-items: center !important;
            gap: 30px; /* Consistent spacing between items */
          }
          
          .hamburger-wrapper {
            display: none !important;
          }

          /* Reset margins for desktop to rely on gap */
          .nav-link {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding: 0 !important;
          }

          /* Adjust button margin if needed, but gap handles it now */
          .nav-download-btn {
            margin-left: 0 !important;
          }
        }
        
        /* 부드러운 전환 효과 */
        .nav-links-wrapper {
          will-change: transform;
        }

        /* Download Button Style */
        .nav-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white !important;
          padding: 8px 16px !important;
          border-radius: 12px;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;
          border: 1px solid rgba(255,255,255,0.2);
          margin-left: 12px;
          text-decoration: none;
        }

        .nav-download-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.4);
        }
        
        .nav-download-btn svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        @media screen and (max-width: 479px) {
          .nav-download-btn {
            margin-top: 20px;
            margin-left: 0;
            font-size: 1.2em !important;
            padding: 12px 24px !important;
            background: linear-gradient(135deg, #4c45a5 0%, #2a2a4a 100%);
            border: none;
          }
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

            {/* Conditional Download Button */}
            {(mobileOS === 'ios' || mobileOS === 'desktop') && (
              <a
                href="https://apps.apple.com/kr/app/%ED%85%8C%EB%8D%94%EB%B2%A0%EC%96%B4-tetherbear/id6754923635"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-download-btn"
                onClick={handleLinkClick}
              >
                <svg viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                </svg>
                App Store
              </a>
            )}

            {(mobileOS === 'android' || mobileOS === 'desktop') && (
              <a
                href="https://play.google.com/store/apps/details?id=com.tetherbearflutter.app&hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-download-btn"
                onClick={handleLinkClick}
              >
                <svg viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                Google Play
              </a>
            )}

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