import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesToast = defineSkeletonClasses({
	root: [
		'card p-3 w-full max-w-sm ring flex items-center gap-2',
		'preset-filled-surface-50-950 ring-surface-200-800',
		'data-[type=success]:preset-filled-success-500',
		'data-[type=warning]:preset-filled-warning-500',
		'data-[type=error]:preset-filled-error-500',
		// https://zagjs.com/components/toast#requirement
		'translate-x-(--x) translate-y-(--y) scale-(--scale) z-(--z-index) h-(--height) opacity-(--opacity) will-change-[translate,scale,opacity]',
		'transition duration-400 ease-[cubic-bezier(0.21,1.02,0.73,1)] data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]',
	],
	group: 'w-[calc(100%-calc(var(--viewport-offset-left)+var(--viewport-offset-right)))]',
	message: 'flex-1',
	title: 'font-medium text-sm',
	description: 'text-sm',
	actionTrigger: 'btn preset-filled',
	closeTrigger: 'btn-icon hover:preset-tonal',
});
