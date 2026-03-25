#!/bin/sh
set -e

if [ ! -d "node_modules" ]; then
  echo "📦 node_modules not found → installing dependencies..."
  npm ci

elif [ package.json -nt node_modules ]; then
  echo "📦 package.json is newer than node_modules → reinstalling dependencies..."
  npm ci

else
  echo "✅ node_modules exists → skipping install"
fi

exec "$@"