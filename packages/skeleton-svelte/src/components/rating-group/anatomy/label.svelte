<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface RatingGroupLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: RatingGroupLabelProps = $props();

	const ratingGroup = RatingGroupRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			ratingGroup().getControlProps(),
			{
				class: classesRatingGroup.label,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
