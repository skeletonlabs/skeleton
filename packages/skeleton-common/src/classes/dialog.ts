import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesDialog = defineSkeletonClasses({
	trigger: 'btn preset-filled',
	backdrop: 'fixed inset-0 bg-black/50',
	positioner: 'fixed inset-0 flex justify-center items-center',
	content: 'preset-filled-surface-100-900 border-1 border-surface-200-800 rounded-container p-4 min-w-sm',
	title: 'h4',
	description: '',
	closeTrigger: ''
});
