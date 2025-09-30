import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesAccordion = defineSkeletonClasses({
	root: 'flex flex-col gap-2 w-full',
	content: 'py-2 px-4',
	heading: '',
	trigger: 'px-4 py-2 rounded-base w-full text-start hover:preset-tonal-primary',
	item: 'flex flex-col gap-2',
	indicator: '',
});
