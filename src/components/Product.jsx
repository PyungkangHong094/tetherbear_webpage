import React, { useEffect } from 'react';
import '../styles/Product.css';

const Product = () => {
  useEffect(() => {
    // 페이지 로드 후 스크롤이 항상 가능하도록 보장
    document.body.style.overflowY = "auto";
    
    // 햄버거 메뉴 클릭 이벤트 처리
    const handleHamburgerClick = (e) => {
      const hamburgerWrapper = e.currentTarget;
      const clicks = hamburgerWrapper.dataset.clicks === 'true';
      
      if (clicks) {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }
      
      hamburgerWrapper.dataset.clicks = !clicks;
    };

    // 햄버거 메뉴에 이벤트 리스너 추가
    const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
    if (hamburgerWrapper) {
      hamburgerWrapper.addEventListener('click', handleHamburgerClick);
    }

    // SmoothScroll 설정
    if (window.SmoothScroll) {
      window.SmoothScroll({
        animationTime: 800,
        stepSize: 85,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
      });
    }

    // 클린업 함수
    return () => {
      if (hamburgerWrapper) {
        hamburgerWrapper.removeEventListener('click', handleHamburgerClick);
      }
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <div className="section nav">
        <div className="container nav">
          <div className="nav-links-wrapper">
            <a href="/" data-value="Introduction" className="nav-link">Home</a>
            <a href="/product" data-value="Resources" aria-current="page" className="nav-link w--current">Product</a>
          </div>
          <div className="hamburger-wrapper">
            <div data-is-ix2-target="1" className="hamburger-lottie" data-w-id="82475569-db95-efa0-a402-81ea877a636b" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="3.75" data-duration="3.75" data-ix2-initial-state="20"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="subheader is-yellow"><strong className="bold-text-4">UTILIZE THE BEST TOOLS</strong><br /></div>
        <h1 className="heading-3">이전과는 전혀 다른 방식으로 <br />시장에 도전하세요.</h1>
      </div>
      
      <div className="div-block-12"></div>

      {/* Main Content Section */}
      <div className="section-tablet-scroll-animation">
        <div className="container-w3 gutter-outside">
          <div className="p-xl-start p-xl-end">
            <div className="text-center">
              <div className="wow-animation">
                <div className="wow-heading wow-gradient">우리는 세계가 시장을 더욱 <br />스마트하게 볼 수 있도록 <br />‍<br />차세대 거래 지표를 만듭니다.</div>
                <a href="/price" className="button-2 is-yellow margin-top-30 w-button">고급 차트 받기</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-w2 gutter-outside">
          <div data-w-id="cc2bda7f-df30-f320-d65c-506b24b40f03" className="tablet-mockup-animation">
            <div data-w-id="cc2bda7f-df30-f320-d65c-506b24b40f04" className="_3d-tablet-wrap">
              <div className="_3d-tablet-inner">
                <div className="ipad-mockup">
                  <div className="ipad-screen overflow-hidden">
                    <img src="/images/ipadchartgetalgo.png" loading="lazy" sizes="(max-width: 991px) 94vw, 78vw" srcSet="/images/ipadchartgetalgo-p-500.png 500w, /images/ipadchartgetalgo-p-800.png 800w, /images/ipadchartgetalgo-p-1080.png 1080w, /images/ipadchartgetalgo.png 1202w" alt="" className="screenshot-scroll" />
                  </div>
                  <img src="/images/ipadchartgetalgo.png" loading="lazy" sizes="(max-width: 991px) 100vw, 83vw" srcSet="/images/ipadchartgetalgo-p-500.png 500w, /images/ipadchartgetalgo-p-800.png 800w, /images/ipadchartgetalgo-p-1080.png 1080w, /images/ipadchartgetalgo.png 1202w" alt="" className="ipad-shape" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-sm-start container-w3 text-center"></div>
        </div>
      </div>

      {/* Mission Sections */}
      <div>
        <div className="page-wrapper-2">
          <div className="ovf-hide-section"></div>
          <div id="about" className="main-section">
            <div className="main-container">
              <div className="w-layout-grid _1-2-grid reverse">
                <img src="/images/chartgetalgoIndicator.png" loading="lazy" id="w-node-_46d3e7ab-541e-9517-e836-da6644dd3473-49f2a8a2" height="Auto" alt="" srcSet="/images/차트겟-보조지표-p-500.png 500w, /images/차트겟-보조지표-p-800.png 800w, /images/차트겟-보조지표-p-1080.png 1080w, /images/chartgetalgoIndicator.png 1500w" sizes="(max-width: 1439px) 90vw, 1100px" className="hero-image-2" />
                <div id="w-node-_46d3e7ab-541e-9517-e836-da6644dd3474-49f2a8a2" className="content-wrap">
                  <h2 className="h2">We're on a huge mission</h2>
                  <div className="spacer-m"></div>
                  <p className="paragraph-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  <div className="spacer-l"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="page-wrapper-2">
          <div className="ovf-hide-section"></div>
          <div id="about" className="main-section">
            <div className="main-container">
              <div className="w-layout-grid _1-2-grid reverse">
                <div id="w-node-_1218c13f-41aa-d815-8f3e-6d557da6b171-49f2a8a2" className="content-wrap">
                  <h2 className="h2">We're on a huge mission</h2>
                  <div className="spacer-m"></div>
                  <p className="paragraph-5">고급 반전 신호, 완전 자동화된 가격 조치 툴킷 및 20개 이상의 프리미엄 기능에 액세스하세요. 지금까지 만들어진 가장 발전된 지표는 모두 커뮤니티 피드백을 바탕으로 만들어졌습니다.</p>
                  <div className="spacer-l"></div>
                </div>
                <img src="https://assets-global.website-files.com/62eb909a3fa9a704a2e98187/62eb909a3fa9a767dce981e4_pexels-pixabay-461064.jpg" loading="lazy" id="w-node-_1218c13f-41aa-d815-8f3e-6d557da6b178-49f2a8a2" alt="" className="hero-image-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="page-wrapper-2">
          <div className="ovf-hide-section"></div>
          <div id="about" className="main-section">
            <div className="main-container">
              <div className="w-layout-grid _1-2-grid reverse">
                <img src="https://assets-global.website-files.com/62eb909a3fa9a704a2e98187/62eb909a3fa9a767dce981e4_pexels-pixabay-461064.jpg" loading="lazy" id="w-node-_842a6875-db64-9fa5-5f99-ac91afbc9dd6-49f2a8a2" alt="" className="hero-image-2" />
                <div id="w-node-_842a6875-db64-9fa5-5f99-ac91afbc9dd7-49f2a8a2" className="content-wrap">
                  <h2 className="h2">We're on a huge mission</h2>
                  <div className="spacer-m"></div>
                  <p className="paragraph-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  <div className="spacer-l"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-2">
        <div className="hero-wrapper">
          <div className="hero-background-image projects"></div>
          <div className="dark-overlay"></div>
          <div className="content-wrapper">
            <div className="content-width">
              <h3 className="subtitle"><strong>EASY TO USE</strong></h3>
              <h2 className="display-heading-white">The AI solution for turning confusion into clarity.</h2>
              <h3 className="sub-heading light-text">Find confluence in every trade with our indicators designed for <strong>any market</strong>. Works on any device and it's all real-time data.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-text">TetherBear</div>
            <p style={{fontSize: '14px', color: '#ccc', margin: 0, fontFamily: "'Open Sans', sans-serif"}}>
              Premium Trading Solutions
            </p>
          </div>
          
          <div className="footer-social">
            <div className="social-icons">
              <a href="https://www.facebook.com/tetherbear" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a href="https://twitter.com/tetherbear" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="https://www.instagram.com/tetherbear/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="https://discord.gg/tetherbear" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/company/tetherbear/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          © 2024 TetherBear. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Product;