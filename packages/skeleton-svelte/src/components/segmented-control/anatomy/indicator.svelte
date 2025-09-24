<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SegmentedControlIndicatorProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}
</script>

<script lang="ts">
	import { SegmentedControlRootContext } from '../modules/root-context';
	import { classesSegmentedControl } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SegmentedControlIndicatorProps = $props();

	const segmentedControl = SegmentedControlRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			segmentedControl().getIndicatorProps(),
			{
				class: classesSegmentedControl.indicator,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}></div>
{/if}
