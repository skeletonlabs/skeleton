<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/file-upload';

	export interface FileUploadItemProps extends PropsWithElement, ItemProps, HTMLAttributes<HTMLLIElement> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/file-upload-root-context';
	import { FileUploadItemContext } from '../modules/file-upload-item-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemProps = $props();
	const rootContext = FileUploadRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getItemProps(props), { class: classesFileUpload.item }, restAttributes));
	FileUploadItemContext.provide({ itemProps: props });
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<li {...attributes}>
		{@render children?.()}
	</li>
{/if}
