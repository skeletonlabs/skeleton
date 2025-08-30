<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { RatingGroupRootContext } from '../modules/context.js';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import type { RatingGroupControlProps } from '../modules/types.js';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupControlProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getControlProps(),
			{
				class: classesRatingGroup.control
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
