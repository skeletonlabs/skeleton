<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { IndicatorProps } from '@zag-js/carousel';

	export interface CarouselIndicatorProps extends IndicatorProps, PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { splitIndicatorProps } from '@zag-js/carousel';
	import { mergeProps } from '@zag-js/svelte';

	const props: CarouselIndicatorProps = $props();

	const carousel = RootContext.consume();

	const [indicatorProps, componentProps] = $derived(splitIndicatorProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(carousel().getIndicatorProps(indicatorProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
