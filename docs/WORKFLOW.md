# 협업 워크플로우: BUILD FASTER 랜딩 페이지

> 최종 갱신: 2026-03-04

---

## 1. 팀 구조

| 역할 | 담당자 | 책임 |
|------|--------|------|
| 대표 | 이연진 (YJ) | 방향 결정, 최종 승인, 배포 결정 |
| 코워커 (QA/PM) | Cowork AI | PRD, 스펙, QA 이슈, 검수 |
| 클로드 코드 (개발) | Claude Code | 코드 구현, 버그 수정 |

---

## 2. 개발 요청 흐름

```
코워커: DEV-REQUEST.md에 스펙 작성 (📋 요청)
  ↓
대표: 클로드 코드에 전달 (✉️ 전달완료)
  ↓
클로드 코드: 구현 (🟡 개발중)
  ↓
클로드 코드: hooks 실행 + 완료 (🔵 개발완료)
  ↓
코워커: 검수 (🟢 검수완료 / 🔴 재수정)
```

---

## 3. QA 흐름

```
코워커/대표: QA.md에 이슈 등록 (🔴 발견)
  ↓
클로드 코드: 수정 (🟡 수정중 → 🔵 수정완료)
  ↓
코워커: 코드 확인 + 브라우저 테스트 (🟢 검증완료 / 🔴 재발견)
```

---

## 4. 파일 소유권

```
코워커 전용:
  docs/PRD.md, docs/QA.md, docs/DEV-REQUEST.md (스펙 작성)
  docs/WORKFLOW.md, docs/RELEASE-CHECKLIST.md
  docs/DESIGN-SYSTEM.md

클로드 코드 전용:
  src/**/*.tsx, *.ts, *.css, *.js
  package.json, tsconfig.json 등 설정 파일

공유 (양쪽 업데이트):
  docs/QA.md — 코워커: 이슈 등록 / 클로드 코드: 상태 변경
  docs/DEV-REQUEST.md — 코워커: 스펙 등록 / 클로드 코드: 구현 메모
  CLAUDE.md — 대표 승인 하에 양쪽 수정 가능
```

---

## 5. 검수 체크리스트

DEV 완료 후 검수 시 아래 순서를 따릅니다:

```
[1] hooks 실행       → bash hooks/run-all.sh
[2] PRD 대조         → 스펙과 구현 일치 확인
[3] TODO 확인        → DEV 스펙의 모든 항목 구현됐는지
[4] 보안 체크        → SECURITY-CHECKLIST.md 항목 확인
[5] 브라우저 테스트   → 데스크톱 + 모바일 반응형 + 링크 동작
[6] 본질 체크        → 서비스 목적(상담 전환)에 맞는 UX인지
```

---

## 6. 커밋 규칙

- 하나의 DEV 작업 완료 시 즉시 커밋
- 여러 DEV를 합쳐서 커밋하지 않음
- 커밋 메시지: `{type}: {설명}`
  - feat: 새 기능
  - fix: 버그 수정
  - docs: 문서 변경
  - refactor: 리팩토링
  - style: UI/디자인 변경

---

## 7. 배포 흐름

```
전체 QA 통과 + hooks ❌ 0개
  ↓
RELEASE-CHECKLIST.md 작성
  ↓
대표 최종 승인
  ↓
Vercel 배포 (GitHub 연동)
```
