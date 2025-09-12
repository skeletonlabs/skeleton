<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface PopoverTriggerProps extends PropsWithElement, HTMLAttributes<'button'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/root-context';

	const props: PopoverTriggerProps = $props();

	const rootContext = PopoverRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTriggerProps(), { class: classesPopover.trigger }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<button {...attributes}>
		{@render children?.()}
	</button>
{/if}
