<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/carousel';

	export interface CarouselRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useCarousel } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/carousel';
	import { mergeProps } from '@zag-js/svelte';

	const props: CarouselRootProps = $props();
	const [carouselProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const id = $props.id();
	const carousel = useCarousel(() => ({
		...carouselProps,
		slideCount: props.slideCount,
		id: id,
	}));

	const attributes = $derived(mergeProps(carousel().getRootProps(), rest));

	RootContext.provide(() => carousel());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
