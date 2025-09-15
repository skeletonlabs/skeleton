import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTagsInput = defineSkeletonClasses({
	root: 'w-full space-y-2 gap-2',
	label: 'label-text',
	control: 'input flex flex-wrap gap-1 p-2',
	item: '',
	itemPreview: [
		'flex items-center gap-1 chip preset-filled hover:brightness-100 px-2 w-fit',
		'data-highlighted:ring-2 data-highlighted:ring-primary-500',
	],
	itemText: 'leading-none',
	itemDeleteTrigger: 'hover:preset-tonal',
	itemInput: 'input text-xs',
	input: 'input-ghost',
	clearTrigger: 'btn btn-sm preset-tonal hover:preset-filled-error-500',
	hiddenInput: '',
});
