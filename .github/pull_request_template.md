## Linked Issue

Closes #{issueNumber}

## Description

{description}

## Changsets

Instructions: Changesets automate our changelog. If you modify files in `/packages`, run `pnpm changeset` in the root of the monorepo, follow the prompts, then commit the markdown file. Changes that add features should be `minor` while chores and bugfixes should be `patch`. Please prefix the changeset message with `feat:`, `bugfix:` or `chore:`.

## Checklist

Please read and apply all [contribution requirements](https://www.skeleton.dev/docs/contributing).

- [ ] This PR targets the `dev` branch (NEVER `master`)
- [ ] Documentation reflects all relevant changes
- [ ] Branch is prefixed with: `docs/`, `feat/`, `chore/`, `bugfix/`
- [ ] Ensure Svelte and Typescript linting is current - run `pnpm ci:check`
- [ ] Ensure Prettier linting is current - run `pnpm format`
- [ ] All test cases are passing - run `pnpm test`
- [ ] Includes a changeset (if relevant; see above)
