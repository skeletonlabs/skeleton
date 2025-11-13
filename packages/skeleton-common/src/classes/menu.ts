import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesMenu = defineSkeletonClasses({
	trigger: '',
	contextTrigger: '',
	positioner: '',
	indicator: '',
	content: 'card bg-surface-50-950 border border-surface-200-800 p-2 flex flex-col gap-2',
	arrow: '',
	arrowTip: '',
	itemGroup: '',
	itemGroupLabel: '',
	item: [
		'flex justify-between items-center px-2 py-1 rounded cursor-pointer',
		'data-highlighted:outline-2 data-highlighted:outline-offset-1 data-highlighted:outline-surface-950-50 data-highlighted:preset-tonal',
	],
	itemText: '',
	itemIndicator: '',
	separator: 'hr',
});
