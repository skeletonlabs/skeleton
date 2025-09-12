<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface DialogPositionerProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: DialogPositionerProps = $props();

	const rootContext = DialogRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(
		mergeProps(rootContext.api.getPositionerProps(), { class: classesDialog.positioner }, restAttributes, {
			[createAttachmentKey()]: fromAction(portal, () => undefined)
		})
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
