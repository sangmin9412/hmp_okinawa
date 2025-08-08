# HMJ Front Okinawa - 현대 EV 시승 쿠폰 발급 서비스

오키나와 지역 현대 EV 시승 예약 및 쿠폰 발급을 위한 Next.js 기반 웹 애플리케이션입니다.

## 🚗 주요 기능

### 1. 다국어 지원
- 일본어(JP), 한국어(KO) 지원
- next-intl을 활용한 국제화 구현
- 언어별 최적화된 UI/UX 제공

### 2. 시승 신청
- 3단계 폼 구성 (개인정보 → 차량정보 → 추가정보)
- 실시간 유효성 검증 (react-hook-form + zod)
- 중복 참여 방지 시스템

### 3. 쿠폰 발급
- 시승 신청 완료 시 자동 쿠폰 발급
- 쿠폰 잔여 수량 실시간 확인
- 발급된 쿠폰 코드 복사 기능
- 쿠폰 유효기간 안내

### 4. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완벽 대응
- Tailwind CSS 기반 반응형 레이아웃

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1 + shadcn/ui
- **Form Management**: React Hook Form 7.54.2 + Zod 3.24.1
- **Internationalization**: next-intl 3.26.3
- **State Management**: React Context API

### UI Components
- Radix UI (Dialog, Select, Radio Group, Toast 등)
- Lucide React (아이콘)
- Swiper (캐러셀)

### Development Tools
- ESLint + Prettier (코드 품질)
- SASS (스타일 전처리)
- Cross-env (환경 변수 관리)

## 📁 디렉토리 구조

```
├── public/                 # 정적 파일
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── [locale]/      # 다국어 라우팅
│   │   │   ├── page.tsx   # 메인 페이지
│   │   │   ├── form/      # 시승 신청 폼
│   │   │   └── complete/  # 완료 페이지
│   │   ├── layout.tsx     # 루트 레이아웃
│   │   └── globals.css    # 글로벌 스타일
│   ├── components/        # 공통 컴포넌트
│   │   ├── ui/           # UI 컴포넌트
│   │   ├── providers/    # Context Providers
│   │   └── icons/        # 아이콘 컴포넌트
│   ├── features/         # 기능별 모듈
│   │   └── test-drive/   # 시승 관련 기능
│   │       ├── api/      # API 통신
│   │       ├── hooks/    # 커스텀 훅
│   │       └── types/    # 타입 정의
│   ├── lib/              # 유틸리티 함수
│   ├── locale/           # 번역 파일
│   │   ├── jp.json      # 일본어
│   │   └── ko.json      # 한국어
│   ├── hooks/            # 공통 훅
│   ├── types/            # 전역 타입
│   └── config/           # 설정 파일
├── .next/                # Next.js 빌드 출력
├── node_modules/         # 의존성 패키지
├── package.json          # 프로젝트 설정
├── tsconfig.json         # TypeScript 설정
└── tailwind.config.ts    # Tailwind CSS 설정
```

## 📦 주요 패키지

### Dependencies
```json
{
  "@hookform/resolvers": "^3.10.0",      // 폼 유효성 검증
  "@radix-ui/*": "latest",                // UI 컴포넌트
  "@shadcn/ui": "^0.0.4",                 // UI 컴포넌트 라이브러리
  "axios": "^1.7.9",                      // HTTP 클라이언트
  "crypto-js": "^4.2.0",                  // 암호화
  "next": "15.1.6",                       // Next.js 프레임워크
  "next-intl": "^3.26.3",                 // 국제화
  "react": "^19.0.0",                     // React
  "react-hook-form": "^7.54.2",           // 폼 관리
  "swiper": "^11.2.4",                    // 스와이퍼
  "tailwind-merge": "^3.0.1",             // Tailwind 클래스 병합
  "zod": "^3.24.1"                        // 스키마 검증
}
```

### DevDependencies
```json
{
  "@types/react": "^19",                  // React 타입
  "@typescript-eslint/*": "^8.24.1",      // TypeScript ESLint
  "eslint": "^9",                         // 코드 린팅
  "prettier": "^3.5.0",                   // 코드 포맷팅
  "sass": "^1.84.0",                      // SASS
  "tailwindcss": "^3.4.1",                // Tailwind CSS
  "typescript": "^5"                      // TypeScript
}
```

## 🚀 시작하기

### 환경 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

1. 프로젝트 클론
```bash
git clone [repository-url]
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```
개발 서버가 `http://localhost:3020/okinawa` 에서 실행됩니다.

4. 프로덕션 빌드
```bash
npm run build
npm run start
```
프로덕션 서버가 `http://localhost:3025/okinawa` 에서 실행됩니다.

## 🌐 API 엔드포인트

### 1. 중복 참여 검증
- **URL**: `/api/event/check`
- **Method**: GET
- **용도**: 이메일, 이름으로 중복 참여 확인

### 2. 쿠폰 잔여 수량 조회
- **URL**: `/api/coupon/remain`
- **Method**: GET
- **용도**: 발급 가능한 쿠폰 수량 확인

### 3. 쿠폰 발급
- **URL**: `/api/coupon/issuance`
- **Method**: POST
- **용도**: 시승 신청 정보로 쿠폰 발급

## 📝 주요 페이지

1. **메인 페이지** (`/[locale]`)
   - 서비스 소개
   - FAQ
   - 지점 위치 안내

2. **시승 신청 폼** (`/[locale]/form`)
   - Step 1: 개인정보 입력
   - Step 2: 보유 차량 정보
   - Step 3: 구매 계획 정보

3. **완료 페이지** (`/[locale]/complete`)
   - 쿠폰 코드 표시
   - 쿠폰 유효기간 안내
   - 복사 기능

## 🔧 환경 변수

프로젝트는 `cross-env`를 사용하여 포트를 설정합니다:
- 개발 환경: PORT=3020
- 프로덕션 환경: PORT=3025

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.
