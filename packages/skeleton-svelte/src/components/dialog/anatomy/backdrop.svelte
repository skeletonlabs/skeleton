<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface DialogBackdropProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: DialogBackdropProps = $props();

	const dialog = DialogRootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(dialog().getBackdropProps(), rest, {
			class: classesDialog.backdrop,
			[createAttachmentKey()]: fromAction(portal, () => undefined)
		})
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}></div>
{/if}
