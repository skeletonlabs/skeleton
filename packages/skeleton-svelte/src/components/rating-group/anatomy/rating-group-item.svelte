<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { ItemProps } from '@zag-js/rating-group';

	export interface RatingGroupItemProps
		extends PropsWithElement,
			ItemProps,
			Omit<HTMLAttributes<HTMLSpanElement>, 'id' | 'defaultValue' | 'dir'> {
		/**
		 * The content to render when the item is in the empty state.
		 *
		 * @default StarEmpty (SVG)
		 */
		empty?: Snippet;
		/**
		 * The content to render when the item is in the half state.
		 *
		 * @default StarHalf (SVG)
		 */
		half?: Snippet;
		/**
		 * The content to render when the item is in the full state.
		 *
		 * @default StarFull (SVG)
		 */
		full?: Snippet;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { splitItemProps } from '@zag-js/rating-group';
	import { RatingGroupRootContext } from '../modules/rating-group-root-context';
	import { RatingGroupItemContext } from '../modules/rating-group-item-context';
	import StarFull from '@/internal/components/star-full.svelte';
	import StarEmpty from '@/internal/components/star-empty.svelte';
	import StarHalf from '@/internal/components/star-half.svelte';
	import type { Snippet } from 'svelte';

	const props: RatingGroupItemProps = $props();
	const rootContext = RatingGroupRootContext.consume();
	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, empty = starEmpty, half = starHalf, full = starFull, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(mergeProps(rootContext.api.getItemProps(itemProps), { class: classesRatingGroup.item }, restAttributes));
	const itemState = $derived(rootContext.api.getItemState(itemProps));
	RatingGroupItemContext.provide({
		get itemState() {
			return itemState;
		}
	});
</script>

{#snippet starEmpty()}
	<StarEmpty />
{/snippet}

{#snippet starHalf()}
	<StarHalf />
{/snippet}

{#snippet starFull()}
	<StarFull />
{/snippet}

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{#if children}
			{@render children()}
		{:else if !itemState.highlighted}
			{@render empty?.()}
		{:else if itemState.half}
			{@render half?.()}
		{:else}
			{@render full?.()}
		{/if}
	</div>
{/if}
