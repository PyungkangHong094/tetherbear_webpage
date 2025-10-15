import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';

function Navbar() {
  const location = useLocation();
  const [hamburgerAnimation, setHamburgerAnimation] = useState(null);
  const hamburgerRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lottie 애니메이션 로드
  useEffect(() => {
    fetch('https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json')
      .then(response => response.json())
      .then(data => setHamburgerAnimation(data))
      .catch(error => console.error('Lottie 로딩 실패:', error));
  }, []);

  // 햄버거 메뉴 토글
  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
    
    if (hamburgerRef.current) {
      if (!menuOpen) {
        // 메뉴 열기: 0 → 40 프레임
        hamburgerRef.current.playSegments([0, 40], true);
      } else {
        // 메뉴 닫기: 40 → 0 프레임
        hamburgerRef.current.playSegments([40, 0], true);
      }
    }
  };

  return (
    <div className="section nav">
      <div className="container nav">
        <div className="nav-links-wrapper">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'w--current' : ''}`}
            data-value="Introduction"
          >
            Home
          </Link>
          <Link 
            to="/product" 
            className={`nav-link ${location.pathname === '/product' ? 'w--current' : ''}`}
            data-value="Resources"
          >
            Product
          </Link>
          <Link 
            to="/partnership" 
            className={`nav-link ${location.pathname === '/partnership' ? 'w--current' : ''}`}
            data-value="Partnership"
          >
            Partnership
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'w--current' : ''}`}
            data-value="About"
          >
            About
          </Link>
        </div>
        
        <div className="hamburger-wrapper" onClick={handleHamburgerClick}>
          {hamburgerAnimation && (
            <Lottie 
              lottieRef={hamburgerRef}
              animationData={hamburgerAnimation}
              loop={false}
              autoplay={false}
              className="hamburger-lottie"
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;