<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface DialogCloseTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/root-context';
	import X from '@/internal/components/x.svelte';

	const props: DialogCloseTriggerProps = $props();

	const rootContext = DialogRootContext.consume();

	const { element, children = x, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getCloseTriggerProps(), { class: classesDialog.closeTrigger }, restAttributes));
</script>

{#snippet x()}
	<X />
{/snippet}

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
