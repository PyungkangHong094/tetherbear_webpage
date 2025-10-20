// 🎨 거래소 가이드 페이지 공통 스타일
export const exchangeGuideStyles = `
  .exchange-guide-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    padding-top: 100px;
    padding-bottom: 80px;
  }

  .exchange-guide-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  /* ============================================
     🎯 헤더 섹션
     ============================================ */
  .exchange-header {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInUp 0.8s ease;
  }

  .exchange-logo-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .exchange-logo-large {
    width: 120px;
    height: 120px;
    object-fit: contain;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  .exchange-name {
    font-size: 48px;
    font-weight: 700;
    background: linear-gradient(120deg, #e0cbe0, #4c45a5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 15px;
  }

  .exchange-subtitle {
    font-size: 20px;
    color: #b8b8b8;
    margin-bottom: 30px;
  }

  .exchange-benefits {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .benefit-badge {
    background: linear-gradient(135deg, #6b5b95, #4c45a5);
    color: #fff;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(76, 69, 165, 0.4);
  }

  /* ============================================
     📋 가이드 섹션
     ============================================ */
  .guide-section {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 30px;
    animation: fadeInUp 0.8s ease;
  }

  .section-title {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-icon {
    font-size: 32px;
  }

  .guide-content {
    color: #d0d0d0;
    line-height: 1.8;
  }

  .guide-steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .guide-step {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    border-left: 4px solid #4c45a5;
    transition: all 0.3s ease;
  }

  .guide-step:hover {
    background: rgba(76, 69, 165, 0.1);
    transform: translateX(8px);
  }

  .step-number {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #6b5b95, #4c45a5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }

  .step-content {
    flex: 1;
  }

  .step-title {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
  }

  .step-description {
    font-size: 15px;
    color: #b8b8b8;
    line-height: 1.6;
  }

  /* ============================================
     💡 중요 정보 박스
     ============================================ */
  .info-box {
    background: linear-gradient(135deg, rgba(76, 69, 165, 0.15), rgba(107, 91, 149, 0.1));
    border: 1px solid rgba(76, 69, 165, 0.3);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
  }

  .info-box-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #b794f6;
    margin-bottom: 12px;
  }

  .info-box-content {
    font-size: 14px;
    color: #d0d0d0;
    line-height: 1.6;
  }

  /* ============================================
     🔗 CTA 버튼
     ============================================ */
  .cta-section {
    text-align: center;
    margin-top: 50px;
    padding: 40px;
    background: linear-gradient(135deg, rgba(76, 69, 165, 0.1), rgba(107, 91, 149, 0.05));
    border-radius: 20px;
    border: 1px solid rgba(76, 69, 165, 0.2);
  }

  .cta-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
  }

  .cta-description {
    font-size: 16px;
    color: #b8b8b8;
    margin-bottom: 30px;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 40px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
  }

  .cta-button.primary {
    background: linear-gradient(135deg, #6b5b95, #4c45a5);
    color: #fff;
    box-shadow: 0 4px 15px rgba(76, 69, 165, 0.4);
  }

  .cta-button.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(76, 69, 165, 0.6);
  }

  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-3px);
  }

  /* ============================================
     📱 반응형 디자인
     ============================================ */
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
    .exchange-guide-page {
      padding-top: 80px;
    }

    .exchange-guide-container {
      padding: 0 20px;
    }

    .exchange-logo-large {
      width: 100px;
      height: 100px;
    }

    .exchange-name {
      font-size: 36px;
    }

    .exchange-subtitle {
      font-size: 16px;
    }

    .guide-section {
      padding: 25px;
    }

    .section-title {
      font-size: 24px;
    }

    .guide-step {
      flex-direction: column;
      gap: 12px;
    }

    .cta-section {
      padding: 30px 20px;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
`;
