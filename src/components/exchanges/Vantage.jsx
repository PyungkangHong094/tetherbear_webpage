import React from "react";

const VantageGuide = () => {
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
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 15px;
      text-align: center;
    }

    .contact-methods {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }

    .contact-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .contact-card:hover {
      background: rgba(76, 69, 165, 0.1);
      transform: translateY(-5px);
    }

    .contact-icon {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .contact-name {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin-bottom: 5px;
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
              src="/images/partners/vantage.png"
              alt="Vantage Logo"
              className="exchange-logo-large"
            />
          </div>
          <h1 className="exchange-name">Vantage (밴티지)</h1>
          <p className="exchange-subtitle">
            글로벌 1위 FOREX 거래소 가입 가이드
          </p>
          <div className="exchange-benefits">
            <span className="benefit-badge">💰 PAYBACK 10%</span>
            <span className="benefit-badge">🎁 수수료 할인</span>
            <span className="benefit-badge">🏆 최다 선택</span>
          </div>
        </div>

        {/* 1단계: 계정 가입 */}
        <div className="guide-section">
          <h2 className="section-title">
            <span className="section-icon">📝</span>
            1단계: 계정 가입
          </h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">테더베어 전용 링크 접속</div>
                <div className="step-description">
                  반드시 테더베어 제휴 링크를 통해 가입해야 10% 페이백 혜택을
                  받을 수 있습니다. 일반 링크로 가입하면 혜택이 적용되지 않으니
                  주의하세요.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">이메일 및 비밀번호 설정</div>
                <div className="step-description">
                  자주 사용하는 이메일 주소를 입력하고, 8자 이상의 안전한
                  비밀번호를 설정하세요. (대문자, 소문자, 숫자 조합 권장)
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">이메일 인증 완료</div>
                <div className="step-description">
                  가입 후 이메일로 발송된 인증 링크를 클릭하여 계정을
                  활성화합니다. 스팸함도 확인해주세요.
                </div>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="info-box-title">💡 중요 안내</div>
            <div className="info-box-content">
              <ul>
                <li>테더베어 전용 링크로만 가입해야 페이백 혜택 적용</li>
                <li>이메일 인증을 완료해야 다음 단계 진행 가능</li>
                <li>비밀번호는 반드시 안전하게 보관하세요</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2단계: KYC 인증 */}
        <div className="guide-section">
          <h2 className="section-title">
            <span className="section-icon">🔐</span>
            2단계: KYC 인증 (신원 확인)
          </h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">개인정보 입력</div>
                <div className="step-description">
                  실명, 생년월일, 국적, 주소 등 기본 정보를 정확하게 입력합니다.
                  신분증과 정보가 일치해야 합니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">신분증 업로드</div>
                <div className="step-description">
                  주민등록증, 여권, 운전면허증 중 하나를 선택하여 앞/뒷면을
                  선명하게 촬영 후 업로드합니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">셀카 인증 (Liveness Check)</div>
                <div className="step-description">
                  신분증을 손에 들고 얼굴과 함께 촬영합니다. 밝은 곳에서 찍어야
                  승인률이 높습니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">심사 대기 (1-24시간)</div>
                <div className="step-description">
                  제출 후 보통 1-24시간 내에 승인 결과가 이메일로 전송됩니다.
                  영업일 기준으로 처리됩니다.
                </div>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="info-box-title">⚠️ KYC 승인 팁</div>
            <div className="info-box-content">
              <ul>
                <li>밝은 곳에서 고해상도로 촬영</li>
                <li>신분증의 모든 텍스트가 선명하게 보여야 함</li>
                <li>반사광이나 그림자가 없도록 주의</li>
                <li>본인 정보와 신분증 정보가 100% 일치해야 함</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3단계: 입금 및 거래 시작 */}
        <div className="guide-section">
          <h2 className="section-title">
            <span className="section-icon">💳</span>
            3단계: 입금 및 거래 시작
          </h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">입금 방법 선택</div>
                <div className="step-description">
                  신용카드, 은행 송금, 전자지갑 등 다양한 입금 방법을
                  지원합니다. 한국에서는 신용카드가 가장 간편합니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">최소 입금액 확인</div>
                <div className="step-description">
                  Vantage의 최소 입금액은 $50입니다. 처음에는 소액으로 시작하여
                  플랫폼에 익숙해지는 것을 권장합니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">MT4/MT5 플랫폼 설치</div>
                <div className="step-description">
                  PC 또는 모바일에 MetaTrader 플랫폼을 설치하고 계정 정보로
                  로그인합니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">거래 시작</div>
                <div className="step-description">
                  데모 계좌로 연습 후 실전 거래를 시작하세요. 테더베어의
                  시그널과 지표를 활용하면 더욱 효과적입니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4단계: 수수료 할인 적용 */}
        <div className="guide-section">
          <h2 className="section-title">
            <span className="section-icon">💰</span>
            4단계: 수수료 할인 & 페이백 받기
          </h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">테더베어 링크 확인</div>
                <div className="step-description">
                  테더베어 전용 링크로 가입했는지 확인합니다. 계정 설정에서 제휴
                  코드를 확인할 수 있습니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">거래 수수료 자동 할인</div>
                <div className="step-description">
                  테더베어 링크로 가입하면 거래 수수료가 자동으로 할인
                  적용됩니다.
                </div>
              </div>
            </div>

            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">페이백 신청</div>
                <div className="step-description">
                  매월 테더베어 팀에 페이백을 신청하면 거래량의 10%를 현금으로
                  돌려받습니다.
                </div>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="info-box-title">🎁 페이백 혜택</div>
            <div className="info-box-content">
              <ul>
                <li>거래 수수료의 10% 매월 페이백</li>
                <li>누적 거래량에 따른 추가 보너스</li>
                <li>VIP 회원 전용 이벤트 참여 기회</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 도움 및 문의 */}
        <div className="guide-section">
          <div className="contact-section">
            <h3 className="contact-title">🤝 도움이 필요하신가요?</h3>
            <div className="contact-methods">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <div className="contact-name">이메일</div>
                <div className="contact-value">support@tetherbear.com</div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <div className="contact-name">카카오톡</div>
                <div className="contact-value">@tetherbear</div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <div className="contact-name">텔레그램</div>
                <div className="contact-value">@tetherbear_official</div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">🎮</div>
                <div className="contact-name">디스코드</div>
                <div className="contact-value">TetherBear Community</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="cta-section">
          <h2 className="cta-title">지금 바로 Vantage에 가입하세요!</h2>
          <p className="cta-description">
            테더베어 전용 링크로 가입하고 10% 페이백 혜택을 받으세요
          </p>
          <div className="cta-buttons">
            <a
              href="https://www.vantagemarkets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              🚀 Vantage 가입하기
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

export default VantageGuide;
