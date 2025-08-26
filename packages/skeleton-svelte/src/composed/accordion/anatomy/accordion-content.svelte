<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context.js';
	import { accordionClasses } from '@skeletonlabs/skeleton-common';
	import type { AccordionContentProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionContentProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemContentProps(itemContext.itemProps),
			{
				class: accordionClasses.content
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
