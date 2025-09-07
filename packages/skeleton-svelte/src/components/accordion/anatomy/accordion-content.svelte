<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionContentProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/accordion-root-context';
	import { AccordionItemContext } from '../modules/accordion-item-context';

	const props: AccordionContentProps = $props();
	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(rootContext.api.getItemContentProps(itemContext.itemProps), { class: classesAccordion.content }, restAttributes)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
