<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context.js';
	import type { AccordionTriggerProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionTriggerProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemTriggerProps(itemContext.itemProps),
			{
				class:
					'skb:w-full skb:grid skb:items-center skb:gap-4 skb:py-2 skb:px-4 skb:rounded-base skb:text-left skb:hover:preset-tonal-primary'
			},
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
