// Exports for skeleton-svelte package

// REMINDER
// Do not export parent/child components. Use the dot-notation composition pattern:
// https://skeleton.dev/docs/resources/contribute/components#dot-notation-syntax
// (See Accordion, Nav, and Tabs for examples)

// Components
export { default as Accordion } from './components/Accordion/index.js';
export { default as AppBar } from './components/AppBar/AppBar.svelte';
export { default as Avatar } from './components/Avatar/Avatar.svelte';
export { default as FileUpload } from './components/FileUpload/FileUpload.svelte';
export { default as Pagination } from './components/Pagination/Pagination.svelte';
export { default as Progress } from './components/Progress/Progress.svelte';
export { default as ProgressRing } from './components/ProgressRing/ProgressRing.svelte';
export { default as Navigation } from './components/Navigation/index.js';
export { default as Segment } from './components/Segment/index.js';
export { default as Slider } from './components/Slider/Slider.svelte';
export { default as Switch } from './components/Switch/Switch.svelte';
export { default as Tabs } from './components/Tabs/index.js';
export { default as TagsInput } from './components/TagsInput/TagsInput.svelte';
export { default as Toaster } from './components/Toast/Toaster.svelte';
export { createToaster } from './components/Toast/create-toaster.js';
export { default as Rating } from './components/Rating/index.js';
export { default as TreeView } from './components/TreeView/index.js';

// Types
export type { FileUploadApi } from './components/FileUpload/types.js';
export type { CollectionNode, TreeViewApi } from './components/TreeView/types.js';

// Temporary Features ---
// The following will be removed or replaced in the future.

// Popvers
export { default as Combobox } from './components/Combobox/Combobox.svelte';
export { default as Popover } from './components/Popover/Popover.svelte';
export { default as Tooltip } from './components/Tooltip/Tooltip.svelte';
export { default as Modal } from './components/Modal/Modal.svelte';
