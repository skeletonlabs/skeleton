// Exports for skeleton-svelte package

// REMINDER
// Do not export parent/child components. Use the dot-notation composition pattern:
// https://next.skeleton.dev/docs/resources/contribute/components#dot-notation-syntax
// (See Accordion, Nav, and Tabs for examples)

// Components
export { default as Accordion } from './components/Accordion/index.js';
export { default as AppBar } from './components/AppBar/AppBar.svelte';
export { default as Avatar } from './components/Avatar/Avatar.svelte';
export { default as FileUpload } from './components/FileUpload/FileUpload.svelte';
export { default as Pagination } from './components/Pagination/Pagination.svelte';
export { default as Progress } from './components/Progress/Progress.svelte';
export { default as ProgressRing } from './components/ProgressRing/ProgressRing.svelte';
export { default as Nav } from './components/Nav/index.js';
export { default as Segment } from './components/Segment/index.js';
export { default as Slider } from './components/Slider/Slider.svelte';
export { default as Switch } from './components/Switch/Switch.svelte';
export { default as Tabs } from './components/Tab/index.js';
export { default as TagsInput } from './components/TagsInput/TagsInput.svelte';
export { default as Rating } from './components/Rating/index.js';
// Temporary Components
export { default as ToastProvider } from './components/Toast/ToastProvider.svelte';
// These are available temporarily until Floating UI Svelte launches
export { default as Combobox } from './components/Combobox/Combobox.svelte';
export { default as Popover } from './components/Popover/Popover.svelte';
export { default as Tooltip } from './components/Tooltip/Tooltip.svelte';
export { default as Modal } from './components/Modal/Modal.svelte';

// Types
export type { FileUploadApi } from './components/FileUpload/types.js';
export type { ToastContext } from './components/Toast/types.js';
