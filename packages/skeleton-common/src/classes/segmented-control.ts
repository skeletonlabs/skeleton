import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesSegmentedControl = defineSkeletonClasses({
	root: [
		'inline-flex preset-outlined-surface-200-800 p-2 gap-2 rounded',
		'data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
	],
	indicator: 'top-(--top) left-(--left) w-(--width) h-(--height) preset-filled rounded',
	item: ['btn cursor-pointer outline-2 outline-transparent z-10', 'data-focus-visible:ring-2 data-focus-visible:ring-primary-500'],
	itemText: ['transition-colors', 'data-[state=checked]:text-surface-contrast-950 data-[state=checked]:dark:text-surface-contrast-50 '],
	itemHiddenInput: '',
});
