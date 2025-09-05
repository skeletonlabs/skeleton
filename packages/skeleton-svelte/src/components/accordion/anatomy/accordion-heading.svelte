<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionHeadingProps extends PropsWithElement, HTMLAttributes<HTMLHeadingElement> {
		/**
		 * The level of the heading. This is used to determine the heading level for accessibility purposes.
		 *
		 * @default 3
		 */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesAccordion } from '@skeletonlabs/skeleton-common';

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
