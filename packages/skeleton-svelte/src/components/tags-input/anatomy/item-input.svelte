<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TagsInputItemInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input', 'children'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import * as classes from '@skeletonlabs/skeleton-common/classes';
	import { mergeProps } from '@zag-js/svelte';

	const props: TagsInputItemInputProps = $props();

	const tagsInput = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tagsInput().getItemInputProps(itemProps()),
			{
				class: classes.tagsInput.itemInput,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
