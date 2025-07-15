<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { CollectionNode, NodeContext } from './types.js';
	import { getNodeContext, getTreeContext, setNodeContext, setTreeContext } from './context.js';
	import type { NodeProps } from '@zag-js/tree-view';
	import { slide } from 'svelte/transition';

	// Add missing style variables
	const controlBase = '';
	const controlBackground = '';
	const controlSpaceY = '';
	const controlHover = '';
	const controlBorder = '';
	const controlPadding = '';
	const controlShadow = '';
	const controlClasses = '';

	const contentBase = '';
	const contentBackground = '';
	const contentSpaceY = '';
	const contentBorder = '';
	const contentPadding = '';
	const contentShadow = '';
	const contentClasses = '';

	const indentAmount = '';
	const base = '';
	const background = '';
	const spaceY = '';
	const border = '';
	const padding = '';
	const shadow = '';
	const classes = '';

	const itemBase = '';
	const itemBackground = '';
	const itemSpaceY = '';
	const itemHover = '';
	const itemBorder = '';
	const itemPadding = '';
	const itemShadow = '';
	const itemClasses = '';

	const indicatorTransition = '';
	const indicatorRotationClass = '';

	// Default animation config for slide transition
	const animationConfig = {};

	interface Props {
		id: string;
		value: string;
		disabled?: boolean;
		content: Snippet<[{ node: CollectionNode; nodeProps: NodeProps }]>;
	}

	const { id, value, content }: Props = $props();

	const treeContext = getTreeContext();
	const parentNodeContext = getNodeContext();

	let childNodes = $state<CollectionNode[]>([]);
	let isRegistered = $state(false);
	let currentIndexPath = $state<number[]>([]);

	const nodeData: CollectionNode = $derived({
		id,
		value,
		children: childNodes,
		indexPath: currentIndexPath
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
		// get children() {
		// 	return childNodes;
		// },
		registerChild,
		unregisterChild,
		updateChild
	};

	setNodeContext(nodeContextData);
	onMount(() => {
		console.log(parentNodeContext, nodeData);
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

	const nodeProps = $derived({
		indexPath: currentIndexPath,
		node: nodeData
	});
</script>

{#if isRegistered}
	{@render content({ node: nodeData, nodeProps })}
{/if}
