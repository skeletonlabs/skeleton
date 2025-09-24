<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface ProgressCircularCircleProps extends PropsWithElement<'svg'>, HTMLAttributes<'svg'> {}
</script>

<script lang="ts">
	import { ProgressCircularRootContext } from '../modules/root-context';
	import { classesProgressCircular } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircularCircleProps = $props();

	const progressCircular = ProgressCircularRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			progressCircular().getCircleProps(),
			{
				class: classesProgressCircular.circle,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<svg {...attributes}>
		{@render children?.()}
	</svg>
{/if}
