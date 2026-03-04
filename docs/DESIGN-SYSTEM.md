# Flowbite Design System

> **Tailwind CSS 기반 컴포넌트 라이브러리**
> Flowbite Pro 라이선스 보유 — 전체 컴포넌트 및 페이지 템플릿 사용 가능

---

## 개요

Flowbite는 Tailwind CSS 위에 구축된 UI 컴포넌트 라이브러리입니다.
다른 3개 시스템(Blast/Material/Apple)이 순수 CSS 변수 기반인 것과 달리,
**Flowbite는 Tailwind CSS 유틸리티 클래스 + Flowbite 컴포넌트**를 함께 사용합니다.

### 다른 시스템과의 차이점

| 항목 | Blast / Material / Apple | Flowbite |
|------|-------------------------|----------|
| CSS 방식 | 순수 CSS 변수 | Tailwind CSS 유틸리티 |
| 컴포넌트 | components.css (자체) | Flowbite 컴포넌트 라이브러리 |
| 토큰 파일 | tokens-{system}.css | tokens-flowbite.css + tailwind.config |
| 설치 필요 | 없음 | npm install flowbite |
| Figma | 별도 | Flowbite Design System (Pro) |

---

## 컬러 팔레트

### Primary (Blue)
| Token | Value | 용도 |
|-------|-------|------|
| primary/50 | `#EBF5FF` | 배경 (매우 연한) |
| primary/100 | `#E1EFFE` | 배경 (연한), 호버 배경 |
| primary/200 | `#C3DDFD` | 보조 배경 |
| primary/300 | `#A4CAFE` | 비활성 상태 |
| primary/400 | `#76A9FA` | 아이콘, 링크 (다크모드) |
| primary/500 | `#3F83F8` | 일반 텍스트 강조 |
| primary/600 | `#1C64F2` | **기본 Primary** — 버튼, 링크 |
| primary/700 | `#1A56DB` | 호버 상태 |
| primary/800 | `#1E429F` | 눌림 상태 |
| primary/900 | `#233876` | 텍스트 강조 (다크) |

### Gray Scale
| Token | Value | 용도 |
|-------|-------|------|
| gray/50 | `#F9FAFB` | 페이지 배경 |
| gray/100 | `#F3F4F6` | 섹션 배경, 입력 필드 |
| gray/200 | `#E5E7EB` | 테두리 기본 |
| gray/300 | `#D1D5DB` | 테두리 강조, 비활성 텍스트 |
| gray/400 | `#9CA3AF` | 플레이스홀더 |
| gray/500 | `#6B7280` | 보조 텍스트 |
| gray/600 | `#4B5563` | 본문 보조 |
| gray/700 | `#374151` | 본문 텍스트 |
| gray/800 | `#1F2A37` | 제목 텍스트 |
| gray/900 | `#111928` | 최진한 텍스트 |

### Red (전체 스케일 — 공식 문서 기준)
| Token | Value | 용도 |
|-------|-------|------|
| red/50 | `#FDF2F2` | 에러 배경 (매우 연한) |
| red/100 | `#FDE8E8` | 에러 배경 (연한) |
| red/200 | `#FBD5D5` | 에러 테두리 |
| red/300 | `#F8B4B4` | 비활성 에러 |
| red/400 | `#F98080` | 다크모드 에러 |
| red/500 | `#F05252` | **에러 기본** |
| red/600 | `#E02424` | 에러 호버 |
| red/700 | `#C81E1E` | 에러 눌림 |
| red/800 | `#9B1C1C` | 진한 에러 |
| red/900 | `#771D1D` | 다크모드 에러 배경 |

### Green / Emerald (전체 스케일)
| Token | Value | 용도 |
|-------|-------|------|
| green/50 | `#F3FAF7` | 성공 배경 (매우 연한) |
| green/100 | `#DEF7EC` | 성공 배경 |
| green/200 | `#BCF0DA` | 성공 보조 |
| green/300 | `#84E1BC` | 성공 아이콘 |
| green/400 | `#31C48D` | 다크모드 성공 |
| green/500 | `#0E9F6E` | **성공 기본** |
| green/600 | `#057A55` | 성공 호버 |
| green/700 | `#046C4E` | 성공 눌림 |
| green/800 | `#03543F` | 진한 성공 |
| green/900 | `#014737` | 다크모드 성공 배경 |

