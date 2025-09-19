import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesCombobox = defineSkeletonClasses({
	root: 'w-full space-y-1',
	label: 'label-text',
	control: 'relative',
	input: 'input',
	trigger: 'btn-icon btn-icon-sm preset-tonal absolute right-1 top-1/2 -translate-y-1/2',
	positioner: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 space-y-2',
	itemGroup: '',
	itemGroupLabel: 'text-surface-600-400 text-xs px-2 py-1',
	item: 'data-highlighted:preset-filled-primary-500 data-[state=checked]:preset-filled-primary-500 px-2 py-1 rounded cursor-pointer',
});
