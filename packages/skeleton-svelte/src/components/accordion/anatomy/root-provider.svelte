<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	import type { useAccordion } from '../modules/use-accordion.svelte';

	export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useAccordion>;
	}
</script>

<script lang="ts">
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { AccordionRootContext } from '../modules/root-context';

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
