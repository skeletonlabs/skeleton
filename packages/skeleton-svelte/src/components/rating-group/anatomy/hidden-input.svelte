<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface RatingGroupHiddenInputProps extends PropsWithElement<'input'>, HTMLAttributes<'input'> {}
</script>

<script lang="ts">
	import { RatingGroupRootContext } from '../modules/root-context';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: RatingGroupHiddenInputProps = $props();

	const ratingGroup = RatingGroupRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			ratingGroup().getHiddenInputProps(),
			{
				class: classesRatingGroup.hiddenInput,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<input {...attributes} />
{/if}
