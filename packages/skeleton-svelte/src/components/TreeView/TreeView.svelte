<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps, type PropTypes } from '@zag-js/svelte';
	import type { CollectionNode, TreeViewContext, TreeViewProps } from './types.js';
	import { setTreeContext } from './context.js';

	const {
		// Root
		base = 'flex flex-col w-fit',
		background = '',
		spaceY = 'space-y-4',
		border = ' rounded-base',
		padding = 'p-4',
		shadow = '',
		classes = '',
		// Label
		label,
		labelElement = 'h3',
		labelBase = 'label-text',
		labelTypography = 'h3',
		labelClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: TreeViewProps = $props();

	let nodes = $state<Map<string, CollectionNode>>(new Map());
	let rootChildren = $derived<CollectionNode[]>(nodes.values().toArray());

	const id = $props.id();
	let reactiveCollection = $derived(
		tree.collection<CollectionNode>({
			nodeToValue: (node) => node.id,
			nodeToString: (node) => node.value,
			rootNode: {
				id: 'ROOT',
				value: '',
				children: rootChildren,
				indexPath: []
			}
		})
	);

	let service = $derived(
		useMachine(tree.machine as tree.Machine<CollectionNode>, {
			id,
			collection: reactiveCollection,
			...zagProps
		})
	);

	let api = $derived<tree.Api<PropTypes, CollectionNode>>(tree.connect(service, normalizeProps));

	$effect.pre(() => {
		zagProps.onApiReady?.(api);
	});

	$effect(() => {
		void api.expandedValue;
	});

	const registerNode = (node: CollectionNode) => {
		const index = nodes.size;
		const nodeWithIndex = {
			...node,
			indexPath: [index]
		};
		nodes.set(node.id, nodeWithIndex);
		nodes = new Map(nodes);
		return nodeWithIndex.indexPath;
	};

	const unregisterNode = (nodeId: string) => {
		nodes.delete(nodeId);
		// Recalculate indexPaths for remaining nodes
		const remainingNodes = Array.from(nodes.values());
		nodes.clear();
		remainingNodes.forEach((node, index) => {
			nodes.set(node.id, { ...node, indexPath: [index] });
		});
		nodes = new Map(nodes);
	};

	const updateNode = (node: CollectionNode) => {
		if (nodes.has(node.id)) {
			nodes.set(node.id, node);
			nodes = new Map(nodes);
		}
	};

	const treeContext: TreeViewContext = {
		get api() {
			return api;
		},
		registerNode,
		unregisterNode,
		updateNode
	};

	setTreeContext(treeContext);
</script>

<!-- @component A collapsible TreeView. -->

<!-- Tree -->
<div class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}" {...api?.getRootProps()} data-testid="tree">
	{#if label}
		<svelte:element
			this={labelElement}
			{...api?.getLabelProps()}
			class="{labelBase} {labelClasses} {labelTypography}"
			data-testid="tree-label"
		>
			{label}
		</svelte:element>
	{/if}

	<div {...api?.getTreeProps()}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
