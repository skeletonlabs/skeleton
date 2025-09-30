import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSwitch = defineSkeletonClasses({
	root: [
		'cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50 inline-flex gap-2 items-center rounded',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
	],
	control: [
		'block preset-filled-surface-200-800 h-6 w-10 p-0.5 rounded-full flex justify-start',
		'data-[state=checked]:preset-filled-primary-500',
	],
	thumb: [
		'grid justify-center items-center h-full aspect-square rounded-full',
		'bg-surface-50 text-surface-contrast-50 fill-surface-contrast-50',
		'transition-transform duration-100 data-[state=checked]:translate-x-4 rtl:data-[state=checked]:-translate-x-4',
	],
	label: 'label-text',
	hiddenInput: '',
});
