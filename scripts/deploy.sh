#!/bin/bash
set -Eeuo pipefail

cd "$(dirname "$0")/.."

trap 'echo "❌ Deployment failed on line $LINENO"' ERR

CONFIG_FILE="scripts/deploy.conf"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ Missing $CONFIG_FILE"
  echo "Copy scripts/deploy.example.conf to scripts/deploy.conf"
  exit 1
fi

source "$CONFIG_FILE"

: "${REMOTE_HOST:?REMOTE_HOST is required}"
: "${REMOTE_PATH:?REMOTE_PATH is required}"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Project Deployment"
echo "🕒 $(date '+%Y-%m-%d %H:%M:%S')"
echo "🎯 Target: ${REMOTE_HOST}:${REMOTE_PATH}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo "🔍 Checking connection..."
ssh -o ConnectTimeout=5 "$REMOTE_HOST" exit

echo "🏗️ Building project..."
npm run build -- --no

echo "📤 Uploading files..."
rsync -az --delete --info=progress2 out/ "${REMOTE_HOST}:${REMOTE_PATH}/"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Project deployed successfully!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
