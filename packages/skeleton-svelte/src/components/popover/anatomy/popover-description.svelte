<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface PopoverDescriptionProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/popover-root-context';

	const rootContext = PopoverRootContext.consume();
	const props: PopoverDescriptionProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getDescriptionProps(), { class: classesPopover.description }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
