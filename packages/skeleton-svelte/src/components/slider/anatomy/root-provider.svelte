<script lang="ts" module>
	import type { useSlider } from '../modules/use-slider.svelte';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface SliderRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useSlider>;
	}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderRootProviderProps = $props();

	const { element, children, value: slider, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			slider().getRootProps(),
			{
				class: classesSlider.root,
			},
			rest,
		),
	);

	SliderRootContext.provide(() => slider());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
