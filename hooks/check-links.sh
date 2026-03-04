#!/bin/bash
# check-links.sh — 내부 링크/참조 체크
# 대상: BUILD FASTER 랜딩 (Next.js + Tailwind)

PASS=0
WARN=0
FAIL=0

echo "=== 링크 체크 ==="

# 1. 앵커 링크 (#id) — href에서 사용하는 id가 실제로 존재하는지
echo -n "[1] 앵커 링크 정합성... "
# href="#xxx" 추출
ANCHORS=$(grep -ohP 'href="#[a-zA-Z][a-zA-Z0-9_-]*"' src/app/page.tsx 2>/dev/null | sed 's/href="#//;s/"//' | sort -u)
# id="xxx" 추출
IDS=$(grep -ohP 'id="[a-zA-Z][a-zA-Z0-9_-]*"' src/app/page.tsx 2>/dev/null | sed 's/id="//;s/"//' | sort -u)

BROKEN=""
for anchor in $ANCHORS; do
  if ! echo "$IDS" | grep -qx "$anchor"; then
    BROKEN="$BROKEN #$anchor"
  fi
done

if [ -z "$BROKEN" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "❌ FAIL — 존재하지 않는 앵커:$BROKEN"
  ((FAIL++))
fi

# 2. 내부 페이지 링크 (/cases/... 등) — 해당 page.tsx 존재하는지
echo -n "[2] 내부 페이지 링크... "
INTERNAL_LINKS=$(grep -ohP 'href="/[a-zA-Z][a-zA-Z0-9/_-]*"' src/app/page.tsx 2>/dev/null | sed 's/href="//;s/"//' | sort -u)

BROKEN_PAGES=""
for link in $INTERNAL_LINKS; do
  PAGE_FILE="src/app${link}/page.tsx"
  [ ! -f "$PAGE_FILE" ] && BROKEN_PAGES="$BROKEN_PAGES $link"
done

if [ -z "$INTERNAL_LINKS" ]; then
  echo "✅ PASS (내부 링크 없음)"
  ((PASS++))
elif [ -z "$BROKEN_PAGES" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "❌ FAIL — 페이지 없음:$BROKEN_PAGES"
  ((FAIL++))
fi

# 3. 이미지 참조 — src에서 참조하는 이미지가 public/에 존재하는지
echo -n "[3] 이미지 참조... "
IMG_REFS=$(grep -ohP 'src="/[a-zA-Z][a-zA-Z0-9/_.-]*\.(png|jpg|jpeg|svg|webp|gif|ico)"' src/ -r 2>/dev/null | sed 's/src="//;s/"//' | sort -u)

BROKEN_IMGS=""
for img in $IMG_REFS; do
  IMG_FILE="public${img}"
  [ ! -f "$IMG_FILE" ] && BROKEN_IMGS="$BROKEN_IMGS $img"
done

if [ -z "$IMG_REFS" ]; then
  echo "✅ PASS (이미지 참조 없음)"
  ((PASS++))
elif [ -z "$BROKEN_IMGS" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — 없는 이미지:$BROKEN_IMGS"
  ((WARN++))
fi

# 4. 외부 링크 형식 체크 (https:// 로 시작하는지)
echo -n "[4] 외부 링크 형식... "
EXT_BAD=$(grep -rn 'href="http://' --include="*.tsx" --include="*.ts" src/ 2>/dev/null | grep -v localhost || true)
if [ -z "$EXT_BAD" ]; then
  echo "✅ PASS"
  ((PASS++))
else
  echo "⚠️ WARN — http:// 외부 링크"
  echo "$EXT_BAD"
  ((WARN++))
fi

echo ""
echo "--- 링크 체크 결과: ✅ $PASS  ⚠️ $WARN  ❌ $FAIL ---"

[ $FAIL -eq 0 ]
