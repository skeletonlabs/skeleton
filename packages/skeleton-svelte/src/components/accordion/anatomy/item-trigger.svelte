<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface AccordionItemTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { AccordionItemContext } from '../modules/item-context.js';
	import { AccordionRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionItemTriggerProps = $props();

	const accordion = AccordionRootContext.consume();
	const itemProps = AccordionItemContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(accordion().getItemTriggerProps(itemProps()), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
