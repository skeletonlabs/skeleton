<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '../../internal/props-with-element.js';

	export interface AccordionTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionItemContext } from './accordion-item-context.js';
	import { AccordionRootContext } from './accordion-root-context.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionTriggerProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemTriggerProps(itemContext.itemProps),
			{
				class: classesAccordion.trigger
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
