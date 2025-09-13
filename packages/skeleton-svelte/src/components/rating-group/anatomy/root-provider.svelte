<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { useRatingGroup } from '../modules/use-rating-group.svelte';

	export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useRatingGroup>;
	}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupRootProviderProps = $props();

	const { element, children, value: ratingGroup, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(ratingGroup().getRootProps(), rest, {
			class: classesRatingGroup.root
		})
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
