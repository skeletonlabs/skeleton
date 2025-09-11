import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSwitch = defineSkeletonClasses({
	root: 'cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50 flex gap-2',
	control: [
		'block preset-filled-surface-200-800 h-6 w-10 p-0.5 rounded-full flex justify-start',
		'data-[state=checked]:preset-filled-primary-500',
		'data-focus:ring-2 data-focus:ring-surface-950-50'
	],
	thumb: [
		'rounded-full block preset-filled-surface-50-950 h-full aspect-square transition-transform grid place-items-center',
		'data-[state=checked]:bg-surface-950-50 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4'
	],
	label: '',
	hiddenInput: ''
});
