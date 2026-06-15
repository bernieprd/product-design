#!/bin/bash
set -e
PASS="${STATICRYPT_PASSWORD:-06121994}"
npx staticrypt src/project-*.html \
  -p "$PASS" \
  --short \
  --remember false \
  --template-color-primary "#111111" \
  --template-color-secondary "#ffffff" \
  --template-button "Enter" \
  --template-title "Bernardo Prudêncio" \
  --template-instructions "This page is password protected." \
  --template-placeholder "Password" \
  --template-error "Incorrect password." \
  -d .
