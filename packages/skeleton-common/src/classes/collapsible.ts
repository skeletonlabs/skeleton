import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesCollapsible = defineSkeletonClasses({
	root: 'w-full data-[state=open]:space-y-2',
	trigger: 'data-disabled:opacity-50 data-disabled:pointer-events-none',
	indicator: '',
	content: '',
});
