<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface AccordionIndicatorProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/accordion-root-context.js';
	import { AccordionItemContext } from '../modules/accordion-item-context.js';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionIndicatorProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemIndicatorProps(itemContext.itemProps),
			{
				class: classesAccordion.indicator
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
