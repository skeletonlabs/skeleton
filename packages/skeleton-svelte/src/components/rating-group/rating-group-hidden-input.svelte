<script lang="ts" module>
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '../../internal/props-with-element.js';

	export interface RatingGroupHiddenInputProps
		extends PropsWithElement,
			Omit<HTMLInputAttributes, 'id' | 'defaultValue' | 'dir' | 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesRatingGroup } from '@skeletonlabs/skeleton-common';
	import { RatingGroupRootContext } from './rating-group-root-context.js';

	const rootContext = RatingGroupRootContext.consume();
	const props: RatingGroupHiddenInputProps = $props();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getHiddenInputProps(),
			{
				class: classesRatingGroup.hiddenInput
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<input {...attributes} />
{/if}
