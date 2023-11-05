# create-skeleton-app

## 0.0.53

### Patch Changes

- Reverted to cjs extension for postcss ([#2078](https://github.com/skeletonlabs/skeleton/pull/2078))

## 0.0.52

### Patch Changes

- CSA: Fix relative pathing and network handling: ([#2060](https://github.com/skeletonlabs/skeleton/pull/2060))

  - On windows when creating a custom theme, there was a writing issues due to how windows handled relative pathing
  - If CSA was unable to download content from github, it could leave the install in an incomplete state. Fetching is now left to the end of the install process.

## 0.0.51

### Patch Changes

- cli: The `Highlight.js` depedency is no longer provide via the CLI prompts. We're investiging a means to prevent it from installing all languages by default, which bloats your project size. For now, please follow the Code Block documentation to install manually ([#2032](https://github.com/skeletonlabs/skeleton/pull/2032))

## 0.0.50

### Patch Changes

- Fixed check for custom template and empty path ([#1980](https://github.com/skeletonlabs/skeleton/pull/1980))

## 0.0.49

### Patch Changes

- Fix custom theme being passed in as string in TW conf ([#1976](https://github.com/skeletonlabs/skeleton/pull/1976))

## 0.0.48

### Patch Changes

- Create-Skeleton-App (CSA) Updates: ([#1859](https://github.com/skeletonlabs/skeleton/pull/1859))

  - Install `vite-plugin-tailwind-purgecss` to enable purging of unused component CSS
  - Mdsvex is an now an optional install
  - No longer installs packages by default
  - Templates can now specify additional packages to be installed
  - Bug fixes and additional improvements

- bugfix: Fixed `@rc` pinning ([#1882](https://github.com/skeletonlabs/skeleton/pull/1882))

## 0.0.46-rc.3

### Patch Changes

- Fixed @rc pinning ([#1882](https://github.com/skeletonlabs/skeleton/pull/1882))

## 0.0.46-rc.2

### Patch Changes

- CSA updates for V2 ([#1859](https://github.com/skeletonlabs/skeleton/pull/1859))
  - Install vite-plugin-tailwind-purgecss to enable purging of unused component CSS
  - mdsvex is an optional install
  - No longer installs packages by default
  - Templates can now specify additional packages to be installed
  - Bug fixes and improvements all over
