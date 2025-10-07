# skeleton

## 4.0.0-next.28

### Minor Changes

- feat: support module transformations ([#3878](https://github.com/skeletonlabs/skeleton/pull/3878))

## 4.0.0-next.27

### Patch Changes

- fix: updating -> installing ([`583742e`](https://github.com/skeletonlabs/skeleton/commit/583742ee0ea6f49b2a280ba37a48abf9c60c510f))

## 4.0.0-next.26

### Minor Changes

- feat: skeleton-4 migration ([#3872](https://github.com/skeletonlabs/skeleton/pull/3872))

### Patch Changes

- fix: add missing exports ([#3874](https://github.com/skeletonlabs/skeleton/pull/3874))

## 4.0.0-next.25

## 4.0.0-next.24

## 4.0.0-next.22

### Patch Changes

- chore: version sync ([#3852](https://github.com/skeletonlabs/skeleton/pull/3852))

## 1.0.1-next.2

### Patch Changes

- chore: update readme ([#3805](https://github.com/skeletonlabs/skeleton/pull/3805))

## 1.0.1-next.1

### Patch Changes

- chore: trusted publishing ([#3792](https://github.com/skeletonlabs/skeleton/pull/3792))

## 1.0.1-next.0

### Patch Changes

- perf: Reduce overhead in v3 module migrations ([#3777](https://github.com/skeletonlabs/skeleton/pull/3777))

## 1.0.0

### Major Changes

- feat: 1.0 ([#3503](https://github.com/skeletonlabs/skeleton/pull/3503))

## 0.1.0

### Minor Changes

- feat: add `skeleton` to bin paths ([#3500](https://github.com/skeletonlabs/skeleton/pull/3500))

## 0.0.5

### Patch Changes

- fix: Simplify `script` parsing in Svelte modules ([#3451](https://github.com/skeletonlabs/skeleton/pull/3451))

## 0.0.4

### Patch Changes

- fix: app.css being transformed twice ([#3392](https://github.com/skeletonlabs/skeleton/pull/3392))

## 0.0.3

### Patch Changes

- fix: write to file using utf-8 ([#3390](https://github.com/skeletonlabs/skeleton/pull/3390))

## 0.0.2

### Patch Changes

- fix: Correct the glob matcher for sourcefiles in the `skeleton-3` migration ([#3388](https://github.com/skeletonlabs/skeleton/pull/3388))

## 0.0.1

### Patch Changes

- Feature: The `class:` directive will also be transformed when they're not also an identifier. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix: transformations on the package.json now preserve the original indentation. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix: `cwd` was wrongly interpeted. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Perserve non-skeleton imports and identifiers. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: `app.html` is now transformed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Svelte template code is now included when migrating svelte code. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Better error handling is now in place. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Export mappings are safely accessed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): Installing dependencies shows actual spinner. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Svelte `<script>` tags are transformed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Initial release. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): Tailwind V4 support. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- bugfix: Add `@source` when component library is present ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: tailwind.config transformation also include skeleton configuration. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: `<packagemanager> install` is now ran at the end of the migration. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Renaming components no longer includes a bug that could cause invalid components to be produced in bigger components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Correctly handle conflicting renames/imports. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- bugfix: Append `dist` to the Skeleton `@source` path as workaround for https://github.com/tailwindlabs/tailwindcss/issues/16038 ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Rename all components imports and usages. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): All removed and renamed exports are now migrated. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Selecting a single folder would cause 0 files to be globbed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Chore (migrate/skeleton-3): Simpler method of preserving quotes in Svelte template. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Special characters like `\n`, `\t`, etc. are no longer literally interpreted. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Empty strings no longer crash the `transformSvelte` function ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Partially reverts the previous change to `hasRange` and checks for empty strings instead as it's more consistent in the cases where we're preserving quotes. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix: Add `bin` back to package.json ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): Skeleton classes `@apply` rules in stylesheets (.{css,pcss,postcss}, <style></style>) are now transformed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- bugfix: Theme import is correctly migrated ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: TS/JS modules are transformed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Switch from `property in object` to `Object.hasOwn` so inherited properties aren't included. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Source file directories are now prompted instead of being assumed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Additionally check if range actually has characters (start < end). ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix: Fixed longstanding bug of svelte files not being transformed properly. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): `TabGroup` is now renamed to `Tabs` ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Name, description and version are now pulled from the `package.json`. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature (migrate/skeleton-3): All file transformations are batched to write to disk at the end of the migration, this will prevent any files being written to disk if any of the file transformations fail. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix (migrate/skeleton-3): Remove `fixUnusedIdentifiers` calls to reduce migration noise. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Bugfix: Unused identifiers like imports are removed after tranformation. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Feature: Removed components have their imports removed. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

## 0.0.1-next.20

### Patch Changes

- bugfix: Append `dist` to the Skeleton `@source` path as workaround for https://github.com/tailwindlabs/tailwindcss/issues/16038 ([#3307](https://github.com/skeletonlabs/skeleton/pull/3307))

## 0.0.1-next.19

### Patch Changes

- bugfix: Add `@source` when component library is present ([#3262](https://github.com/skeletonlabs/skeleton/pull/3262))

- bugfix: Theme import is correctly migrated ([#3253](https://github.com/skeletonlabs/skeleton/pull/3253))

## 0.0.1-next.18

### Patch Changes

- Feature (migrate/skeleton-3): Tailwind V4 support. ([#3231](https://github.com/skeletonlabs/skeleton/pull/3231))

- Feature (migrate/skeleton-3): Skeleton classes `@apply` rules in stylesheets (.{css,pcss,postcss}, <style></style>) are now transformed. ([#3231](https://github.com/skeletonlabs/skeleton/pull/3231))

## 0.0.1-next.17

### Patch Changes

- Feature (migrate/skeleton-3): Installing dependencies shows actual spinner. ([#3150](https://github.com/skeletonlabs/skeleton/pull/3150))

## 0.0.1-next.16

### Patch Changes

- Bugfix (migrate/skeleton-3): Perserve non-skeleton imports and identifiers. ([#3148](https://github.com/skeletonlabs/skeleton/pull/3148))

## 0.0.1-next.15

### Patch Changes

- Bugfix (migrate/skeleton-3): Export mappings are safely accessed. ([#3146](https://github.com/skeletonlabs/skeleton/pull/3146))

## 0.0.1-next.14

### Patch Changes

- Bugfix (migrate/skeleton-3): Correctly handle conflicting renames/imports. ([#3144](https://github.com/skeletonlabs/skeleton/pull/3144))

## 0.0.1-next.13

### Patch Changes

- Feature (migrate/skeleton-3): All removed and renamed exports are now migrated. ([#3139](https://github.com/skeletonlabs/skeleton/pull/3139))

## 0.0.1-next.12

### Patch Changes

- Chore (migrate/skeleton-3): Simpler method of preserving quotes in Svelte template. ([#3132](https://github.com/skeletonlabs/skeleton/pull/3132))

## 0.0.1-next.11

### Patch Changes

- Bugfix (migrate/skeleton-3): Special characters like `\n`, `\t`, etc. are no longer literally interpreted. ([#3130](https://github.com/skeletonlabs/skeleton/pull/3130))

## 0.0.1-next.10

### Patch Changes

- Bugfix (migrate/skeleton-3): Switch from `property in object` to `Object.hasOwn` so inherited properties aren't included. ([#3127](https://github.com/skeletonlabs/skeleton/pull/3127))

## 0.0.1-next.9

### Patch Changes

- Bugfix (migrate/skeleton-3): Partially reverts the previous change to `hasRange` and checks for empty strings instead as it's more consistent in the cases where we're preserving quotes. ([#3125](https://github.com/skeletonlabs/skeleton/pull/3125))

## 0.0.1-next.8

### Patch Changes

- Bugfix (migrate/skeleton-3): Selecting a single folder would cause 0 files to be globbed. ([#3123](https://github.com/skeletonlabs/skeleton/pull/3123))

- Bugfix (migrate/skeleton-3): Additionally check if range actually has characters (start < end). ([#3123](https://github.com/skeletonlabs/skeleton/pull/3123))

## 0.0.1-next.7

### Patch Changes

- Feature: Name, description and version are now pulled from the `package.json`. ([#3116](https://github.com/skeletonlabs/skeleton/pull/3116))

- Bugfix (migrate/skeleton-3): Remove `fixUnusedIdentifiers` calls to reduce migration noise. ([#3119](https://github.com/skeletonlabs/skeleton/pull/3119))

## 0.0.1-next.6

### Patch Changes

- Bugfix (migrate/skeleton-3): Renaming components no longer includes a bug that could cause invalid components to be produced in bigger components ([#3110](https://github.com/skeletonlabs/skeleton/pull/3110))

- Bugfix (migrate/skeleton-3): Empty strings no longer crash the `transformSvelte` function ([#3110](https://github.com/skeletonlabs/skeleton/pull/3110))

- Bugfix: Fixed longstanding bug of svelte files not being transformed properly. ([#3110](https://github.com/skeletonlabs/skeleton/pull/3110))

- Feature (migrate/skeleton-3): `TabGroup` is now renamed to `Tabs` ([#3110](https://github.com/skeletonlabs/skeleton/pull/3110))

- Feature (migrate/skeleton-3): All file transformations are batched to write to disk at the end of the migration, this will prevent any files being written to disk if any of the file transformations fail. ([#3110](https://github.com/skeletonlabs/skeleton/pull/3110))

## 0.0.1-next.5

### Patch Changes

- Feature: The `class:` directive will also be transformed when they're not also an identifier. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Bugfix: transformations on the package.json now preserve the original indentation. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Feature: `app.html` is now transformed. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Feature: Better error handling is now in place. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Feature: `<packagemanager> install` is now ran at the end of the migration. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Feature: Rename all components imports and usages. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

- Feature: Removed components have their imports removed. ([#3107](https://github.com/skeletonlabs/skeleton/pull/3107))

## 0.0.1-next.4

### Patch Changes

- Feature: Svelte template code is now included when migrating svelte code. ([#3105](https://github.com/skeletonlabs/skeleton/pull/3105))

- Bugfix: Unused identifiers like imports are removed after tranformation. ([#3105](https://github.com/skeletonlabs/skeleton/pull/3105))

## 0.0.1-next.3

### Patch Changes

- Bugfix: Add `bin` back to package.json ([#3103](https://github.com/skeletonlabs/skeleton/pull/3103))

## 0.0.1-next.2

### Patch Changes

- Feature: Svelte `<script>` tags are transformed. ([#3091](https://github.com/skeletonlabs/skeleton/pull/3091))

- Feature: tailwind.config transformation also include skeleton configuration. ([#3091](https://github.com/skeletonlabs/skeleton/pull/3091))

- Feature: TS/JS modules are transformed. ([#3091](https://github.com/skeletonlabs/skeleton/pull/3091))

- Feature: Source file directories are now prompted instead of being assumed. ([#3091](https://github.com/skeletonlabs/skeleton/pull/3091))

## 0.0.1-next.1

### Patch Changes

- Bugfix: `cwd` was wrongly interpeted. ([#3088](https://github.com/skeletonlabs/skeleton/pull/3088))

## 0.0.1-next.0

### Patch Changes

- Initial release. ([#2972](https://github.com/skeletonlabs/skeleton/pull/2972))
