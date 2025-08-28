<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import type { AccordionHeadingProps } from '../modules/types.js';

	const props: AccordionHeadingProps = $props();
	const { level = 3, element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			{
				class: classesAccordion.heading
			},
			restAttributes
		)
	);
	const tag = $derived(`h${level}`);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<svelte:element this={tag} {...attributes}>
		{@render children?.()}
	</svelte:element>
{/if}
