# @skeletonlabs/skeleton-svelte

## 1.2.3
### Patch Changes


- Segment/Pagination: move default border padding to padding prop ([#3554](https://github.com/skeletonlabs/skeleton/pull/3554))

## 1.2.2
### Patch Changes


- bugfix: Fix Combobox collection not updating on input ([#3542](https://github.com/skeletonlabs/skeleton/pull/3542))

## 1.2.1
### Patch Changes


- fix: respect closable toast option ([#3507](https://github.com/skeletonlabs/skeleton/pull/3507))

## 1.2.0
### Minor Changes


- feat: add hidden input for TagsInput ([#3487](https://github.com/skeletonlabs/skeleton/pull/3487))

## 1.1.0
### Minor Changes


- feat: Removed Toast integration in favor of first-party Toast component. ([#3440](https://github.com/skeletonlabs/skeleton/pull/3440))


### Patch Changes


- fix(FileUpload): Change `#each` key from `file.name` to `file` (Prevents name conflicts). ([#3475](https://github.com/skeletonlabs/skeleton/pull/3475))


- fix: Update Zag to 1.7.0 ([#3476](https://github.com/skeletonlabs/skeleton/pull/3476))

## 1.0.0
### Minor Changes


- feat: Navigation - manually handle `selected` state of NavTile ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Implemented the Svelte components for Popover, Tooltip, Combobox, and Modal. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- Feature: Added the Switch component. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- - chore: Svelte Accordion and Nav components now use dot notation syntax ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))
  - Tab components overhauled to bring consistency between Svelte and React implementations
  - Tabs.Item component removed
  - Tabs.Panels (plural) component added

- feature: Added the Navigation Rail, Bar, and Tile components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the Svelte Toast component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Migrated Nav, Segment Control, and Switch component APIs to match new conventions ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Improvements to the File Upload component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added Segment Control component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the ProgressRing component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the FileUpload component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added Tags Input component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the Slider component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Updated to the latest dependencies ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the Ratings component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- All Skeleton components have been updated to integrate Zag.js. This contains a number of breaking component API changes. Updates all documentation. And includes new CSS animations in the Tailwind plugin. ([More Information](https://github.com/skeletonlabs/skeleton/discussions/2784)) ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Zag 1.0 ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Added the Pagination component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


### Patch Changes


- feat: set trigger button type to `button` for **Tooltip**, **Popover** and **Modal** ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Reinstate Pagination `count` prop. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Implement `arrow` for Tooltip ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Resolved Pagination alternative mode page count issue ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Implement `aria-label` for triggers ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: renamed `positionerZIndex` to `zIndex` and used CSS values instead of Tailwind classes for **Popover**, **Modal**, **Tooltip** and **Combobox** ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Add `showFirstLastButtons` prop to Pagination to enable toggling first and last buttons. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Call custom event handlers provided in ZagJs's internal handlers ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Remove redundant null checks for triggers ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: prevent internal overwrite of `ComboBox` `onInputValueChange`. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feature: Add option to set `aria-labelledby` for Segment component ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Modified default styles based on theme gen improvements ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Update Svelte peer dependency to 5.20.0 or higher because we rely on `$props.id` (which was released in 5.20.0) ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- Only render `<button>` when `trigger` snippet is defined. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Improved Ratings component default half star SVG ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Implement `disabled` for Modal, Tooltip, Popover and Combobox ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Added base style prop classes to Svelte Popover, Tooltip, and Modal components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Set button type to `button` for Svelte's Combobox options ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Adjust Svelte Switch to allow for `bind:checked` and `onCheckedChange` at the same time. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Implemented Svelte test specs for all components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Updated to the latest Svelte 5 RC peer depedency ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: progress ring safari 100% ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: resolved Svelte Pagination component reactivity issues ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: provide `item` snippet for Combobox ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Make Svelte Slider marker snippet take the marker value as argument to enable marker customization ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Fixed reactivity issues within the Navigation related components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Added positioner and z-index style props to the Svelte Popover, Tooltip, Combobox, and Modal components ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- `onOpenChange` will no longer be internally overriden and thus fix `bind:open` when used in conjunction with `onOpenChange`. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- docs: update `trigger` props description for _Popover_, _Modal_ and _Tooltip_ ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Disabled the unsupported Svelte Combobox multiple property ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Moved Prettier and ESLint to repo root, updated formatting, and rectified linting issues ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- Renamed Nav component to Navigation to conform to our naming convention across packages ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Rename `TagsInput` inconsistent prop names: `inputEdit` or `tagEdit` to `tagEditInput` ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: only render button wrapping around `trigger` if the snippet was provided ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Remove extra height class from NavBar ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Remove `$effect` in `Segment.svelte` component that was emitting execessive logs ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Make use of `useId` on Navigation component to set default `id` for Tiles if user had not defined it explicitly ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: ProgressRing component no longer has a label by default, but can be enabled with `showLabel` prop. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- feat: Implements trigger event props for Svelte's *Popover*, *Modal*, *Combobox* and *Tooltip*. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: Resolve Zag dependency error ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Improved focus states for Switch and Slider components. Minor style improvements to the Ratings label text. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Removed `filter` prop and moved `style` prop to parent element ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- Implement `style` prop for Avatar component. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- Bugfix: `bind:pageSize` now correctly updates in combination with `onPageSizeChange` handler. ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- bugfix: empty padding when switch has no children ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Improved global and per component focus state styles ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Style improvements for Buttons, Badges, Chips, and Form elements ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))


- chore: Added `@skeletonlabs/skeleton` as a peer-dependency ([#3367](https://github.com/skeletonlabs/skeleton/pull/3367))

- Updated dependencies [[`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00), [`fafffd7`](https://github.com/skeletonlabs/skeleton/commit/fafffd7bfd58554218ea823fe7b585e092a56c00)]:
  - @skeletonlabs/skeleton@3.0.0

## 1.0.0-next.22
### Patch Changes


- bugfix: prevent internal overwrite of `ComboBox` `onInputValueChange`. ([#3327](https://github.com/skeletonlabs/skeleton/pull/3327))


- chore: Update Svelte peer dependency to 5.20.0 or higher because we rely on `$props.id` (which was released in 5.20.0) ([#3311](https://github.com/skeletonlabs/skeleton/pull/3311))


- bugfix: progress ring safari 100% ([#3360](https://github.com/skeletonlabs/skeleton/pull/3360))


- feat: provide `item` snippet for Combobox ([#3348](https://github.com/skeletonlabs/skeleton/pull/3348))


- bugfix: Rename `TagsInput` inconsistent prop names: `inputEdit` or `tagEdit` to `tagEditInput` ([#3298](https://github.com/skeletonlabs/skeleton/pull/3298))


- chore: Removed `filter` prop and moved `style` prop to parent element ([#3344](https://github.com/skeletonlabs/skeleton/pull/3344))


- chore: Style improvements for Buttons, Badges, Chips, and Form elements ([#3345](https://github.com/skeletonlabs/skeleton/pull/3345))


- chore: Added `@skeletonlabs/skeleton` as a peer-dependency ([#3351](https://github.com/skeletonlabs/skeleton/pull/3351))

- Updated dependencies [[`73a4e9f`](https://github.com/skeletonlabs/skeleton/commit/73a4e9f69b47f5684162adcaada6d460a5b73ca7), [`f427d83`](https://github.com/skeletonlabs/skeleton/commit/f427d83302826a238c43439fc67be4837d76b846), [`3af054d`](https://github.com/skeletonlabs/skeleton/commit/3af054dfb9f88b28694c2bf7630a3a40449a844c)]:
  - @skeletonlabs/skeleton@3.0.0-next.13

## 1.0.0-next.21

### Minor Changes

- feat: Zag 1.0 ([#3257](https://github.com/skeletonlabs/skeleton/pull/3257))

## 1.0.0-next.20

### Minor Changes

- feat: Navigation - manually handle `selected` state of NavTile ([#3228](https://github.com/skeletonlabs/skeleton/pull/3228))

### Patch Changes

- feat: Implement `aria-label` for triggers ([#3243](https://github.com/skeletonlabs/skeleton/pull/3243))

- chore: Remove redundant null checks for triggers ([#3226](https://github.com/skeletonlabs/skeleton/pull/3226))

- bugfix: only render button wrapping around `trigger` if the snippet was provided ([#3223](https://github.com/skeletonlabs/skeleton/pull/3223))

## 1.0.0-next.19

### Patch Changes

- feat: set trigger button type to `button` for **Tooltip**, **Popover** and **Modal** ([#3208](https://github.com/skeletonlabs/skeleton/pull/3208))

- feat: Implement `arrow` for Tooltip ([#3185](https://github.com/skeletonlabs/skeleton/pull/3185))

- feat: renamed `positionerZIndex` to `zIndex` and used CSS values instead of Tailwind classes for **Popover**, **Modal**, **Tooltip** and **Combobox** ([#3210](https://github.com/skeletonlabs/skeleton/pull/3210))

- feat: Implement `disabled` for Modal, Tooltip, Popover and Combobox ([#3186](https://github.com/skeletonlabs/skeleton/pull/3186))

- feat: Make Svelte Slider marker snippet take the marker value as argument to enable marker customization ([#3205](https://github.com/skeletonlabs/skeleton/pull/3205))

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
