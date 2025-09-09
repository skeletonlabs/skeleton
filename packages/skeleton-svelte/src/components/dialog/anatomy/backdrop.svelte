<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface DialogBackdropProps extends PropsWithElement, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: DialogBackdropProps = $props();

	const rootContext = DialogRootContext.consume();

	const { element, ...restAttributes } = $derived(props);

	const attributes = $derived({
		...mergeProps(rootContext.api.getBackdropProps(), { class: classesDialog.backdrop }, restAttributes),
		[createAttachmentKey()]: fromAction(portal, () => undefined)
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}></div>
{/if}
