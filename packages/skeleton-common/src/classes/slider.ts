import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSlider = defineSkeletonClasses({
	root: 'flex flex-col gap-2',
	label: 'label-text',
	valueText: '',
	control: ['flex items-center', 'data-disabled:opacity-50'],
	track: 'bg-surface-200-800 rounded-base h-2 overflow-hidden flex-1',
	range: 'bg-surface-950-50 h-full',
	thumb: [
		'size-5 bg-surface-50-950 ring-inset ring-2 ring-surface-950-50 rounded-full',
		'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-surface-950-50',
	],
	hiddenInput: '',
	markerGroup: '',
	marker: 'text-xs text-surface-600-400',
});
