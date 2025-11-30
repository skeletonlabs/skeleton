<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { MarkerProps } from '@zag-js/slider';

	export interface SliderMarkerProps extends MarkerProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderMarkerProps = $props();

	const slider = RootContext.consume();

	const { element, children, value, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(slider().getMarkerProps({ value }), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</div>
{/if}
