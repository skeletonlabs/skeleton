<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { AccordionItemContext } from '../modules/item-context';
	import { AccordionRootContext } from '../modules/root-context';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionIndicatorProps = $props();

	const accordion = AccordionRootContext.consume();
	const itemProps = AccordionItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(accordion().getItemIndicatorProps(itemProps()), rest, { class: classesAccordion.indicator }));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
