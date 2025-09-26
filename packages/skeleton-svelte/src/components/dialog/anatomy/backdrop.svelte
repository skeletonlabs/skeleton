<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface DialogBackdropProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';

	const props: DialogBackdropProps = $props();

	const dialog = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			dialog().getBackdropProps(),
			{
				class: classesDialog.backdrop,
			},
			rest,
		),
	);
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}></div>
{/if}
