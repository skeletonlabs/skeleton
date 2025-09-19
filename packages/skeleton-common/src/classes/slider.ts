import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSlider = defineSkeletonClasses({
	root: 'w-full',
	label: 'label-text',
	valueText: '',
	control: '',
	track: 'bg-surface-200-800 rounded-full',
	range: 'bg-surface-950-50 rounded-container h-1.5',
	thumb: 'ring-inset size-8 bg-surface-50-950 ring-2 ring-surface-950-50 rounded-full',
	hiddenInput: '',
	markerGroup: '',
	marker: '',
});
