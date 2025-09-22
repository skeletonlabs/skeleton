import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesAppBar = defineSkeletonClasses({
	root: 'bg-surface-100-900 p-4 space-y-4',
	toolbar: 'grid items-center justify-between gap-4',
	lead: '',
	headline: '',
	trail: 'flex gap-2',
});
