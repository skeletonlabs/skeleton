## Linked Issue

Closes #{issueNumber}

## Description

{description}

## Changsets

Changesets automated our changelog. If you modify files in `/package/skeleton`, run `pnpm changeset`, follow the prompts, then commit the markdown file. Changes that add features should be `minor` while bugfixes should be `patch`. Please prefix the changeset message with `feat:`, `bugfix:` or `chore:`.

## Checklist

Please read and apply all [contribution requirements](https://www.skeleton.dev/docs/contributing/style-guide#feature-branches).

- [ ] This PR targets the `dev` branch (NEVER `master`)
- [ ] Documentation reflects all relevant changes
- [ ] Branch is prefixed with: `docs/`, `feat/`, `chore/`, `bugfix/`
- [ ] Ensure code linting is current - run `pnpm format`
- [ ] All test cases are passing - run `pnpm test`
- [ ] Includes a changeset (if relevant; see above)
