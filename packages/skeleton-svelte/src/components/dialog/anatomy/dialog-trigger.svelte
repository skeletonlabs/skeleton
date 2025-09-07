<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface DialogTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/dialog-root-context';

	const props: DialogTriggerProps = $props();
	const rootContext = DialogRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(), { class: classesDialog.trigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
