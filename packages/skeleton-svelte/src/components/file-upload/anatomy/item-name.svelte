<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemNameProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadItemContext } from '../modules/item-context';
	import { FileUploadRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemNameProps = $props();

	const rootContext = FileUploadRootContext.consume();
	const itemContext = FileUploadItemContext.consume();

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
