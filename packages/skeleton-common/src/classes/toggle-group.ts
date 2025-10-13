import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToggleGroup = defineSkeletonClasses({
	root: [
		'inline-flex preset-outlined-surface-200-800 p-2 gap-2 rounded',
		'group-data-[orientation=horizontal]:flex-row group-data-[orientation=vertical]:flex-col',
	],
	item: [
		'btn cursor-pointer z-10 flex-1',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-readonly:pointer-events-none',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
		'data-[state=on]:preset-filled',
	],
});
