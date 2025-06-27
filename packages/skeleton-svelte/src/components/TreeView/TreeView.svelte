<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { TreeViewProps, Node } from './types.js';
	import { setTreeViewContext } from './context.js';
	import TreeNode from './TreeNode.svelte';

	const { prop = 'test', collection: TreeCollection, ...zagProps }: TreeViewProps = $props();

	const collection = tree.collection<Node>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		rootNode: {
			id: 'ROOT',
			name: '',
			children: [
				{
					id: 'node_modules',
					name: 'node_modules',
					children: [
						{ id: 'node_modules/zag-js', name: 'zag-js' },
						{ id: 'node_modules/pandacss', name: 'panda' },
						{
							id: 'node_modules/@types',
							name: '@types',
							children: [
								{ id: 'node_modules/@types/react', name: 'react' },
								{ id: 'node_modules/@types/react-dom', name: 'react-dom' }
							]
						}
					]
				}
			]
		}
	});

	// Zag
	const id = $props.id();
	const service = useMachine(tree.machine, () => ({ id: id, collection: collection, ...zagProps }));
	const api = $derived(tree.connect(service, normalizeProps));

	// Context
	setTreeViewContext({
		get api() {
			return api;
		}
	});
</script>

<div {...api.getRootProps()}>
	<h3 {...api.getLabelProps()}>My Documents</h3>
	<div {...api.getTreeProps()}>
		{#if collection.rootNode.children}
			{#each collection.rootNode.children as node, index}
				<TreeNode {node} indexPath={[index]} {api} />
			{/each}
		{/if}
	</div>
</div>
