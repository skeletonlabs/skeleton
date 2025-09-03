<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element.js';

	export interface TabsIndicatorProps extends PropsWithElement, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {}
</script>

<script lang="ts">
	import { TabsRootContext } from '../modules/tabs-root-context.js';
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';

	const props: TabsIndicatorProps = $props();
	const rootContext = TabsRootContext.consume();
	const { element, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getIndicatorProps(),
			{
				class: classesTabs.indicator
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}></div>
{/if}
