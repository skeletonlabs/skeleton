<script lang="ts" module>
	import type { useRatingGroup } from '../modules/use-rating-group.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useRatingGroup>;
	}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: RatingGroupRootProviderProps = $props();

	const { element, children, value: ratingGroup, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			ratingGroup().getRootProps(),
			{
				class: classesRatingGroup.root,
			},
			rest,
		),
	);

	RatingGroupRootContext.provide(() => ratingGroup());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
