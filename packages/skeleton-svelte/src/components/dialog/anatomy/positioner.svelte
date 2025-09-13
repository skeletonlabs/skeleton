<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface DialogPositionerProps extends PropsWithElement<'div'>, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: DialogPositionerProps = $props();

	const dialog = DialogRootContext.consume();

	const { element, children, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(dialog().getPositionerProps(), rest, {
			class: classesDialog.positioner,
			[createAttachmentKey()]: fromAction(portal, () => undefined)
		})
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
