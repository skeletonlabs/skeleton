<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ProgressLinearRangeProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesProgressLinear } from '@skeletonlabs/skeleton-common';
	import { ProgressLinearRootContext } from '../modules/root-context';

	const props: ProgressLinearRangeProps = $props();

	const rootContext = ProgressLinearRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getRangeProps(),
			{
				class: classesProgressLinear.range
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
