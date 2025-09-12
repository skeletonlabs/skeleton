<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';

	export interface PopoverContentProps extends PropsWithElement, HTMLAttributes<'div'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesPopover } from '@skeletonlabs/skeleton-common';
	import { PopoverRootContext } from '../modules/root-context';

	const props: PopoverContentProps = $props();

	const rootContext = PopoverRootContext.consume();

	const { element, children, ...restAttributes } = $derived(props);

	const attributes = $derived(mergeProps(rootContext.api.getContentProps(), { class: classesPopover.content }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
