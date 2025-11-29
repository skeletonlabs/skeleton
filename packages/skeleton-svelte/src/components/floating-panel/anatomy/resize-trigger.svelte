<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { ResizeTriggerProps } from '@zag-js/floating-panel';

	export interface FloatingPanelResizeTriggerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'>, ResizeTriggerProps {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { splitResizeTriggerProps } from '@zag-js/floating-panel';
	import type { ResizeTriggerProps as ZagResizeTriggerProps } from '@zag-js/floating-panel';
	import { mergeProps } from '@zag-js/svelte';

	const props: FloatingPanelResizeTriggerProps = $props();

	const floatingPanel = RootContext.consume();

	const [resizeTriggerProps, componentProps] = $derived(splitResizeTriggerProps(props));
	const { element, children, ...rest } = $derived(componentProps);

	const attributes = $derived(mergeProps(floatingPanel().getResizeTriggerProps(resizeTriggerProps as ZagResizeTriggerProps), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
