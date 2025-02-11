# @skeletonlabs/skeleton-cli

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
