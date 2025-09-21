import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesPagination = defineSkeletonClasses({
	root: 'flex gap-2',
	prevTrigger: 'btn preset-filled-primary-500',
	item: 'btn [&:not([data-selected])]:preset-filled data-selected:preset-filled-primary-500 cursor-pointer select-none',
	ellipsis: 'px-2',
	nextTrigger: 'btn preset-filled-primary-500',
});
