<script lang="ts" module>
	import type { Props } from '@zag-js/rating-group';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface RatingGroupRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { splitProps } from '@zag-js/rating-group';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/root-context';
	import { useRatingGroup } from '../modules/use-rating-group.svelte';

	const props: RatingGroupRootProps = $props();

	const [ratingGroupProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const ratingGroup = useRatingGroup(() => ({
		id: id,
		...ratingGroupProps,
	}));

	const attributes = $derived(
		mergeProps(ratingGroup().getRootProps(), rest, {
			class: classesRatingGroup.root,
		}),
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
