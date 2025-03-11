# @skeletonlabs/skeleton-react

## 1.0.0
### Minor Changes


- feat: Navigation - manually handle `selected` state of NavTile ([#3228](https://github.com/skeletonlabs/skeleton/pull/3228))


- Feature: Added the Switch component. ([#2698](https://github.com/skeletonlabs/skeleton/pull/2698))


- - chore: Svelte Accordion and Nav components now use dot notation syntax ([#2748](https://github.com/skeletonlabs/skeleton/pull/2748))
  - Tab components overhauled to bring consistency between Svelte and React implementations
  - Tabs.Item component removed
  - Tabs.Panels (plural) component added

- feature: Added the Navigation Rail, Bar, and Tile components ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))


- chore: Migrated Nav, Segment Control, and Switch component APIs to match new conventions ([#2758](https://github.com/skeletonlabs/skeleton/pull/2758))


- feature: Improvements to the File Upload component ([#2843](https://github.com/skeletonlabs/skeleton/pull/2843))


- feature: Added Segment Control component ([#2744](https://github.com/skeletonlabs/skeleton/pull/2744))


- feature: Added the ProgressRing component ([#2709](https://github.com/skeletonlabs/skeleton/pull/2709))


- feature: Added the FileUpload component ([#2838](https://github.com/skeletonlabs/skeleton/pull/2838))


- feature: Added Tags Input component ([#2828](https://github.com/skeletonlabs/skeleton/pull/2828))


- feature: Added the Slider component ([#2834](https://github.com/skeletonlabs/skeleton/pull/2834))


- chore: Updated to the latest dependencies ([#2892](https://github.com/skeletonlabs/skeleton/pull/2892))


- feature: Added the Ratings component ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))


- All Skeleton components have been updated to integrate Zag.js. This contains a number of breaking component API changes. Updates all documentation. And includes new CSS animations in the Tailwind plugin. ([More Information](https://github.com/skeletonlabs/skeleton/discussions/2784)) ([#2778](https://github.com/skeletonlabs/skeleton/pull/2778))


- feat: Zag 1.0 ([#3257](https://github.com/skeletonlabs/skeleton/pull/3257))


- feature: Added the Pagination component ([#2841](https://github.com/skeletonlabs/skeleton/pull/2841))


### Patch Changes


- bugfix: Reinstate Pagination `count` prop. ([#3026](https://github.com/skeletonlabs/skeleton/pull/3026))


- bugfix: Minor bugfix to progressRing indeterminate class logic ([#2968](https://github.com/skeletonlabs/skeleton/pull/2968))


- bugfix: Resolved Pagination alternative mode page count issue ([#2956](https://github.com/skeletonlabs/skeleton/pull/2956))


- chore: Standarize use of Use Client directive in all components. ([#2927](https://github.com/skeletonlabs/skeleton/pull/2927))


- chore: Updated peer dependencies to support React 19 ([#3038](https://github.com/skeletonlabs/skeleton/pull/3038))


- feature: Add `showFirstLastButtons` prop to Pagination to enable toggling first and last buttons. ([#3007](https://github.com/skeletonlabs/skeleton/pull/3007))


- feature: Add option to set `aria-labelledby` for Segment component ([#3034](https://github.com/skeletonlabs/skeleton/pull/3034))


- chore: Modified default styles based on theme gen improvements ([#2852](https://github.com/skeletonlabs/skeleton/pull/2852))


- chore: Improved Ratings component default half star SVG ([#3048](https://github.com/skeletonlabs/skeleton/pull/3048))


- bugfix: progress ring safari 100% ([#3360](https://github.com/skeletonlabs/skeleton/pull/3360))


- chore: the React `<Nav>` component renamed `<Navigation>` to be uniform with other frameworks ([#3004](https://github.com/skeletonlabs/skeleton/pull/3004))


- chore: Moved Prettier and ESLint to repo root, updated formatting, and rectified linting issues ([#2723](https://github.com/skeletonlabs/skeleton/pull/2723))


- bugfix: Rename `TagsInput` inconsistent prop names: `inputEdit` or `tagEdit` to `tagEditInput` ([#3298](https://github.com/skeletonlabs/skeleton/pull/3298))


- chore: Remove `reactCompose` utility, added `$lib` alias path. ([#2734](https://github.com/skeletonlabs/skeleton/pull/2734))


- chore: Move `react` and `react-dom` to `peerDependencies` ([#2830](https://github.com/skeletonlabs/skeleton/pull/2830))


- Resolved regressions in the following test cases: progress ring, ratings, segment control, switch, and tabs ([#2814](https://github.com/skeletonlabs/skeleton/pull/2814))


- chore: Remove extra height class from NavBar ([#3074](https://github.com/skeletonlabs/skeleton/pull/3074))


- bugfix: Make use of `useId` on Navigation component to set default `id` for Tiles if user had not defined it explicitly ([#3097](https://github.com/skeletonlabs/skeleton/pull/3097))


- chore: ProgressRing component no longer has a label by default, but can be enabled with `showLabel` prop. ([#2996](https://github.com/skeletonlabs/skeleton/pull/2996))


- Resolved regressions in the following test cases: accordion, appbar, avatar, navigation, and progress components ([#2813](https://github.com/skeletonlabs/skeleton/pull/2813))


- chore: Improved focus states for Switch and Slider components. Minor style improvements to the Ratings label text. ([#3045](https://github.com/skeletonlabs/skeleton/pull/3045))


- chore: Removed `filter` prop and moved `style` prop to parent element ([#3344](https://github.com/skeletonlabs/skeleton/pull/3344))


- Implement `style` prop for Avatar component. ([#3117](https://github.com/skeletonlabs/skeleton/pull/3117))


- bugfix: empty padding when switch has no children ([#3024](https://github.com/skeletonlabs/skeleton/pull/3024))


- chore: Improved global and per component focus state styles ([#2825](https://github.com/skeletonlabs/skeleton/pull/2825))


- chore: Style improvements for Buttons, Badges, Chips, and Form elements ([#3345](https://github.com/skeletonlabs/skeleton/pull/3345))


- bugfix: Set unique `key` properly for React's Rating component ([#3043](https://github.com/skeletonlabs/skeleton/pull/3043))


- chore: Added `@skeletonlabs/skeleton` as a peer-dependency ([#3351](https://github.com/skeletonlabs/skeleton/pull/3351))

- Updated dependencies [[`73a4e9f`](https://github.com/skeletonlabs/skeleton/commit/73a4e9f69b47f5684162adcaada6d460a5b73ca7), [`a731476`](https://github.com/skeletonlabs/skeleton/commit/a7314768c197eb32e92221526b18433ff9cf2909), [`85e3937`](https://github.com/skeletonlabs/skeleton/commit/85e393711c39f6649b4201fd22d314d4dc1e60a5), [`f427d83`](https://github.com/skeletonlabs/skeleton/commit/f427d83302826a238c43439fc67be4837d76b846), [`44163cd`](https://github.com/skeletonlabs/skeleton/commit/44163cd655d21d763e68c10fe79c9d04d780d0a0), [`9773f43`](https://github.com/skeletonlabs/skeleton/commit/9773f43e79016e2a58830d2df5674d80729eca96), [`ad05153`](https://github.com/skeletonlabs/skeleton/commit/ad05153e8e4039da8d4b2302a01d61623c2b50b2), [`17d1440`](https://github.com/skeletonlabs/skeleton/commit/17d144079ef6264a7dea1624019a8b557039f358), [`84194e0`](https://github.com/skeletonlabs/skeleton/commit/84194e0f2c834eeff6c49e624ffdb1463770f193), [`0b76da3`](https://github.com/skeletonlabs/skeleton/commit/0b76da330af30ea039983b030347b125f4589895), [`244c531`](https://github.com/skeletonlabs/skeleton/commit/244c5315b80d1fb72cb566d922f535506d71ac23), [`27d25e5`](https://github.com/skeletonlabs/skeleton/commit/27d25e5b170c59fa9b22dc2898cda4dc499f0196), [`2ced65c`](https://github.com/skeletonlabs/skeleton/commit/2ced65cd49be82a84e96c4ba04924895ba4a0ccf), [`bbc76e4`](https://github.com/skeletonlabs/skeleton/commit/bbc76e43097c0783737ebe4e2975b8ac5481628d), [`8e9cb68`](https://github.com/skeletonlabs/skeleton/commit/8e9cb68a17c9153920a7dd76d27b651ae403590c), [`3af054d`](https://github.com/skeletonlabs/skeleton/commit/3af054dfb9f88b28694c2bf7630a3a40449a844c)]:
  - @skeletonlabs/skeleton@3.0.0

## 1.0.0-next.17
### Patch Changes


- bugfix: progress ring safari 100% ([#3360](https://github.com/skeletonlabs/skeleton/pull/3360))


- bugfix: Rename `TagsInput` inconsistent prop names: `inputEdit` or `tagEdit` to `tagEditInput` ([#3298](https://github.com/skeletonlabs/skeleton/pull/3298))


- chore: Removed `filter` prop and moved `style` prop to parent element ([#3344](https://github.com/skeletonlabs/skeleton/pull/3344))


- chore: Style improvements for Buttons, Badges, Chips, and Form elements ([#3345](https://github.com/skeletonlabs/skeleton/pull/3345))


- chore: Added `@skeletonlabs/skeleton` as a peer-dependency ([#3351](https://github.com/skeletonlabs/skeleton/pull/3351))

- Updated dependencies [[`73a4e9f`](https://github.com/skeletonlabs/skeleton/commit/73a4e9f69b47f5684162adcaada6d460a5b73ca7), [`f427d83`](https://github.com/skeletonlabs/skeleton/commit/f427d83302826a238c43439fc67be4837d76b846), [`3af054d`](https://github.com/skeletonlabs/skeleton/commit/3af054dfb9f88b28694c2bf7630a3a40449a844c)]:
  - @skeletonlabs/skeleton@3.0.0-next.13

## 1.0.0-next.16

### Minor Changes

- feat: Zag 1.0 ([#3257](https://github.com/skeletonlabs/skeleton/pull/3257))

## 1.0.0-next.15

### Minor Changes

- feat: Navigation - manually handle `selected` state of NavTile ([#3228](https://github.com/skeletonlabs/skeleton/pull/3228))

## 1.0.0-next.14

### Patch Changes

- bugfix: Make use of `useId` on Navigation component to set default `id` for Tiles if user had not defined it explicitly ([#3097](https://github.com/skeletonlabs/skeleton/pull/3097))

- Implement `style` prop for Avatar component. ([#3117](https://github.com/skeletonlabs/skeleton/pull/3117))

## 1.0.0-next.13

### Patch Changes

- chore: Remove extra height class from NavBar ([#3074](https://github.com/skeletonlabs/skeleton/pull/3074))

## 1.0.0-next.12

### Patch Changes

- bugfix: Reinstate Pagination `count` prop. ([#3026](https://github.com/skeletonlabs/skeleton/pull/3026))

- chore: Updated peer dependencies to support React 19 ([#3038](https://github.com/skeletonlabs/skeleton/pull/3038))

- feature: Add option to set `aria-labelledby` for Segment component ([#3034](https://github.com/skeletonlabs/skeleton/pull/3034))

- chore: Improved Ratings component default half star SVG ([#3048](https://github.com/skeletonlabs/skeleton/pull/3048))

- chore: Improved focus states for Switch and Slider components. Minor style improvements to the Ratings label text. ([#3045](https://github.com/skeletonlabs/skeleton/pull/3045))

- bugfix: empty padding when switch has no children ([#3024](https://github.com/skeletonlabs/skeleton/pull/3024))

- bugfix: Set unique `key` properly for React's Rating component ([#3043](https://github.com/skeletonlabs/skeleton/pull/3043))

## 1.0.0-next.11

### Patch Changes

- feature: Add `showFirstLastButtons` prop to Pagination to enable toggling first and last buttons. ([#3007](https://github.com/skeletonlabs/skeleton/pull/3007))

- chore: the React `<Nav>` component renamed `<Navigation>` to be uniform with other frameworks ([#3004](https://github.com/skeletonlabs/skeleton/pull/3004))

- chore: ProgressRing component no longer has a label by default, but can be enabled with `showLabel` prop. ([#2996](https://github.com/skeletonlabs/skeleton/pull/2996))

## 1.0.0-next.10

### Patch Changes

- bugfix: Minor bugfix to progressRing indeterminate class logic ([#2968](https://github.com/skeletonlabs/skeleton/pull/2968))

- bugfix: Resolved Pagination alternative mode page count issue ([#2956](https://github.com/skeletonlabs/skeleton/pull/2956))

## 1.0.0-next.9

### Minor Changes

- chore: Updated to the latest dependencies ([#2892](https://github.com/skeletonlabs/skeleton/pull/2892))

### Patch Changes

- chore: Standardize use of Use Client directive in all components. ([#2927](https://github.com/skeletonlabs/skeleton/pull/2927))

## 1.0.0-next.8

### Patch Changes

- chore: Modified default styles based on theme gen improvements ([#2852](https://github.com/skeletonlabs/skeleton/pull/2852))

## 1.0.0-next.7

### Minor Changes

- feature: Improvements to the File Upload component ([#2843](https://github.com/skeletonlabs/skeleton/pull/2843))

- feature: Added Tags Input component ([#2828](https://github.com/skeletonlabs/skeleton/pull/2828))

- feature: Added the Pagination component ([#2841](https://github.com/skeletonlabs/skeleton/pull/2841))

## 1.0.0-next.6

### Minor Changes

- feature: Added the FileUpload component ([#2838](https://github.com/skeletonlabs/skeleton/pull/2838))

- Added the Slider component ([#2834](https://github.com/skeletonlabs/skeleton/pull/2834))

### Patch Changes

- chore: Move `react` and `react-dom` to `peerDependencies` ([#2830](https://github.com/skeletonlabs/skeleton/pull/2830))

- chore: Improved global and per component focus state styles ([#2825](https://github.com/skeletonlabs/skeleton/pull/2825))

## 1.0.0-next.5

### Patch Changes

- Resolved regressions in the following test cases: progress ring, ratings, segment control, switch, and tabs ([#2814](https://github.com/skeletonlabs/skeleton/pull/2814))

- Resolved regressions in the following test cases: accordion, appbar, avatar, navigation, and progress components ([#2813](https://github.com/skeletonlabs/skeleton/pull/2813))

## 1.0.0-next.4

### Minor Changes

- All Skeleton components have been updated to integrate Zag.js. This contains a number of breaking component API changes. Updates all documentation. And includes new CSS animations in the Tailwind plugin. ([More Information](https://github.com/skeletonlabs/skeleton/discussions/2784)) ([#2778](https://github.com/skeletonlabs/skeleton/pull/2778))

## 1.0.0-next.3

### Minor Changes

- - chore: Svelte Accordion and Nav components now use dot notation syntax ([#2748](https://github.com/skeletonlabs/skeleton/pull/2748))
  - Tab components overhauled to bring consistency between Svelte and React implementations
  - Tabs.Item component removed
  - Tabs.Panels (plural) component added

- chore: Migrated Nav, Segment Control, and Switch component APIs to match new conventions ([#2758](https://github.com/skeletonlabs/skeleton/pull/2758))

- feature: Added Segment Control component ([#2744](https://github.com/skeletonlabs/skeleton/pull/2744))

### Patch Changes

- Chore: Moved Prettier and ESLint to repo root, updated formatting, and rectified linting issues ([#2723](https://github.com/skeletonlabs/skeleton/pull/2723))

- chore: Remove `reactCompose` utility, added `$lib` alias path. ([#2734](https://github.com/skeletonlabs/skeleton/pull/2734))

## 1.0.0-next.2

### Minor Changes

- feature: Added the Navigation Rail, Bar, and Tile components ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))

- feature: Added the ProgressRing component ([#2709](https://github.com/skeletonlabs/skeleton/pull/2709))

- feature: Added the Ratings component ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))

## 1.0.0-next.1

### Minor Changes

- Feature: Added the Switch component. ([#2698](https://github.com/skeletonlabs/skeleton/pull/2698))

## 1.0.0-next.0

### Major Changes

- Enter pre-release mode ([#2668](https://github.com/skeletonlabs/skeleton/pull/2668))
