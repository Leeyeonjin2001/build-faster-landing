#!/bin/bash
# pre-commit-check.sh — 커밋 전 hooks/run-all.sh 자동 실행
# PreToolUse (Bash) 훅 — git commit 명령 감지 시 실행

INPUT=$(cat)

# jq 없이 command 추출
COMMAND=$(echo "$INPUT" | grep -o '"command"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/.*"command"[[:space:]]*:[[:space:]]*"//;s/"//')

# git commit 명령인지 확인
if echo "$COMMAND" | grep -q "git commit"; then
  cd "$CLAUDE_PROJECT_DIR"
  RESULT=$(bash hooks/run-all.sh 2>&1)
  FAIL_COUNT=$(echo "$RESULT" | grep -o '❌ [0-9]*' | tail -1 | grep -o '[0-9]*')

  if [ "${FAIL_COUNT:-0}" -gt 0 ]; then
    # JSON 출력으로 커밋 차단
    cat <<ENDJSON
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "hooks/run-all.sh 실패 (FAIL ${FAIL_COUNT}건). 수정 후 재시도하세요."
  }
}
ENDJSON
    exit 0
  fi
fi

exit 0
