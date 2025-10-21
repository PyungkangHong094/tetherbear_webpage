import React, { useState } from "react";

const BinanceGuide = () => {
  // 🔥 아코디언 상태 관리 (기본값: 1단계만 열림)
  const [openSections, setOpenSections] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  // 섹션 토글 함수
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const styles = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .exchange-guide-page {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
      padding: 80px 20px;
      font-family: 'Pretendard', -apple-system, sans-serif;
    }

    .exchange-guide-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      color: #b8b8b8;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 40px;
      transition: all 0.3s ease;
    }

    .back-button:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
      transform: translateX(-5px);
    }

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

    /* 🔥 아코디언 스타일 */
    .guide-section {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .guide-section:hover {
      border-color: rgba(76, 69, 165, 0.3);
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 40px;
      cursor: pointer;
      transition: all 0.3s ease;
      user-select: none;
    }

    .section-header:hover {
      background: rgba(76, 69, 165, 0.05);
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0;
    }

    .section-icon {
      font-size: 32px;
    }

    .toggle-icon {
      font-size: 24px;
      color: #b8b8b8;
      transition: transform 0.3s ease;
    }

    .toggle-icon.open {
      transform: rotate(180deg);
    }

    .section-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease, padding 0.3s ease;
      padding: 0 40px;
    }

    .section-content.open {
      max-height: 5000px;
      padding: 0 40px 40px 40px;
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

    .info-box-content ul {
      list-style: none;
      padding: 0;
      margin-top: 10px;
    }

    .info-box-content li {
      padding-left: 20px;
      position: relative;
      margin-bottom: 8px;
    }

    .info-box-content li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #b794f6;
      font-weight: bold;
    }

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

    .contact-section {
      background: rgba(76, 69, 165, 0.05);
      border: 1px solid rgba(76, 69, 165, 0.2);
      border-radius: 16px;
      padding: 30px;
      margin-top: 30px;
    }

    .contact-title {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 15px;
      text-align: center;
    }

    .contact-description {
      font-size: 16px;
      color: #d0d0d0;
      line-height: 1.8;
      text-align: center;
      margin-bottom: 30px;
    }

    .contact-description strong {
      color: #b794f6;
      font-weight: 700;
    }

    .contact-methods {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .contact-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      display: block;
    }

    .contact-card:hover {
      background: rgba(76, 69, 165, 0.15);
      border-color: rgba(76, 69, 165, 0.4);
      transform: translateY(-8px);
      box-shadow: 0 10px 30px rgba(76, 69, 165, 0.3);
    }

    .contact-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }

    .contact-name {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }

    .contact-value {
      font-size: 14px;
      color: #b8b8b8;
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
      .exchange-logo-large {
        width: 100px;
        height: 100px;
      }

      .exchange-name {
        font-size: 36px;
      }

      .section-header {
        padding: 25px;
      }

      .section-title {
        font-size: 22px;
      }

      .section-content.open {
        padding: 0 25px 25px 25px;
      }

      .guide-step {
        flex-direction: column;
        gap: 12px;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .cta-button {
        width: 100%;
        justify-content: center;
      }

      .contact-methods {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <div className="exchange-guide-page">
      <style>{styles}</style>

      <div className="exchange-guide-container">
        {/* 뒤로가기 버튼 */}
        <a href="/partnership" className="back-button">
          ← 파트너십 목록으로
        </a>

        {/* 헤더 */}
        <div className="exchange-header">
          <div className="exchange-logo-wrapper">
            <img
              src="/images/partners/binance.png"
              alt="Binance Logo"
              className="exchange-logo-large"
            />
          </div>
          <h1 className="exchange-name">Binance (바이낸스)</h1>
          <p className="exchange-subtitle">
            세계 1위 암호화폐 거래소 가입 가이드
          </p>
          <div className="exchange-benefits">
            <span className="benefit-badge">💰 PAYBACK 20%</span>
            <span className="benefit-badge">🎁 DISCOUNT 20%</span>
            <span className="benefit-badge">👑 상위 거래소</span>
          </div>
        </div>

        {/* 🔥 1단계: 계정 가입 (아코디언) */}
        <div className="guide-section">
          <div
            className="section-header"
            onClick={() => toggleSection("step1")}
          >
            <h2 className="section-title">
              <span className="section-icon">📝</span>
              1단계: 계정 가입
            </h2>
            <span className={`toggle-icon ${openSections.step1 ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div
            className={`section-content ${openSections.step1 ? "open" : ""}`}
          >
            <div className="guide-steps">
              <div
                className="guide-step"
                onClick={() =>
                  window.open("https://www.binance.com/", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">테더베어 전용 링크 접속</div>
                  <div className="step-description">
                    반드시 테더베어 제휴 링크를 통해 가입해야 20% 페이백 + 20%
                    할인 혜택을 받을 수 있습니다. 일반 링크로 가입하면 혜택이
                    적용되지 않으니 주의하세요.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">이메일 또는 전화번호 입력</div>
                  <div className="step-description">
                    이메일 주소 또는 휴대폰 번호를 선택하여 가입할 수 있습니다.
                    강력한 비밀번호를 설정하세요.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">인증 코드 확인</div>
                  <div className="step-description">
                    이메일 또는 SMS로 발송된 6자리 인증 코드를 입력하여 계정을
                    활성화합니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box">
              <div className="info-box-title">💡 중요 안내</div>
              <div className="info-box-content">
                <ul>
                  <li>
                    테더베어 전용 링크로만 가입해야 20% 페이백 + 20% 할인 적용
                  </li>
                  <li>2단계 인증(2FA) 설정 필수 권장</li>
                  <li>구글 OTP 또는 SMS 인증 중 선택</li>
                  <li>가입 즉시 거래 가능 (KYC 선택)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 2단계: KYC 인증 (아코디언) */}
        <div className="guide-section">
          <div
            className="section-header"
            onClick={() => toggleSection("step2")}
          >
            <h2 className="section-title">
              <span className="section-icon">🔐</span>
              2단계: KYC 인증 (신원 확인)
            </h2>
            <span className={`toggle-icon ${openSections.step2 ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div
            className={`section-content ${openSections.step2 ? "open" : ""}`}
          >
            <div className="guide-steps">
              <div className="guide-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">KYC 인증 시작</div>
                  <div className="step-description">
                    바이낸스는 Verified (개인 인증)와 Verified Plus (고급 인증)
                    2단계를 제공합니다. 일반 사용자는 Verified 인증으로
                    충분합니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">개인정보 입력</div>
                  <div className="step-description">
                    국가, 실명, 생년월일을 정확하게 입력합니다. 한 번 입력하면
                    수정이 불가능하니 신중하게 입력하세요.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">신분증 선택 및 업로드</div>
                  <div className="step-description">
                    여권, 주민등록증, 운전면허증 중 하나를 선택합니다. 앞면과
                    뒷면을 선명하게 촬영하여 업로드합니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <div className="step-title">얼굴 인증</div>
                  <div className="step-description">
                    카메라를 이용한 실시간 얼굴 인증을 진행합니다. 화면의 지시에
                    따라 얼굴을 좌우로 천천히 움직이세요.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <div className="step-title">심사 대기 (5분-24시간)</div>
                  <div className="step-description">
                    대부분 10분 내에 자동 승인됩니다. 추가 검토 시 최대 24시간
                    소요될 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box">
              <div className="info-box-title">⚠️ KYC 승인 팁</div>
              <div className="info-box-content">
                <ul>
                  <li>밝은 조명에서 선명하게 촬영</li>
                  <li>신분증의 네 모서리가 모두 보여야 함</li>
                  <li>얼굴 인증 시 안경이나 마스크 착용 금지</li>
                  <li>KYC 없이도 거래 가능하지만, 출금 한도 제한</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 3단계: 입금 및 거래 시작 (아코디언) */}
        <div className="guide-section">
          <div
            className="section-header"
            onClick={() => toggleSection("step3")}
          >
            <h2 className="section-title">
              <span className="section-icon">💳</span>
              3단계: 입금 및 거래 시작
            </h2>
            <span className={`toggle-icon ${openSections.step3 ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div
            className={`section-content ${openSections.step3 ? "open" : ""}`}
          >
            <div className="guide-steps">
              <div className="guide-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">입금 방법 선택</div>
                  <div className="step-description">
                    암호화폐 입금, 신용카드 구매, P2P 거래 등 다양한 방법을
                    지원합니다. 한국에서는 P2P 거래가 가장 안전하고 편리합니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">P2P로 KRW 입금하기</div>
                  <div className="step-description">
                    바이낸스 P2P에서 판매자를 선택하고 은행 계좌로 송금하면
                    USDT나 BTC를 받을 수 있습니다. 최소 금액 제한 없음.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">바이낸스 앱 설치 (선택)</div>
                  <div className="step-description">
                    모바일 거래를 위해 바이낸스 공식 앱을 설치할 수 있습니다.
                    앱에서도 모든 기능을 이용할 수 있습니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <div className="step-title">거래 시작</div>
                  <div className="step-description">
                    현물 거래, 선물 거래, 스테이킹, NFT 등 다양한 서비스를
                    이용할 수 있습니다. 테더베어의 시그널과 지표를 활용하세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 4단계: 수수료 할인 & 페이백 (아코디언) */}
        <div className="guide-section">
          <div
            className="section-header"
            onClick={() => toggleSection("step4")}
          >
            <h2 className="section-title">
              <span className="section-icon">💰</span>
              4단계: 수수료 할인 & 페이백 받기
            </h2>
            <span className={`toggle-icon ${openSections.step4 ? "open" : ""}`}>
              ▼
            </span>
          </div>
          <div
            className={`section-content ${openSections.step4 ? "open" : ""}`}
          >
            <div className="guide-steps">
              <div className="guide-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">레퍼럴 코드 확인</div>
                  <div className="step-description">
                    계정 설정에서 레퍼럴 코드가 테더베어 코드로 등록되어 있는지
                    확인합니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">거래 수수료 자동 할인 20%</div>
                  <div className="step-description">
                    테더베어 링크로 가입하면 현물 및 선물 거래 수수료가 자동으로
                    20% 할인 적용됩니다.
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">페이백 20% 신청</div>
                  <div className="step-description">
                    매월 테더베어 팀에 페이백을 신청하면 거래 수수료의 20%를
                    현금으로 돌려받습니다. (할인 20% + 페이백 20% = 총 40% 혜택)
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box">
              <div className="info-box-title">🎁 페이백 혜택</div>
              <div className="info-box-content">
                <ul>
                  <li>거래 수수료의 20% 매월 페이백</li>
                  <li>수수료 할인 20% 자동 적용</li>
                  <li>BNB 보유 시 추가 25% 할인</li>
                  <li>누적 거래량에 따른 VIP 등급 혜택</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 도움 및 문의 */}
        <div className="guide-section">
          <div className="contact-section">
            <h3 className="contact-title">💼 전문 컨설팅 서비스</h3>
            <p className="contact-description">
              가입부터 거래까지, 막히는 부분이 있으신가요?
              <br />
              테더베어는 원격 지원을 통해 1:1 맞춤 컨설팅을 제공합니다.
              <br />
              <strong>
                KYC 인증, 입금 방법, 거래 설정까지 모든 과정을 함께
                도와드립니다.
              </strong>
            </p>
            <div className="contact-methods">
              <a
                href="https://open.kakao.com/o/gCPFU2Xh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">💬</div>
                <div className="contact-name">카카오톡 문의</div>
                <div className="contact-value">실시간 상담</div>
              </a>

              <a
                href="https://t.me/+KwZ79KOzTBthYzZl"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">📱</div>
                <div className="contact-name">텔레그램 문의</div>
                <div className="contact-value">빠른 응대</div>
              </a>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="cta-section">
          <h2 className="cta-title">지금 바로 Binance에서 함께해요!</h2>
          <p className="cta-description">
            테더베어 전용 링크로 가입하고 20% 페이백 + 20% 할인 혜택을 받으세요
            <br />
            <strong>세계 1위 거래소에서 안전하게 거래하세요</strong>
          </p>
          <div className="cta-buttons">
            <a
              href="https://www.binance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              🚀 Binance 가입하기
            </a>
            <a href="/partnership" className="cta-button secondary">
              ← 다른 거래소 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinanceGuide;
