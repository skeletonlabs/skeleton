<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TagsInputItemDeleteTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context';
	import { RootContext } from '../modules/root-context';
	import { classesTagsInput } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputItemDeleteTriggerProps = $props();

	const tagsInput = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, children = times, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tagsInput().getItemDeleteTriggerProps(itemProps()),
			{
				class: classesTagsInput.itemDeleteTrigger,
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
		{@render children()}
	</button>
{/if}
