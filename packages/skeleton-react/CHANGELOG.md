# @skeletonlabs/skeleton-react

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
