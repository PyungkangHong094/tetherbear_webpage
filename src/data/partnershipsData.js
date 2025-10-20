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
      totalPayback: "1,217,202 USDT",
      type: "exchange",
      badge: "최다 선택",
    },
    {
      id: "avatrade",
      name: "AvaTrade",
      nameKo: "아바트레이드",
      logo: "/images/partners/avatrade.png",
      payback: "10%",
      discount: "0%",
      totalPayback: "2,618,202 USDT",
      type: "exchange",
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
      totalPayback: "31,618,202 USDT",
      type: "exchange",
      badge: "상위 거래소",
    },
    {
      id: "okx",
      name: "OKX",
      nameKo: "오케이엑스",
      logo: "/images/partners/okx.png",
      payback: "40%",
      discount: "20%",
      totalPayback: "22,540,216 USDT",
      type: "exchange",
      badge: "최다 선택",
    },
    // {
    //   id: "bitget",
    //   name: "Bitget",
    //   nameKo: "빗겟",
    //   logo: "/images/partners/bitget.png",
    //   payback: "50%",
    //   discount: "50%",
    //   totalPayback: "2,836,920 USDT",
    //   type: "exchange",
    // },
    {
      id: "bybit",
      name: "Bybit",
      nameKo: "바이비트",
      logo: "/images/partners/bybit.png",
      payback: "35%",
      discount: "20%",
      totalPayback: "2,779,715 USDT",
      type: "exchange",
    },

    // {
    //   id: "gate",
    //   name: "Gate",
    //   nameKo: "게이트",
    //   logo: "/images/partners/gate.png",
    //   payback: "75%",
    //   discount: "0%",
    //   totalPayback: "2,300,709 USDT",
    //   type: "exchange",
    //   badge: "최대 혜택",
    // },
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
  forex: "Forex 파트너십 혜택",
  crypto: "암호화폐 파트너십 혜택",
  platform: "파트너 플랫폼",
};
