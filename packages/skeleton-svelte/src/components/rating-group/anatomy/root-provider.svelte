<script lang="ts" module>
	import type { useRatingGroup } from '../modules/provider.svelte';
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface RatingGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useRatingGroup>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
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

	RootContext.provide(() => ratingGroup());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
