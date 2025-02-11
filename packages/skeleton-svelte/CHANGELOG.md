# @skeletonlabs/skeleton-svelte

## 1.0.0-next.18

### Patch Changes

- bugfix: Call custom event handlers provided in ZagJs's internal handlers ([#3157](https://github.com/skeletonlabs/skeleton/pull/3157))

- bugfix: Make use of `useId` on Navigation component to set default `id` for Tiles if user had not defined it explicitly ([#3097](https://github.com/skeletonlabs/skeleton/pull/3097))

- Implement `style` prop for Avatar component. ([#3117](https://github.com/skeletonlabs/skeleton/pull/3117))

- Bugfix: `bind:pageSize` now correctly updates in combination with `onPageSizeChange` handler. ([#3157](https://github.com/skeletonlabs/skeleton/pull/3157))

## 1.0.0-next.17

### Patch Changes

- chore: Remove extra height class from NavBar ([#3074](https://github.com/skeletonlabs/skeleton/pull/3074))

## 1.0.0-next.16

### Patch Changes

- bugfix: Reinstate Pagination `count` prop. ([#3026](https://github.com/skeletonlabs/skeleton/pull/3026))

- feature: Add option to set `aria-labelledby` for Segment component ([#3034](https://github.com/skeletonlabs/skeleton/pull/3034))

- chore: Improved Ratings component default half star SVG ([#3048](https://github.com/skeletonlabs/skeleton/pull/3048))

- chore: Added base style prop classes to Svelte Popover, Tooltip, and Modal components ([#3031](https://github.com/skeletonlabs/skeleton/pull/3031))

- chore: Added positioner and z-index style props to the Svelte Popover, Tooltip, Combobox, and Modal components ([#3029](https://github.com/skeletonlabs/skeleton/pull/3029))

- docs: update `trigger` props description for _Popover_, _Modal_ and _Tooltip_ ([#3046](https://github.com/skeletonlabs/skeleton/pull/3046))

- chore: Disabled the unsupported Svelte Combobox multiple property ([#3033](https://github.com/skeletonlabs/skeleton/pull/3033))

- feat: Implements trigger event props for Svelte's _Popover_, _Modal_, _Combobox_ and _Tooltip_. ([#3053](https://github.com/skeletonlabs/skeleton/pull/3053))

- chore: Improved focus states for Switch and Slider components. Minor style improvements to the Ratings label text. ([#3045](https://github.com/skeletonlabs/skeleton/pull/3045))

- bugfix: empty padding when switch has no children ([#3024](https://github.com/skeletonlabs/skeleton/pull/3024))

## 1.0.0-next.15

### Patch Changes

- feature: Add `showFirstLastButtons` prop to Pagination to enable toggling first and last buttons. ([#3007](https://github.com/skeletonlabs/skeleton/pull/3007))

- bugfix: Set button type to `button` for Svelte's Combobox options ([#2998](https://github.com/skeletonlabs/skeleton/pull/2998))

- chore: ProgressRing component no longer has a label by default, but can be enabled with `showLabel` prop. ([#2996](https://github.com/skeletonlabs/skeleton/pull/2996))

## 1.0.0-next.14

### Patch Changes

- bugfix: Resolved Pagination alternative mode page count issue ([#2956](https://github.com/skeletonlabs/skeleton/pull/2956))

- bugfix: Adjust Svelte Switch to allow for `bind:checked` and `onCheckedChange` at the same time. ([#2967](https://github.com/skeletonlabs/skeleton/pull/2967))

- chore: Implemented Svelte test specs for all components ([#2968](https://github.com/skeletonlabs/skeleton/pull/2968))

- bugfix: resolved Svelte Pagination component reactivity issues ([#2956](https://github.com/skeletonlabs/skeleton/pull/2956))

- `onOpenChange` will no longer be internally overriden and thus fix `bind:open` when used in conjunction with `onOpenChange`. ([#2970](https://github.com/skeletonlabs/skeleton/pull/2970))

## 1.0.0-next.13

### Patch Changes

- Only render `<button>` when `trigger` snippet is defined. ([#2947](https://github.com/skeletonlabs/skeleton/pull/2947))

- Renamed Nav component to Navigation to conform to our naming convention across packages ([#2928](https://github.com/skeletonlabs/skeleton/pull/2928))

## 1.0.0-next.12

### Minor Changes

- feature: Added the Svelte Toast component ([#2922](https://github.com/skeletonlabs/skeleton/pull/2922))

- chore: Updated to the latest dependencies ([#2892](https://github.com/skeletonlabs/skeleton/pull/2892))

## 1.0.0-next.11

### Minor Changes

- feature: Implemented the Svelte components for Popover, Tooltip, Combobox, and Modal. ([#2872](https://github.com/skeletonlabs/skeleton/pull/2872))

## 1.0.0-next.10

### Patch Changes

- chore: Modified default styles based on theme gen improvements ([#2852](https://github.com/skeletonlabs/skeleton/pull/2852))

## 1.0.0-next.9

### Patch Changes

- chore: Remove `$effect` in `Segment.svelte` component that was emitting execessive logs ([#2858](https://github.com/skeletonlabs/skeleton/pull/2858))

## 1.0.0-next.8

### Minor Changes

- feature: Improvements to the File Upload component ([#2843](https://github.com/skeletonlabs/skeleton/pull/2843))

- feature: Added Tags Input component ([#2828](https://github.com/skeletonlabs/skeleton/pull/2828))

- feature: Added the Pagination component ([#2841](https://github.com/skeletonlabs/skeleton/pull/2841))

## 1.0.0-next.7

### Minor Changes

- feature: Added the FileUpload component ([#2838](https://github.com/skeletonlabs/skeleton/pull/2838))

- Added the Slider component ([#2834](https://github.com/skeletonlabs/skeleton/pull/2834))

### Patch Changes

- chore: Improved global and per component focus state styles ([#2825](https://github.com/skeletonlabs/skeleton/pull/2825))

## 1.0.0-next.6

### Patch Changes

- bugfix: Resolve Zag dependency error ([`561a72b8`](https://github.com/skeletonlabs/skeleton/commit/561a72b8c38c28c1da37d51b562574686660e445))

## 1.0.0-next.5

### Minor Changes

- All Skeleton components have been updated to integrate Zag.js. This contains a number of breaking component API changes. Updates all documentation. And includes new CSS animations in the Tailwind plugin. ([More Information](https://github.com/skeletonlabs/skeleton/discussions/2784)) ([#2778](https://github.com/skeletonlabs/skeleton/pull/2778))

## 1.0.0-next.4

### Minor Changes

- - chore: Svelte Accordion and Nav components now use dot notation syntax ([#2748](https://github.com/skeletonlabs/skeleton/pull/2748))
  - Tab components overhauled to bring consistency between Svelte and React implementations
  - Tabs.Item component removed
  - Tabs.Panels (plural) component added

- chore: Migrated Nav, Segment Control, and Switch component APIs to match new conventions ([#2758](https://github.com/skeletonlabs/skeleton/pull/2758))

- feature: Added Segment Control component ([#2744](https://github.com/skeletonlabs/skeleton/pull/2744))

### Patch Changes

- Fixed reactivity issues within the Navigation related components ([#2750](https://github.com/skeletonlabs/skeleton/pull/2750))

- Chore: Moved Prettier and ESLint to repo root, updated formatting, and rectified linting issues ([#2723](https://github.com/skeletonlabs/skeleton/pull/2723))

## 1.0.0-next.3

### Minor Changes

- feature: Added the Navigation Rail, Bar, and Tile components ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))

- feature: Added the ProgressRing component ([#2709](https://github.com/skeletonlabs/skeleton/pull/2709))

- feature: Added the Ratings component ([#2721](https://github.com/skeletonlabs/skeleton/pull/2721))

## 1.0.0-next.2

### Minor Changes

- Feature: Added the Switch component. ([#2698](https://github.com/skeletonlabs/skeleton/pull/2698))

## 1.0.0-next.1

### Patch Changes

- chore: Updated to the latest Svelte 5 RC peer depedency ([#2679](https://github.com/skeletonlabs/skeleton/pull/2679))

## 1.0.0-next.0

### Major Changes

- Enter pre-release mode ([#2668](https://github.com/skeletonlabs/skeleton/pull/2668))
