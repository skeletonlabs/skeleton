import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSwitch = defineSkeletonClasses({
	root: [
		'cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50 inline-flex gap-2 items-center rounded p-1',
		'data-focus-visible:ring data-focus-visible:ring-primary-500',
	],
	control: [
		'block preset-filled-surface-200-800 h-6 w-10 p-0.5 rounded-full flex justify-start',
		'data-[state=checked]:preset-filled-primary-500',
	],
	thumb: [
		'rounded-full block preset-filled-surface-50-950 h-full aspect-square transition-transform grid place-items-center',
		'data-[state=checked]:bg-surface-950-50 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4',
	],
	label: 'label-text',
	hiddenInput: '',
});
