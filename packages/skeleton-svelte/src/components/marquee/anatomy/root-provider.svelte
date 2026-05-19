<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useMarquee } from '../modules/provider.svelte.js';

	export interface MarqueeRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useMarquee>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: MarqueeRootProviderProps = $props();

	const { element, children, value: marquee, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(marquee().getRootProps(), rest));

	RootContext.provide(() => marquee());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
