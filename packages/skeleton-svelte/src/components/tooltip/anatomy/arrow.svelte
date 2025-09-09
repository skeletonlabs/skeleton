<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TooltipArrowProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesTooltip } from '@skeletonlabs/skeleton-common';
	import { TooltipRootContext } from '../modules/root-context';

	const props: TooltipArrowProps = $props();

	const rootContext = TooltipRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(
			rootContext.api.getArrowProps(),
			{
				style: '--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);',
				class: classesTooltip.arrow
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
