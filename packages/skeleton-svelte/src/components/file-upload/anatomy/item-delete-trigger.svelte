<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadItemContext } from '../modules/item-context';
	import { FileUploadRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemDeleteTriggerProps = $props();

	const fileUpload = FileUploadRootContext.consume();
	const itemProps = FileUploadItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(fileUpload().getItemDeleteTriggerProps(itemProps()), rest, {
			class: classesFileUpload.itemDeleteTrigger
		})
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
