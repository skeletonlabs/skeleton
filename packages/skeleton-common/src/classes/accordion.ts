import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesAccordion = defineSkeletonClasses({
	root: ['flex gap-2 w-full', 'data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row'],
	content: 'py-2 px-4',
	trigger: 'px-4 py-2 rounded-base w-full text-start hover:preset-tonal-primary',
	item: ['flex gap-2', 'data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row'],
	indicator: '',
});
