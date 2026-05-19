<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ContentProps } from '@zag-js/marquee';

	export interface MarqueeContentProps extends ContentProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: MarqueeContentProps = $props();

	const marquee = RootContext.consume();

	const { element, children, index, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(marquee().getContentProps({ index }), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
