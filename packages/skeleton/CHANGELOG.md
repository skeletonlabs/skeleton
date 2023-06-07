# @skeletonlabs/skeleton

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
