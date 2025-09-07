import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesCombobox = defineSkeletonClasses({
	root: '',
	label: '',
	control: 'relative',
	input: 'input',
	trigger: 'absolute right-1 top-1/2 -translate-y-1/2',
	positioner: '',
	content: 'bg-surface-100-900 p-2 rounded-container',
	itemGroup: '',
	itemGroupLabel: '',
	item: 'data-highlighted:preset-filled-primary-500 px-2 py-1 rounded'
});
