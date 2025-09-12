<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface PopoverPositionerProps extends PropsWithElement, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: PopoverPositionerProps = $props();

	const rootContext = PopoverRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived({
		...mergeProps(rootContext.api.getPositionerProps(), { class: classesPopover.positioner }, restAttributes, {
			[createAttachmentKey()]: fromAction(portal, () => ({ disabled: !rootContext.api.portalled }))
		})
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
