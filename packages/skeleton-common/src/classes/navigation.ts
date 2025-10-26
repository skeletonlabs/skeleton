import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesNavigation = defineSkeletonClasses({
	root: [
		'bg-surface-100-900 overflow-x-hidden transition-[width] duration-200',
		// Bar
		'data-[layout=bar]:w-full data-[layout=bar]:p-2',
		// Rail
		'data-[layout=rail]:w-[100px] data-[layout=rail]:h-full data-[layout=rail]:overflow-y-hidden data-[layout=rail]:p-2 data-[layout=rail]:flex data-[layout=rail]:flex-col data-[layout=rail]:gap-4',
		// Sidebar
		'data-[layout=sidebar]:w-[280px] data-[layout=sidebar]:h-full data-[layout=sidebar]:overflow-y-auto data-[layout=sidebar]:p-4',
	],
	header: '',
	content: [
		// Rail
		'data-[layout=rail]:contents',
		// Sidebar
		'data-[layout=sidebar]:space-y-4',
	],
	group: [
		// Rail
		'data-[layout=rail]:contents',
		// Sidebar
		'data-[layout=sidebar]:flex flex-col gap-2',
	],
	label: 'text-xs text-surface-700-300',
	menu: [
		'flex-1 flex gap-2',
		// Bar
		'data-[layout=bar]:items-stretch',
		// Rail
		'data-[layout=rail]:flex-col data-[layout=rail]:justify-center',
		// Sidebar
		'data-[layout=sidebar]:flex-col data-[layout=sidebar]:items-stretch',
	],
	footer: '',
});
