#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/deploy"

echo "Creating clean distribution at $DIST_DIR"
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

echo "Copying static assets..."
rsync -a --exclude='.DS_Store' "$ROOT_DIR/assets" "$ROOT_DIR/js" "$ROOT_DIR/styles" "$DIST_DIR"/

echo "Copying HTML..."
cp "$ROOT_DIR/index.html" "$DIST_DIR/index.html"

echo "Done. Contents of distribution:"
find "$DIST_DIR" -maxdepth 2 -type f | sed "s#$ROOT_DIR/##"
