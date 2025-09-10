import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesPopover = defineSkeletonClasses({
	trigger: 'btn preset-filled',
	positioner: '',
	content: 'preset-filled-surface-100-900 border-1 border-surface-200-800 p-4 rounded-container',
	arrow: '',
	arrowTip: 'border-t-1 border-l-1 border-surface-200-800',
	title: 'h4',
	description: '',
	closeTrigger: ''
});
