<script lang="ts" module>
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TabsLabelProps extends PropsWithElement, HTMLLabelAttributes {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesTabs } from '@skeletonlabs/skeleton-common';

	const props: TabsLabelProps = $props();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(
			{
				class: classesTabs.label
			},
			restAttributes
		)
	);
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<span {...attributes}>
		{@render children?.()}
	</span>
{/if}
