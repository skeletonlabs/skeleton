# @skeletonlabs/skeleton

## 2.0.0-rc.2

### Patch Changes

- chore: Update file button `button` prop to allow for unstyled buttons ([#1919](https://github.com/skeletonlabs/skeleton/pull/1919))

- bugfix: Fixed background color of checkbox in indeterminate state ([#1917](https://github.com/skeletonlabs/skeleton/pull/1917))

## 2.0.0-rc.1

### Patch Changes

- bugfix: Fixed an issue where the paginator page would be set to -1 if the size was 0 ([#1861](https://github.com/skeletonlabs/skeleton/pull/1861))

## 2.0.0-rc.0

### Major Changes

- breaking: Introduced dynamic transitions for various components ([#1533](https://github.com/skeletonlabs/skeleton/pull/1533))

- breaking: Removed deprecated `whitelist` and `blacklist` properties from the Autocomplete component ([#1822](https://github.com/skeletonlabs/skeleton/pull/1822))

- breaking: Removed the long-deprecated Skeleton Data Table feature ([#1822](https://github.com/skeletonlabs/skeleton/pull/1822))

- breaking: Refactored global stores to use contexts for `Toast`, `Drawer`, and `Modal` utilities ([#1831](https://github.com/skeletonlabs/skeleton/pull/1831))

- breaking: Overhauled the Tailwind plugin and separated it into its own package: `@skeletonlabs/tw-plugin` (#1660) ([#1730](https://github.com/skeletonlabs/skeleton/pull/1730))

- breaking: Table of Contents component has been reimplemented from the ground up ([#1832](https://github.com/skeletonlabs/skeleton/pull/1832))

- breaking: Removed all references to Skeleton's legacy typography system, including `typography-prose.css` and `.unstyled` ([#1822](https://github.com/skeletonlabs/skeleton/pull/1822))

- breaking: Renamed the Paginator `offset` property to `page` for better semantics ([#1822](https://github.com/skeletonlabs/skeleton/pull/1822))

### Minor Changes

- feat: Added `tree-view` single/multi selection mode, Enabled `data-driven` for tree-view. ([#1779](https://github.com/skeletonlabs/skeleton/pull/1779))

### Patch Changes

- bugfix: prevent `Paginator` from resetting it's page on length change. ([#1837](https://github.com/skeletonlabs/skeleton/pull/1837))

## 1.12.0

### Minor Changes

- feat: Added `regionLabel` prop to Radio Groups ([#1836](https://github.com/skeletonlabs/skeleton/pull/1836))

### Patch Changes

- bugfix: `autocomplete` fixed reactive update when allow and deny lists are empty. ([#1825](https://github.com/skeletonlabs/skeleton/pull/1825))

- bugfix: Fixed `.bg-hover-primary-token` color in dark mode. ([#1824](https://github.com/skeletonlabs/skeleton/pull/1824))

- bugfix: InputChips updates bound value only once. ([#1768](https://github.com/skeletonlabs/skeleton/pull/1768))

## 1.11.0

### Minor Changes

- chore: Added `separatorText` prop to Paginator to allow localization ([#1791](https://github.com/skeletonlabs/skeleton/pull/1791))

- feat: Added region props in `ListBox` and `ListBoxItem`. ([#1771](https://github.com/skeletonlabs/skeleton/pull/1771))

### Patch Changes

- bugfix: Removed `backdrop-blur` from `variant-form-material` because of high CPU usage on some browsers. ([#1807](https://github.com/skeletonlabs/skeleton/pull/1807))

- bugfix: fixed a minor typo in the Logo Cloud stylesheet ([#1769](https://github.com/skeletonlabs/skeleton/pull/1769))

- bugfix: resolved a scrolling issue when Modals exceeds the visible screen size ([#1695](https://github.com/skeletonlabs/skeleton/pull/1695))

## 1.10.0

### Minor Changes

- feat: AppRail has better support for padding, Tile and Anchors now include an `aspectRatio` property. ([#1727](https://github.com/skeletonlabs/skeleton/pull/1727))

- feat: A new `Tree View` component has been added. ([#1691](https://github.com/skeletonlabs/skeleton/pull/1691))

### Patch Changes

- bugfix: Fix accessibility warning in Ratings component due to applied `on:click` for non-interactive elements. ([#1739](https://github.com/skeletonlabs/skeleton/pull/1739))

- bugfix: Resolved an issue with Popups that caused them to be interactive when closed. ([#1721](https://github.com/skeletonlabs/skeleton/pull/1721))

- bugfix: Resolved an issue that prevented the Autocomplete `allowedlist` feature from working as expected. ([#1736](https://github.com/skeletonlabs/skeleton/pull/1736))

## 1.9.0

### Minor Changes

- feat: Adds support for Svelte 4 ([#1690](https://github.com/skeletonlabs/skeleton/pull/1690))

### Patch Changes

- bugfix: Enhanced types for the `clipboard` action ([#1692](https://github.com/skeletonlabs/skeleton/pull/1692))

- bugfix: resolved a spacing issue when using the vertical `radio group` setting ([#1696](https://github.com/skeletonlabs/skeleton/pull/1696))

- bugfix: resolved an issue when the drawer position suddenly changes sides ([#1679](https://github.com/skeletonlabs/skeleton/pull/1679))

- bugfix: paginator buttons now include accessible ARIA label props ([#1709](https://github.com/skeletonlabs/skeleton/pull/1709))

- bugfix: fixed `scroll` event type in `AppShell` ([#1715](https://github.com/skeletonlabs/skeleton/pull/1715))

- bugfix: Enhanced types for the `filter` action ([#1693](https://github.com/skeletonlabs/skeleton/pull/1693))

- bugfix: `InputChips` can now handle `undefined` values ([#1678](https://github.com/skeletonlabs/skeleton/pull/1678))

## 1.8.0

### Minor Changes

- feat: Implemented a new TabAnchor component for Tabs ([#1645](https://github.com/skeletonlabs/skeleton/pull/1645))

- feat: Expanded Toast features to allow hiding the dismiss button, allow toast to remain visible on hover, and programatically close each instance ([#1637](https://github.com/skeletonlabs/skeleton/pull/1637))

- feat: Added svelte Ratings component ([#1654](https://github.com/skeletonlabs/skeleton/pull/1654))

### Patch Changes

- bugfix: Fixed a typo for the Drawer component's backdrop `blur` property ([#1663](https://github.com/skeletonlabs/skeleton/pull/1663))

- bugfix: Tailwind plugin intellisense now properly displays all component classes ([#1664](https://github.com/skeletonlabs/skeleton/pull/1664))

- chore: Updated all project depedencies ([#1648](https://github.com/skeletonlabs/skeleton/pull/1648))

- bugfix: Fixed a typo for the typography-prose.css headers ([#1647](https://github.com/skeletonlabs/skeleton/pull/1647))

## 1.7.1

### Patch Changes

- bugfix: Resolved a bug preventing the prose stylesheet from being imported ([#1641](https://github.com/skeletonlabs/skeleton/pull/1641))

## 1.7.0

### Minor Changes

- feat: The Paginator component can now be displayed as a numeric row of pages ([#1573](https://github.com/skeletonlabs/skeleton/pull/1573))

- feat: Added additional forwarded events for AppRailTile and AppRailAnchor ([#1633](https://github.com/skeletonlabs/skeleton/pull/1633))

- feat: Added `digits` prop to Conic Gradient to limit decimal points ([#1607](https://github.com/skeletonlabs/skeleton/pull/1607))

- feat: Added a navigation slot to the Step component, which can replace the Back button for the first step only ([#1606](https://github.com/skeletonlabs/skeleton/pull/1606))

- feat: Modal backdrop clicks now take into account both the `mouseup` and `mousedown` events for better accuracy ([#1605](https://github.com/skeletonlabs/skeleton/pull/1605))

- feat: Added a `background` prop to the SlideToggle component ([#1627](https://github.com/skeletonlabs/skeleton/pull/1627))

- feat: Added a missing dark mode modifier for each background hover design token ([#1577](https://github.com/skeletonlabs/skeleton/pull/1577))

### Patch Changes

- chore: Added types to the `Stepper` store and `dispatchParent` ([#1567](https://github.com/skeletonlabs/skeleton/pull/1567))

- bugfix: Updated `focusablePopupElements` in Popup to resolve issues when tabbing into Autocomplete options ([#1592](https://github.com/skeletonlabs/skeleton/pull/1592))

- bugfix: The Drawer's `backdrop` event only fires on backdrop interaction ([#1611](https://github.com/skeletonlabs/skeleton/pull/1611))

- bugfix: `typography-prose.css` must now be imported directly to enable the default Tailwind Typography plugin styles ([#1608](https://github.com/skeletonlabs/skeleton/pull/1608))

- docs: Updated Autocomplete documentation to demonstrate Firefox tab navigation fix for wrapping elements ([#1604](https://github.com/skeletonlabs/skeleton/pull/1604))

- bugfix: Fixed an undesired jiggle within the animation for Toasts ([#1579](https://github.com/skeletonlabs/skeleton/pull/1579))

- chore: Added additional type safeguard to the Table of Contents `scrollToHeading` ([#1565](https://github.com/skeletonlabs/skeleton/pull/1565))

- bugfix: Replaced unicode arrows with SVGs for the Paginator component ([#1629](https://github.com/skeletonlabs/skeleton/pull/1629))

- bugfix: All relative import paths now fully specify the `.js` extension to adhere to Node's ESM algorithm ([#1584](https://github.com/skeletonlabs/skeleton/pull/1584))

- bugfix: ListBoxItem now supports the use of objects for the `value` property ([#1628](https://github.com/skeletonlabs/skeleton/pull/1628))

- bugfix: Updated `typesVersions` map to fix auto imports paths ([#1587](https://github.com/skeletonlabs/skeleton/pull/1587))

- chore: Replaced the now deprecated `eslint-plugin-svelte3` for `eslint-plugin-svelte` ([#1618](https://github.com/skeletonlabs/skeleton/pull/1618))
