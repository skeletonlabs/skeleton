import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSlider = defineSkeletonClasses({
	root: 'flex flex-col gap-2',
	label: 'label-text',
	valueText: '',
	control: 'flex items-center',
	track: 'bg-surface-200-800 rounded-full h-2 flex-1',
	range: 'bg-surface-950-50 rounded-container h-full',
	thumb: 'ring-inset size-5 p-2 bg-surface-50-950 ring-2 ring-surface-950-50 rounded-full',
	hiddenInput: '',
	markerGroup: '',
	marker: '',
});
