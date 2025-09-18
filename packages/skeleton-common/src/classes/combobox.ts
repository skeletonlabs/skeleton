import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesCombobox = defineSkeletonClasses({
	root: '',
	label: 'label-text',
	control: 'relative',
	input: 'input',
	trigger: 'absolute right-1 top-1/2 -translate-y-1/2',
	positioner: '',
	content: 'bg-surface-100-900 p-2 rounded-container flex flex-col gap-2',
	itemGroup: 'flex flex-col gap-1',
	itemGroupLabel: 'label-text',
	item: 'data-highlighted:preset-filled-primary-500 data-[state=checked]:preset-filled-primary-500 px-2 py-1 rounded',
});
