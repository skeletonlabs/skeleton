<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/accordion';

	export interface AccordionItemProps extends PropsWithElement, ItemProps, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/accordion';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionItemContext } from '../modules/accordion-item-context.js';
	import { AccordionRootContext } from '../modules/accordion-root-context.js';

	const rootContext = AccordionRootContext.consume();
	const props: AccordionItemProps = $props();
	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemProps(itemProps),
			{
				class: classesAccordion.item
			},
			restAttributes
		)
	);
	AccordionItemContext.provide({
		get itemProps() {
			return itemProps;
		},
		get itemState() {
			return rootContext.api.getItemState(itemProps);
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
