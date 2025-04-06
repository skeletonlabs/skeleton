<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context.js';
	import type { AccordionTriggerProps } from '../modules/types.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionTriggerProps = $props();
	const { children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemTriggerProps(itemContext.itemProps),
			{
				class:
					'base:w-full base:text-start base:hover:preset-tonal-primary base:py-2 base:px-4 base:rounded-base base:flex base:justify-between base:items-center'
			},
			restAttributes
		)
	);
</script>

<button {...attributes}>
	{@render children?.()}
</button>
