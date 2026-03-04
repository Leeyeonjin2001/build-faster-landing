# DEV-REQUEST: BUILD FASTER 랜딩 페이지

> 최종 갱신: 2026-03-04

---

## 전체 현황

| ID | 제목 | 상태 | 완료일 |
|----|------|------|--------|
| DEV-001 | 랜딩 페이지 초기 구축 | 🔵 완료 | 2026-03-04 |
| DEV-002 | 브랜딩 피벗 (기술→고객 문제 중심) | 🔵 완료 | 2026-03-04 |
| DEV-003 | SEO + AEO 구축 | 🔵 완료 | 2026-03-04 |
| DEV-004 | AI 웹소설 케이스 스터디 | 🔵 완료 | 2026-03-04 |
| DEV-005 | Trust Bar + 프로세스 순서 개선 | 🔵 완료 | 2026-03-04 |
| DEV-006 | AI+전문가 메시지 강화 | 🔵 완료 | 2026-03-04 |
| DEV-007 | 컨설팅 가격 플랜 추가 | 🔵 완료 | 2026-03-04 |
| DEV-008 | 가격 카드 크기 확대 + 높이 통일 | 🔵 완료 | 2026-03-04 |
| DEV-009 | 운영비 섹션 톤 변경 | 🔵 완료 | 2026-03-04 |
| DEV-010 | 고객 이야기 카드 높이 통일 | 🔵 완료 | 2026-03-04 |
| DEV-011 | 데모 샘플 바둑판 그리드 전환 | 🔵 완료 | 2026-03-04 |
| DEV-015 | 프로젝트 체계 정비 | 🔵 완료 | 2026-03-04 |
| DEV-012 | 쿠키 동의 배너 구현 | 📋 대기 | — |
| DEV-013 | 날짜 예약 시스템 임베드 | 📋 대기 | — |
| DEV-014 | 이메일 자동화 연동 | 📋 대기 | — |

---

## 완료된 DEV 상세

### DEV-001: 랜딩 페이지 초기 구축 🔵
- Next.js 16 + TypeScript + Tailwind v4 프로젝트 셋업
- 전체 섹션 레이아웃 구현 (Hero ~ Footer)
- 디자인 토큰 (tokens.css) + 글로벌 스타일 구성

### DEV-002: 브랜딩 피벗 🔵
- "AI로 빨리 만들어줌" → "당신의 문제를 1주일 안에 해결" 전환
- 고객 고통 공감 섹션 (PainPoints) 신설
- 3단계 퍼널 (무료→10만원→150만원~) 구조
- 결과물 2탭 시나리오 (문제형 / 서비스형)
- 운영비 투명성 섹션 추가

### DEV-003: SEO + AEO 구축 🔵
- layout.tsx: title, description, keywords, OG, Twitter Cards, canonical
- JSON-LD @graph: Organization, Service (가격 포함), HowTo (3단계), FAQPage (5개)
- 키워드: MVP 개발, 앱 외주, 웹 외주, 바이브코딩 등

### DEV-004: AI 웹소설 케이스 스터디 🔵
- `/cases/ai-webnovel` 상세 페이지 생성 (7개 섹션)
- 데모 샘플에 AI 웹소설 카드 추가 + 링크 연결
- 고객 이야기 김OO 텍스트 스펙 반영
- SEO 메타데이터 포함

### DEV-005: Trust Bar + 프로세스 순서 🔵
- Hero 아래에 Trust Bar 추가 (4년 경력, Microsoft/MILA MOU)
- ProcessSystem 위치: FAQ 뒤 → Funnel 뒤로 이동

### DEV-006: AI+전문가 메시지 강화 🔵
- Hero: "AI와 전문가가 함께 분석하고, 설계하고, 만듭니다"
- Trust Bar: "AI + 전문가가 함께 만듭니다" 항목 추가
- Funnel: "전문가가 직접 분석하고, AI로 빠르게 만듭니다" + "전문가 분석" 뱃지

