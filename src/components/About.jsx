import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import '../styles/webflow.css';
import '../styles/tjidajfi.webflow.css';
// Footer import removed as it was commented out

function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <style>{`
        /* About 페이지 전용 스타일 */
        .about-page-wrapper {
          padding-top: 100px;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          overflow-x: hidden; /* Prevent horizontal scroll from animations */
        }

        .about-hero {
          text-align: center;
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-title {
          font-size: 64px;
          font-weight: 700;
          background: linear-gradient(120deg, #e0cbe0, #4c45a5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          animation: fadeInUp 0.8s ease;
        }

        .about-subtitle {
          font-size: 24px;
          color: #b8b8b8;
          max-width: 800px;
          margin: 0 auto 60px;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .about-content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 50px 40px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          transform: translateY(30px);
        }
        
        .about-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-card:hover {
          transform: translateY(-15px) scale(1.02);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(76, 69, 165, 0.5);
          box-shadow: 0 30px 60px rgba(76, 69, 165, 0.15);
        }

        .about-card-icon {
          font-size: 48px;
          margin-bottom: 25px;
        }

        .about-card-title {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }

        .about-card-text {
          font-size: 16px;
          color: #b8b8b8;
          line-height: 1.8;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .stat-item {
          text-align: center;
          padding: 40px 20px;
          background: rgba(76, 69, 165, 0.15);
          border-radius: 15px;
          border: 1px solid rgba(76, 69, 165, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }
        
        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(76, 69, 165, 0.25);
          border-color: rgba(76, 69, 165, 0.5);
          box-shadow: 0 10px 30px rgba(76, 69, 165, 0.2);
        }

        .stat-number {
          font-size: 56px;
          font-weight: 700;
          color: #e0cbe0;
          margin-bottom: 15px;
          line-height: 1.2;
          font-family: 'Poppins', 'Arial', sans-serif;
          display: block;
        }

        .stat-label {
          font-size: 14px;
          color: #b8b8b8;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
          font-family: 'Open Sans', 'Arial', sans-serif;
          display: block;
        }

        /* App Intro Section Styles */
        .app-intro-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .intro-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 180px;
          gap: 80px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .intro-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-row:last-child {
          margin-bottom: 100px;
        }

        .intro-row.reverse {
          flex-direction: row-reverse;
        }

        .intro-content {
          flex: 1;
        }

        .intro-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }
        
        /* Floating Animation for Images */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .intro-image {
          max-width: 500px; /* Increased from 340px */
          width: 100%;
          border-radius: 20px; /* Reduced radius for cleaner look */
          transition: transform 0.5s ease;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4)); /* Slightly softer shadow */
        }

        .intro-image:hover {
          animation-play-state: paused;
          transform: scale(1.02); /* Reduced scale to avoid pixelation */
        }
        
        /* Removed .intro-image-wrapper::before (glow effect) as requested */

        .intro-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.3;
          color: #fff;
          background: linear-gradient(120deg, #fff, #e0cbe0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          word-break: keep-all; /* Added to prevent awkward word breaks */
        }

        .intro-desc {
          font-size: 18px;
          color: #b8b8b8;
          line-height: 1.7;
          word-break: keep-all; /* Added for consistency */
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 40px;
          }

          .about-subtitle {
            font-size: 18px;
          }

          .about-content-grid {
            grid-template-columns: 1fr;
            padding: 0 20px 60px;
          }

          .about-card {
            padding: 40px 30px;
          }

          .stat-number {
            font-size: 36px;
          }

          .intro-row {
            flex-direction: column;
            text-align: center;
            gap: 50px;
            margin-bottom: 120px;
          }
          
          .intro-row.reverse {
            flex-direction: column;
          }

          .intro-title {
            font-size: 32px;
          }
          
          .intro-desc {
            font-size: 16px;
          }
          
          .intro-image {
            max-width: 100%; /* Allow full width on mobile */
            padding: 0 20px; /* Add some padding */
          }
        }
      `}</style>

      <Navbar />

      <div className="about-page-wrapper">
        <div className="about-hero">
          <h1 className="about-title">About TetherBear</h1>
          <p className="about-subtitle">
            우리는 AI 기반 트레이딩 솔루션으로 전 세계 트레이더들에게<br />
            최고의 차트 분석 도구와 기술적 지표를 제공합니다.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0s' }}>
            <div className="stat-number">1.2K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="stat-number">50+</div>
            <div className="stat-label">Indicators</div>
          </div>
          <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
          <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="stat-number">99%</div>
            <div className="stat-label">Accuracy</div>
          </div>
        </div>

        {/* App Introduction Section */}
        <div className="app-intro-section">
          {/* Section 1: TetherBear Intro */}
          <div className="intro-row animate-on-scroll">
            <div className="intro-image-wrapper">
              <img
                src="/images/abouttether.png"
                alt="TetherBear App Interface"
                className="intro-image"
              />
            </div>
            <div className="intro-content">
              <h2 className="intro-title">복잡한 차트, 이제 테더베어가 쉽게 풀어드립니다</h2>
              <p className="intro-desc">
                어려운 금융 차트를 처음 접하는 분들도 간단하게 알아볼 수<br />
                있도록 전략적인 해설을 제공합니다.
              </p>
            </div>
          </div>

          {/* Section 2: Trend/Feed */}
          <div className="intro-row reverse animate-on-scroll">
            <div className="intro-image-wrapper">
              <img
                src="/images/tredn.png"
                alt="Smart Feed Interface"
                className="intro-image"
              />
            </div>
            <div className="intro-content">
              <h2 className="intro-title">"이젠 유료방 NO!" 모든 차트를 한눈에</h2>
              <p className="intro-desc">
                통합 관리로 더 스마트하게 복잡한 정보 검색은 그만! 포지션<br />
                에 맞춘 전략과 이벤트 제공, 무기한 페이백, 전자책을 제공합<br />
                니다.
              </p>
            </div>
          </div>

          {/* Section 3: AI/Smart Trading */}
          <div className="intro-row animate-on-scroll">
            <div className="intro-image-wrapper">
              <img
                src="/images/aboutAi.png"
                alt="Smart Trading Interface"
                className="intro-image"
              />
            </div>
            <div className="intro-content">
              <h2 className="intro-title">모든 시장에 최적화된 스마트 거래 지원 서비스</h2>
              <p className="intro-desc">
                스마트 거래 지원, 모든 시장에 최적화<br />
                시장 흐름 기반 지표로 스스로 판단할 수 있게 돕습니다. 24시<br />
                간 모니터링과 직접 설계한 차트 도구로 효율적 대응과 분석을<br />
                지원합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="about-content-grid">
          <div className="about-card animate-on-scroll" style={{ transitionDelay: '0s' }}>
            <div className="about-card-icon">🎯</div>
            <h3 className="about-card-title">우리의 미션</h3>
            <p className="about-card-text">
              테더베어는 단순히 정보를 제공하는 곳이 아닙니다. <br />
              80만 원 상당의 프리미엄 전자책과 지표 자료를 무료로 제공하여 누구나 수준 높은 트레이딩 정보를 접할 수 있도록 돕습니다. <br />
              또한 거래 수수료 페이백 지원을 통해 회원에게 실질적인 혜택을 돌려드리는 운영 구조입니다.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="about-card-icon">🚀</div>
            <h3 className="about-card-title">우리의 비전</h3>
            <p className="about-card-text">
              우리는 전 세계 트레이더들이 보다 쉽고 명확하게 시장을 이해하고 성공할 수 있는 미래를 만들어갑니다. <br />
              혁신적인 차트 도구, 기술적 지표, 그리고 커뮤니티 중심의 접근 방식을 통해 <br />
              트레이딩의 새로운 표준을 제시합니다.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="about-card-icon">💎</div>
            <h3 className="about-card-title">우리의 가치</h3>
            <p className="about-card-text">
              투명성, 정확성, 그리고 사용자 중심의 혁신이 우리의 핵심 가치입니다.  <br />
              우리는 지속적인 연구개발과 커뮤니티 피드백을 통해  <br />
              최고 품질의 트레이딩 도구를 제공하기 위해 노력합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;