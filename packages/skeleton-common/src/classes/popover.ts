import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesPopover = defineSkeletonClasses({
	root: '',
	trigger: 'btn preset-filled',
	positioner: '',
	content: 'bg-surface-100-900 p-4 rounded-container',
	title: '',
	description: '',
	closeTrigger: 'btn preset-tonal'
});
