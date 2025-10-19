// 🎨 Partnership 페이지 전용 스타일
export const partnershipStyles = `
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
    margin-bottom: 40px;
  }

  /* 🔥 탭 네비게이션 스타일 */
  .partnership-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 60px;
    flex-wrap: wrap;
  }

  .tab-button {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 60px;
    padding: 18px 45px;
    font-size: 18px;
    font-weight: 600;
    color: #b8b8b8;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .tab-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  .tab-button:hover::before {
    left: 100%;
  }

  .tab-button:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(76, 69, 165, 0.3);
    color: #fff;
    transform: translateY(-2px);
  }

  .tab-button.active {
    background: linear-gradient(135deg, #4c45a5, #6b5b95);
    border-color: #4c45a5;
    color: #fff;
    box-shadow: 0 8px 25px rgba(76, 69, 165, 0.4);
    transform: translateY(-3px);
  }

  .tab-button.active::after {
    content: '✓';
    margin-left: 8px;
    font-weight: bold;
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
    grid-template-columns: 1fr;          /* ✅ 3열 → 1열로 변경 */
    gap: 40px;
    margin-bottom: 60px;
    max-width: 1300px;                   /* ✅ 중앙 정렬 */
    margin-left: auto;
    margin-right: auto;
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
      /* =========================
   🔧 Partnership 확장 스타일 (추가)
   ========================= */
.partnership-grid.single {
  grid-template-columns: 1fr;
  max-width: 100%;                     /* 전체 너비 사용 */
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;                     /* 양쪽 여백만 확보 */
}

.partner-card {                        /* 기존 카드 강화(접근성/애니메이션 유지) */
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;                    /* 리스트형 정보이므로 좌측 정렬 */
}

.partner-card:focus-visible {
  outline: 2px solid rgba(76, 69, 165, 0.6);
  outline-offset: 2px;
}

.partner-card-head {                   /* 상단: 로고 + 타이틀 + 배지 */
  display: flex;
  align-items: center;
  gap: 14px;
}

.partner-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
}

.partner-titles {                      /* 한글/영문 타이틀 스택 */
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.partner-name-ko {
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
}

.partner-name-en {
  font-size: 12px;
  color: #9aa;
  line-height: 1.2;
}

.partner-badge {                       /* “최대 혜택” 같은 배지 */
  margin-left: auto;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6c5ce7, #7a7dff);
  color: #fff;
  white-space: nowrap;
}

.partner-metrics {                     /* PAYBACK / DISCOUNT / TOTAL PAYBACK 칩 */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.metric-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-label {
  font-size: 11px;
  letter-spacing: .2px;
  opacity: .75;
}

.metric-value {
  font-size: 12px;
  font-weight: 700;
  color: #e7e9ff;
}

.partner-desc {                        /* 플랫폼 카드 설명문 */
  font-size: 13px;
  color: #cbd;
  line-height: 1.6;
}

/* 반응형 보완 */
@media (max-width: 768px) {
  .partner-logo { width: 32px; height: 32px; }
  .partner-name-ko { font-size: 15px; }
  .metric-chip { padding: 6px 8px; }
}

  }
/* ============================================
   🎯 테이블 형태 파트너 리스트 스타일
   ============================================ */

/* 각 파트너 행 */
.partner-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr 60px;
  gap: 20px;
  align-items: center;
  padding: 24px 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.partner-row:hover {
  background: rgba(76, 69, 165, 0.08);
  border-color: rgba(76, 69, 165, 0.3);
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(76, 69, 165, 0.2);
}

.partner-row:focus-visible {
  outline: 2px solid rgba(76, 69, 165, 0.6);
  outline-offset: 2px;
}

/* 왼쪽: 로고 + 이름 + 배지 */
.partner-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.partner-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  padding: 6px;
}

.partner-names {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.partner-name-ko {
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.partner-name-en {
  font-size: 13px;
  color: #999;
  line-height: 1.2;
}

.partner-badge {
  margin-left: auto;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: linear-gradient(135deg, #6c5ce7, #7a7dff);
  color: #fff;
  white-space: nowrap;
}

/* 중앙: 통계 (PAYBACK, DISCOUNT, TOTAL) */
.partner-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
}

.stat-value.payback {
  color: #5d9cff;
}

.stat-value.discount {
  color: #5dff88;
}

.stat-value.total {
  color: #c77dff;
  font-size: 18px;
}

/* 오른쪽: 화살표 */
.partner-arrow {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  transition: all 0.3s ease;
}

.partner-row:hover .partner-arrow {
  color: rgba(76, 69, 165, 0.8);
  transform: translateX(4px);
}

/* ============================================
   📱 반응형: 모바일
   ============================================ */
@media (max-width: 768px) {
  .partner-row {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
  }

  .partner-info {
    grid-column: 1 / -1;
  }

  .partner-stat {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .stat-label {
    font-size: 12px;
  }

  .stat-value {
    font-size: 16px;
  }

  .partner-arrow {
    display: none;
  }

  .partner-logo {
    width: 40px;
    height: 40px;
  }

  .partner-name-ko {
    font-size: 15px;
  }
    /* ============================================
   📱 파트너 플랫폼 카드 스타일 (Platform 탭 전용)
   ============================================ */

.platform-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 36px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.platform-card:hover {
  background: rgba(76, 69, 165, 0.08);
  border-color: rgba(76, 69, 165, 0.3);
  transform: translateX(8px);
  box-shadow: 0 8px 20px rgba(76, 69, 165, 0.2);
}

/* 왼쪽: 로고 */
.platform-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  padding: 8px;
  flex-shrink: 0;
}

/* 중앙: 텍스트 영역 */
.platform-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.platform-name-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.platform-name-ko {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.platform-name-en {
  font-size: 14px;
  color: #999;
  line-height: 1.2;
}

.platform-description {
  font-size: 14px;
  color: #bbb;
  line-height: 1.5;
  margin: 0;
}

/* 오른쪽: 버튼 영역 */
.platform-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.platform-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
}

.platform-btn.google {
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: #fff;
  border: none;
}

.platform-btn.apple {
  background: linear-gradient(135deg, #000, #333);
  color: #fff;
  border: none;
}

.platform-btn.web {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.platform-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(76, 69, 165, 0.3);
}

/* ============================================
   📱 반응형: 모바일
   ============================================ */
@media (max-width: 768px) {
  .platform-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
  }

  .platform-logo {
    width: 48px;
    height: 48px;
  }

  .platform-actions {
    width: 100%;
    flex-direction: column;
  }

  .platform-btn {
    width: 100%;
    justify-content: center;
  }

  .platform-name-ko {
    font-size: 16px;
  }

  .platform-description {
    font-size: 13px;
  }
}
    
}
`;
