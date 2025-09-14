<script lang="ts" module>
	import { type ItemProps, splitItemProps } from '@zag-js/file-upload';

	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemProps extends ItemProps, PropsWithElement<'li'>, HTMLAttributes<'li'> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { FileUploadItemContext } from '../modules/item-context';
	import { FileUploadRootContext } from '../modules/root-context';

	const props: FileUploadItemProps = $props();

	const fileUpload = FileUploadRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(fileUpload().getItemProps(itemProps), rest, {
			class: classesFileUpload.item,
		}),
	);

	FileUploadItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<li {...attributes}>
		{@render children?.()}
	</li>
{/if}
