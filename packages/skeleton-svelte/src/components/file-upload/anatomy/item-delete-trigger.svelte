<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemDeleteTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadItemContext } from '../modules/item-context';
	import { FileUploadRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemDeleteTriggerProps = $props();

	const rootContext = FileUploadRootContext.consume();
	const itemContext = FileUploadItemContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemDeleteTriggerProps(itemContext.itemProps),
			{ class: classesFileUpload.itemDeleteTrigger },
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
