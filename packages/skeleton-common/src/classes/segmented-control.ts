import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSegmentedControl = defineSkeletonClasses({
	root: 'space-y-2',
	label: 'label-text',
	control: [
		'inline-flex preset-outlined-surface-200-800 p-2 gap-2 rounded',
		'data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
	],
	indicator: 'top-(--top) left-(--left) w-(--width) h-(--height) preset-filled rounded data-disabled:opacity-50',
	item: [
		'btn cursor-pointer z-10',
		'data-focus-visible:outline-2 data-focus-visible:outline-offset-1 data-focus-visible:outline-surface-950-50',
		'data-readonly:pointer-events-none',
		'data-disabled:pointer-events-none data-disabled:opacity-50',
	],
	itemText: ['transition-colors', 'data-[state=checked]:text-surface-contrast-950 data-[state=checked]:dark:text-surface-contrast-50 '],
	itemHiddenInput: '',
});
