# 프로젝트 규칙 (BUILD FASTER Landing)

> **글로벌 규칙은 `~/.claude/CLAUDE.md` 참조**
> 이 파일에는 이 프로젝트에만 적용되는 규칙만 기록합니다.

---

## 0. 프로젝트 핵심 관점

> ⚠️ **이것은 랜딩 페이지입니다. 서비스 자체가 아니라, 서비스를 알리는 홈페이지입니다.**

- **이 서비스는 무엇인가?** — BUILD FASTER: 바이브코딩으로 MVP를 1~2주 만에 만들어주는 서비스의 홍보 랜딩 페이지
- **사용자는 누구인가?** — MVP를 빠르게 만들고 싶은 창업자, 기획자, 사업가
- **왜 만드는가?** — BUILD FASTER 서비스를 알리고, 방문자를 상담 예약으로 전환
- **이 서비스가 아닌 것은?** — 대시보드, 회원 시스템, 결제 시스템 (순수 랜딩 페이지)

---

## 1. 기술 스택

- 프론트엔드: Next.js + TypeScript + Tailwind CSS
- 백엔드: 없음 (정적 랜딩)
- DB: 없음
- 배포: 미정 (Vercel 예상)

---

## 2. 파일 구조

```
src/
  app/
    page.tsx              ← 랜딩 페이지 메인
    layout.tsx            ← 레이아웃 + JSON-LD
    globals.css           ← Tailwind import
    cases/ai-webnovel/
      page.tsx            ← AI 웹소설 케이스 스터디
  components/
    DevTools.tsx          ← Agentation 래퍼 (개발 전용)
```

---

## 3. 디자인 시스템

> 디자인 시스템: Blast 2 — Tailwind CSS 기반
> 상세 토큰은 `docs/DESIGN-SYSTEM.md` 참조

### 핵심 토큰
```
Primary Color:     #1C64F2 (primary-600)
Primary Hover:     #1A56DB (primary-700)
Error Color:       #F05252 (red-500)
Text Primary:      #111928 (gray-900)
Text Secondary:    #6B7280 (gray-500)
Background:        #F9FAFB (gray-50)
Card Background:   #FFFFFF (white)
Border Color:      #E5E7EB (gray-200)
Border Radius:     8px (rounded-lg)
Font Family:       Inter
```

### 디자인 규칙 (필수 — Blast 2)
- **Tailwind 유틸리티 클래스 사용** — 인라인 style 금지
- **색상은 Tailwind 클래스로** — `text-blue-600`, `bg-gray-50` 등
- **다크 모드 없음** — 라이트 모드만
- **커스텀이 필요하면** Tailwind 설정 또는 globals.css에 CSS 변수 추가

---

## 4. 프로젝트 고유 규칙

- 이 프로젝트는 순수 랜딩 페이지 — 복잡한 상태 관리 불필요
- 모바일 반응형 필수 (모바일 우선 접근)
- CTA는 "메뉴 선택 → 예약 문의" 흐름
- 콘텐츠는 더미 텍스트로 레이아웃만 잡고, 나중에 교체
