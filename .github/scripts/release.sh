
#!/usr/bin/env bash
set -euo pipefail

BASE_SHA="${GITHUB_EVENT_BEFORE:?Missing GITHUB_EVENT_BEFORE}"
HEAD_SHA="${GITHUB_SHA:?Missing GITHUB_SHA}"

PACKAGES="$(pnpm -r list --depth -1 --json)"

while IFS= read -r package; do
    NAME="$(jq -r '.name' <<< "$package")"
    VERSION="$(jq -r '.version' <<< "$package")"
    PATH_NAME="$(jq -r '.path' <<< "$package")"
    PRIVATE="$(jq -r '.private // false' <<< "$package")"

    if [ "$PRIVATE" = "true" ]; then
        continue
    fi

    if ! git diff --quiet "$BASE_SHA" "$HEAD_SHA" -- "$PATH_NAME/package.json"; then
        TAG="${NAME}@${VERSION}"
        CHANGELOG="$PATH_NAME/CHANGELOG.md"

        if gh release view "$TAG" >/dev/null 2>&1; then
            echo "Release already exists: $TAG"
            continue
        fi

        if [ ! -f "$CHANGELOG" ]; then
            echo "Missing changelog for $NAME"
            exit 1
        fi

        NOTES="$(mktemp)"
        trap 'rm -f "$NOTES"' EXIT

        awk -v version="$VERSION" '
            $0 == "## " version {
                found = 1
                print
                next
            }

            found && /^## / {
                exit
            }

            found {
                print
            }
        ' "$CHANGELOG" > "$NOTES"

        if [ ! -s "$NOTES" ]; then
            echo "Missing changelog entry for $TAG"
            exit 1
        fi

        echo "Creating release: $TAG"

        gh release create "$TAG" \
            --target "$HEAD_SHA" \
            --title "$TAG" \
            --notes-file "$NOTES"

        rm "$NOTES"
        trap - EXIT
    fi
done < <(jq -c '.[]' <<< "$PACKAGES")
