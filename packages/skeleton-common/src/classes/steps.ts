import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSteps = defineSkeletonClasses({
	root: 'space-y-4',
	list: 'flex items-center gap-2',
	item: 'flex items-center gap-2 grow last:flex-initial',
	trigger: 'flex items-center gap-1',
	indicator: [
		'size-8 rounded-full preset-outlined-surface-200-800 content-center',
		'data-complete:preset-outlined-primary-500 data-complete:preset-filled-primary-500',
		'data-current:preset-outlined-primary-500',
	],
	separator: ['h-0 border-t border-t-surface-200-800 grow', 'data-complete:border-t-primary-500'],
	content: '',
	prevTrigger: '',
	nextTrigger: '',
});
