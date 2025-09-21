import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressCircular = defineSkeletonClasses({
	root: 'inline-flex items-center flex-col gap-2',
	label: 'label-text',
	circle: '',
	track: 'stroke-surface-200-800',
	range: 'stroke-primary-500 transition-[stroke-dashoffset] ease-in-out',
	valueText: 'label-text',
});
