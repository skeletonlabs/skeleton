import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: [
		'card p-4 md:w-md ring grid grid-cols-[1fr_auto_auto] items-center gap-2',
		'preset-filled-surface-50-950 data-[type=success]:preset-filled-success-50-950 data-[type=error]:preset-filled-error-50-950',
		'ring-surface-200-800 data-[type=success]:ring-success-200-800 data-[type=error]:ring-error-200-800'
	],
	group: '',
	message: '',
	title: 'font-medium',
	description: '',
	actionTrigger: 'btn preset-outlined-surface-200-800 hover:preset-tonal',
	closeTrigger: 'btn-icon hover:preset-tonal'
});
