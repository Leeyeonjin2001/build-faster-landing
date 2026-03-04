# 배포 체크리스트: BUILD FASTER 랜딩 페이지

> 최종 갱신: 2026-03-04

---

## 배포 전 필수 체크

### 코드 품질
- [ ] `bash hooks/run-all.sh` — ❌ 0개
- [ ] `npm run build` — 빌드 성공 (에러 0개)
- [ ] ESLint 경고 확인 — 치명적 경고 없음

### PRD 대조
- [ ] S1~S12 전체 섹션 PRD와 일치
- [ ] /cases/ai-webnovel 서브 페이지 정상
- [ ] 모바일 반응형 전 섹션 확인

### SEO / AEO
- [ ] title, description, keywords 설정
- [ ] Open Graph + Twitter Cards 메타 태그
- [ ] JSON-LD @graph (Organization, Service, HowTo, FAQPage)
- [ ] canonical URL 설정
- [ ] favicon 존재

### 보안
- [ ] SECURITY-CHECKLIST.md 전 항목 통과
- [ ] API 키 / 시크릿 프론트엔드 노출 없음
- [ ] console.log 제거 (프로덕션용)

### 브라우저 테스트
- [ ] Chrome (데스크톱 + 모바일)
- [ ] Safari (데스크톱 + iOS)
- [ ] CTA 링크 전부 동작 확인
- [ ] FAQ 아코디언 동작
- [ ] 탭 전환 (Deliverables) 동작
- [ ] 후기 슬라이드 동작

### 배포 설정
- [ ] Vercel 프로젝트 연결
- [ ] 커스텀 도메인 설정 (해당 시)
- [ ] 환경 변수 설정 (해당 시)

---

## 배포 이력

| 버전 | 날짜 | 내용 | 승인자 |
|------|------|------|--------|
| — | — | 아직 배포 전 | — |

<!--
| v1.0 | YYYY-MM-DD | 초기 배포 — 전체 섹션 포함 | YJ |
-->
