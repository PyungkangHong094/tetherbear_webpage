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

  // 카드 컴포넌트: 거래소(foex/crypto)
  const ExchangeCard = ({ p }) => (
    <div
      className="partner-card"
      role="listitem"
      tabIndex={0}
      onClick={() => p.link && window.open(p.link, "_blank", "noopener,noreferrer")}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && p.link) {
          window.open(p.link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="partner-card-head">
        <img className="partner-logo" src={p.logo} alt={`${p.name} logo`} />
        <div className="partner-titles">
          <div className="partner-name-ko">{p.nameKo ?? p.name}</div>
          <div className="partner-name-en">{p.name}</div>
        </div>
        {p.badge && <span className="partner-badge">{p.badge}</span>}
      </div>

      <div className="partner-metrics">
        <span className="metric-chip">
          <span className="metric-label">PAYBACK</span>
          <span className="metric-value">{p.payback ?? "-"}</span>
        </span>
        <span className="metric-chip">
          <span className="metric-label">DISCOUNT</span>
          <span className="metric-value">{p.discount ?? "-"}</span>
        </span>
        <span className="metric-chip">
          <span className="metric-label">TOTAL PAYBACK</span>
          <span className="metric-value">{p.totalPayback ?? "-"}</span>
        </span>
      </div>
    </div>
  );

  // 카드 컴포넌트: 플랫폼 링크(platform)
  const PlatformCard = ({ p }) => (
    <a
      className="partner-card"
      role="listitem"
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="partner-card-head">
        <img className="partner-logo" src={p.logo} alt={`${p.name} logo`} />
        <div className="partner-titles">
          <div className="partner-name-ko">{p.nameKo ?? p.name}</div>
          <div className="partner-name-en">{p.name}</div>
        </div>
      </div>
      {p.description && <p className="partner-desc">{p.description}</p>}
    </a>
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
              거래소와 트레이더를 연결하는<br />
              스마트 트레이딩 컨설팅
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
                  <div className="process-label">테더베어와 함께<br />트레이더</div>
                </div>
              </div>
            </div>
          </div>

            {/* 🔥 탭 네비게이션 */}
            <div className="partnership-tabs" role="tablist" aria-label="파트너 카테고리">
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
          <div className="partnership-grid single" role="list" aria-live="polite">
            <div className="partnership-column">
              <h2 className="partnership-category">{categoryTitles[activeTab]}</h2>

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