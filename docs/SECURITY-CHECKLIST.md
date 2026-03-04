# 보안 검증 체크리스트: BUILD FASTER 랜딩 페이지

> 최종 갱신: 2026-03-04
> 프로젝트 특성: 순수 랜딩 페이지 (DB/API/인증/결제 없음)

---

## 적용 범위

이 프로젝트는 정적 랜딩 페이지이므로 DB, API, 인증, 결제 관련 항목은 해당 없음.
아래는 **이 프로젝트에 해당하는 항목만** 포함합니다.

---

## 1. 프론트엔드 보안

### 1-1. 키 노출 방지
- [ ] 프론트엔드 코드에 API 키 / 시크릿 없음
- [ ] .env 파일이 .gitignore에 등록됨

**검증 명령어:**
```bash
grep -rn "secret\|api_key\|API_KEY\|service_role\|PRIVATE_KEY" --include="*.tsx" --include="*.ts" --include="*.js" src/
```

### 1-2. XSS 방지
- [ ] dangerouslySetInnerHTML 사용 시 신뢰할 수 있는 데이터만 (JSON-LD 등)
- [ ] 사용자 입력값을 직접 렌더링하지 않음

**검증 명령어:**
```bash
grep -rn "dangerouslySetInnerHTML" --include="*.tsx" --include="*.ts" src/
```

### 1-3. 외부 리소스
- [ ] 외부 스크립트는 https:// 사용
- [ ] CDN 리소스에 integrity 속성 권장

**검증 명령어:**
```bash
grep -rn "http://" --include="*.tsx" --include="*.ts" --include="*.js" src/ | grep -v localhost
```

---

## 2. 폼 보안 (Contact 섹션)

> 현재 폼은 프론트엔드 전용 (백엔드 미연동). 백엔드 연동 시 아래 항목 재점검 필요.

### 2-1. 현재 (정적 폼)
- [ ] 폼 제출 시 민감정보를 URL 파라미터로 전송하지 않음 (GET 금지)
- [ ] 폼 입력값에 기본적인 클라이언트 검증 존재

### 2-2. 백엔드 연동 시 추가 (DEV-012~014 구현 시)
- [ ] 서버 측 입력값 검증 (sanitization)
- [ ] Rate limiting (스팸 방지)
- [ ] CSRF 토큰 적용
- [ ] 이메일 주소 검증

---

## 3. 빌드 / 배포 보안

- [ ] 프로덕션 빌드에 console.log 없음
- [ ] source map 비활성화 (프로덕션)
- [ ] node_modules가 .gitignore에 등록됨
- [ ] .next 빌드 폴더가 .gitignore에 등록됨

**검증 명령어:**
```bash
grep -rn "console\.\(log\|error\|warn\)" --include="*.tsx" --include="*.ts" --include="*.js" src/
```

---

## 4. 쿠키 / 추적 (DEV-012 구현 시)

> 쿠키 동의 배너 구현 전까지 해당 없음.

- [ ] 쿠키 동의 전 추적 스크립트 비활성화
- [ ] Google Consent Mode v2 적용
- [ ] GDPR / KPIPA 준수

---

## 5. 보안 체크 실행 타이밍

| 시점 | 담당 | 행동 |
|------|------|------|
| DEV 완료 | 클로드 코드 | 이 체크리스트 해당 항목 셀프 체크 |
| QA 검수 | 코워커 | 위 grep 명령어 실행 |
| 배포 전 | 전원 | 전 항목 통과 + 대표 승인 |
