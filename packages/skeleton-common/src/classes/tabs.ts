import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesTabs = defineSkeletonClasses({
	root: 'w-full flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row',
	list: 'relative data-[orientation=horizontal]:mb-4 data-[orientation=vertical]:me-4 flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col gap-2 data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-e border-surface-200-800',
	trigger:
		'btn hover:preset-tonal-primary data-[orientation=horizontal]:mb-2 data-[orientation=vertical]:me-2 data-disabled:opacity-50 data-disabled:pointer-events-none',
	indicator:
		'bg-surface-950-50 data-[orientation=horizontal]:w-(--width) data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:bottom-0 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-(--height) data-[orientation=vertical]:end-0',
	content: ''
});
