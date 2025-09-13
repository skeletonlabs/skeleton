<script lang="ts" module>
	import type { Api } from '@zag-js/rating-group';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: () => Api;
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
