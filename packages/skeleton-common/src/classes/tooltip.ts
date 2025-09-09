import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTooltip = defineSkeletonClasses({
	trigger: '',
	positioner: '',
	content: 'preset-filled-surface-100-900 border-1 border-surface-200-800 p-2 rounded-container shadow-2xs',
	arrow: '',
	arrowTip: 'border-t-1 border-l-1 border-surface-200-800 text-red-500'
});
