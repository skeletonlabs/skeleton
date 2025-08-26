<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import * as accordion from '@zag-js/accordion';
	import { accordionClasses } from '@skeletonlabs/skeleton-common';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context.js';
	import type { AccordionItemProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const props: AccordionItemProps = $props();
	const [itemProps, componentProps] = $derived(accordion.splitItemProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemProps(itemProps),
			{
				class: accordionClasses.item
			},
			restAttributes
		)
	);
	AccordionItemContext.provide({
		get itemProps() {
			return itemProps;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
