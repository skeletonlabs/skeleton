import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesFileUpload = defineSkeletonClasses({
	root: 'flex flex-col gap-2 w-full data-disabled:disabled',
	label: 'label-text',
	dropzone: [
		'card px-4 py-10 border border-dashed border-surface-200-800 flex flex-col justify-center items-center gap-2 data-dragging:preset-tonal',
	],
	hiddenInput: '',
	trigger: 'btn preset-filled',
	itemGroup: 'flex flex-col gap-2',
	item: 'grid grid-cols-[auto_1fr_auto] gap-4 items-center preset-tonal px-4 py-2 rounded',
	itemName: 'text-sm',
	itemSizeText: 'text-xs opacity-60',
	itemDeleteTrigger: 'btn-icon',
});
