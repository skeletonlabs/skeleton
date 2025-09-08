import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressLinear = defineSkeletonClasses({
	root: 'w-full flex items-center gap-4',
	label: 'whitespace-nowrap',
	track: 'w-full h-2 bg-surface-200-800 rounded-base overflow-hidden',
	range: 'h-full bg-surface-950-50 rounded-base transition-[width]'
});