### Yellow / Amber (전체 스케일)
| Token | Value | 용도 |
|-------|-------|------|
| yellow/50 | `#FDFDEA` | 경고 배경 (매우 연한) |
| yellow/100 | `#FDF6B2` | 경고 배경 |
| yellow/200 | `#FCE96A` | 경고 보조 |
| yellow/300 | `#FACA15` | 다크모드 경고 |
| yellow/400 | `#E3A008` | 경고 아이콘 |
| yellow/500 | `#C27803` | **경고 기본** |
| yellow/600 | `#9F580A` | 경고 호버 |
| yellow/700 | `#8E4B10` | 경고 눌림 |
| yellow/800 | `#723B13` | 진한 경고 |
| yellow/900 | `#633112` | 다크모드 경고 배경 |

### Indigo (전체 스케일)
| Token | Value |
|-------|-------|
| indigo/50 | `#F0F5FF` |
| indigo/100 | `#E5EDFF` |
| indigo/200 | `#CDDBFE` |
| indigo/300 | `#B4C6FC` |
| indigo/400 | `#8DA2FB` |
| indigo/500 | `#6875F5` |
| indigo/600 | `#5850EC` |
| indigo/700 | `#5145CD` |
| indigo/800 | `#42389D` |
| indigo/900 | `#362F78` |

### Purple / Violet (전체 스케일)
| Token | Value |
|-------|-------|
| purple/50 | `#F6F5FF` |
| purple/100 | `#EDEBFE` |
| purple/200 | `#DCD7FE` |
| purple/300 | `#CABFFD` |
| purple/400 | `#AC94FA` |
| purple/500 | `#9061F9` |
| purple/600 | `#7E3AF2` |
| purple/700 | `#6C2BD9` |
| purple/800 | `#5521B5` |
| purple/900 | `#4A1D96` |

### Pink (전체 스케일)
| Token | Value |
|-------|-------|
| pink/50 | `#FDF2F8` |
| pink/100 | `#FCE8F3` |
| pink/200 | `#FAD1E8` |
| pink/300 | `#F8B4D9` |
| pink/400 | `#F17EB8` |
| pink/500 | `#E74694` |
| pink/600 | `#D61F69` |
| pink/700 | `#BF125D` |
| pink/800 | `#99154B` |
| pink/900 | `#751A3D` |

---

## 타이포그래피

### 폰트
- **기본 폰트**: Inter
- **Figma**: Inter (Flowbite Design System 기본)
- **Fallback**: -apple-system, BlinkMacSystemFont, system-ui, sans-serif

### 크기 체계
| 클래스 | 크기 | 용도 |
|--------|------|------|
| text-4xl | 36px / Bold | 대제목 (h1) |
| text-3xl | 30px / Bold | 부제목 (h2) |
| text-2xl | 24px / Bold | 섹션 제목 (h3) |
| text-xl | 20px / Semibold | 소제목 (h4) |
| text-lg | 18px / Medium | 강조 본문, 소제목 (h5) |
| text-base | 16px / Regular | 본문 |
| text-sm | 14px / Medium | 캡션, 라벨 |
| text-xs | 12px / Regular | 부가 정보, 배지 |

---

## 간격 (Spacing)

Tailwind 기본 스케일 (4px 배수):

| 변수 | 값 | Tailwind 클래스 |
|------|-----|----------------|
| space-1 | 4px | p-1, m-1 |
| space-2 | 8px | p-2, m-2 |
| space-3 | 12px | p-3, m-3 |
| space-4 | 16px | p-4, m-4 |
| space-5 | 20px | p-5, m-5 |
| space-6 | 24px | p-6, m-6 |
| space-8 | 32px | p-8, m-8 |
| space-10 | 40px | p-10, m-10 |
| space-12 | 48px | p-12, m-12 |
| space-16 | 64px | p-16, m-16 |

---

## 모서리 (Border Radius)

| 변수 | 값 | Tailwind 클래스 |
|------|-----|----------------|
| radius-xs | 4px | rounded |
| radius-sm | 6px | rounded-md |
| radius-md | 8px | rounded-lg |
| radius-lg | 12px | rounded-xl |
| radius-xl | 16px | rounded-2xl |
| radius-full | 9999px | rounded-full |

---

## 그림자 (Shadow)

| 변수 | Tailwind 클래스 | 용도 |
|------|----------------|------|
| shadow-xs | shadow-xs | 입력 필드 |
| shadow-sm | shadow-sm | 카드 기본 |
| shadow-md | shadow | 카드 호버, 드롭다운 |
| shadow-lg | shadow-lg | 모달, 팝오버 |
| shadow-xl | shadow-xl | 토스트, 알림 |

---

## 다크 모드

Flowbite는 Tailwind의 `dark:` 접두사를 사용합니다:

```html
<!-- 예시: 다크 모드 대응 카드 -->
<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
  <h3 class="text-gray-900 dark:text-white text-lg font-bold">제목</h3>
  <p class="text-gray-500 dark:text-gray-400 text-base">본문 텍스트</p>
</div>
```

