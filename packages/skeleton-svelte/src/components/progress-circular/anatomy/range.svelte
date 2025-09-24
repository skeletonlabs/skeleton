<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ProgressCircularRangeProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}
</script>

<script lang="ts">
	import { ProgressCircularRootContext } from '../modules/root-context';
	import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircularRangeProps = $props();

	const progressCircular = ProgressCircularRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			progressCircular().getCircleRangeProps(),
			{
				class: classesProgressCircular.range,
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
