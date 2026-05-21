#!/usr/bin/env bash
set -euo pipefail

# Inject the SKELETONLABS_REPOSITORY_PAT into git's credential store
git config --global url."https://${SKELETONLABS_PLUS_REPOSITORIES_PAT}@github.com/".insteadOf "https://github.com/"

# Clone the submodules
cd "$(git rev-parse --show-toplevel)"
git submodule deinit -f --all 2>/dev/null || true

while IFS= read -r path; do
  rm -rf ".git/modules/$path"
  rm -rf "$path"
done < <(git config --file .gitmodules --get-regexp 'submodule\..*\.path' | awk '{print $2}')

git submodule sync --recursive
git submodule update --init --recursive

echo "✓ Submodules ready"