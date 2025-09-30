import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: [
		'card p-3 w-full md:w-md ring flex items-center gap-2',
		'preset-filled-surface-50-950 ring-surface-200-800',
		'data-[type=success]:preset-filled-success-500',
		'data-[type=warning]:preset-filled-warning-500',
		'data-[type=error]:preset-filled-error-500',
	],
	group: '',
	message: 'flex-1',
	title: 'font-medium text-sm',
	description: 'text-sm',
	actionTrigger: 'btn preset-filled',
	closeTrigger: 'btn-icon hover:preset-tonal',
});