### 다크 모드 컬러 매핑
| 요소 | 라이트 | 다크 |
|------|--------|------|
| 페이지 배경 | gray/50 `#F9FAFB` | gray/900 `#111928` |
| 카드 배경 | white `#FFFFFF` | gray/800 `#1F2A37` |
| 기본 텍스트 | gray/900 `#111928` | white `#F9FAFB` |
| 보조 텍스트 | gray/500 `#6B7280` | gray/400 `#9CA3AF` |
| 테두리 | gray/200 `#E5E7EB` | gray/600 `#4B5563` |
| Primary | `#1C64F2` | `#3F83F8` |

---

## Flowbite 컴포넌트 목록 (Pro)

### Style Guide
- Colors
- Layout Grid
- Typography Variants
- Typography Format
- Spacing

### Components
- Alerts
- Accordions
- Banner
- Badges
- Buttons
- Bottom Navigation
- Breadcrumb
- Card
- Carousel
- Datepicker
- Drawer
- Dropdown
- Footer
- Forms (Input, Select, Textarea, Checkbox, Radio, Toggle)
- Indicator
- KBD
- List Group
- Modal
- Navbar
- Pagination
- Popover
- Progress
- Rating
- Sidebar
- Skeleton
- Speed Dial
- Spinner
- Stepper
- Table
- Tabs
- Timeline
- Toast
- Tooltip
- Video

---

## 프로젝트 설치 방법

### 1. Tailwind CSS + Flowbite 설치

```bash
npm install tailwindcss flowbite
```

### 2. CSS 설정 (Tailwind v4)

```css
/* src/styles/main.css */
@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";

/* 우리 디자인 토큰 오버라이드 */
@import './tokens.css';
```

### 3. Tailwind v3 (레거시)

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#1C64F2',
          700: '#1A56DB',
          800: '#1E429F',
          900: '#233876',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

---

## 코드 작성 규칙

> ⚠️ Flowbite 프로젝트에서는 아래 규칙을 반드시 따릅니다.

1. **Tailwind 유틸리티 클래스를 사용할 것** — 인라인 style 금지
2. **Flowbite 컴포넌트를 우선 사용할 것** — 직접 만들기 전에 Flowbite에 있는지 확인
3. **색상은 Tailwind 클래스로** — `text-blue-600`, `bg-gray-50` 등
4. **다크 모드는 `dark:` 접두사** — `dark:bg-gray-800`, `dark:text-white`
5. **tokens-flowbite.css의 CSS 변수도 병행 가능** — `var(--color-primary)` (커스텀 컴포넌트용)
6. **Figma 참조**: Flowbite Design System (Pro) 파일의 컴포넌트와 동일하게 구현

---

## 컴포넌트 코드 스니펫

> 전체 코드 스니펫은 **`components-flowbite.md`** 파일에 있습니다.

### 포함된 컴포넌트 (18종)

| # | 컴포넌트 | 설명 |
|---|---------|------|
| 1 | Button | Primary, Outline, Ghost, Error, Disabled, 사이즈, 아이콘 |
| 2 | Card | 기본, Header/Body/Footer, 이미지, 플랫 |
| 3 | Input & Form | 입력, 라벨, 에러, 셀렉트, 텍스트에어리어, 체크/라디오/토글 |
| 4 | Badge | Primary, Success, Error, Warning, Neutral, 필/큰 |
| 5 | Table | 줄무늬 + 호버, 배지 연동 |
| 6 | Alert | Info, Success, Warning, Error, 닫기 버튼 |
| 7 | Modal | Header/Body/Footer, 오버레이, data-modal 연동 |
| 8 | Navbar | 반응형, 로고 + 링크 + 모바일 메뉴 |
| 9 | Sidebar | 아이콘 + 텍스트 네비게이션 |
| 10 | Separator | 기본 구분선, 텍스트 포함 |
| 11 | Overlay | 모달/드로어용 반투명 배경 |
| 12 | Typography | h1~h5, 본문, 캡션, 강조 텍스트 |
| 13 | Toast | 성공/에러/경고 토스트 알림 |
| 14 | Dropdown | 메뉴 드롭다운 |
| 15 | Tabs | 언더라인 탭 네비게이션 |
| 16 | Pagination | 이전/다음 + 번호 페이지네이션 |
| 17 | Progress | 프로그레스 바, 라벨 포함 |
| 18 | Skeleton | 로딩 스켈레톤 애니메이션 |

### 클래스 매핑표

components.css의 CSS 클래스와 Blast 2의 Tailwind 클래스 매핑표도 `components-flowbite.md` 하단에 포함되어 있습니다.
기존 프로젝트를 Blast 2로 전환할 때 이 매핑표를 참조하세요.
