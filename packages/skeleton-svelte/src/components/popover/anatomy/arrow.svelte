<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface PopoverArrowProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	import { PopoverRootContext } from '../modules/root-context';

	const props: PopoverArrowProps = $props();

	const popover = PopoverRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(popover().getArrowProps(), rest, {
			class: classesPopover.arrow,
			style: '--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);',
		}),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
