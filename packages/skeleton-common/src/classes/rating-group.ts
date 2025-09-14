import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesRatingGroup = defineSkeletonClasses({
	root: 'flex flex-col gap-1',
	label: '',
	control: 'flex gap-2 data-disabled:cursor-not-allowed data-disabled:opacity-50',
	item: '',
	hiddenInput: '',
});
