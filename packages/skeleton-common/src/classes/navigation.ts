import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesNavigation = defineSkeletonClasses({
	root: [
		'bg-surface-100-900',
		// Rail
		'data-[parent=bar]:w-full data-[parent=bar]:p-2',
		// Bar
		'data-[parent=rail]:w-[100px] data-[parent=rail]:p-2',
		// Sidebar
		'data-[parent=sidebar]:p-4',
	],
	// TODO: conver to `data-parent="bar|rail|sidebar" format
	menu: [
		// Rail
		'data-[parent=bar]:flex data-[parent=bar]:gap-2',
		// Bar
		'data-[parent=rail]:space-y-2 data-[parent=rail]:overflow-y-auto',
		// Sidebar
		'data-[parent=sidebar]:space-y-2 data-[parent=sidebar]:overflow-y-auto',
	],
});
