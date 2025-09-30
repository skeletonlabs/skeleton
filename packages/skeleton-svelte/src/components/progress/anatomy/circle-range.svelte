<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ProgressCircleRangeProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesProgress } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircleRangeProps = $props();

	const progress = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			progress().getCircleRangeProps(),
			{
				class: classesProgress.circleRange,
				'stroke-linecap': 'round',
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<circle {...attributes} />
{/if}
