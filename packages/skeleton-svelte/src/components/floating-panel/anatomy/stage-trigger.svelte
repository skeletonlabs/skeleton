<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { StageTriggerProps } from '@zag-js/floating-panel';

	export interface FloatingPanelStageTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'>, StageTriggerProps {}
</script>

<script lang="ts">
	import { FloatingPanelRootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: FloatingPanelStageTriggerProps = $props();

	const floatingPanel = FloatingPanelRootContext.consume();

	const { element, children, stage, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(floatingPanel().getStageTriggerProps({ stage }), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
