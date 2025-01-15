# @skeletonlabs/skeleton-cli

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
