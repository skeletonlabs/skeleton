<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/rating-group';

	export interface RatingGroupItemProps extends ItemProps, PropsWithElement<'span'>, HTMLAttributes<'span', 'id' | 'dir'> {
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
	import StarEmpty from '../../../internal/components/star-empty.svelte';
	import StarFull from '../../../internal/components/star-full.svelte';
	import StarHalf from '../../../internal/components/star-half.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitItemProps } from '@zag-js/rating-group';
	import { mergeProps } from '@zag-js/svelte';
	import type { Snippet } from 'svelte';

	const props: RatingGroupItemProps = $props();

	const ratingGroup = RootContext.consume();

	const [itemProps, componentProps] = $derived(splitItemProps(props));
	const { element, children, empty = starEmpty, half = starHalf, full = starFull, ...rest } = $derived(componentProps);

	const itemState = $derived(ratingGroup().getItemState(itemProps));

	const attributes = $derived(mergeProps(ratingGroup().getItemProps(itemProps), rest));
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
	{@render element(attributes)}
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
