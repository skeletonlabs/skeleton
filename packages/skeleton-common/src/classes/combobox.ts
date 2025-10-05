import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesCombobox = defineSkeletonClasses({
	root: 'flex flex-col gap-2',
	label: 'label-text',
	control: 'relative',
	input: 'input',
	trigger: 'btn-icon btn-icon-sm preset-tonal absolute end-1.5 top-1/2 -translate-y-1/2',
	positioner: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col gap-2',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: [
		'flex justify-between items-center px-2 py-1 rounded cursor-pointer',
		'data-[state=checked]:preset-filled',
		'data-highlighted:outline-2 data-highlighted:outline-offset-1 data-highlighted:outline-surface-950-50 data-highlighted:preset-tonal',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: '',
	itemIndicator: '',
});
