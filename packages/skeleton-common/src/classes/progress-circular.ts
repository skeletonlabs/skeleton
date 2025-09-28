import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressCircular = defineSkeletonClasses({
	root: 'inline-flex flex-col gap-2 items-center',
	label: 'label-text',
	circle: '',
	track: 'stroke-surface-200-800',
	range: [
		'stroke-primary-500 transition-[stroke-dashoffset] ease-in-out',
		'data-[state=indeterminate]:animate-progress-circular-indeterminate',
	],
	valueText: 'label-text',
});
