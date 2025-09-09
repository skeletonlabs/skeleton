<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';

	export interface TabsListProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/root-context';
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';

	const props: TabsListProps = $props();
	const rootContext = TabsRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getListProps(), { class: classesTabs.list }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
