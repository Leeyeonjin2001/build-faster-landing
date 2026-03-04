#!/bin/bash
# check-structure.sh — 프로젝트 구조 체크
# 대상: BUILD FASTER 랜딩 (Next.js + Tailwind)

PASS=0
WARN=0
FAIL=0

echo "=== 구조 체크 ==="

# 1. 필수 코드 파일 존재
echo -n "[1] 필수 코드 파일... "
MISSING_CODE=""
for f in "src/app/page.tsx" "src/app/layout.tsx" "src/app/globals.css" "src/styles/tokens.css"; do
  [ ! -f "$f" ] && MISSING_CODE="$MISSING_CODE $f"
done
if [ -z "$MISSING_CODE" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "❌ FAIL — 없음:$MISSING_CODE"
  ((FAIL++))
fi

# 2. 필수 문서 존재
echo -n "[2] 필수 문서 파일... "
MISSING_DOCS=""
for f in "CLAUDE.md" "docs/PRD.md" "docs/DEV-REQUEST.md" "docs/DESIGN-SYSTEM.md" "docs/QA.md" "docs/SECURITY-CHECKLIST.md"; do
  [ ! -f "$f" ] && MISSING_DOCS="$MISSING_DOCS $f"
done
if [ -z "$MISSING_DOCS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 없음:$MISSING_DOCS"
  ((WARN++))
fi

# 3. package.json 존재 + 필수 의존성
echo -n "[3] package.json + Next.js 의존성... "
if [ -f "package.json" ]; then
  if grep -q '"next"' package.json 2>/dev/null; then
    echo "✅ PASS"
    ((PASS++))
  else
    echo "❌ FAIL — next 의존성 없음"
    ((FAIL++))
  fi
else
  echo "❌ FAIL — package.json 없음"
  ((FAIL++))
fi

# 4. tsconfig.json 존재
echo -n "[4] tsconfig.json... "
if [ -f "tsconfig.json" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — tsconfig.json 없음"
  ((WARN++))
fi

# 5. Tailwind 설정 확인 (v4는 CSS 기반이므로 globals.css에서 @import 확인)
echo -n "[5] Tailwind CSS 연결... "
if grep -q "tailwindcss" src/app/globals.css 2>/dev/null; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — globals.css에 tailwindcss import 미확인"
  ((WARN++))
fi

# 6. 서브 페이지 존재 (PRD 기준: /cases/ai-webnovel)
echo -n "[6] 서브 페이지 /cases/ai-webnovel... "
if [ -f "src/app/cases/ai-webnovel/page.tsx" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 케이스 스터디 페이지 없음"
  ((WARN++))
fi

# 7. public 폴더 존재
echo -n "[7] public/ 폴더... "
if [ -d "public" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — public/ 폴더 없음"
  ((WARN++))
fi

echo ""
echo "--- 구조 체크 결과: ✅ $PASS  ⚠️ $WARN  ❌ $FAIL ---"

[ $FAIL -eq 0 ]
