<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/accordion';

	export interface AccordionRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useAccordion } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/accordion';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionRootProps = $props();

	const [accordionProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const accordion = useAccordion(() => ({
		...accordionProps,
		id: id,
	}));

	const attributes = $derived(mergeProps(accordion().getRootProps(), rest));

	RootContext.provide(() => accordion());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
