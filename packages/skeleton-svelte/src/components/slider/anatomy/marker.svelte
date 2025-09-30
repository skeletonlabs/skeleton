<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import { splitMarkerProps, type MarkerProps } from '@zag-js/slider';

	export interface SliderMarkerProps extends MarkerProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderMarkerProps = $props();

	const slider = RootContext.consume();

	const [markerProps, componentProps] = $derived(splitMarkerProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(
			slider().getMarkerProps(markerProps),
			{
				class: classesSlider.marker,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{#if children}
			{@render children()}
		{:else}
			{markerProps.value}
		{/if}
	</div>
{/if}
