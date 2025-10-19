import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import "../styles/webflow.css";
import "../styles/tjidajfi.webflow.css";
import { partnershipsData, categoryTitles } from "../data/partnershipsData";
import { partnershipStyles } from "../styles/partnershipStyles";

function Partnership() {
  // URL 쿼리(?tab=crypto) → 초기 탭 동기화
  const initialTab = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("tab");
    return t && ["forex", "crypto", "platform"].includes(t) ? t : "forex";
  }, []);

  const [activeTab, setActiveTab] = useState(initialTab);

  // 탭 변경 시 URL 쿼리 갱신(공유/새로고침 유지)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [activeTab]);

  const partners = partnershipsData[activeTab] ?? [];

  // 🔥 카드 컴포넌트: 거래소(forex/crypto) - 테이블 행 형태
  const ExchangeCard = ({ p }) => (
    <div
      className="partner-row"
      role="listitem"
      tabIndex={0}
      onClick={() =>
        p.link && window.open(p.link, "_blank", "noopener,noreferrer")
      }
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && p.link) {
          window.open(p.link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      {/* 왼쪽: 로고 + 이름 + 배지 */}
      <div className="partner-info">
        <img className="partner-logo" src={p.logo} alt={`${p.name} logo`} />
        <div className="partner-names">
          <div className="partner-name-ko">{p.nameKo ?? p.name}</div>
          <div className="partner-name-en">{p.name}</div>
        </div>
        {p.badge && <span className="partner-badge">{p.badge}</span>}
      </div>

      {/* 중앙: PAYBACK */}
      <div className="partner-stat">
        <div className="stat-label">PAYBACK</div>
        <div className="stat-value payback">{p.payback ?? "-"}</div>
      </div>

      {/* 중앙: DISCOUNT */}
      <div className="partner-stat">
        <div className="stat-label">DISCOUNT</div>
        <div className="stat-value discount">{p.discount ?? "-"}</div>
      </div>

      {/* 오른쪽: TOTAL PAYBACK */}
      <div className="partner-stat">
        <div className="stat-label">TOTAL PAYBACK</div>
        <div className="stat-value total">{p.totalPayback ?? "-"}</div>
      </div>

      {/* 화살표 */}
      <div className="partner-arrow">→</div>
    </div>
  );

  // 📱 카드 컴포넌트: 플랫폼 링크 (platform)
  const PlatformCard = ({ p }) => (
    <div className="platform-card">
      {/* 왼쪽: 로고 */}
      <img className="platform-logo" src={p.logo} alt={`${p.name} logo`} />

      {/* 중앙: 텍스트 정보 */}
      <div className="platform-info">
        <div className="platform-name-wrapper">
          <div className="platform-name-ko">{p.nameKo ?? p.name}</div>
          <div className="platform-name-en">{p.name}</div>
        </div>
        {p.description && (
          <p className="platform-description">{p.description}</p>
        )}
      </div>

      {/* 오른쪽: 다운로드 버튼들 */}
      <div className="platform-actions">
        {p.googlePlay && (
          <a
            href={p.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn google"
            onClick={(e) => e.stopPropagation()}
          >
            <span>📱</span>
            <span>Google Play</span>
          </a>
        )}
        {p.appStore && (
          <a
            href={p.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn apple"
            onClick={(e) => e.stopPropagation()}
          >
            <span>🍎</span>
            <span>App Store</span>
          </a>
        )}
        {p.link && !p.googlePlay && !p.appStore && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn web"
            onClick={(e) => e.stopPropagation()}
          >
            <span>🌐</span>
            <span>웹사이트 방문</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <style>{partnershipStyles}</style>
      <Navbar />

      <div className="partnership-page">
        <div className="partnership-container">
          {/* Hero */}
          <div className="partnership-hero">
            <h1 className="partnership-title">Our Partnerships</h1>
            <p className="partnership-subtitle">
              글로벌 파트너들과 함께 최고의 트레이딩 경험을 제공합니다
            </p>
          </div>

          {/* Banner Section */}
          <div className="partnership-banner">
            <div className="banner-badge">공식 파트너</div>
            <h2 className="banner-title">
              거래소와 트레이더를 연결하는
              <br />
              스마트 트레이딩 컨설팅
            </h2>
            <p className="banner-subtitle">
              테더베어가 제공하는 전문적인 매매 지원 서비스
            </p>

            <div className="process-flow">
              {/* 왼쪽: 거래소 */}
              <div className="process-node">
                <div className="process-circle">
                  <div className="process-label">
                    파트너
                    <br />
                    거래소
                  </div>
                </div>
              </div>

              <div className="process-arrow"></div>

              {/* 중앙: 테더베어 서비스 - 2-3-4-3-2 피라미드 */}
              <div className="process-center">
                <div className="benefit-row">
                  <div className="benefit-tag">📊 차트 보는법</div>
                  <div className="benefit-tag">⚙️ 차트 세팅법</div>
                </div>

                <div className="benefit-row">
                  <div className="benefit-tag">📈 보조지표 분석</div>
                  <div className="benefit-tag">📉 기술적 지표</div>
                  <div className="benefit-tag">🎯 시황 정보</div>
                </div>

                <div className="benefit-row">
                  <div className="benefit-tag">🔍 시장 분석</div>
                  <div className="benefit-tag">💡 트레이딩 콘텐츠</div>
                  <div className="benefit-tag">🛠️ 문제 해결</div>
                  <div className="benefit-tag">📱 맞춤 이벤트</div>
                </div>

                <div className="benefit-row">
                  <div className="benefit-tag">🎓 무기한 페이백</div>
                  <div className="benefit-tag">📚 교육 자료</div>
                  <div className="benefit-tag">🤖 AI 분석</div>
                </div>

                <div className="benefit-row">
                  <div className="benefit-tag">💬 커뮤니티</div>
                  <div className="benefit-tag">🎁 특별 혜택</div>
                </div>
              </div>

              <div className="process-arrow"></div>

              {/* 오른쪽: 트레이더 */}
              <div className="process-node">
                <div className="process-circle">
                  <div className="process-label">
                    테더베어와 함께
                    <br />
                    트레이더
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔥 탭 네비게이션 */}
          <div
            className="partnership-tabs"
            role="tablist"
            aria-label="파트너 카테고리"
          >
            {["forex", "crypto", "platform"].map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                className={`tab-button ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {categoryTitles[key]}
              </button>
            ))}
          </div>

          {/* 선택된 탭만 렌더 */}
          <div className="partnership-grid" role="list" aria-live="polite">
            <div className="partnership-column">
              <h2 className="partnership-category">
                {categoryTitles[activeTab]}
              </h2>

              {partners.length === 0 && (
                <div className="empty-state">표시할 파트너가 없습니다.</div>
              )}

              {partners.map((p) =>
                activeTab === "platform" ? (
                  <PlatformCard key={p.id} p={p} />
                ) : (
                  <ExchangeCard key={p.id} p={p} />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Partnership;
