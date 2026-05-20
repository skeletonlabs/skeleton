#!/usr/bin/env bash
set -euo pipefail

# Load all SSH deploy keys from environment variables prefixed with SSH_SUBMODULE_KEY_
eval "$(ssh-agent -s)"
while IFS='=' read -r name value; do
  KEY_FILE="$(mktemp)"
  echo "$value" | base64 -d > "$KEY_FILE"
  chmod 600 "$KEY_FILE"
  ssh-add "$KEY_FILE"
  rm -f "$KEY_FILE"
done < <(env | grep '^SSH_SUBMODULE_KEY_')

# Tell git to skip host verification when cloning over SSH
export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=no"

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