import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesPagination = defineSkeletonClasses({
	root: 'inline-flex gap-2 p-2 rounded-container preset-outlined-surface-200-800 w-fit',
	prevTrigger: 'btn btn-sm preset-tonal',
	item: 'btn btn-sm preset-tonal cursor-pointer select-none data-selected:preset-filled',
	ellipsis: 'btn btn-sm preset-tonal pointer-events-none',
	nextTrigger: 'btn btn-sm preset-tonal',
	firstTrigger: 'btn btn-sm preset-tonal',
	lastTrigger: 'btn btn-sm preset-tonal',
});
