import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import Navbar from './Navbar';  // ✅ 추가
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/webflow.css';
import '../styles/tjidajfi.webflow.css';
import Footer from './Footer';

const Product = () => {
  // Hamburger 메뉴 Lottie 애니메이션
  const [hamburgerAnimation, setHamburgerAnimation] = useState(null);
  const hamburgerRef = useRef();

  // iPad 애니메이션을 위한 ref 및 스크롤 추적
  const tabletRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tabletRef,
    offset: ["start end", "end start"]
  });

  // 스크롤 진행도에 따른 애니메이션 값 변환
  // 0% → 48%: 회전 70도 → 0도, 위치 -18vh → 0vh
  const rotateX = useTransform(scrollYProgress, [0, 0.48], [70, 0]);
  const yPosition = useTransform(scrollYProgress, [0, 0.48], ["-18vh", "0vh"]);
  
  // 스크린샷 스크롤 애니메이션: 38% → 100%: 0% → -30%
  const screenshotY = useTransform(scrollYProgress, [0.38, 1], ["0%", "-30%"]);

  useEffect(() => {
    // Hamburger Lottie 애니메이션 JSON 로드
    fetch('https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json')
      .then(response => response.json())
      .then(data => setHamburgerAnimation(data))
      .catch(error => console.error('Failed to load hamburger animation:', error));

    // Webflow 재초기화 - DOM이 완전히 로드된 후
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      window.Webflow.require('ix2').init();
    }
  }, []);

  return (
    <div>
      {/* Footer Styles */}
      <style>{`
        .footer-section {
            background-color: #000;
            border-top: 1px solid #333;
            padding: 40px 25px;
            color: #fff;
        }
        
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
        }
        
        .footer-brand {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .footer-logo {
            width: 120px;
            height: auto;
            object-fit: contain;
        }
        
        .brand-text {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            font-weight: 600;
            background: linear-gradient(120deg, #e0cbe0, #4c45a5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .footer-social {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .social-link:hover {
            background: linear-gradient(120deg, #4c45a5, #e0cbe0);
            transform: translateY(-2px);
        }
        
        .social-icon {
            width: 24px;
            height: 24px;
            filter: brightness(0) invert(1);
        }
        
        .footer-copyright {
            width: 100%;
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #333;
            font-size: 14px;
            color: #888;
            font-family: 'Open Sans', sans-serif;
        }
        
        /* 반응형 디자인 */
        @media (max-width: 768px) {
            .footer-container {
                flex-direction: column;
                text-align: center;
                gap: 20px;
            }
            
            .footer-brand {
                flex-direction: column;
                gap: 10px;
            }
            
            .brand-text {
                font-size: 20px;
            }
            
            .social-icons {
                justify-content: center;
            }
        }
      `}</style>

      {/* Navigation */}
      <Navbar />
      {/* Header */}
      <div className="header">
        <div className="subheader is-yellow"><strong className="bold-text-4">UTILIZE THE BEST TOOLS</strong><br/></div>
        <h1 className="heading-3">이전과는 전혀 다른 방식으로 <br/>시장에 도전하세요.</h1>
      </div>
      <div className="div-block-12"></div>

      {/* Main Content Section */}
      <div className="section-tablet-scroll-animation">
        <div className="container-w3 gutter-outside">
          <div className="p-xl-start p-xl-end">
            <div className="text-center">
              <div className="wow-animation">
                <div className="wow-heading wow-gradient">우리는 세계가 시장을 더욱 <br/>스마트하게 볼 수 있도록 <br/>‍<br/>차세대 거래 지표를 만듭니다.</div>
                <a href="price.html" className="button-2 is-yellow margin-top-30 w-button">고급 차트 받기</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet Animation - React Native Solution */}
        <div className="container-w2 gutter-outside">
          <motion.div 
            ref={tabletRef}
            className="tablet-mockup-animation"
            style={{
              y: yPosition
            }}
          >
            <div className="_3d-tablet-wrap">
              <motion.div 
                className="_3d-tablet-inner"
                style={{
                  rotateX: rotateX
                }}
              >
                <div className="ipad-mockup">
                  <div className="ipad-screen overflow-hidden">
                    <motion.img 
                      src="images/ipad-pro-screen2.jpg"
                      loading="lazy"
                      sizes="(max-width: 991px) 94vw, 78vw" 
                      srcSet="images/ipad-pro-screen2-p-500.jpeg 500w, images/ipad-pro-screen2-p-800.jpeg 800w, images/ipad-pro-screen2-p-1080.jpeg 1080w, images/ipad-pro-screen2-p-1600.jpeg 1600w, images/ipad-pro-screen2.jpg 1791w" 
                      alt="" 
                      className="screenshot-scroll"
                      style={{
                        y: screenshotY
                      }}
                    />
                  </div>
                  <img 
                    src="images/ipadchartgetalgo.png" 
                    loading="lazy" 
                    sizes="(max-width: 991px) 100vw, 83vw"
                    srcSet="images/ipadchartgetalgo-p-500.png 500w, images/ipadchartgetalgo-p-800.png 800w, images/ipadchartgetalgo-p-1080.png 1080w, images/ipadchartgetalgo.png 1202w" 
                    alt="" 
                    className="ipad-shape"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="p-sm-start container-w3 text-center"></div>
        </div>
      </div>

      {/* Mission Section 1 */}
      <div>
        <div className="page-wrapper-2">
      <div className="ovf-hide-section"></div>
      <div id="about" className="main-section">
        <div className="main-container">
          <div className="w-layout-grid _1-2-grid reverse"><img src="images/chartgetalgoIndicator.png" loading="lazy" id="w-node-_46d3e7ab-541e-9517-e836-da6644dd3473-49f2a8a2" height="Auto" alt="" srcset="images/차트겟-보조지표-p-500.png 500w, images/차트겟-보조지표-p-800.png 800w, images/차트겟-보조지표-p-1080.png 1080w, images/chartgetalgoIndicator.png 1500w" sizes="(max-width: 1439px) 90vw, 1100px" className="hero-image-2"/>
            <div id="w-node-_46d3e7ab-541e-9517-e836-da6644dd3474-49f2a8a2" className="content-wrap">
              <h2 className="h2">복잡한 차트, 이제 테더베어가 쉽게 풀어드립니다</h2>
              <div className="spacer-m"></div>
              <p className="paragraph-5">어려운 금융 차트를 처음 접하는 분들도 간단하게 알아볼 수 있도록 <br/>전략적인 해설을 제공합니다.</p>
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
              <h2 className="h2">"이젠 유료방 NO!" 모든 차트를 한눈에 통합 관리</h2>
              <div className="spacer-m"></div>
              <p className="paragraph-5">여러 정보를 찾아 헤맬 필요 없이 나에게 맞는 관점을 찾아갈 수 있게 도와드립니다</p>
              <div className="spacer-l"></div>
            </div><img src="https://assets-global.website-files.com/62eb909a3fa9a704a2e98187/62eb909a3fa9a767dce981e4_pexels-pixabay-461064.jpg" loading="lazy" id="w-node-_1218c13f-41aa-d815-8f3e-6d557da6b178-49f2a8a2" alt="" className="hero-image-2"/>
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
          <div className="w-layout-grid _1-2-grid reverse"><img src="https://assets-global.website-files.com/62eb909a3fa9a704a2e98187/62eb909a3fa9a767dce981e4_pexels-pixabay-461064.jpg" loading="lazy" id="w-node-_842a6875-db64-9fa5-5f99-ac91afbc9dd6-49f2a8a2" alt="" className="hero-image-2"/>
            <div id="w-node-_842a6875-db64-9fa5-5f99-ac91afbc9dd7-49f2a8a2" className="content-wrap">
              <h2 className="h2">모든 시장에서 알맞은 거래 지원 서비스</h2>
              <div className="spacer-m"></div>
              <p className="paragraph-5">모든 시장 상황에 맞게 설계된 지표를 사용하여,<br/> 거래에서 놓치지 않아야 할 정확한 타점을 찾아드립니다</p>
              <div className="spacer-l"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-2">
    <div className="hero-wrapper">
      <div className="hero-background-image projects"></div>
      <div className="dark-overlay"></div>
      <div className="content-wrapper">
        <div className="content-width">
          <h3 className="subtitle"><strong>EASY TO USE</strong></h3>
          <h2 className="display-heading-white">The AI solution for turning confusion into clarity.</h2>
          <h3 className="sub-heading light-text">Find confluence in every trade with our indicators designed for <strong>any market</strong>. Works on any device and it&#x27;s all real-time data.</h3>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  );
};


export default Product;