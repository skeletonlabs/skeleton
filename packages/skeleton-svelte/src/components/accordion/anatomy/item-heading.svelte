<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface AccordionItemHeadingProps extends PropsWithElement<'h3'>, HTMLAttributes<'h3'> {
		/**
		 * The level of the heading.
		 *
		 * @default 3
		 */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}
</script>

<script lang="ts">
	import { classesAccordion } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: AccordionItemHeadingProps = $props();
	const { level = 3, element, children, ...rest } = $derived(props);

	const tag = $derived(`h${level}`);

	const attributes = $derived(
		mergeProps(
			{
				class: classesAccordion.heading,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<svelte:element this={tag} {...attributes}>
		{@render children?.()}
	</svelte:element>
{/if}
