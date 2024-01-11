#!/bin/bash
# https://github.com/nektos/act
# act -s GITHUB_TOKEN="$(gh auth token)" # pass through the token
# act -j lint -W .github/workflows/checks.yml # specific job in specific workflow
# act -n # dry mode
act -s GITHUB_TOKEN="$(gh auth token)" -W .github/workflows/main.yml -j install