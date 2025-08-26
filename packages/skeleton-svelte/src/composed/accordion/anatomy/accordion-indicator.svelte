<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { accordionClasses } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext, AccordionItemContext } from '../modules/context.js';
	import type { AccordionIndicatorProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionIndicatorProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemIndicatorProps(itemContext.itemProps),
			{
				class: accordionClasses.indicator
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
