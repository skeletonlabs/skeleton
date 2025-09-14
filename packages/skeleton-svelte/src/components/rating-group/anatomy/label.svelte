<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface RatingGroupLabelProps extends PropsWithElement<'label'>, HTMLAttributes<'label', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from '../modules/root-context';

	const props: RatingGroupLabelProps = $props();

	const ratingGroup = RatingGroupRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(ratingGroup().getControlProps(), rest, {
			class: classesRatingGroup.label,
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<label {...attributes}>
		{@render children?.()}
	</label>
{/if}
