import { defineSkeletonClasses } from '../internal/define-skeleton-classes' with { type: 'macro' };

export const classesFileUpload = defineSkeletonClasses({
	root: ['flex flex-col gap-2', 'data-disabled:disabled'],
	dropzone: [
		'px-4 py-10 rounded border-1 border-dashed border-surface-200-800 flex justify-center items-center',
		'data-dragging:preset-tonal'
	],
	hiddenInput: '',
	trigger: 'btn preset-filled',
	itemGroup: 'flex flex-col gap-2',
	item: 'grid grid-cols-[auto_1fr_auto] rtl:grid-cols-[1fr_auto_auto] gap-4 items-center preset-tonal px-4 py-2 rounded',
	itemName: '',
	itemSizeText: '',
	itemDeleteTrigger: ''
});
