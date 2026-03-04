#!/bin/bash
# run-all.sh — 전체 훅 실행
# BUILD FASTER 랜딩 페이지 (Next.js + Tailwind, DB/API 없음)

HOOKS_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$HOOKS_DIR")"
cd "$PROJECT_DIR"

TOTAL_PASS=0
TOTAL_WARN=0
TOTAL_FAIL=0

echo "╔══════════════════════════════════════╗"
echo "║   BUILD FASTER — Hooks 전체 실행     ║"
echo "╚══════════════════════════════════════╝"
echo ""

# 각 훅을 순서대로 실행
for hook in "$HOOKS_DIR"/check-*.sh; do
  [ ! -f "$hook" ] && continue

  echo "────────────────────────────────────────"
  bash "$hook"
  EXIT_CODE=$?

  # 결과 파싱 (마지막 줄에서 숫자 추출)
  RESULT_LINE=$(bash "$hook" 2>/dev/null | tail -1)
  P=$(echo "$RESULT_LINE" | grep -oP '✅ \K[0-9]+' 2>/dev/null || echo "$RESULT_LINE" | sed -n 's/.*✅ \([0-9]*\).*/\1/p')
  W=$(echo "$RESULT_LINE" | grep -oP '⚠️ \K[0-9]+' 2>/dev/null || echo "$RESULT_LINE" | sed -n 's/.*⚠️ \([0-9]*\).*/\1/p')
  F=$(echo "$RESULT_LINE" | grep -oP '❌ \K[0-9]+' 2>/dev/null || echo "$RESULT_LINE" | sed -n 's/.*❌ \([0-9]*\).*/\1/p')

  TOTAL_PASS=$((TOTAL_PASS + ${P:-0}))
  TOTAL_WARN=$((TOTAL_WARN + ${W:-0}))
  TOTAL_FAIL=$((TOTAL_FAIL + ${F:-0}))

  echo ""
done

echo "════════════════════════════════════════"
echo "  전체 결과: ✅ $TOTAL_PASS  ⚠️ $TOTAL_WARN  ❌ $TOTAL_FAIL"
if [ $TOTAL_FAIL -gt 0 ]; then
  echo "  판정: ❌ FAIL — 수정 필요"
elif [ $TOTAL_WARN -gt 0 ]; then
  echo "  판정: ⚠️ WARN — 개발완료 가능, WARN 내역 기록 필요"
else
  echo "  판정: ✅ ALL PASS"
fi
echo "════════════════════════════════════════"

[ $TOTAL_FAIL -eq 0 ]
