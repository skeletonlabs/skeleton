<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { RatingGroupRootContext } from '../modules/context.js';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import type { RatingGroupHiddenInputProps } from '../modules/types.js';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupHiddenInputProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getHiddenInputProps(),
			{
				class: classesRatingGroup.hiddenInput
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<input {...attributes} />
{/if}
