<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { RatingGroupRootContext } from '../modules/context.js';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import type { RatingGroupItemProps } from '../modules/types.js';
	import * as ratingGroup from '@zag-js/rating-group';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupItemProps = $props();
	const [itemProps, componentProps] = $derived(ratingGroup.splitItemProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemProps(itemProps),
			{
				class: classesRatingGroup.item
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>{children}</div>
{/if}
