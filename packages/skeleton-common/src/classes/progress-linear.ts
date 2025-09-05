import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressLinear = defineSkeletonClasses({
	root: 'bg-blue-500',
	label: 'bg-red-500',
	track: 'h-4 bg-green-500',
	range: 'h-4 bg-yellow-500'
});
