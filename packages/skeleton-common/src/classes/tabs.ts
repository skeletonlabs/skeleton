import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTabs = defineSkeletonClasses({
	root: '',
	list: 'flex gap-2 border-b border-surface-200-800 mb-4 relative',
	trigger: 'btn hover:preset-tonal-primary mb-2',
	indicator: 'h-0.5 bottom-0 w-(--width) bg-surface-950-50',
	content: ''
});
