import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTabs = defineSkeletonClasses({
	root: ['flex', 'data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row'],
	list: [
		'relative flex gap-2 border-surface-200-800',
		'data-[orientation=horizontal]:pb-2 data-[orientation=horizontal]:mb-4 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b',
		'data-[orientation=vertical]:pe-2 data-[orientation=vertical]:me-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-e',
	],
	trigger: ['btn hover:preset-tonal-primary', 'data-disabled:opacity-50'],
	indicator: [
		'bg-surface-950-50',
		'data-[orientation=horizontal]:w-(--width) data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:bottom-0',
		'data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-(--height) data-[orientation=vertical]:end-0',
	],
	content: '',
});
