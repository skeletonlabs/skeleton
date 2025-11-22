import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSteps = defineSkeletonClasses({
	root: ['data-[orientation=horizontal]:space-y-4', 'data-[orientation=vertical]:flex data-[orientation=vertical]:space-x-4'],
	list: [
		'flex gap-2',
		'data-[orientation=horizontal]:items-center',
		'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start',
	],
	item: [
		'flex gap-2 grow last:flex-initial',
		'data-[orientation=horizontal]:items-center',
		'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start',
	],
	trigger: 'flex items-center gap-1',
	indicator: [
		'size-8 rounded-full content-center',
		'not-data-complete:not-data-current:preset-outlined-surface-200-800',
		'data-complete:preset-filled-primary-500',
		'data-current:preset-outlined-primary-500',
	],
	separator: [
		'h-0 border-surface-200-800 grow',
		'data-complete:border-primary-500',
		'data-[orientation=horizontal]:border-t',
		'data-[orientation=vertical]:border-s data-[orientation=vertical]:ms-4',
	],
	content: '',
	prevTrigger: '',
	nextTrigger: '',
});
