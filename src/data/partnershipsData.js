// 📊 파트너십 데이터 관리 파일

export const partnershipsData = {
    forex: [
      {
        id: 'binance',
        name: 'Binance',
        nameKo: '바이낸스',
        logo: '/images/partners/binance.png', // 로고 경로
        payback: '20%',
        discount: '20%',
        totalPayback: '2,618,202 USDT',
        type: 'exchange', // 거래소
        badge: '최대 거래소'
      },
      {
        id: 'bitget',
        name: 'Bitget',
        nameKo: '빗겟',
        logo: '/images/partners/bitget.png',
        payback: '50%',
        discount: '50%',
        totalPayback: '2,836,920 USDT',
        type: 'exchange',
        badge: '최다 선택'
      },
      {
        id: 'bingx',
        name: 'Bingx',
        nameKo: '빙엑스',
        logo: '/images/partners/bingx.png',
        payback: '85%',
        discount: '0%',
        totalPayback: '2,226,508 USDT',
        type: 'exchange'
      },
      {
        id: 'gate',
        name: 'Gate',
        nameKo: '게이트',
        logo: '/images/partners/gate.png',
        payback: '75%',
        discount: '0%',
        totalPayback: '2,300,709 USDT',
        type: 'exchange',
        badge: '최대 혜택'
      },
      {
        id: 'bybit',
        name: 'Bybit',
        nameKo: '바이비트',
        logo: '/images/partners/bybit.png',
        payback: '35%',
        discount: '20%',
        totalPayback: '2,779,715 USDT',
        type: 'exchange'
      },
      {
        id: 'deepcoin',
        name: 'Deepcoin',
        nameKo: '딥코인',
        logo: '/images/partners/deepcoin.png',
        payback: '75%',
        discount: '20%',
        totalPayback: '2,559,496 USDT',
        type: 'exchange',
        badge: '지원 이벤트'
      },
      {
        id: 'mexc',
        name: 'MEXC',
        nameKo: '멕시씨',
        logo: '/images/partners/mexc.png',
        payback: '45%',
        discount: '0%',
        totalPayback: '2,354,384 USDT',
        type: 'exchange'
      }
    ],
    
    crypto: [
      // 암호화폐 파트너사도 동일한 구조
    ],
    
    platform: [
      {
        id: 'tradingview',
        name: 'TradingView',
        nameKo: '트레이딩뷰',
        logo: '/images/partners/tradingview.png',
        description: '전 세계 1위 차트 플랫폼',
        link: 'https://tradingview.com',
        type: 'link' // 외부 링크
      },
      {
        id: 'chartq',
        name: 'ChartQ',
        nameKo: '차트큐',
        logo: '/images/partners/chartq.png',
        description: '한국형 차트 분석 도구',
        link: 'https://chartq.com',
        type: 'link'
      }
    ]
  };
  
  // 카테고리 제목
  export const categoryTitles = {
    forex: 'FOREX 파트너사',
    crypto: '암호화폐 파트너사',
    platform: '플랫폼 파트너사'
  };