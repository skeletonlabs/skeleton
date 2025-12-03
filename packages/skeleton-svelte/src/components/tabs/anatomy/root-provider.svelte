<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useTabs } from '../modules/provider.svelte';

	export interface TabsRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTabs>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TabsRootProviderProps = $props();
	const { element, children, value: tabs, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(tabs().getRootProps(), rest));

	RootContext.provide(() => tabs());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
