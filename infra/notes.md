#!/bin/bash

# https://github.com/newren/git-filter-repo

# https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html

# moving folders while retaining git history

# NOTE: run this from within the infra dir after you have added the git-filter-repo to your $PATH

# it also doesn't like .. being in the path :(

So just doing this as plain notes now, it is more for documentation than needed functionality

git-filter-repo --path-rename packages/skeleton:packages/skeleton-v2
git-filter-repo --path-rename packages/skeleton-next:packages/skeleton
