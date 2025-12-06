<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useCarousel } from '../modules/provider.svelte';

	export interface CarouselRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useCarousel>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: CarouselRootProviderProps = $props();
	const { element, children, value: carousel, ...rest } = $derived(props);

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
