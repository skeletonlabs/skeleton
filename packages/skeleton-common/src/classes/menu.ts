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
	item: 'btn hover:preset-tonal',
	triggerItem: 'btn hover:preset-tonal',
	itemText: '',
	itemIndicator: '',
	separator: 'hr',
});
