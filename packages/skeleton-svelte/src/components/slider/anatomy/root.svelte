<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/slider';

	export interface SliderRootProps
		extends Omit<Props, 'id'>,
			PropsWithElement<'div'>,
			HTMLAttributes<'div', 'id' | 'dir' | 'aria-label' | 'aria-labelledby'> {}
</script>

<script lang="ts">
	import { useSlider } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { splitProps } from '@zag-js/slider';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderRootProps = $props();

	const [sliderProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const slider = useSlider(() => ({
		id: id,
		...sliderProps,
	}));

	const attributes = $derived(
		mergeProps(
			slider().getRootProps(),
			{
				class: classesSlider.root,
			},
			rest,
		),
	);

	RootContext.provide(() => slider());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
