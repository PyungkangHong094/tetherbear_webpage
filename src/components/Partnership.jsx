import React from 'react';
import Navbar from './Navbar';
import '../styles/webflow.css';
import '../styles/tjidajfi.webflow.css';

function Partnership() {
  const partnerships = {
    forex: [
      { name: '밴티지 (Vantage)', nameEn: 'Vantage' },
      { name: '인피녹스 (INFINOX)', nameEn: 'INFINOX' },
      { name: '엑스엠 (XM)', nameEn: 'XM' }
    ],
    crypto: [
      { name: '오렌지x (orangex)', nameEn: 'OrangeX' },
      { name: '딥코인 (Deepcoin)', nameEn: 'Deepcoin' }
    ],
    platform: [
      { name: 'ATAS - 오더플로우 차트', nameEn: 'ATAS - Order Flow Chart' },
      { name: 'GoCharting - 오더플로우 차트', nameEn: 'GoCharting - Order Flow Chart' },
      { name: 'Magic Keys (매직키)', nameEn: 'Magic Keys' }
    ]
  };

  return (
    <div>
      <style>{`
        .partnership-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .partnership-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .partnership-hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .partnership-banner {
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          border-radius: 30px;
          padding: 60px 40px;
          margin-bottom: 80px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          position: relative;
          overflow: hidden;
        }

        .partnership-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(76, 69, 165, 0.1), transparent 50%),
                      radial-gradient(circle at 70% 50%, rgba(224, 203, 224, 0.1), transparent 50%);
          pointer-events: none;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(76, 69, 165, 0.2);
          border: 1px solid rgba(76, 69, 165, 0.4);
          border-radius: 50px;
          padding: 10px 25px;
          margin-bottom: 30px;
          font-size: 16px;
          color: #4c45a5;
          font-weight: 600;
        }

        .banner-badge::before {
          content: '✓';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #4c45a5;
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }

        .banner-title {
          font-size: 40px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .banner-subtitle {
          font-size: 18px;
          color: #b8b8b8;
          margin-bottom: 50px;
        }

        .process-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .process-node {
          position: relative;
        }

        .process-circle {
          width: 160px;
          height: 160px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .process-circle:hover {
          background: rgba(76, 69, 165, 0.2);
          border-color: rgba(76, 69, 165, 0.6);
          transform: scale(1.05);
        }

        .process-label {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          line-height: 1.4;
          text-align: center;
        }

        .process-arrow {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(76, 69, 165, 0.5), transparent);
          position: relative;
        }

        .process-arrow::after {
          content: '';
          position: absolute;
          right: -8px;
          top: -4px;
          width: 0;
          height: 0;
          border-left: 8px solid rgba(76, 69, 165, 0.5);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }

        .process-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .benefit-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .benefit-tag {
          background: linear-gradient(135deg, #6b5b95, #b8a9c9);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(107, 91, 149, 0.4);
          animation: float 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .benefit-tag:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 25px rgba(107, 91, 149, 0.6);
        }

        .benefit-tag:nth-child(1) { animation-delay: 0s; }
        .benefit-tag:nth-child(2) { animation-delay: 0.5s; }
        .benefit-tag:nth-child(3) { animation-delay: 1s; }
        .benefit-tag:nth-child(4) { animation-delay: 1.5s; }
        .benefit-tag:nth-child(5) { animation-delay: 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .partnership-title {
          font-size: 56px;
          font-weight: 700;
          background: linear-gradient(120deg, #e0cbe0, #4c45a5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease;
        }

        .partnership-subtitle {
          font-size: 20px;
          color: #b8b8b8;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .partnership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .partnership-column {
          animation: fadeInUp 0.8s ease both;
        }

        .partnership-column:nth-child(1) { animation-delay: 0.3s; }
        .partnership-column:nth-child(2) { animation-delay: 0.4s; }
        .partnership-column:nth-child(3) { animation-delay: 0.5s; }

        .partnership-category {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 30px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .partner-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px 25px;
          margin-bottom: 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .partner-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(76, 69, 165, 0.5);
          box-shadow: 0 10px 30px rgba(76, 69, 165, 0.3);
        }

        .partner-name {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
          font-family: 'Poppins', sans-serif;
        }

        .partner-name-en {
          font-size: 14px;
          color: #888;
          font-family: 'Open Sans', sans-serif;
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

        /* 반응형 디자인 */
        @media (max-width: 1024px) {
          .partnership-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .process-flow {
            flex-direction: column;
            gap: 30px;
          }

          .process-arrow {
            width: 2px;
            height: 60px;
            background: linear-gradient(180deg, transparent, rgba(76, 69, 165, 0.5), transparent);
          }

          .process-arrow::after {
            right: -4px;
            top: auto;
            bottom: -8px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 8px solid rgba(76, 69, 165, 0.5);
            border-bottom: none;
          }

          .process-center {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .benefit-row {
            grid-column: 1 / -1;
            display: flex;
            gap: 10px;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .partnership-page {
            padding-top: 80px;
            padding-bottom: 60px;
          }

          .partnership-container {
            padding: 0 20px;
          }

          .partnership-title {
            font-size: 36px;
          }

          .partnership-subtitle {
            font-size: 16px;
          }

          .partnership-banner {
            padding: 40px 20px;
            border-radius: 20px;
            margin-bottom: 60px;
          }

          .banner-title {
            font-size: 28px;
          }

          .banner-subtitle {
            font-size: 16px;
          }

          .process-circle {
            width: 140px;
            height: 140px;
          }

          .process-label {
            font-size: 18px;
          }

          .benefit-tag {
            font-size: 13px;
            padding: 10px 18px;
          }

          .process-center {
            width: 100%;
          }

          .benefit-row {
            flex-wrap: wrap;
            gap: 8px;
          }

          .partnership-category {
            font-size: 24px;
          }

          .partner-card {
            padding: 25px 20px;
          }
        }
      `}</style>

      <Navbar />

      <div className="partnership-page">
        <div className="partnership-container">
          <div className="partnership-hero">
            <h1 className="partnership-title">Our Partnerships</h1>
            <p className="partnership-subtitle">
              글로벌 파트너들과 함께 최고의 트레이딩 경험을 제공합니다
            </p>
          </div>

          {/* 배너 섹션 */}
          <div className="partnership-banner">
            <div className="banner-badge">공식 파트너</div>
            <h2 className="banner-title">
              거래소와 트레이더를 연결하는<br />
              스마트 트레이딩 솔루션
            </h2>
            <p className="banner-subtitle">
              테더베어가 제공하는 전문적인 매매 지원 서비스
            </p>

            <div className="process-flow">
              {/* 왼쪽: 거래소 */}
              <div className="process-node">
                <div className="process-circle">
                  <div className="process-label">파트너<br />거래소</div>
                </div>
              </div>

              <div className="process-arrow"></div>

              {/* 중앙: 테더베어 서비스 - 2-3-4-3-2 피라미드 */}
              <div className="process-center">
                {/* 1줄: 2개 */}
                <div className="benefit-row">
                  <div className="benefit-tag">📊 차트 보는법</div>
                  <div className="benefit-tag">⚙️ 차트 세팅법</div>
                </div>
                
                {/* 2줄: 3개 */}
                <div className="benefit-row">
                  <div className="benefit-tag">📈 보조지표 분석</div>
                  <div className="benefit-tag">📉 기술적 지표</div>
                  <div className="benefit-tag">🎯 매매 전략</div>
                </div>
                
                {/* 3줄: 4개 (중앙 - 가장 넓음) */}
                <div className="benefit-row">
                  <div className="benefit-tag">🔍 시장 분석</div>
                  <div className="benefit-tag">💡 트레이딩 교육</div>
                  <div className="benefit-tag">🛠️ 문제 해결</div>
                  <div className="benefit-tag">📱 실시간 지원</div>
                </div>
                
                {/* 4줄: 3개 */}
                <div className="benefit-row">
                  <div className="benefit-tag">🎓 1:1 멘토링</div>
                  <div className="benefit-tag">📚 교육 자료</div>
                  <div className="benefit-tag">🤖 AI 분석</div>
                </div>
                
                {/* 5줄: 2개 */}
                <div className="benefit-row">
                  <div className="benefit-tag">💬 커뮤니티</div>
                  <div className="benefit-tag">🎁 특별 혜택</div>
                </div>
              </div>

              <div className="process-arrow"></div>

              {/* 오른쪽: 트레이더 */}
              <div className="process-node">
                <div className="process-circle">
                  <div className="process-label">테더베어와 함께<br />트레이더</div>
                </div>
              </div>
            </div>
          </div>

          <div className="partnership-grid">
            {/* Forex 파트너십 */}
            <div className="partnership-column">
              <h2 className="partnership-category">Forex 파트너십</h2>
              {partnerships.forex.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-name">{partner.name}</div>
                  <div className="partner-name-en">{partner.nameEn}</div>
                </div>
              ))}
            </div>

            {/* Crypto 파트너십 */}
            <div className="partnership-column">
              <h2 className="partnership-category">Crypto 파트너십</h2>
              {partnerships.crypto.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-name">{partner.name}</div>
                  <div className="partner-name-en">{partner.nameEn}</div>
                </div>
              ))}
            </div>

            {/* 플랫폼 파트너십 */}
            <div className="partnership-column">
              <h2 className="partnership-category">플랫폼 파트너십</h2>
              {partnerships.platform.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-name">{partner.name}</div>
                  <div className="partner-name-en">{partner.nameEn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;