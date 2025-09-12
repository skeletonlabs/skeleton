<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {
		value: () => Api;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { AccordionRootContext } from '../modules/root-context';
	import type { Api } from '@zag-js/accordion';

	const props: AccordionRootProviderProps = $props();

	const { element, children, value: accordion, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(accordion().getRootProps(), { class: classesAccordion.root }, rest));

	AccordionRootContext.provide(() => accordion());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
