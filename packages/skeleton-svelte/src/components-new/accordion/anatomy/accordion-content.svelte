<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context.js';
	import type { AccordionContentProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionContentProps = $props();
	const { children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemContentProps(itemContext.itemProps),
			{
				class: 'base:py-2 base:px-4'
			},
			restAttributes
		)
	);
</script>

<div {...attributes}>
	{@render children?.()}
</div>
