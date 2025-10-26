import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesTreeView = defineSkeletonClasses({
	root: 'w-full space-y-2 select-none',
	tree: 'space-y-1',
	label: 'label-text',
	item: [
		'flex items-center gap-2 pe-4 py-2 rounded-base',
		// Hover and selection states
		'hover:preset-tonal data-selected:preset-filled',
		// Left side overlap effect
		'ps-[calc(var(--depth)*var(--spacing)*6+var(--spacing)*4)]',
	],
	branch: 'space-y-1',
	branchControl: [
		'flex items-center gap-2 pe-4 py-2 rounded-base',
		// Hover and selection states
		'hover:preset-tonal data-selected:preset-filled',
		// Left side overlap effect
		'ps-[calc(var(--depth)*var(--spacing)*6-var(--spacing)*2)]',
	],
	branchIndicator: 'data-[state=open]:rotate-90',
	branchText: 'flex items-center gap-2',
	branchContent: 'space-y-1 relative',
	branchIndentGuide: [
		'absolute bg-surface-500/50 w-0.5 h-full rounded-base',
		// Left side overlap effect
		'left-[calc(var(--depth)*var(--spacing)*6)] -translate-x-1/2',
	],
});
