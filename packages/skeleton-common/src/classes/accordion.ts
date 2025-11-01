import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesAccordion = defineSkeletonClasses({
	root: ['flex gap-2 w-full', 'data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row'],
	item: ['flex gap-2', 'data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row'],
	itemTrigger: 'px-4 py-2 rounded-base w-full text-start hover:preset-tonal-primary',
	itemIndicator: '',
	itemContent: 'py-2 px-4',
});
