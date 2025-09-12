<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/accordion';

	export interface AccordionItemProps extends PropsWithElement, ItemProps, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { splitItemProps } from '@zag-js/accordion';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/root-context';
	import { AccordionItemContext } from '../modules/item-context';

	const props: AccordionItemProps = $props();

	const accordion = AccordionRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(accordion().getItemProps(itemProps), { class: classesAccordion.item }, rest));

	AccordionItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
