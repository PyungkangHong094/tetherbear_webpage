// 📊 파트너십 데이터 관리 파일

export const partnershipsData = {
  // ✅ FOREX 파트너사
  forex: [
    {
      id: "vantage",
      name: "Vantage",
      nameKo: "밴티지",
      logo: "/images/partners/vantage.png",
      payback: "10%",
      discount: "0%",
      totalPayback: "31,238,201 USDT",
      type: "exchange",
      badge: "최다 선택",
      link: "/exchanges/vantage", // ✅ 내부 페이지로 이동
    },
    {
      id: "avatrade",
      name: "AvaTrade",
      nameKo: "아바트레이드",
      logo: "/images/partners/avatrade.png",
      payback: "10%",
      discount: "0%",
      totalPayback: "1,658,127 USDT",
      type: "exchange",
      link: "/exchanges/avatrade", // ✅ 내부 페이지로 이동
    },
    {
      id: "axi",
      name: "Axi",
      nameKo: "악시",
      logo: "/images/partners/axi.png",
      payback: "10%",
      discount: "0%",
      totalPayback: "618,202 USDT",
      type: "exchange",
      link: "/exchanges/axi", // ✅ 내부 페이지로 이동
    },
  ],

  // ✅ 암호화폐 파트너사
  crypto: [
    {
      id: "binance",
      name: "Binance",
      nameKo: "바이낸스",
      logo: "/images/partners/binance.png",
      payback: "20%",
      discount: "20%",
      totalPayback: "32,418,552 USDT",
      type: "exchange",
      badge: "상위 거래소",
      link: "/exchanges/binance", // ✅ 내부 페이지로 이동
    },
    {
      id: "okx",
      name: "OKX",
      nameKo: "오케이엑스",
      logo: "/images/partners/okx.png",
      payback: "40%",
      discount: "20%",
      totalPayback: "62,204,337 USDT",
      type: "exchange",
      badge: "최다 선택",
      link: "/exchanges/okx", // ✅ 내부 페이지로 이동
    },
    {
      id: "bybit",
      name: "Bybit",
      nameKo: "바이비트",
      logo: "/images/partners/bybit.png",
      payback: "35%",
      discount: "20%",
      totalPayback: "2,619,415 USDT",
      type: "exchange",
      link: "/exchanges/bybit", // ✅ 내부 페이지로 이동
    },
  ],

  // ✅ 파트너 플랫폼
  platform: [
    {
      id: "chartiq",
      name: "ChartQ",
      nameKo: "차트큐",
      logo: "/images/partners/chartq.png",
      description: "차트공부 안해? 차트공부는 차트큐 매매비법을 알아가자",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.chartq.app",
      appStore: "https://apps.apple.com/kr/app/chartq/id6740187028",
      type: "platform",
    },
    {
      id: "tradingview",
      name: "TradingView",
      nameKo: "트레이딩뷰",
      logo: "/images/partners/tradingview.png",
      description: "전 세계 1위 차트 플랫폼 및 소셜 트레이딩",
      link: "https://kr.tradingview.com/?aff_id=126652",
      type: "platform",
    },
  ],
};

// 카테고리 제목
export const categoryTitles = {
  forex: "FOREX 파트너십 혜택",
  crypto: "암호화폐 파트너십 혜택",
  platform: "파트너 플랫폼",
};
