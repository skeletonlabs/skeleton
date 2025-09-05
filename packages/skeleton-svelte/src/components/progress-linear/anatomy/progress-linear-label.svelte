<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ProgressLinearLabelProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/progress-linear-root-context.js';

	const rootContext = ProgressLinearRootContext.consume();
	const props: ProgressLinearLabelProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getLabelProps(),
			{
				class: classesProgressLinear.label
			},
			restAttributes
		)
	);
</script>

<!-- <div {...api.getLabelProps()}>Upload progress</div> -->

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
