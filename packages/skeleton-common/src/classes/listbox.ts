import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesListbox = defineSkeletonClasses({
	root: 'flex flex-col gap-2',
	label: 'label-text',
	control: '',
});
