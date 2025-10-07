import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTagsInput = defineSkeletonClasses({
	root: 'w-full space-y-2',
	label: 'label-text',
	control: 'input flex flex-wrap gap-2 p-2',
	item: '',
	itemPreview: ['chip flex gap-0 p-0 preset-filled hover:brightness-100 w-fit', 'data-highlighted:ring data-highlighted:ring-primary-500'],
	itemText: 'leading-none px-2 py-1',
	itemDeleteTrigger: 'hover:preset-tonal px-2 py-1',
	itemInput: 'input text-xs',
	input: 'input-ghost',
	clearTrigger: 'btn btn-sm preset-tonal hover:preset-filled-error-500',
	hiddenInput: '',
});
