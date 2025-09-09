<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface PopoverTitleProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/popover-root-context';

	const props: PopoverTitleProps = $props();

	const rootContext = PopoverRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getTitleProps(), { class: classesPopover.title }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
