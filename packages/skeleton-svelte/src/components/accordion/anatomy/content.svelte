<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionContentProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { AccordionItemContext } from '../modules/item-context';
	import { AccordionRootContext } from '../modules/root-context';

	const props: AccordionContentProps = $props();

	const accordion = AccordionRootContext.consume();
	const itemProps = AccordionItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(accordion().getItemContentProps(itemProps()), rest, {
			class: classesAccordion.content,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
