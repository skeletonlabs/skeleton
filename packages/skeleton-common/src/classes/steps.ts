import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSteps = defineSkeletonClasses({
	root: '',
	list: 'flex items-center gap-2',
	item: 'flex items-center gap-2 grow',
	trigger: 'flex items-center gap-1',
	indicator: [
		'size-8 rounded-full preset-tonal content-center',
		'data-complete:preset-filled-primary-500',
		'data-current:preset-filled-primary-500',
	],
	separator: 'h-0 border-t border-t-surface-200-800 grow',
	content: '',
	prevTrigger: '',
	nextTrigger: '',
});
