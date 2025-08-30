<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { RatingGroupRootContext } from '../modules/context.js';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import type { RatingGroupLabelProps } from '../modules/types.js';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupLabelProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getControlProps(),
			{
				class: classesRatingGroup.label
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<label {...attributes}>{children}</label>
{/if}
