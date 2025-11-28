<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ListboxItemTextProps extends PropsWithElement<'span'>, HTMLAttributes<'span'> {}
</script>

<script lang="ts">
	import { ItemContext } from '../modules/item-context.js';
	import { RootContext } from '../modules/root-context.js';
	import * as classes from '@skeletonlabs/skeleton-common/classes';
	import { mergeProps } from '@zag-js/svelte';

	const props: ListboxItemTextProps = $props();

	const listbox = RootContext.consume();
	const itemProps = ItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			listbox().getItemTextProps(itemProps()),
			{
				class: classes.listbox.itemText,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
