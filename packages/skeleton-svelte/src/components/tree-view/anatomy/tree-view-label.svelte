<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface TreeViewLabelProps extends PropsWithElement, HTMLAttributes<HTMLSpanElement> {
		/**
		 * The level of the label. This is used to determine the heading level for accessibility purposes.
		 *
		 * @defaultValue 3
		 */
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { TreeViewRootContext } from '../modules/tree-view-root-context.js';
	import { classesTreeview, headings } from '@skeletonlabs/skeleton-common';

	const props: TreeViewLabelProps = $props();
	const rootContext = TreeViewRootContext.consume();
	const { level = 3, element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getLabelProps(),
			{
				class: classesTreeview.label
			},
			{
				class: headings[level]
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
