#!/usr/bin/env bash
set -euo pipefail

# ── 1. Set up SSH agent with the deploy key ────────────────────────────────
eval "$(ssh-agent -s)"

KEY_FILE="$(mktemp)"
echo "$GITHUB_SKELETON_PLUS_PREMIUM_SSH_KEY" | base64 -d > "$KEY_FILE"
chmod 600 "$KEY_FILE"
ssh-add "$KEY_FILE"
rm -f "$KEY_FILE"

# Trust GitHub's host key
mkdir -p ~/.ssh
ssh-keyscan -H github.com >> ~/.ssh/known_hosts

# ── 2. Navigate to repo root ───────────────────────────────────────────────
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

# ── 3. Tear down any broken submodule state ───────────────────────────────
git submodule deinit -f --all 2>/dev/null || true

rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/free
rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/premium

rm -rf sites/plus.skeleton.dev/src/lib/tiers/free
rm -rf sites/plus.skeleton.dev/src/lib/tiers/premium

# ── 4. Sync URLs from .gitmodules, then clone ─────────────────────────────
git submodule sync --recursive
git submodule update --init --recursive

echo "✓ Submodules ready"