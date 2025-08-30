<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import { TreeViewRootContext } from '../modules/context.js';
	import type { TreeViewRootProps } from '../modules/types.js';
	import { classesTreeview } from '@skeletonlabs/skeleton-common';

	const props: TreeViewRootProps = $props();
	const [machineProps, componentProps] = $derived(tree.splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(tree.machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(tree.connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: classesTreeview.root
			},
			restAttributes
		)
	);

	TreeViewRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
