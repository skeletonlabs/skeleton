import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesNavigation = defineSkeletonClasses({
	root: [
		'bg-surface-100-900',
		// Bar
		'data-[layout=bar]:w-full data-[layout=bar]:p-2',
		// Rail
		'data-[layout=rail]:w-[100px] data-[layout=rail]:p-2 data-[layout=rail]:flex data-[layout=rail]:flex-col data-[layout=rail]:gap-4',
		// Sidebar
		'data-[layout=sidebar]:p-4',
	],
	menu: [
		// Bar
		'data-[layout=bar]:flex items-stretch data-[layout=bar]:gap-2',
		// Rail
		'data-[layout=rail]:flex data-[layout=rail]:flex-col data-[layout=rail]:justify-center data-[layout=rail]:gap-2',
		// Sidebar
		'data-[layout=sidebar]:space-y-2 data-[layout=sidebar]:overflow-y-auto',
	],
	header: [
		// Rail
		'',
		// Sidebar
		'',
	],
	footer: [
		// Rail
		'',
		// Sidebar
		'',
	],
});
