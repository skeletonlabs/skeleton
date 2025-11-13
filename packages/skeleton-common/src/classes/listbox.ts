import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesListbox = defineSkeletonClasses({
	root: 'flex flex-col gap-2',
	label: 'label-text',
	input: 'input',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col gap-2',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: [
		'flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:preset-tonal',
		'data-selected:preset-filled',
		'data-highlighted:preset-tonal',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: '',
	itemIndicator: '',
});
