import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTabs = defineSkeletonClasses({
	root: '',
	list: 'flex gap-2 border-b-1 border-surface-200-800 mb-4',
	trigger: 'pb-2',
	label: 'btn hover:preset-tonal-primary',
	content: ''
});
