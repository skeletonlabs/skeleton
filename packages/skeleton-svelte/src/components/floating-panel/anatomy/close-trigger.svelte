<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface FloatingPanelCloseTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { classesFloatingPanel } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: FloatingPanelCloseTriggerProps = $props();

	const floatingPanel = RootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			floatingPanel().getCloseTriggerProps(),
			{
				class: classesFloatingPanel.closeTrigger,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
