import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: 'relative p-4 bg-surface-100-900 border-1 border-surface-200-800 rounded-container data-[type=success]:preset-filled-success-500 data-[type=error]:preset-filled-error-500 min-w-sm',
	group: '',
	title: 'h4',
	description: '',
	actionTrigger: '',
	closeTrigger: 'absolute top-1/2 -translate-y-1/2 right-4 btn-icon hover:preset-tonal'
});
