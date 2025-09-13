<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface TooltipTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesTooltip } from '@skeletonlabs/skeleton-common';
	import { TooltipRootContext } from '../modules/root-context';

	const props: TooltipTriggerProps = $props();

	const tooltip = TooltipRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tooltip.api.getTriggerProps(), { class: classesTooltip.trigger }, rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
