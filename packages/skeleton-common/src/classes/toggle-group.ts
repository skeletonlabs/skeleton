import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesToggleGroup = defineSkeletonClasses({
	root: [
		'inline-flex preset-outlined-surface-200-800 divide-surface-200-800 overflow-hidden rounded-base',
		'data-[orientation=horizontal]:divide-x-[1px] data-[orientation=vertical]:divide-y-[1px]',
		'data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
	],
	item: [
		'flex justify-center items-center w-9 aspect-square hover:preset-tonal data-[state=on]:preset-filled',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-readonly:pointer-events-none',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
});
