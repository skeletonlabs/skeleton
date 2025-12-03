<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { useCollapsible } from '../modules/provider.svelte';

	export interface CollapsibleRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useCollapsible>;
	}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: CollapsibleRootProviderProps = $props();

	const { element, children, value: collapsible, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(collapsible().getRootProps(), rest));

	RootContext.provide(() => collapsible());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
