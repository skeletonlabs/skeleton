<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { ItemProps } from '@zag-js/rating-group';

	export interface RatingGroupItemProps
		extends PropsWithElement,
			ItemProps,
			Omit<HTMLAttributes<HTMLSpanElement>, 'id' | 'defaultValue' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { splitItemProps } from '@zag-js/rating-group';
	import { RatingGroupRootContext } from '../modules/rating-group-root-context.js';
	import { RatingGroupItemContext } from '../modules/rating-group-item-context.js';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupItemProps = $props();
	const [itemProps, componentProps] = $derived(splitItemProps(props));
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
	RatingGroupItemContext.provide({
		get itemState() {
			return rootContext.api.getItemState(itemProps);
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>{@render children?.()}</div>
{/if}
