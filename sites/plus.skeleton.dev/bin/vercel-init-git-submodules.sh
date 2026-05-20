#!/usr/bin/env bash
set -euo pipefail

# Load the SSH deploy key from the environment variable
eval "$(ssh-agent -s)"
KEY_FILE="$(mktemp)"
echo "$GITHUB_SKELETON_PLUS_PREMIUM_SSH_KEY" | base64 -d > "$KEY_FILE"
chmod 600 "$KEY_FILE"
ssh-add "$KEY_FILE"
rm -f "$KEY_FILE"

# Tell git to skip host verification when cloning over SSH
# export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

# Clone the submodules
cd "$(git rev-parse --show-toplevel)"
git submodule deinit -f --all 2>/dev/null || true
rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/free
rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/premium
rm -rf sites/plus.skeleton.dev/src/lib/tiers/free
rm -rf sites/plus.skeleton.dev/src/lib/tiers/premium
git submodule sync --recursive
git submodule update --init --recursive

echo "✓ Submodules ready"