### DEV-007: 컨설팅 가격 플랜 추가 🔵
- Pricing에 컨설팅 플랜 추가 (10만원, 1~2일)
- 제공사항: 요구사항 분석, 막힌 부분 체크, 배포 지원, 기술 스택 추천, PRD 문서
- 2열 → 3열 그리드 변경

### DEV-008: 가격 카드 크기 + 높이 통일 🔵
- 패딩 p-8 → p-10, 가격 폰트 4xl → 5xl, 피처 text-sm → text-base
- flex-col + flex-1 + mt-auto로 카드 높이 균일
- 컨테이너 max-w-4xl → max-w-6xl

### DEV-009: 운영비 섹션 톤 변경 🔵
- "0~3만원" 단정 → "고객 맞춤 최적화"
- "무료 티어 최대한 활용" → "고객 상황에 맞춰 최적의 운영 비용 구조로 설계"

### DEV-010: 고객 이야기 카드 높이 통일 🔵
- blockquote에 min-h-[100px] 추가

### DEV-011: 데모 샘플 바둑판 그리드 🔵
- lg:grid-cols-4 → lg:grid-cols-3 (모바일 1열, 태블릿 2열, PC 3열)

### DEV-015: 프로젝트 체계 정비 🔵
- **훅 5개 생성** (hooks/): run-all, check-security, check-structure, check-links, check-format
- **문서 4개 생성** (docs/): QA.md, WORKFLOW.md, RELEASE-CHECKLIST.md, SECURITY-CHECKLIST.md
- **ESLint 에러 수정**: ai-webnovel `<a>` → `<Link>` (4건), page.tsx 미사용 변수 제거 (1건)
- **에이전틱 훅 설정**: PostToolUse (ESLint 자동 체크) + PreToolUse (커밋 전 검증)
- hooks 결과: ✅18 ⚠️3 ❌0

---

## 대기 중인 DEV 상세

### DEV-012: 쿠키 동의 배너 📋
**의존성:** 도구 선정 (Silktide 추천)
**스펙:**
- 페이지 최초 방문 시 하단에 쿠키 동의 배너 표시
- 동의/거부 선택 가능
- 동의 시 GA4 추적 스크립트 활성화 (Google Consent Mode v2)
- 선택 결과 localStorage 저장 (재방문 시 미표시)
- GDPR/KPIPA 준수

### DEV-013: 날짜 예약 시스템 📋
**의존성:** CRM 연동 도구 확인 중 (대표 체크)
**스펙:**
- Contact 섹션의 "무료 상담 신청" → 날짜/시간 예약 가능하도록
- 외부 도구 임베드 (Calendly / Cal.com / 기타 CRM 연동 가능한 도구)
- CRM과 데이터 동기화

### DEV-014: 이메일 자동화 📋
**의존성:** DEV-013 (CRM 선정 후)
**스펙:**
- 유저가 폼에서 이메일 입력 → CRM에 저장
- 자동 이메일 시퀀스 발송 (Mailchimp / Resend 등)
- 쿠키 동의와 연계 (GA4 행동 데이터 활용)

---

## 깃 배포 이력

| 커밋 | 내용 | 날짜 |
|------|------|------|
| cf155db | Initial commit: 랜딩 페이지 | 2026-03-04 |
| bf637b3 | AI 웹소설 케이스 + Trust Bar + 프로세스 순서 | 2026-03-04 |
| 589c6d9 | PRD v2.0 + DEV-REQUEST 정리 / 가격·후기 카드 개선 | 2026-03-04 |
| 645c49a | 프로젝트 체계 정비 — hooks, QA/워크플로우 문서 추가 | 2026-03-04 |
| 61f6329 | 에이전틱 훅 설정 — ESLint 자동 체크 + 커밋 전 검증 | 2026-03-04 |

**리모트:**
- origin: https://github.com/Leeyeonjin2001/build-faster-landing
- blast: https://github.com/blast-dev-team/build-faster-landing
