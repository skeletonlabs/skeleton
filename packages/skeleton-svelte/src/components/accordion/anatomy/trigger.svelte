<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/root-context';
	import { AccordionItemContext } from '../modules/item-context';

	const props: AccordionTriggerProps = $props();

	const accordion = AccordionRootContext.consume();
	const itemProps = AccordionItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(accordion().getItemTriggerProps(itemProps()), rest, {
			class: classesAccordion.trigger
		})
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
