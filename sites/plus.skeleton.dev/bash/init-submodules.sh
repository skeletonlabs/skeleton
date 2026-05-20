#!/usr/bin/env bash
set -euo pipefail
 
# Move to the repo root
cd "$(git rev-parse --show-toplevel)"
 
# Ensure we’re not in a detached HEAD or bare repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a valid Git working tree."
  exit 1
fi
 
# Remove existing submodule entry (if any)
if git config --file .gitmodules --get-regexp "^submodule\.content\." > /dev/null 2>&1; then
  echo "Removing existing submodule config..."
  git submodule deinit -f content || true
  git rm -f content || true
  rm -rf .git/modules/content
fi
 
# Clean local content dir if needed
rm -rf content
 
# Add the submodule
echo "Adding submodule..."
git submodule add -f "https://skeletonlabs:${GITHUB_SKELETON_PLUS_PREMIUM_SSH_KEY}@github.com/skeletonlabs/skeleton-plus-premiumt.git" sites/plus.skeleton.dev/src/lib/tiers/premium


# Sync & init
git submodule sync
git submodule update --init --recursive