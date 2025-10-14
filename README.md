# TetherBear Webpage

TetherBear의 공식 웹사이트 프로젝트입니다. 기존 HTML/CSS/JavaScript로 작성된 정적 웹사이트를 React 기반의 SPA(Single Page Application)로 마이그레이션했습니다.

## 🚀 프로젝트 개요

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 기반으로 제작되었으며, Webflow로 디자인된 웹사이트를 React 컴포넌트로 변환한 프로젝트입니다.

### 주요 변경사항

- ✅ **HTML → React 컴포넌트 변환**: 정적 HTML 파일을 재사용 가능한 React 컴포넌트로 전환
- ✅ **라우팅 구현**: React Router를 사용한 SPA 라우팅 시스템 구축
- ✅ **JSX 문법 수정**: `className`, `style` 객체, 자체 닫힘 태그 등 JSX 문법에 맞게 변환
- ✅ **컴포넌트 구조화**: Home 및 Product 페이지를 독립적인 컴포넌트로 분리

## 📁 프로젝트 구조

```
tetherbear_webpage/
├── public/
│   ├── index.html          # React 앱의 진입점
│   ├── webflow.js          # Webflow 라이브러리 (현재 사용하지 않음)
│   └── images/             # 이미지 리소스
├── src/
│   ├── components/
│   │   ├── Home.jsx        # 홈페이지 컴포넌트
│   │   └── Product.jsx     # 제품 소개 페이지 컴포넌트
│   ├── styles/
│   │   ├── webflow.css     # Webflow 기본 스타일
│   │   ├── tjidajfi.webflow.css  # 커스텀 Webflow 스타일
│   ├── App.js              # 메인 앱 컴포넌트 (라우팅 설정)
│   └── index.js            # React 앱 엔트리 포인트
└── package.json
```

**⚠️ 중요: 프로젝트 루트 폴더(`tetherbear_webpage`)에서 실행해야 합니다!**

```bash
npm install
```

> 📌 `package.json` 파일이 있는 디렉토리에서 실행하세요.

### 3️⃣ 개발 서버 실행

**프로젝트 루트 폴더에서 실행:**

```bash
npm start
```

> 💡 **주의**: 이 프로젝트는 `npm run dev`가 **아닌** `npm start` 명령어를 사용합니다!

**실행 후:**
- 브라우저가 자동으로 열립니다
- 주소: [http://localhost:3000](http://localhost:3000)
- 파일 변경 시 자동으로 새로고침됩니다
- 콘솔에서 lint 에러를 확인할 수 있습니다

### 4️⃣ 프로덕션 빌드 (배포용)

```bash
npm run build
```

- 최적화된 빌드 파일이 `build` 폴더에 생성됩니다
- 파일이 압축되고 해시가 추가됩니다

### 5️⃣ 테스트 실행 (선택사항)

```bash
npm test
```

대화형 watch 모드로 테스트 러너를 실행합니다.

---

## 🎯 빠른 시작 요약

```bash
# 1. 프로젝트 폴더로 이동
cd tetherbear_webpage

# 2. 의존성 설치 (처음 한 번만)
npm install

# 3. 개발 서버 실행
npm start

# ✅ 브라우저에서 http://localhost:3000 자동 열림
```


## ⚠️ 알려진 이슈 및 수정 필요 사항

### 1. Home 페이지 화살표 버튼 애니메이션 미구현

**현상**: 홈페이지의 화살표 버튼 애니메이션이 작동하지 않음

**원인**: Webflow의 애니메이션 라이브러리(`webflow.js`)가 React 환경에서 호환되지 않음

**해결 방법**:
- React 기반 애니메이션 라이브러리로 재구현 필요
- 추천 라이브러리: `framer-motion`, `react-spring`, `GSAP`

```jsx
// 예시: framer-motion 사용
import { motion } from 'framer-motion';

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  {/* 화살표 아이콘 */}
</motion.div>
```

### 2. Factory2 Function 에러

**현상**: `ERROR factory2 is not a function TypeError: factory2 is not a function at Webflow.define`

**원인**: `webflow.js`가 React의 모듈 시스템과 충돌

**임시 해결책**: 
- 현재 `webflow.js` 로딩을 제거한 상태
- Webflow 애니메이션이 필요한 부분은 React 네이티브 방식으로 재구현 필요

**장기 해결책**:
- Webflow의 모든 인터랙션을 React 컴포넌트로 재작성
- CSS 애니메이션 또는 JavaScript 애니메이션 라이브러리 사용
