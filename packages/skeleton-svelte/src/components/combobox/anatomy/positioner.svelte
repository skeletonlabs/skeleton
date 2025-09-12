<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface ComboboxPositionerProps extends PropsWithElement, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps, portal } from '@zag-js/svelte';
	import { classesCombobox } from '@skeletonlabs/skeleton-common';
	import { ComboboxRootContext } from '../modules/root-context';
	import { createAttachmentKey, fromAction } from 'svelte/attachments';

	const props: ComboboxPositionerProps = $props();

	const rootContext = ComboboxRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived({
		...mergeProps(rootContext.api.getPositionerProps(), { class: classesCombobox.positioner }, restAttributes),
		[createAttachmentKey()]: fromAction(portal, () => undefined)
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
