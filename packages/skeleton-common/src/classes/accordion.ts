import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesAccordion = defineSkeletonClasses({
	root: 'w-full grid gap-2',
	content: 'py-2 px-4',
	heading: '',
	trigger: 'w-full grid items-center gap-4 py-2 px-4 rounded-base text-left hover:preset-tonal-primary',
	item: 'grid gap-2',
	indicator: '',
});
