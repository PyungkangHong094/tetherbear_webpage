import React, { useEffect, useState, useRef } from 'react'
import '../styles/Home.css';
import '../styles/tjidajfi.webflow.css';

function Home() {
    const [hamburgerClicks, setHamburgerClicks] = useState(false);
    const sectionHeightRef = useRef(null);

    // Counter 애니메이션 함수
    const animateCounter = (element, endValue, duration = 2000) => {
        const startValue = 0;
        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // easeOut 효과
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
            
            element.textContent = currentValue.toLocaleString();
            
            if (now < endTime) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = endValue.toLocaleString();
            }
        };
        
        requestAnimationFrame(updateCounter);
    };

    // Counter 애니메이션을 위한 Intersection Observer
    const initCounterAnimations = () => {
        const counters = document.querySelectorAll('.counter');
        const preloaderCounters = document.querySelectorAll('.preloader-counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    const element = entry.target;
                    const endValue = parseInt(element.textContent.replace(/,/g, '')) || 0;
                    const isPreloader = element.classList.contains('preloader-counter');
                    
                    animateCounter(element, endValue, isPreloader ? 1500 : 2000);
                    element.dataset.animated = 'true';
                }
            });
        }, { threshold: 0.5 });

        [...counters, ...preloaderCounters].forEach(counter => {
            observer.observe(counter);
        });

        return observer;
    };

    // 섹션 높이 설정 함수
    const setTrackHeights = () => {
        const sectionHeightElements = document.querySelectorAll('.section-height');
        sectionHeightElements.forEach((element) => {
            const trackElement = element.querySelector('.track');
            if (trackElement) {
                const trackWidth = trackElement.offsetWidth;
                element.style.height = `${trackWidth}px`;
            }
        });
    };

    useEffect(() => {
        // 페이지 로딩 시 스크롤 제어
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 3000);

        // 필요한 라이브러리들 동적 로딩
        const loadLibraries = () => {
            // SmoothScroll 라이브러리 로드
            if (!window.SmoothScroll) {
                const smoothScrollScript = document.createElement('script');
                smoothScrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js';
                smoothScrollScript.integrity = 'sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=';
                smoothScrollScript.crossOrigin = 'anonymous';
                smoothScrollScript.onload = () => {
                    // SmoothScroll 초기화
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
                };
                document.head.appendChild(smoothScrollScript);
            } else {
                // 이미 로드된 경우 바로 초기화
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

            // Webflow 스크립트 로드 (필요한 경우)
            if (!document.querySelector('script[src*="webflow"]')) {
                const webflowScript = document.createElement('script');
                webflowScript.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js';
                webflowScript.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=';
                webflowScript.crossOrigin = 'anonymous';
                document.head.appendChild(webflowScript);
            }
        };

        loadLibraries();

        // setTrackHeights 초기 실행
        setTrackHeights();

        // Counter 애니메이션 초기화
        const counterObserver = initCounterAnimations();

        // 스크롤 진행도 업데이트
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) {
                scrollIndicator.style.width = `${scrollPercent * 100}%`;
            }
        };

        // 윈도우 리사이즈 시 setTrackHeights 재실행
        const handleResize = () => {
            setTrackHeights();
        };

        // 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', updateScrollProgress);
            if (counterObserver) {
                counterObserver.disconnect();
            }
        };
    }, []);

    // 햄버거 메뉴 클릭 핸들러
    const handleHamburgerClick = () => {
        if (hamburgerClicks) {
            document.body.style.overflowY = "auto";
        } else {
            document.body.style.overflowY = "hidden";
        }
        setHamburgerClicks(!hamburgerClicks);
    };

    // 카드 마우스 이벤트 핸들러 (1200px 이상에서만 작동)
    const handleCardsMouseMove = (e) => {
        if (window.innerWidth > 1200) {
            // 원본 스크립트에서는 "card" 클래스를 찾지만, 현재 JSX에서는 "card-2" 사용
            // 두 가지 클래스 모두 확인
            const cards = [...document.getElementsByClassName("card"), ...document.getElementsByClassName("card-2")];
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    };

    
    return (
    <div>
        {/* 스크롤 인디케이터 추가 */}
        <div className="scroll-indicator" id="scrollIndicator"></div>
        <div className="global-styles w-embed"></div>
        <div className="wizardry w-embed">
            <style>{`@media only screen and (min-width: 1440px) { body { font-size: 0.9em; } }`}</style>
        </div>
        <div className="section nav">
            <div className="container nav">
                <div className="nav-links-wrapper">
                    <a href="index.html" data-value="Introduction" className="nav-link">Home</a>
                    <a href="product.html" data-value="Resources" aria-current="page" className="nav-link w--current">Product</a>
                </div>
                <div className="hamburger-wrapper" onClick={handleHamburgerClick}>
                    <div data-is-ix2-target="1" className="hamburger-lottie" data-w-id="82475569-db95-efa0-a402-81ea877a636b" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="3.75" data-duration="3.75" data-ix2-initial-state="20"></div>
                </div>
            </div>
        </div>
        <div data-w-id="dc973e30-91e1-7801-7422-043985c62025" className="section hero">
            <div className="container hero">
                <div className="hero-text-wrapper">
                    <h1 data-w-id="60902deb-dcab-1b2c-2261-231e4db745d7">차트의 모든것 <br />차트의 날개를 달자</h1>
                </div>
                <div data-w-id="ec3c0798-5955-3875-9bf0-2e523d18707a" className="hero-bottom">
                    <div className="scroll-down-wrapper">
                        <p className="scroll-down-label">Scroll Down</p>
                        <div className="scroll-down-lottie" data-w-id="aa471614-b758-4e41-7ccb-a4b3bde32c82" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/639cdae01920e5582ef8287e/639cdae01920e5f379f8289b_lottieflow-scroll-down-04-1-ffffff-easey.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.625" data-duration="2.5"></div>
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
            <div data-w-id="0f1e95b9-cd67-e41c-f6b2-ed077d774aa6" className="light-triangle w-embed"><svg width="100%" height="100%" viewBox="0 0 622 705" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M311 0L621.037 704.25H0.962891L311 0Z" fill="#E0CBE0"></path>
            </svg></div>
            <div className="canvas w-embed">
                <div className="moonFlare">
                    <canvas id="fireFlies"></canvas>
                </div>
            </div>
            <div className="canvas w-embed"><canvas id="canvasOne"></canvas></div>
        </div>
        <div data-w-id="f84a25e5-76fd-7a3a-a17d-6d4d102f63eb" className="section">
            <div className="container allign-center">
                <div className="max-width">
                    <div className="small-heading p-show">테더베어는 무엇인가요?</div>
                    <h2 className="margin-top-s p-show">WHAT IS TETHER BEAR?</h2>
                    <p className="fade-gradient margin-top-l p-show"><strong>차트보는 법이 어려우셨나요?<br />정보방 유료방 들어가셨나요?<br />이제 테더베어와 함께 하세요</strong><br /><br />내 모든 차트를 한눈에, 이제껏 경험 못 했던 차트 보는법!<br />테더베어와 함께라면 당신의 차트보는 법이 새로워질 거예요.<br />?<br />어려운 금융 차트를 쉽게 바꾸고 편리하게 처음 접하는사람들분들도<br /><span className="text-span"><strong>간단하게 알아볼 수 있게 전략 적인 AI 솔루션을 제공합니다<br />모든 시장에 맞게 설계된 지표를 사용하여 모든 거래에서 알맞은 타점을 찾아보세요</strong>.</span></p>
                    <div data-w-id="b7da5f0f-20cb-a828-3f6e-732b5ba87e26" className="button-wrapper">
                        <a href="#Trading" className="button w-inline-block">
                            <div className="glow-border"></div>
                            <div className="button-inner">
                                <p>Get Started</p>
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
        <div className="section">
            <div className="container allign-center">
                <div className="small-heading-2 p-show">Benefits</div>
                <h2 className="margin-top-s p-show">우리는 이런것을 만듭니다<br/></h2>
                <div id="cards" className="two-col-wrapper cards" onMouseMove={handleCardsMouseMove}>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e45396e-f50cd3a2" className="card-2 left">
                        <div className="card-inner">
                            <h4>Tether Bear : 기술적 분석의<br/>새로운 시대를 만들다</h4>
                            <p className="small_p">우리는 최첨단 거래 지표와 전략을 개발하고 제공함으로써 거래자와 분석가가 금융 시장에서 수익성 있게 경쟁할 수 있도록 돕습니다.<br/></p>
                        </div>
                    </div>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e453977-f50cd3a2" className="card-2">
                        <div className="card-inner">
                            <h4>24/7 자동매매 : 자동 거래 봇<br/>전략 최적화</h4>
                            <p className="small_p">직관적이며 간결한 자동 거래 봇을 만듭니다. <br/>수학적이고 논리적으로 24/7 끊임 없이 매매가 이루어집니다. 내가 휴식하는 동안 봇은 자동으로 계속 매매합니다</p>
                        </div>
                    </div>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e453982-f50cd3a2" className="card-2 left">
                        <div className="card-inner">
                            <h4>금융 체인지 : AI구현</h4>
                            <p className="small_p">우리는 AI를 솔루션에 연결할 수 있는 능력을 지속적으로 연구하면서 끊임없이 금융 혁신을 만들어가고 있습니다. 트레이더, 펀드매니저, 개발자가 합작해서 진행을 하고있습니다.</p>
                        </div>
                    </div>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e453988-f50cd3a2" className="card-2 right">
                        <div className="card-inner">
                            <h4>기술적 지표 제작</h4>
                            <p className="small_p">실제로 여러가지 시스템을 구동하고 있는 시스템 트레이더인만큼 고객님들에게 도움 드릴 수 있는 부분 에 대해 최대한 도움을 드리겠습니다.<br/></p>
                        </div>
                    </div>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e45398f-f50cd3a2" className="card-2 left">
                        <div className="card-inner">
                            <h4>사용자를 분석합니다</h4>
                            <p className="small_p">사용자의 데이터를 모아 다양한 관점에서 분석하여고객이 원하는 것을 발견합니다.논리적인 흐름으로 문제해결 및 아이디어를구체화하여 컨셉을 만들어갑니다.</p>
                        </div>
                    </div>
                    <div id="w-node-f35b978e-1813-b901-93ac-96329e453995-f50cd3a2" className="card-2 right">
                        <div className="card-inner">
                            <h4>커스터머 교육 서비스</h4>
                            <p className="small_p">지표만으로도 부족함이 느끼시고 계시면 1:1 한분씩 작업을 해드리고 있습니다. 차트 교육 및 시장분석을<br/>상세히 설명해 드리고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="compare" data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e27" className="section _500vh">
            <div className="container allign-center">
                <div className="small-heading-3 p-show">comparison</div>
                <h2 className="margin-top-s p-show">다른 업체 VS TETHER BEAR<br/></h2>
            </div>
            <div className="sticky-layout">
                <div className="container allign-center">
                    <div className="two-col-wrapper">
                        <div data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e31" className="petal">
                            <div className="small-heading-3 _16px">Traditional</div>
                            <h3>다른 업체 및 유료방<br/></h3>
                        </div>
                        <div data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e37" className="petal inverse">
                            <div className="small-heading-3 _16px">Crypto</div>
                            <h3>테더베어 알고리즘<br/></h3>
                        </div>
                    </div>
                    <div className="rotate-circle-outline-2">
                        <div className="rotate-circle-inner">
                            <p className="rotate-circle-text is-1">Accessibility</p>
                            <p className="rotate-circle-text is-2">Expense</p>
                            <p className="rotate-circle-text is-3">Security</p>
                            <p className="rotate-circle-text is-4">Technology</p>
                            <p className="rotate-circle-text is-5">Provider &amp; Support</p>
                        </div>
                    </div>
                    <div className="two-col-wrapper">
                        <div data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e4a" className="petal inverse">
                            <div className="petal-description-wrapper">
                            <p className="petal-description left is-1">모든걸 사람으로 통해서 합니다<br/>Buy &amp; Sell 다 사람판단으로 합니다</p>
                            <p className="petal-description left is-2">다른곳은 30만원 크게는 200-300만원 합니다</p>
                            <p className="petal-description left is-3">자산의 가치를 두고 나눕니다<br/>예) &quot;시드는 얼마나 굴리세요?&quot;<br/>방을 나누어서 관리함</p>
                            <p className="petal-description left is-4">기존에 있던걸 계속 똑같이 사용합니다.<br/>발전이 더딥니다</p>
                            <p className="petal-description left is-5">가격대로 나눠져있으며 공부자료, 상담 등<br/>서포트를 받으려면 비용이 추가됨</p>
                            </div>
                        </div>
                        <div data-w-id="8a0d05c9-1921-c6da-cbac-95f002d08e60" className="petal">
                            <div className="petal-description-wrapper">
                                <p className="petal-description right is-1">24시간 내내, 계속 시스템이 돌아갑니다</p>
                                <p className="petal-description right is-2">1년동안 100만원 이하입니다</p>
                                <p className="petal-description right is-3">차별화 하지 않습니다<br/>모든건 동일하게 관리합니다</p>
                                <p className="petal-description right is-4">현대 시대와 맞게 A.I 기술력을 선보이고 지속적으로개발자가 개발을 이어갑니다</p>
                                <p className="petal-description right is-5">새로운 기술 및 새로운 자료책이 나오면 무료로 제공</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                    <p className="progress-bar-p">테더베어 알고리즘을 바로 시작을 원하시면 아래 버튼을 클릭하시면 됩니다. 바로 저희가 초대장을 드리겠습니다. 텔레그램,디스코드 알림까지 초대장을 받습니다.</p>
                                    <div id="chartgetstartbtn" className="small-button-wrapper">
                                        <a href="price.html" className="button-3 is-smaller w-inline-block">
                                        <div className="glow-border"></div>
                                        <div className="button-inner smaller">
                                            <p>Get Started</p>
                                        </div>
                                        </a>
                                        <div className="button-glow-2"></div>
                                    </div>
                                </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">트레이딩뷰 가입</h3>
                                <p className="progress-bar-p">트레이딩뷰 가입을 우선적으로 하셔야합니다. 트레이딩뷰 가입을 하시면 저희에게 사용자 아이디를 알려주셔야합니다.<br/>사용자 아이디를 정확하게 알려주시면 저희가 초대장을 드립니다.</p>
                                <div className="small-button-wrapper">
                                    <a href="https://kr.tradingview.com/?aff_id=126652" target="_blank" className="button-3 is-smaller w-inline-block">
                                        <div className="glow-border"></div>
                                        <div className="button-inner smaller">
                                            <p>Go To TradingView</p>
                                        </div>
                                    </a>
                                    <div className="button-glow-2"></div>
                                </div>
                            </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">소셜미디어 가입</h3>
                                <p className="progress-bar-p">텔레그램, 디스코드 가입을 해주셔야 알림을 지속적으로 받을 수 있습니다. 데이터가 24시간 돌아가고 있습니다. 실시간 알림 서비스를 원하시면 소셜미디아 가입을 하시고 저희에게 사용자 아이디를 알려주시면 됩니다</p>
                                <div className="small-button-wrapper">
                                    <a href="https://discord.com/invite/A88TR3QUya" target="_blank" className="button-3 is-smaller w-inline-block">
                                        <div className="glow-border"></div>
                                        <div className="button-inner smaller">
                                            <p>Go To Discrod</p>
                                        </div>
                                    </a>
                                    <div className="button-glow-2"></div>
                                </div>
                            </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">기술적 지표 사용 및 알림</h3>
                                <p className="progress-bar-p">트레이딩 뷰에서 받은 초대장을 차트에 적용시켜서 주식, 비트코인, 외한 지표에 사용을 하시면 됩니다.<br/>디스코드, 텔레그램 알림도 VIP방 으로 초대 되서 같이 이용해주시면 됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-bar-section-gradient"></div>
            </div>
        </div>
        <div data-w-id="2f5062d7-f5c7-507a-470f-8f59715b9571" className="section mobile">
                <div className="container allign-center">
                    <div className="small-heading p-show">Guide</div>
                    <h2 className="margin-top-s p-show">테더베어 시작하는 방법<br/></h2>
                    <div className="timeline-wrapper">
                        <div className="stages-wrapper">
                            <div className="stage-description-column">
                                <h3 className="h3-small">테더베어 바로 시작</h3>
                                <p className="progress-bar-p">테더베어 알고리즘을 바로 시작을 원하시면 아래 버튼을 클릭하시면 됩니다. <br/>거래를 할 수 있는 거래소를 가입해주세요</p>
                                <div className="small-button-wrapper">
                                    <a href="#" className="button is-smaller w-inline-block">
                                    <div className="glow-border"></div>
                                    <div className="button-inner smaller">
                                        <p>Get Started</p>
                                    </div>
                                    </a>
                                    <div className="button-glow"></div>
                                </div>
                            </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">트레이딩뷰 가입</h3>
                                <p className="progress-bar-p">트레이딩뷰 가입을 우선적으로 하셔야합니다. 트레이딩뷰 가입을 하시면 저희에게 사용자 아이디를 알려주셔야합니다.<br/>사용자 아이디를 정확하게 알려주시면 저희가 초대장을 드립니다.</p>
                                <div className="small-button-wrapper">
                                    <a href="https://kr.tradingview.com/?aff_id=126652" target="_blank" className="button is-smaller w-inline-block">
                                        <div className="glow-border"></div>
                                        <div className="button-inner smaller">
                                            <p>Go To TradingView</p>
                                        </div>
                                    </a>
                                    <div className="button-glow"></div>
                                </div>
                            </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">소셜미디어 가입</h3>
                                <p className="progress-bar-p">텔레그램, 디스코드 가입을 해주셔야 알림을 지속적으로 받을 수 있습니다. 데이터가 24시간 돌아가고 있습니다. 실시간 알림 서비스를 원하시면 소셜미디아 가입을 하시고 저희에게 사용자 아이디를 알려주시면 됩니다</p>
                                <div className="small-button-wrapper">
                                    <a href="https://discord.com/invite/A88TR3QUya" target="_blank" className="button is-smaller w-inline-block">
                                        <div className="glow-border"></div>
                                        <div className="button-inner smaller">
                                            <p>Go To Discord</p>
                                        </div>
                                    </a>
                                    <div className="button-glow"></div>
                                </div>
                            </div>
                            <div className="stage-description-column">
                                <h3 className="h3-small">기술적 지표 사용 및 알림</h3>
                                <p className="progress-bar-p">트레이딩 뷰에서 받은 초대장을 차트에 적용시켜서 주식, 비트코인, 외한 지표에 사용을 하시면 됩니다<br/>디스코드, 텔레그램 알림도 VIP방 으로 초대 되서 같이 이용해주시면 됩니다</p>
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
            <div id="Trading" className="section no-margin-top">
                <div className="container no-max-width">
                    <div className="small-heading-4 p-show">Trading</div>
                    <h2 className="margin-top-s p-show">프리미엄 알고리즘 지표<br/></h2>
                    <div className="limit-width-2">
                        <p className="fade-gradient p-show">차트 보는 눈이 쉬워집니다<br />차트겟 지표는 어떤 시장에서든 함께하며, <br />필요한 모든 정보를핸드폰이나 컴퓨터 어디에서나 <br />실시간으로 제공해드립니다<br /> 이제 스마트 지표와 함께라면, <br />시장의 흐름을 놓치지 않고 항상<br />최선의 결정을 내릴 수 있습니다</p>
                    </div>
                </div>
                <div data-w-id="daff8c53-e859-42d7-9119-98577b8e99b0" className="petals-wrapper">
                    <div className="large-petal-outline is-1">
                        <div className="large-petal-inner">
                            <div className="petal-text-wrapper">
                                <h4>BUY &amp; SELL 롱 &amp; 숏 사고팔기</h4>
                                <p className="small_p">Trend Signals<br/>Contrarian Signals<br/>Reversal Cloud<br/>Candle Coloring<br/>Take Profit</p>
                            </div>
                            <a href="product.html" className="link-block w-inline-block">
                                <div className="caps-link-2">Learn More</div>
                            </a>
                        </div>
                    </div>
                    <div className="large-petal-outline is-2">
                        <div className="large-petal-inner">
                            <div className="petal-text-wrapper">
                                <h4><strong>SMART MONEY TOOLKIT<br/></strong></h4>
                                <p className="small_p"><strong>Real-Time Market StructureLive Range with Premium &amp; Discount ZonesLiquidity GrabOrder Blocks &amp; FVGEQ Highs/LowsPoint of Interest</strong></p>
                            </div>
                            <a href="product.html" className="link-block w-inline-block">
                                <div className="caps-link-2">Learn More</div>
                            </a>
                        </div>
                    </div>
                    <div className="large-petal-outline is-3">
                        <div className="large-petal-inner">
                            <div className="petal-text-wrapper">
                                <h4><strong>OSCILLATOR TOOLKIT</strong><br/></h4>
                                <p className="small_p"><strong>Reversals OscillatorsTrend OscillatorsInstitutional OscillatorsVolume Oscillators<br/>Buy/Sell Order Oscillators</strong></p>
                            </div>
                            <a href="product.html" className="link-block w-inline-block">
                                <div className="caps-link-2">Learn More</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home