import React from 'react';
import Navbar from './Navbar';  // ✅ Navbar 추가
import '../styles/webflow.css';
import '../styles/tjidajfi.webflow.css';

function About() {
  return (
    <div>
      <style>{`
        /* About 페이지 전용 스타일 */
        .about-page-wrapper {
          padding-top: 100px;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
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
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease both;
        }

        .about-card:nth-child(1) { animation-delay: 0.3s; }
        .about-card:nth-child(2) { animation-delay: 0.4s; }
        .about-card:nth-child(3) { animation-delay: 0.5s; }

        .about-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(76, 69, 165, 0.5);
          box-shadow: 0 20px 40px rgba(76, 69, 165, 0.2);
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
          animation: fadeInUp 0.8s ease both;
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(76, 69, 165, 0.25);
          border-color: rgba(76, 69, 165, 0.5);
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
        }
      `}</style>

      <Navbar />  {/* ✅ Navbar 추가 */}

      <div className="about-page-wrapper">
        <div className="about-hero">
          <h1 className="about-title">About TetherBear</h1>
          <p className="about-subtitle">
            우리는 AI 기반 트레이딩 솔루션으로 전 세계 트레이더들에게<br/>
            최고의 차트 분석 도구와 기술적 지표를 제공합니다.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item" style={{ animationDelay: '0.6s' }}>
            <div className="stat-number">1.2K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item" style={{ animationDelay: '0.7s' }}>
            <div className="stat-number">50+</div>
            <div className="stat-label">Indicators</div>
          </div>
          <div className="stat-item" style={{ animationDelay: '0.8s' }}>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
          <div className="stat-item" style={{ animationDelay: '0.9s' }}>
            <div className="stat-number">99%</div>
            <div className="stat-label">Accuracy</div>
          </div>
        </div>

        <div className="about-content-grid">
          <div className="about-card">
            <div className="about-card-icon">🎯</div>
            <h3 className="about-card-title">우리의 미션</h3>
            <p className="about-card-text">
              TetherBear는 AI 기술과 최첨단 알고리즘을 통해 모든 트레이더가 
              스마트하게 시장을 분석하고 더 나은 결정을 내릴 수 있도록 돕습니다. 
              우리의 목표는 복잡한 시장 데이터를 직관적이고 실용적인 인사이트로 변환하는 것입니다.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🚀</div>
            <h3 className="about-card-title">우리의 비전</h3>
            <p className="about-card-text">
              우리는 전 세계 트레이더들이 AI의 힘을 활용하여 금융 시장에서 
              성공할 수 있는 미래를 만들어갑니다. 혁신적인 기술과 커뮤니티 중심의 
              접근 방식으로 트레이딩의 새로운 표준을 제시합니다.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">💎</div>
            <h3 className="about-card-title">우리의 가치</h3>
            <p className="about-card-text">
              투명성, 정확성, 그리고 사용자 중심의 혁신이 우리의 핵심 가치입니다. 
              우리는 지속적인 연구개발과 커뮤니티 피드백을 통해 
              최고 품질의 트레이딩 도구를 제공하기 위해 노력합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;