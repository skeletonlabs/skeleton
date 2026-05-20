#!/usr/bin/env bash
set -euo pipefail

TIERS_BASE="sites/plus.skeleton.dev/src/lib/tiers"

# Load the SSH deploy key from the environment variable
eval "$(ssh-agent -s)"
KEY_FILE="$(mktemp)"
echo "$GITHUB_SKELETON_PLUS_PREMIUM_SSH_KEY" | base64 -d > "$KEY_FILE"
chmod 600 "$KEY_FILE"
ssh-add "$KEY_FILE"
rm -f "$KEY_FILE"

# Tell git to skip host verification when cloning over SSH
export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

# Clone the submodules
cd "$(git rev-parse --show-toplevel)"
git submodule deinit -f --all 2>/dev/null || true
rm -rf ".git/modules/$TIERS_BASE/free"
rm -rf ".git/modules/$TIERS_BASE/premium"
rm -rf "$TIERS_BASE/free"
rm -rf "$TIERS_BASE/premium"
git submodule sync --recursive
git submodule update --init --recursive

echo "✓ Submodules ready"