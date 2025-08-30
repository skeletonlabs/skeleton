<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import * as ratingGroup from '@zag-js/rating-group';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/context.js';
	import type { RatingGroupRootProps } from '../modules/types.js';

	const props: RatingGroupRootProps = $props();
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const [machineProps, componentProps] = $derived(ratingGroup.splitProps(props));
	// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(ratingGroup.machine, () => ({
		// @ts-expect-error - https://github.com/chakra-ui/zag/issues/2672
		id: id,
		...machineProps
	}));
	const api = $derived(ratingGroup.connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesRatingGroup.root
			},
			restAttributes
		)
	);
	RatingGroupRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
