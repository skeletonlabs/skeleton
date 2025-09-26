<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface FileUploadItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context';
	import { RootContext } from '../modules/root-context';
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: FileUploadItemDeleteTriggerProps = $props();

	const fileUpload = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, children = times, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			fileUpload().getItemDeleteTriggerProps(itemProps()),
			{
				class: classesFileUpload.itemDeleteTrigger,
			},
			rest,
		),
	);
</script>

{#snippet times()}
	&times;
{/snippet}

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
