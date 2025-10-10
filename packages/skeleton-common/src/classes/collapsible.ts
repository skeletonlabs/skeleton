import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesCollapsible = defineSkeletonClasses({
	root: 'w-full flex flex-col',
	trigger: ['px-2 py-1 flex items-center justify-between', 'data-disabled:opacity-50 data-disabled:pointer-events-none'],
	indicator: '',
	content: 'px-2 py-1',
});
