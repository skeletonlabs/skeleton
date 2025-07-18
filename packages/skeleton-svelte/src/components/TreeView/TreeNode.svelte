<script lang="ts">
	import { onMount } from 'svelte';
	import type { CollectionNode, NodeContext, TreeNodeProps } from './types.js';
	import { getNodeContext, getTreeContext, setNodeContext } from './context.js';

	const { id, value, content }: TreeNodeProps = $props();

	const treeContext = getTreeContext();
	const parentNodeContext = getNodeContext();

	let childNodes = $state<CollectionNode[]>([]);
	let isRegistered = $state(false);
	let currentIndexPath = $state<number[]>([]);

	const nodeData: CollectionNode = $derived({
		id,
		value,
		indexPath: currentIndexPath,
		children: childNodes
	});

	const updateSelf = () => {
		if (parentNodeContext) {
			parentNodeContext.updateChild(nodeData);
		} else {
			treeContext.updateNode(nodeData);
		}
	};

	const registerChild = (child: CollectionNode) => {
		const childIndex = childNodes.length;
		const childWithIndex = { ...child, indexPath: [...nodeData.indexPath, childIndex] };
		childNodes = [...childNodes, childWithIndex];

		updateSelf();
		return childWithIndex.indexPath;
	};

	const unregisterChild = (childId: string) => {
		childNodes = childNodes.filter((child) => child.id !== childId);
		childNodes = childNodes.map((child, index) => ({
			...child,
			indexPath: [...nodeData.indexPath, index]
		}));

		updateSelf();
	};

	const updateChild = (updatedChild: CollectionNode) => {
		const index = childNodes.findIndex((child) => child.id === updatedChild.id);
		if (index !== -1) {
			childNodes[index] = {
				...updatedChild,
				indexPath: [...nodeData.indexPath, index]
			};
			childNodes = [...childNodes]; // Trigger reactivity

			// Bubble up the change
			updateSelf();
		}
	};

	const nodeContextData: NodeContext = {
		get node() {
			return nodeData;
		},
		registerChild,
		unregisterChild,
		updateChild
	};

	setNodeContext(nodeContextData);

	const nodeProps = $derived({
		indexPath: currentIndexPath,
		node: nodeData
	});

	onMount(() => {
		if (parentNodeContext) {
			// Get thscriptx from parent when registering
			currentIndexPath = parentNodeContext.registerChild(nodeData);
		} else {
			// For root nodes, register with tree context and get index
			currentIndexPath = treeContext.registerNode(nodeData);
		}
		isRegistered = true;

		return () => {
			if (isRegistered) {
				if (parentNodeContext) {
					parentNodeContext.unregisterChild(id);
				} else {
					treeContext.unregisterNode(id);
				}
			}
		};
	});
</script>

{#if isRegistered}
	{@render content({ node: nodeData, nodeProps })}
{/if}
