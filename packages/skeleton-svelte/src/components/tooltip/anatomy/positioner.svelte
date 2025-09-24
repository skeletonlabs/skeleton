<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TooltipPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { TooltipRootContext } from '../modules/root-context';
	import { classesTooltip } from '@skeletonlabs/skeleton-common';
	import { mergeProps, portal } from '@zag-js/svelte';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: TooltipPositionerProps = $props();

	const tooltip = TooltipRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			tooltip().getPositionerProps(),
			{
				class: classesTooltip.positioner,
				[createAttachmentKey()]: fromAction(portal, () => undefined),
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
