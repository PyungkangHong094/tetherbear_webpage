import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar"; // ✅ 추가
import Lottie from "lottie-react";
import "../styles/webflow.css";
import "../styles/tjidajfi.webflow.css";

const Home = () => {
  const [scrollDownAnimation, setScrollDownAnimation] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    // Lottie 애니메이션 JSON 로드
    fetch(
      "https://uploads-ssl.webflow.com/639cdae01920e5582ef8287e/639cdae01920e5f379f8289b_lottieflow-scroll-down-04-1-ffffff-easey.json"
    )
      .then((response) => response.json())
      .then((data) => setScrollDownAnimation(data))
      .catch((error) =>
        console.error("Failed to load Lottie animation:", error)
      );

    // Webflow 재초기화 - DOM이 완전히 로드된 후
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      window.Webflow.require("ix2").init();
    }
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.65);
    }
  }, [scrollDownAnimation]);

  return (
    <div>
      {/* 스크롤 인디케이터 */}
      <div className="scroll-indicator" id="scrollIndicator"></div>

      {/* Global Styles */}
      <div className="global-styles w-embed">
        <style>{`
          .button {
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0)
          }
          .card-description-wrapper, .nav-links-wrapper {
            pointer-events:none;
          }
          .nav-links-wrapper a {
            pointer-events:auto;
          }
          .nav-links-wrapper:hover a {
            opacity: 0.5;
          }
          .nav-links-wrapper a:hover {
            opacity: 1.0;
          }
          .caps-link, .author-text{
            background-image: linear-gradient(120deg, #4C45A5, #E0CBE0, #E0CBE0, #4C45A5); 
            background-size: 200% ;
            background-position: right;
            transition: 300ms background-position ease-in-out;
          }
          .large-petal-inner:hover .caps-link{
            background-position: left; 
          }
          .author-text:hover {
            background-position: left; 
          }
          @media only screen and (min-width: 1440px) {
            body {font-size: 0.9em;}
          }
        `}</style>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="section hero"
        data-w-id="dc973e30-91e1-7801-7422-043985c62025"
      >
        <div className="container hero">
          <div className="hero-text-wrapper">
            <h1 data-w-id="60902deb-dcab-1b2c-2261-231e4db745d7">
              차트의 모든것 <br />
              차트의 날개를 달자
            </h1>
          </div>
          <div
            className="hero-bottom"
            data-w-id="ec3c0798-5955-3875-9bf0-2e523d18707a"
          >
            <div className="scroll-down-wrapper">
              <p className="scroll-down-label">Scroll Down</p>
              {scrollDownAnimation && (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={scrollDownAnimation}
                  className="scroll-down-lottie"
                  loop={true}
                  autoplay={true}
                />
              )}
            </div>
          </div>
        </div>

        <div className="hero-aurora-stroke">
          <div className="aurora-stroke-inner"></div>
        </div>
        <div className="hero-aurora-blur-rotate">
          <div className="aurora-blur-inner"></div>
        </div>
        <div className="hero-aurora-blur">
          <div className="aurora-blur-inner"></div>
        </div>

        <div
          className="light-triangle w-embed"
          data-w-id="0f1e95b9-cd67-e41c-f6b2-ed077d774aa6"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 622 705"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M311 0L621.037 704.25H0.962891L311 0Z"
              fill="#E0CBE0"
            ></path>
          </svg>
        </div>

        {/* Canvas Elements */}
        <div className="canvas w-embed">
          <div className="moonFlare">
            <canvas id="fireFlies"></canvas>
          </div>
        </div>
        <div className="canvas w-embed">
          <canvas id="canvasOne"></canvas>
        </div>
      </div>

      {/* What is Tether Bear Section */}
      <div className="section" data-w-id="f84a25e5-76fd-7a3a-a17d-6d4d102f63eb">
        <div className="container allign-center">
          <div className="max-width">
            <div className="small-heading p-show">테더베어는 무엇인가요?</div>
            <h2 className="margin-top-s p-show">WHAT IS TETHER BEAR?</h2>
            <p className="fade-gradient margin-top-l p-show">
              <strong>
                차트 보는 법이 어려우셨나요?
                <br />
                정보방 유료방 들어가셨나요?
                <br />
                이제 테더베어와 함께 하세요
              </strong>
              <br />
              <br />
              복잡한 금융 차트, 더 이상 혼자 해석하지 마세요.
              <br />
              테더베어는 쉽고 직관적인 차트 지표와
              <br />
              실시간 시황·매니저 소통, <br />
              그리고 회원 개개인에게 유리한 맞춤형 지원과 컨설팅을 제공합니다.
              <br />
              <br />
              <span className="text-span">
                <strong>
                  전문 매니저의 실시간 피드백과 회원별 맞춤 컨설팅으로
                  <br />
                  개인의 거래 방향을 최적화 해드립니다.
                  <br />
                  <br />
                  초보부터 고수까지, 모두를 위한 직관적 인터페이스
                  <br />
                  테더베어와 함께라면 차트는 더 이상 복잡하지 않습니다.
                </strong>
              </span>
            </p>
            <div
              className="button-wrapper"
              data-w-id="b7da5f0f-20cb-a828-3f6e-732b5ba87e26"
            >
              <a
                href="https://kr.tradingview.com/?aff_id=126652"
                className="button w-inline-block"
              >
                <div className="glow-border"></div>
                <div className="button-inner">
                  <p>같이 시작하기</p>
                </div>
              </a>
              <div className="button-glow"></div>
            </div>
          </div>
          <div className="heading-circle-wrapper">
            <div className="heading-circle-overlay"></div>
            <div className="heading-circle">
              <div className="heading-circle-inner"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="section">
        <div className="container allign-center">
          <div className="small-heading-2 p-show">Benefits</div>
          <h2 className="margin-top-s p-show">
            우리는 이런것을 만듭니다
            <br />
          </h2>
          <div id="cards" className="two-col-wrapper cards">
            <div className="card-2 left">
              <div className="card-inner">
                <h4>
                  Tether Bear : 기술적 분석의
                  <br />
                  새로운 시대를 만들다
                </h4>
                <p className="small_p">
                  우리는 최첨단 거래 지표와 전략을 개발하고 제공함으로써
                  거래자와 분석가가 금융 시장에서 수익성 있게 경쟁할 수 있도록
                  돕습니다
                  <br />
                </p>
              </div>
            </div>

            <div className="card-2">
              <div className="card-inner">
                <h4>전문 매니저의 회원별 맞춤 컨설팅</h4>
                <p className="small_p">
                  테더베어는 시장 흐름과 개인 성향을 함께 고려한
                  <br />
                  전략적 접근을 제공합니다
                  <br />
                  회원마다 다른 투자 스타일과 목표에 맞춰,
                  <br />
                  가장 유리한 거래소와 전략을 컨설팅해드립니다
                  <br />
                </p>
              </div>
            </div>
            <div className="card-2 left">
              <div className="card-inner">
                <h4>거래할수록 보너스</h4>
                <p className="small_p">
                  단순히 거래를 지원하는 데 그치지 않습니다
                  <br />
                  수수료 일부를 페이백 형태로 다시 돌려드려, <br />
                  더 유리한 환경에서 거래할 수 있도록 돕습니다
                  <br />
                  언제나 회원과 함께 성장하는 구조, <br />
                  테더베어의 철학입니다
                </p>
              </div>
            </div>
            <div className="card-2 right">
              <div className="card-inner">
                <h4>기술적 지표 제작</h4>
                <p className="small_p">
                  실제로 여러가지 시스템을 구동하고 있는 시스템 트레이더인만큼
                  고객님들에게 도움 드릴 수 있는 부분 에 대해 최대한 도움을
                  드리겠습니다.
                  <br />
                </p>
              </div>
            </div>
            <div className="card-2 left">
              <div className="card-inner">
                <h4>사용자를 분석합니다</h4>
                <p className="small_p">
                  사용자의 데이터를 모아 다양한 관점에서 분석하여고객이 원하는
                  것을 발견합니다.논리적인 흐름으로 문제해결 및
                  아이디어를구체화하여 컨셉을 만들어갑니다.
                </p>
              </div>
            </div>
            <div className="card-2 right">
              <div className="card-inner">
                <h4>커스터머 교육 서비스</h4>
                <p className="small_p">
                  지표만으로도 부족함이 느끼시고 계시면 1:1 한분씩 작업을
                  해드리고 있습니다. 차트 교육 및 시장분석을
                  <br />
                  상세히 설명해 드리고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div
        id="compare"
        className="section _500vh"
        data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e27"
      >
        <div className="container allign-center">
          <div className="small-heading-3 p-show">comparison</div>
          <h2 className="margin-top-s p-show">
            다른 업체 VS TETHER BEAR
            <br />
          </h2>
        </div>
        <div className="sticky-layout">
          <div className="container allign-center">
            <div className="two-col-wrapper">
              <div
                className="petal"
                data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e31"
              >
                <div className="small-heading-3 _16px">구시대 도우미</div>
                <h3>
                  다른 업체 및 유료방
                  <br />
                </h3>
              </div>
              <div
                className="petal inverse"
                data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e37"
              >
                <div className="small-heading-3 _16px">금융 도우미</div>
                <h3>
                  테더베어
                  <br />
                </h3>
              </div>
            </div>
            <div className="rotate-circle-outline-2">
              <div className="rotate-circle-inner">
                <p className="rotate-circle-text is-1">접근성</p>
                <p className="rotate-circle-text is-2">비용</p>
                <p className="rotate-circle-text is-3">보안</p>
                <p className="rotate-circle-text is-4">기술</p>
                <p className="rotate-circle-text is-5">서비스 제공 & 지원</p>
              </div>
            </div>
            <div className="two-col-wrapper">
              <div
                className="petal inverse"
                data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e4a"
              >
                <div className="petal-description-wrapper">
                  <p className="petal-description left is-1">
                    모든걸 사람으로 통해서 합니다
                    <br />
                    Buy &amp; Sell 다 사람판단으로 합니다
                  </p>
                  <p className="petal-description left is-2">
                    다른곳은 30만원 크게는 200-300만원 합니다
                  </p>
                  <p className="petal-description left is-3">
                    자산의 가치를 두고 나눕니다
                    <br />
                    예) "시드는 얼마나 굴리세요?"
                    <br />
                    방을 나누어서 관리함
                  </p>
                  <p className="petal-description left is-4">
                    기존에 있던걸 계속 똑같이 사용합니다.
                    <br />
                    발전이 더딥니다
                  </p>
                  <p className="petal-description left is-5">
                    가격대로 나눠져있으며 공부자료, 상담 등<br />
                    서포트를 받으려면 비용이 추가됨
                  </p>
                </div>
              </div>
              <div
                className="petal"
                data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e60"
              >
                <div className="petal-description-wrapper">
                  <p className="petal-description right is-1">
                    24시간 내내, 계속 시스템이 돌아갑니다
                  </p>
                  <p className="petal-description right is-2">
                    테더베어는 <br />
                    회원님의 거래 활동을 통해 발생한 수수료를
                    <br />
                    페이백 형태로 다시 돌려드립니다.
                  </p>
                  <p className="petal-description right is-3">
                    차별화 하지 않습니다
                    <br />
                    모든건 동일하게 관리합니다
                  </p>
                  <p className="petal-description right is-4">
                    우리는 전문적인 시장을 누구보다 깊이 분석하고
                    <br />
                    그 결과 만들어진 전문적인 차트와 다양한 맞춤형 지표를
                    <br />
                    회원님들과 공유합니다.
                  </p>
                  <p className="petal-description right is-5">
                    새로운 기술 및 새로운 자료책이 나오면 무료로 제공
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Section - Desktop */}
      <div id="chartgetstart" className="section horizontal chartgetstart">
        <div className="container allign-center">
          <div className="small-heading-4 p-show">Guide</div>
          <h2 className="margin-top-s p-show">테더베어 시작하는 방법</h2>
        </div>
        <div className="section-height">
          <div className="sticky-element">
            <div className="track">
              <div className="track-flex">
                <div className="progress-bar-wrapper-2">
                  <div className="progress-bar-circle is-1">
                    <div className="progress-bar-circle-inner"></div>
                  </div>
                  <div className="progress-bar-circle is-2">
                    <div className="progress-bar-circle-inner"></div>
                  </div>
                  <div className="progress-bar-circle is-3">
                    <div className="progress-bar-circle-inner"></div>
                  </div>
                  <div className="progress-bar-circle is-4">
                    <div className="progress-bar-circle-inner"></div>
                  </div>
                  <div className="progress-bar-overlay"></div>
                </div>
                <div className="stages-wrapper">
                  <div className="stage-description-column">
                    <h3 className="h3-small">테더베어 바로 시작</h3>
                    <p className="progress-bar-p">
                      테더베어 알고리즘을 바로 시작을 원하시면 아래 버튼을
                      클릭하시면 됩니다. 바로 저희가 초대장을 드리겠습니다.
                      텔레그램,디스코드 알림까지 초대장을 받습니다.
                    </p>
                    <div id="chartgetstartbtn" className="small-button-wrapper">
                      <a
                        href="/product"
                        className="button-3 is-smaller w-inline-block"
                      >
                        <div className="glow-border"></div>
                        <div className="button-inner smaller">
                          <p>Get Started</p>
                        </div>
                      </a>
                      <div className="button-glow-2"></div>
                    </div>
                  </div>
                  <div className="stage-description-column">
                    <h3 className="h3-small">파트너십 가입</h3>
                    <p className="progress-bar-p">
                      파트너십 가입을 우선적으로 하셔야합니다. 링크 통해서
                      가입하시거나 가입이 어려우신 경우
                      <br />
                      텔레그램을 통해 문의해 주시면 됩니다.
                    </p>
                    <div className="small-button-wrapper">
                      <a
                        href="/partnership"
                        target="_blank"
                        className="button-3 is-smaller w-inline-block"
                      >
                        <div className="glow-border"></div>
                        <div className="button-inner smaller">
                          <p>테더베어 파트너쉽</p>
                        </div>
                      </a>
                      <div className="button-glow-2"></div>
                    </div>
                  </div>
                  <div className="stage-description-column">
                    <h3 className="h3-small">트레이딩뷰 가입</h3>
                    <p className="progress-bar-p">
                      텔레그램, 디스코드 가입을 해주셔야 알림을 지속적으로 받을
                      수 있습니다. 데이터가 24시간 돌아가고 있습니다.
                      <br /> 실시간 알림 서비스를 원하시면 소셜미디어 가입을
                      하시고 저희에게 사용자 아이디를 알려주시면 됩니다
                    </p>
                    <div className="small-button-wrapper">
                      <a
                        href="https://kr.tradingview.com/?aff_id=126652"
                        target="_blank"
                        className="button-3 is-smaller w-inline-block"
                      >
                        <div className="glow-border"></div>
                        <div className="button-inner smaller">
                          <p>트레이딩뷰</p>
                        </div>
                      </a>
                      <div className="button-glow-2"></div>
                    </div>
                  </div>
                  <div className="stage-description-column">
                    <h3 className="h3-small">기술적 지표 사용 및 알림</h3>
                    <p className="progress-bar-p">
                      트레이딩 뷰에서 받은 초대장을 차트에 적용시켜서 주식,
                      비트코인, 외한 지표에 사용을 하시면 됩니다.
                      <br />
                      디스코드, 텔레그램 알림도 VIP방 으로 초대 되서 같이
                      이용해주시면 됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress-bar-section-gradient"></div>
          </div>
        </div>
      </div>

      {/* Guide Section - Mobile */}
      <div
        className="section mobile"
        data-w-id="2f5062d7-f5c7-507a-470f-8f59715b9571"
      >
        <div className="container allign-center">
          <div className="small-heading p-show">Guide</div>
          <h2 className="margin-top-s p-show">
            테더베어 시작하는 방법
            <br />
          </h2>
          <div className="timeline-wrapper">
            <div className="stages-wrapper">
              <div className="stage-description-column">
                <h3 className="h3-small">테더베어 바로 시작</h3>
                <p className="progress-bar-p">
                  테더베어 알고리즘을 바로 시작을 원하시면 아래 버튼을
                  클릭하시면 됩니다. <br />
                  거래를 할 수 있는 거래소를 가입해주세요
                  <br />
                </p>
                <div className="small-button-wrapper">
                  <a
                    href="/product"
                    className="button is-smaller w-inline-block"
                  >
                    <div className="glow-border"></div>
                    <div className="button-inner smaller">
                      <p>같이 시작하기</p>
                    </div>
                  </a>
                  <div className="button-glow"></div>
                </div>
              </div>
              <div className="stage-description-column">
                <h3 className="h3-small">파트너쉽 가입</h3>
                <p className="progress-bar-p">
                  파트너십 가입을 우선적으로 하셔야합니다. 링크 통해서
                  가입하시거나 가입이 어려우신 경우
                  <br />
                  텔레그램을 통해 문의해 주시면 됩니다
                </p>
                <div className="small-button-wrapper">
                  <a
                    href="/product"
                    target="_blank"
                    className="button is-smaller w-inline-block"
                  >
                    <div className="glow-border"></div>
                    <div className="button-inner smaller">
                      <p>Go To Partnership</p>
                    </div>
                  </a>
                  <div className="button-glow"></div>
                </div>
              </div>
              <div className="stage-description-column">
                <h3 className="h3-small">트레이딩뷰 가입</h3>
                <p className="progress-bar-p">
                  텔레그램, 디스코드 가입을 해주셔야 알림을 지속적으로 받을 수
                  있습니다. 데이터가 24시간 돌아가고 있습니다. 실시간 알림
                  서비스를 원하시면 소셜미디어 가입을 하시고 저희에게 사용자
                  아이디를 알려주시면 됩니다
                </p>
                <div className="small-button-wrapper">
                  <a
                    href="https://kr.tradingview.com/?aff_id=126652"
                    target="_blank"
                    className="button is-smaller w-inline-block"
                  >
                    <div className="glow-border"></div>
                    <div className="button-inner smaller">
                      <p>Go To Tradingview</p>
                    </div>
                  </a>
                  <div className="button-glow"></div>
                </div>
              </div>
              <div className="stage-description-column">
                <h3 className="h3-small">기술적 지표 사용 및 알림</h3>
                <p className="progress-bar-p">
                  트레이딩 뷰에서 받은 초대장을 차트에 적용시켜서 주식,
                  비트코인, 외한 지표에 사용을 하시면 됩니다
                  <br />
                  디스코드, 텔레그램 알림도 VIP방 으로 초대 되서 같이
                  이용해주시면 됩니다
                </p>
              </div>
            </div>
            <div className="progress-bar-wrapper">
              <div className="progress-bar-circle is-1">
                <div className="progress-bar-circle-inner"></div>
              </div>
              <div className="progress-bar-circle is-2">
                <div className="progress-bar-circle-inner"></div>
              </div>
              <div className="progress-bar-circle is-3">
                <div className="progress-bar-circle-inner"></div>
              </div>
              <div className="progress-bar-circle is-4">
                <div className="progress-bar-circle-inner"></div>
              </div>
              <div className="progress-bar-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Section */}
      <div
        id="Trading"
        className="section no-margin-top"
        style={{
          backgroundImage: "url(/images/chartgetalgoIndicator.png)",
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container no-max-width">
          <div className="small-heading-4 p-show">Trading</div>
          <h2 className="margin-top-s p-show">
            프리미엄 알고리즘 지표
            <br />
          </h2>
          <div className="limit-width-2">
            <p className="fade-gradient p-show">
              차트 보는 눈이 쉬워집니다
              <br />
              TetherBear 지표는 어떤 시장에서든 함께하며, <br />
              필요한 모든 정보를핸드폰이나 컴퓨터 어디에서나 <br />
              실시간으로 제공해드립니다
              <br /> 이제 스마트 지표와 함께라면, <br />
              시장의 흐름을 놓치지 않고 항상
              <br />
              최선의 결정을 내릴 수 있습니다
            </p>
          </div>
        </div>
        <div
          className="petals-wrapper"
          data-w-id="daff8c53-e859-42d7-9119-98577b8e99b0"
        >
          <div className="large-petal-outline is-1">
            <div className="large-petal-inner">
              <div className="petal-text-wrapper">
                <h4>BUY &amp; SELL 롱 &amp; 숏 사고팔기</h4>
                <p className="small_p">
                  Trend Signals
                  <br />
                  Contrarian Signals
                  <br />
                  Reversal Cloud
                  <br />
                  Candle Coloring
                  <br />
                  Take Profit
                </p>
              </div>
              <a href="/product" className="link-block w-inline-block">
                <div className="caps-link-2">Learn More</div>
              </a>
            </div>
          </div>
          <div className="large-petal-outline is-2">
            <div className="large-petal-inner">
              <div className="petal-text-wrapper">
                <h4>
                  <strong>
                    SMART MONEY TOOLKIT
                    <br />
                  </strong>
                </h4>
                <p className="small_p">
                  <strong>
                    Real-Time Market StructureLive Range with Premium &amp;
                    Discount ZonesLiquidity GrabOrder Blocks &amp; FVGEQ
                    Highs/LowsPoint of Interest
                  </strong>
                </p>
              </div>
              <a href="/product" className="link-block w-inline-block">
                <div className="caps-link-2">Learn More</div>
              </a>
            </div>
          </div>
          <div className="large-petal-outline is-3">
            <div className="large-petal-inner">
              <div className="petal-text-wrapper">
                <h4>
                  <strong>OSCILLATOR TOOLKIT</strong>
                  <br />
                </h4>
                <p className="small_p">
                  <strong>
                    Reversals OscillatorsTrend OscillatorsInstitutional
                    OscillatorsVolume Oscillators
                    <br />
                    Buy/Sell Order Oscillators
                  </strong>
                </p>
              </div>
              <a href="/product" className="link-block w-inline-block">
                <div className="caps-link-2">Learn More</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="section footer"
        data-w-id="502feb9f-14a2-b095-4047-8d8fe1d45554"
      >
        <div className="container footer">
          <div className="small-heading-4 p-show">NETWORK TO JOIN</div>
          <h2 className="margin-top-s p-show">JOIN US 함께해요!</h2>
          <h2 className="large-heading-2 p-show">Now!</h2>
          <div className="max-width-480">
            <p
              className="fade-gradient from-left"
              data-w-id="502feb9f-14a2-b095-4047-8d8fe1d4555d"
            >
              전 세계 커뮤니티를 만나보세요!
              <br />
              <br />
              테더베어 트레이더와 혁신가들이 전세계로 연결되어있는 모든
              트레이더들 아이디어와 스마트한 기술적 보조지표를 <br />
              사용해서 금융시장의 날개를 달아 드리겠습니다
            </p>
          </div>
          <div
            className="button-wrapper"
            data-w-id="502feb9f-14a2-b095-4047-8d8fe1d45564"
          >
            <a href="/product" className="button-4 w-inline-block">
              <div className="glow-border"></div>
              <div className="button-inner">
                <p>신 청 하 기</p>
              </div>
            </a>
            <div className="button-glow-2"></div>
          </div>
        </div>
        <div className="hero-aurora-stroke-2 footer">
          <div className="aurora-stroke-inner"></div>
        </div>
        <div className="hero-aurora-blur-2 footer">
          <div className="aurora-blur-inner"></div>
        </div>
        <div
          className="hero-aurora-blur-2 footer movable"
          style={{
            transform:
              "translate3d(13%, -16%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
          }}
        >
          <div className="aurora-blur-inner"></div>
        </div>
        <div className="footer-bottom">
          <div className="info-wrapper">
            <p className="small_p">2023 TetherBear</p>
            <a href="#" target="_blank" className="author-text">
              <strong>2023 TetherBear @ All right reserved</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
