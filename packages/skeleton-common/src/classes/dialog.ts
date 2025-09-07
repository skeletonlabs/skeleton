import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesDialog = defineSkeletonClasses({
	trigger: 'btn preset-filled',
	backdrop: 'fixed inset-0 bg-black/50',
	positioner: 'fixed inset-0 flex justify-center items-center',
	content: 'bg-surface-100-900 rounded-container p-4',
	title: '',
	description: '',
	closeTrigger: 'btn preset-filled'
});
