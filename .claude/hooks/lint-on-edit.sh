#!/bin/bash
# lint-on-edit.sh — 파일 수정 후 ESLint 자동 체크
# PostToolUse (Edit|Write) 훅

INPUT=$(cat)

# jq 없이 file_path 추출 (JSON에서 file_path 값 파싱)
FILE_PATH=$(echo "$INPUT" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"file_path"[[:space:]]*:[[:space:]]*"//;s/"//')

[ -z "$FILE_PATH" ] && exit 0

# .tsx, .ts, .js 파일만 체크
if [[ "$FILE_PATH" == *.tsx || "$FILE_PATH" == *.ts || "$FILE_PATH" == *.js ]]; then
  RESULT=$(npx eslint --no-warn-ignored --quiet "$FILE_PATH" 2>/dev/null)
  if [ $? -ne 0 ] && [ -n "$RESULT" ]; then
    ERROR_COUNT=$(echo "$RESULT" | grep -c "error")
    echo "{\"systemMessage\": \"ESLint: ${ERROR_COUNT} error(s) in $(basename "$FILE_PATH")\"}"
  fi
fi

exit 0
