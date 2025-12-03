<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import { splitThumbProps, type ThumbProps } from '@zag-js/slider';

	export interface SliderThumbProps extends ThumbProps, PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { ThumbContext } from '../modules/thumb-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: SliderThumbProps = $props();

	const slider = RootContext.consume();

	const [thumbProps, componentProps] = $derived(splitThumbProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(slider().getThumbProps(thumbProps), rest));

	ThumbContext.provide(() => thumbProps);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
