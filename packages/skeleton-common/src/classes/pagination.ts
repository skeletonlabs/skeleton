import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesPagination = defineSkeletonClasses({
	root: 'inline-flex gap-2 p-2 rounded-container preset-outlined-surface-200-800',
	prevTrigger: 'btn preset-tonal',
	item: ['btn preset-tonal cursor-pointer select-none', 'data-selected:preset-filled'],
	ellipsis: 'btn preset-tonal pointer-events-none',
	nextTrigger: 'btn preset-tonal',
});
