<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import { splitThumbProps, type ThumbProps } from '@zag-js/slider';

	export interface SliderThumbProps extends ThumbProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { SliderRootContext } from '../modules/root-context';
	import { SliderThumbContext } from '../modules/thumb-context';
	import { classesSlider } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderThumbProps = $props();

	const slider = SliderRootContext.consume();

	const [thumbProps, componentProps] = $derived(splitThumbProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(
		mergeProps(slider().getThumbProps(thumbProps), rest, {
			class: classesSlider.thumb,
		}),
	);

	SliderThumbContext.provide(() => thumbProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
