#!/bin/bash
# check-security.sh — 순수 랜딩 페이지용 보안 체크
# 대상: Next.js + Tailwind (DB/API 없음)

PASS=0
WARN=0
FAIL=0

echo "=== 보안 체크 ==="

# 1. API 키 / 시크릿 노출 체크
echo -n "[1] API 키/시크릿 노출... "
SECRETS=$(grep -rn "secret\|api_key\|API_KEY\|service_role\|PRIVATE_KEY\|password\s*=" \
  --include="*.tsx" --include="*.ts" --include="*.js" --include="*.css" \
  src/ 2>/dev/null | grep -v "node_modules" | grep -v ".next" || true)
if [ -z "$SECRETS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "❌ FAIL"
  echo "$SECRETS"
  ((FAIL++))
fi

# 2. 하드코딩된 외부 URL 중 http:// (비암호화) 사용
echo -n "[2] http:// 비암호화 URL... "
HTTP_URLS=$(grep -rn "http://" \
  --include="*.tsx" --include="*.ts" --include="*.js" \
  src/ 2>/dev/null | grep -v "localhost" | grep -v "127.0.0.1" | grep -v "node_modules" || true)
if [ -z "$HTTP_URLS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 비암호화 URL 발견"
  echo "$HTTP_URLS"
  ((WARN++))
fi

# 3. dangerouslySetInnerHTML 사용 (XSS 위험)
echo -n "[3] dangerouslySetInnerHTML 사용... "
DANGEROUS=$(grep -rn "dangerouslySetInnerHTML" \
  --include="*.tsx" --include="*.ts" --include="*.jsx" \
  src/ 2>/dev/null || true)
if [ -z "$DANGEROUS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — XSS 위험 가능성"
  echo "$DANGEROUS"
  ((WARN++))
fi

# 4. console.log 잔존 (프로덕션 빌드 전 제거 필요)
echo -n "[4] console.log 잔존... "
CONSOLE=$(grep -rn "console\.log\|console\.error\|console\.warn" \
  --include="*.tsx" --include="*.ts" --include="*.js" \
  src/ 2>/dev/null | grep -v "node_modules" || true)
if [ -z "$CONSOLE" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 배포 전 제거 권장"
  echo "$CONSOLE"
  ((WARN++))
fi

# 5. .env 파일이 .gitignore에 포함되어 있는지
echo -n "[5] .env .gitignore 등록... "
if [ -f ".gitignore" ]; then
  if grep -q "\.env" .gitignore 2>/dev/null; then
    echo "✅ PASS"
    ((PASS++))
  else
    echo "⚠️ WARN — .gitignore에 .env 미등록"
    ((WARN++))
  fi
else
  echo "⚠️ WARN — .gitignore 파일 없음"
  ((WARN++))
fi

echo ""
echo "--- 보안 체크 결과: ✅ $PASS  ⚠️ $WARN  ❌ $FAIL ---"

# 종료 코드: FAIL이 있으면 1 반환
[ $FAIL -eq 0 ]
