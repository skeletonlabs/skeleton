import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesFloatingPanel = defineSkeletonClasses({
	trigger: '',
	positioner: '',
	content: 'card overflow-hidden shadow-lg border border-surface-300-800',
	dragTrigger: '',
	header: 'p-2 flex justify-between items-center bg-surface-200-800 border-b border-surface-300-800',
	title: 'flex truncate ',
	control: 'flex',
	stageTrigger: 'rounded p-2 hover:preset-tonal',
	closeTrigger: 'rounded p-2 hover:preset-tonal',
	body: 'bg-surface-100-900 p-2 overflow-y-auto h-full',
	resizeTrigger: 'size-2',
});
