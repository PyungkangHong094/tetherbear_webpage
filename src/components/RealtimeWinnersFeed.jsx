import React, { useState, useEffect } from "react";

// 더미 데이터: 실제로는 API나 WebSocket에서 받아올 데이터
const DUMMY_WINNERS = [
  { nickname: "CryptoKing", amount: "172.35 USDT", type: "페이백" },
  { nickname: "InvestorPro", amount: "340.10 USDT", type: "보너스" },
  { nickname: "CoinRunner", amount: "856.78 USDT", type: "페이백" },
  { nickname: "BlockMaster", amount: "125.22 USDT", type: "보너스" },
  { nickname: "DeFiHunter", amount: "490.55 USDT", type: "페이백" },
  { nickname: "MoonChaser", amount: "275.99 USDT", type: "보너스" },
  { nickname: "StakingKing", amount: "620.40 USDT", type: "페이백" },
  { nickname: "AltLover", amount: "185.70 USDT", type: "보너스" },
  { nickname: "BTCMiner", amount: "405.20 USDT", type: "페이백" },
  { nickname: "Web3Pioneer", amount: "950.65 USDT", type: "보너스" },
  { nickname: "MetaExplorer", amount: "210.88 USDT", type: "페이백" },
  { nickname: "NFTCollector", amount: "530.30 USDT", type: "보너스" },
  { nickname: "Decentralizer", amount: "365.44 USDT", type: "페이백" },
  { nickname: "SmartContractor", amount: "198.99 USDT", type: "보너스" },
  { nickname: "ETHMania", amount: "445.11 USDT", type: "페이백" },
  { nickname: "SolanaSurfer", amount: "235.77 USDT", type: "보너스" },
  { nickname: "PolkadotPrince", amount: "390.50 USDT", type: "페이백" },
  { nickname: "ChainlinkOracle", amount: "670.89 USDT", type: "보너스" },
  { nickname: "UniswapTrader", amount: "412.34 USDT", type: "페이백" },
  { nickname: "Layer2Hero", amount: "520.66 USDT", type: "보너스" },
];

// 닉네임 마스킹 함수 (예: "바나나울리" → "바나**울리")
const maskNickname = (nickname) => {
  if (nickname.length <= 2) return nickname;
  if (nickname.length <= 4) {
    return (
      nickname[0] +
      "*".repeat(nickname.length - 2) +
      nickname[nickname.length - 1]
    );
  }
  // 4글자 이상이면 앞 2글자, 뒤 2글자 보이고 중간 마스킹
  const start = nickname.slice(0, 2);
  const end = nickname.slice(-2);
  const middle = "*".repeat(Math.min(nickname.length - 4, 4));
  return start + middle + end;
};

const RealtimeWinnersFeed = ({ maxVisible = 4 }) => {
  const [winnersList, setWinnersList] = useState([]);

  useEffect(() => {
    // 초기 당첨자 추가
    const initialWinner = {
      ...DUMMY_WINNERS[Math.floor(Math.random() * DUMMY_WINNERS.length)],
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setWinnersList([initialWinner]);

    // 5-6초마다 새로운 당첨자 추가
    const interval = setInterval(() => {
      const randomDelay = 5000 + Math.random() * 1000; // 5~6초

      setTimeout(() => {
        const newWinner = {
          ...DUMMY_WINNERS[Math.floor(Math.random() * DUMMY_WINNERS.length)],
          id: Date.now() + Math.random(),
          timestamp: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setWinnersList((prev) => {
          const updated = [newWinner, ...prev];
          // 최대 개수 유지 (오래된 것 자동 삭제)
          return updated.slice(0, maxVisible);
        });
      }, randomDelay);
    }, 6000);

    return () => clearInterval(interval);
  }, [maxVisible]);

  // 타입별 텍스트 변환
  const getTypeText = (type) => {
    switch (type) {
      case "잭팟":
        return "잭팟 지급";
      case "보너스":
        return "보너스 지급";
      case "페이백":
        return "페이백 지급";
      default:
        return "지급 완료";
    }
  };

  return (
    <>
      <style>{`
        .winners-feed-container {
          position: fixed;
          bottom: 2rem; /* ✅ 아래로 변경! */
          left: 50%;
          transform: translateX(-50%);
          z-index: 999999;
          width: 100%;
          max-width: 28rem;
          padding: 0 1rem;
          pointer-events: none;
        }

        .winners-feed-list {
          display: flex;
          flex-direction: column-reverse; /* ✅ 아래에서 위로! */
          gap: 0.5rem;
          pointer-events: auto;
        }

        .winner-card {
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 0.5rem 0.75rem;
          transition: all 0.3s;
        }

        .winner-card-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ✅ 아래에서 위로 올라오는 애니메이션! */
        @keyframes slideInFromBottom {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .winner-card-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .winner-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .winner-nickname {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .winner-type {
          font-size: 0.75rem;
          font-weight: 500;
          color: white; /* ✅ 흰색으로 변경! */
        }

        .winner-amount {
          color: white;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.025em;
        }

        @media (max-width: 640px) {
          .winners-feed-container {
            max-width: calc(100vw - 2rem);
          }
        }
      `}</style>

      <div className="winners-feed-container">
        <div className="winners-feed-list">
          {winnersList.map((winner, index) => {
            const maskedNickname = maskNickname(winner.nickname);
            const typeText = getTypeText(winner.type);

            return (
              <div
                key={winner.id}
                className="winner-card"
                style={{
                  animation:
                    index === 0
                      ? "slideInFromBottom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" // ✅ 아래에서!
                      : "none",
                  opacity: 1 - index * 0.2,
                  transform: `translateY(${-index * 2}px)`, // ✅ 위쪽으로!
                }}
              >
                <div className="winner-card-shimmer" />

                <div className="winner-card-content">
                  <div className="winner-left">
                    <span className="winner-nickname">{maskedNickname}</span>
                    <span className="winner-type">{typeText}</span>
                  </div>

                  <div>
                    <span className="winner-amount">{winner.amount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RealtimeWinnersFeed;
