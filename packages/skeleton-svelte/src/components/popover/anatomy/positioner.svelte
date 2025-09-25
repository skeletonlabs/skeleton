<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface PopoverPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { PopoverRootContext } from '../modules/root-context';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { mergeProps, portal } from '@zag-js/svelte';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: PopoverPositionerProps = $props();

	const popover = PopoverRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			popover().getPositionerProps(),
			{
				class: classesPopover.positioner,
				[createAttachmentKey()]: fromAction(portal, () => ({ disabled: !popover().portalled })),
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
