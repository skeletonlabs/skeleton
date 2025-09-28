import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesProgressLinear = defineSkeletonClasses({
	root: [
		// Common
		'flex flex-col gap-2',
		// Horizontal Orientation
		'data-[orientation=horizontal]:w-full',
		// Vertical Orientation
		'data-[orientation=vertical]:items-center',
	],
	label: 'label-text whitespace-nowrap',
	track: [
		// Common
		'bg-surface-200-800 rounded-base overflow-hidden',
		// Horizontal Orientation
		'data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-2',
		// Vertical Orientation
		'data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-[100px]',
	],
	range: [
		// Common
		'h-full bg-surface-950-50 rounded-base',
		// Horizontal Orientation
		'data-[orientation=horizontal]:transition-[width] data-[orientation=horizontal]:data-[state=indeterminate]:animate-progress-linear-indeterminate-horizontal',
		// Vertical Orientation
		'data-[orientation=vertical]:transition-[height] data-[orientation=vertical]:data-[state=indeterminate]:animate-progress-linear-indeterminate-vertical',
	],
});
