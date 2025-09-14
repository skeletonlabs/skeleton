<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemNameProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { FileUploadItemContext } from '../modules/item-context';
	import { FileUploadRootContext } from '../modules/root-context';

	const props: FileUploadItemNameProps = $props();

	const fileUpload = FileUploadRootContext.consume();
	const itemProps = FileUploadItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(fileUpload().getItemNameProps(itemProps()), rest, {
			class: classesFileUpload.itemName,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
