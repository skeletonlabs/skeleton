import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesNavigation = defineSkeletonClasses({
	root: [
		'bg-surface-100-900',
		// Rail
		'data-[layout=bar]:w-full data-[layout=bar]:p-2',
		// Bar
		'data-[layout=rail]:w-[100px] data-[layout=rail]:p-2',
		// Sidebar
		'data-[layout=sidebar]:p-4',
	],
	menu: [
		// Rail
		'data-[layout=bar]:flex data-[layout=bar]:gap-2',
		// Bar
		'data-[layout=rail]:space-y-2 data-[layout=rail]:overflow-y-auto',
		// Sidebar
		'data-[layout=sidebar]:space-y-2 data-[layout=sidebar]:overflow-y-auto',
	],
});
