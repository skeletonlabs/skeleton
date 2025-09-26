<script lang="ts" module>
	import type { useAccordion } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useAccordion>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionRootProviderProps = $props();

	const { element, children, value: accordion, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			accordion().getRootProps(),
			{
				class: classesAccordion.root,
			},
			rest,
		),
	);

	RootContext.provide(() => accordion());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
