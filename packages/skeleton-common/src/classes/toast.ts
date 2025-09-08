import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: 'flex justify-between items-center gap-3 p-3 rounded-container preset-outlined-surface-200-800 data-[type=success]:preset-filled-success-500 data-[type=error]:preset-filled-error-500',
	group: '',
	title: '',
	description: '',
	closeTrigger: ''
});
