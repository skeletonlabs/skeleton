<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export interface PopoverCloseTriggerProps extends PropsWithElement, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/popover-root-context';

	const props: PopoverCloseTriggerProps = $props();

	const rootContext = PopoverRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getCloseTriggerProps(), { class: classesPopover.closeTrigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
