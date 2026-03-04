#!/bin/bash
# check-format.sh — 코드 포맷/스타일 체크
# 대상: BUILD FASTER 랜딩 (Next.js + Tailwind)

PASS=0
WARN=0
FAIL=0

echo "=== 포맷 체크 ==="

# 1. ESLint 실행 (설치되어 있는 경우)
echo -n "[1] ESLint... "
if [ -f "node_modules/.bin/eslint" ] || command -v npx &>/dev/null; then
  LINT_OUTPUT=$(npx eslint src/ 2>&1)
  LINT_EXIT=$?
  # 요약 줄에서 실제 에러/경고 수 파싱 (예: "✖ 1 problem (0 errors, 1 warning)")
  REAL_ERRORS=$(echo "$LINT_OUTPUT" | sed -n 's/.*(\([0-9]*\) error.*/\1/p' | tail -1)
  REAL_WARNINGS=$(echo "$LINT_OUTPUT" | sed -n 's/.*[, ]\([0-9]*\) warning.*/\1/p' | tail -1)
  REAL_ERRORS=${REAL_ERRORS:-0}
  REAL_WARNINGS=${REAL_WARNINGS:-0}

  if [ $LINT_EXIT -eq 0 ]; then
    echo "✅ PASS"
    ((PASS++))
  elif [ "$REAL_ERRORS" -gt 0 ] 2>/dev/null; then
    echo "❌ FAIL — ESLint 에러 ${REAL_ERRORS}개"
    echo "$LINT_OUTPUT" | tail -5
    ((FAIL++))
  else
    echo "⚠️ WARN — ESLint 경고 ${REAL_WARNINGS}건"
    echo "$LINT_OUTPUT" | grep "warning" | head -3
    ((WARN++))
  fi
else
  echo "⚠️ WARN — ESLint 미설치"
  ((WARN++))
fi

# 2. TypeScript 타입 체크 (tsc --noEmit)
echo -n "[2] TypeScript 타입 체크... "
if [ -f "tsconfig.json" ]; then
  TSC_OUTPUT=$(npx tsc --noEmit 2>&1)
  TSC_EXIT=$?
  if [ $TSC_EXIT -eq 0 ]; then
    echo "✅ PASS"
    ((PASS++))
  else
    TSC_ERRORS=$(echo "$TSC_OUTPUT" | grep -c "error TS" || true)
    echo "❌ FAIL — TypeScript 에러 ${TSC_ERRORS}개"
    echo "$TSC_OUTPUT" | head -5
    ((FAIL++))
  fi
else
  echo "⚠️ WARN — tsconfig.json 없음"
  ((WARN++))
fi

# 3. 인라인 style 사용 체크 (Tailwind 프로젝트에서는 지양)
echo -n "[3] 인라인 style 사용... "
INLINE_STYLES=$(grep -rn 'style={{' --include="*.tsx" --include="*.ts" src/ 2>/dev/null | grep -v "node_modules" || true)
INLINE_COUNT=$(echo "$INLINE_STYLES" | grep -c "style={{" 2>/dev/null || echo "0")
if [ "$INLINE_COUNT" -eq 0 ] || [ -z "$INLINE_STYLES" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 인라인 style ${INLINE_COUNT}건 (Tailwind 클래스 권장)"
  echo "$INLINE_STYLES" | head -3
  ((WARN++))
fi

# 4. TODO/FIXME/HACK 잔존
echo -n "[4] TODO/FIXME/HACK 잔존... "
TODOS=$(grep -rn "TODO\|FIXME\|HACK\|XXX" --include="*.tsx" --include="*.ts" --include="*.js" src/ 2>/dev/null || true)
if [ -z "$TODOS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  TODO_COUNT=$(echo "$TODOS" | wc -l | tr -d ' ')
  echo "⚠️ WARN — ${TODO_COUNT}건 잔존"
  echo "$TODOS" | head -3
  ((WARN++))
fi

# 5. 파일 크기 체크 (단일 파일 500줄 초과 시 경고)
echo -n "[5] 파일 크기 (500줄 초과)... "
BIG_FILES=""
for f in $(find src/ -name "*.tsx" -o -name "*.ts" 2>/dev/null); do
  LINES=$(wc -l < "$f" | tr -d ' ')
  [ "$LINES" -gt 500 ] && BIG_FILES="$BIG_FILES $f(${LINES}줄)"
done
if [ -z "$BIG_FILES" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 큰 파일:$BIG_FILES"
  ((WARN++))
fi

echo ""
echo "--- 포맷 체크 결과: ✅ $PASS  ⚠️ $WARN  ❌ $FAIL ---"

[ $FAIL -eq 0 ]
