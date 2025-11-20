import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesFloatingPanel = defineSkeletonClasses({
	trigger: '',
	positioner: '',
	content: 'card overflow-hidden shadow-lg border border-surface-300-700',
	dragTrigger: '',
	header: 'px-4 py-2 grid grid-cols-[1fr_auto] gap-2 items-center bg-surface-200-800 overflow-y-hidden',
	title: 'flex justify-start items-center gap-2 whitespace-nowrap',
	control: 'flex gap-1',
	stageTrigger: 'btn-icon hover:preset-tonal',
	closeTrigger: 'btn-icon hover:preset-tonal',
	resizeTrigger: [
		'data-[axis*=n]:h-2 data-[axis*=s]:h-2 data-[axis=n]:w-[calc(100%-calc(var(--spacing)*2))] data-[axis=s]:w-[calc(100%-calc(var(--spacing)*2))]',
		'data-[axis*=e]:w-2 data-[axis*=w]:w-2 data-[axis=e]:h-[calc(100%-calc(var(--spacing)*2))] data-[axis=w]:h-[calc(100%-calc(var(--spacing)*2))]',
	],
	body: 'h-full bg-surface-100-900 p-4 overflow-y-auto',
});
