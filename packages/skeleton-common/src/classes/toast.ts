import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: [
		'card p-3 w-full max-w-md ring flex items-center gap-2',
		'preset-filled-surface-50-950 ring-surface-200-800',
		'data-[type=success]:preset-filled-success-500',
		'data-[type=warning]:preset-filled-warning-500',
		'data-[type=error]:preset-filled-error-500',
	],
	// TODO: Replace `32px` with `calc(2*var(--viewport-offset))` (or whatever the name of the CSS variable will be) when https://github.com/chakra-ui/zag/issues/2859 is resolved.
	group: 'w-[calc(100%-32px)]',
	message: 'flex-1',
	title: 'font-medium text-sm',
	description: 'text-sm',
	actionTrigger: 'btn preset-filled',
	closeTrigger: 'btn-icon hover:preset-tonal',
});
