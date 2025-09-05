<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface FileUploadItemNameProps extends PropsWithElement, HTMLAttributes<HTMLSpanElement> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadItemContext } from '../modules/file-upload-item-context.js';
	import { FileUploadRootContext } from '../modules/file-upload-root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemNameProps = $props();
	const itemContext = FileUploadItemContext.consume();
	const rootContext = FileUploadRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(rootContext.api.getItemNameProps(itemContext.itemProps), { class: classesFileUpload.itemName }, restAttributes)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
