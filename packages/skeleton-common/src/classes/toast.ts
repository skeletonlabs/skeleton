import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: [
		'relative p-4 border-1 rounded-container min-w-sm',
		'bg-surface-100-900 data-[type=success]:preset-filled-success-100-900 data-[type=error]:preset-filled-error-100-900',
		'border-surface-200-800 data-[type=success]:border-success-200-800 data-[type=error]:border-error-200-800'
	],
	group: '',
	title: 'h4',
	description: '',
	actionTrigger: '',
	closeTrigger: 'absolute top-1/2 -translate-y-1/2 right-4 btn-icon hover:preset-tonal'
});
