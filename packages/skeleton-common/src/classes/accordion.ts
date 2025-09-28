import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesAccordion = defineSkeletonClasses({
	root: 'flex flex-col gap-2 w-full',
	content: 'py-2 px-4',
	heading: '',
	trigger: 'w-full grid items-center gap-4 py-2 px-4 rounded-base text-left hover:preset-tonal-primary',
	item: 'flex flex-col gap-2 w-full',
	indicator: '',
});
