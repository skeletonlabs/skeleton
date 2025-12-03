<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface TreeViewRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
		value: ReturnType<typeof useTreeView>;
	}
</script>

<script lang="ts">
	import { useTreeView } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: TreeViewRootProviderProps = $props();

	const { element, children, value: treeView, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(treeView().getRootProps(), rest));

	RootContext.provide(() => treeView());
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
