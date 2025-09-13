<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from '@/internal/html-attributes';
	import type { Api } from '@zag-js/tabs';

	export interface TabsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: () => Api;
	}
</script>

<script lang="ts">
	import { classesTabs } from '@skeletonlabs/skeleton-common';
	import { mergeProps } from '@zag-js/svelte';
	import { TabsRootContext } from '../modules/root-context';

	const props: TabsRootProviderProps = $props();
	const { element, children, value: tabs, ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(tabs().getRootProps(), rest, {
			class: classesTabs.root
		})
	);

	TabsRootContext.provide(() => tabs());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
