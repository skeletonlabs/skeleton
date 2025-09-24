<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/rating-group';

	export interface RatingGroupRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';
	import { useRatingGroup } from '../modules/use-rating-group.svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/rating-group';
	import { mergeProps } from '@zag-js/svelte';

	const props: RatingGroupRootProps = $props();

	const [ratingGroupProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const ratingGroup = useRatingGroup(() => ({
		id: id,
		...ratingGroupProps,
	}));

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
