import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressCircular = defineSkeletonClasses({
	root: 'grid gap-2 place-items-center w-fit',
	label: 'label-text',
	circle: '',
	track: 'stroke-surface-200-800',
	range: [
		'stroke-primary-500 transition-[stroke-dashoffset] ease-in-out',
		'data-[state=indeterminate]:animate-progress-circular-indeterminate',
	],
	valueText: 'label-text',
});
