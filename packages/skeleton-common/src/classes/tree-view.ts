import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTreeView = defineSkeletonClasses({
	root: 'grid gap-2',
	tree: '',
	label: 'label-text',
	item: [
		'flex gap-2 items-center ps-[calc(var(--depth)*var(--spacing)*6+calc(var(--spacing)*4))] pe-4 py-2 hover:preset-tonal rounded select-none',
		'data-selected:preset-tonal',
		'[&>svg]:size-4',
	],
	branch: 'grid',
	branchControl: [
		'flex gap-2 items-center ps-[calc(var(--depth)*var(--spacing)*6-calc(var(--spacing)*2))] pe-4 py-2 hover:preset-tonal rounded select-none',
		'data-selected:preset-tonal',
	],
	branchIndicator: ['[&>svg]:size-4'],
	branchText: ['flex gap-2 items-center', '[&>svg]:size-4'],
	branchContent: 'grid relative',
	branchIndentGuide: 'absolute preset-filled-surface-500 w-0.5 left-[calc(var(--depth)*var(--spacing)*6)] -translate-x-1/2 h-full rounded',
});
