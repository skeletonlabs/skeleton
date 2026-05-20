#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

echo "Hard resetting submodules..."

# 1. Deinit everything safely
git submodule deinit -f --all || true

# 2. Remove submodule entries from index
git rm -rf sites/plus.skeleton.dev/src/lib/tiers/free || true
git rm -rf sites/plus.skeleton.dev/src/lib/tiers/premium || true

# 3. Remove metadata
rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/free || true
rm -rf .git/modules/sites/plus.skeleton.dev/src/lib/tiers/premium || true

# 4. Clean working tree directories
rm -rf sites/plus.skeleton.dev/src/lib/tiers/free
rm -rf sites/plus.skeleton.dev/src/lib/tiers/premium

# 5. Ensure .gitmodules is correct BEFORE this step
git submodule sync --recursive

# 6. Re-init cleanly
git submodule update --init --recursive