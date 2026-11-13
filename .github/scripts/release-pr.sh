#!/usr/bin/env bash
set -euo pipefail

BRANCH="task/release-main"

if ! ls .changeset/*.md >/dev/null 2>&1; then
	echo "No pending change intents."
	exit 0
fi

pnpm version -r

git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git checkout -B "$BRANCH"
git add -A
git commit -m "task: release"
git push --force origin "$BRANCH"

if [ -z "$(gh pr list --head "$BRANCH" --json number --jq '.[0].number')" ]; then
	gh pr create --base main --head "$BRANCH" --title "task: release" --body "Versions packages and updates changelogs."
fi
