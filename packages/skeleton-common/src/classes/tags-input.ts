import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTagsInput = defineSkeletonClasses({
	root: '',
	label: '',
	control: 'input flex gap-2',
	item: 'chip preset-filled flex gap-2',
	itemPreview: '',
	itemInput: 'input',
	itemDeleteTrigger: '',
	input: 'input-ghost',
	clearTrigger: '',
	hiddenInput: '',
});
