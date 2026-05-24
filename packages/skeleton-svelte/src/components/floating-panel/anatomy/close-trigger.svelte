<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface FloatingPanelCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { FloatingPanelRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FloatingPanelCloseTriggerProps = $props();

	const floatingPanel = FloatingPanelRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(floatingPanel().getCloseTriggerProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
