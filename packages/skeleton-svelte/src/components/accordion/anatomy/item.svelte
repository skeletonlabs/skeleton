<script lang="ts" module>
	import type { ItemProps } from '@zag-js/accordion';

	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionItemProps extends ItemProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { splitItemProps } from '@zag-js/accordion';
	import { mergeProps } from '@zag-js/svelte';

	import { AccordionItemContext } from '../modules/item-context';
	import { AccordionRootContext } from '../modules/root-context';

	const props: AccordionItemProps = $props();

	const accordion = AccordionRootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(accordion().getItemProps(itemProps), rest, {
			class: classesAccordion.item,
		}),
	);

	AccordionItemContext.provide(() => itemProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
