<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { TreeViewProps, Node, TreeViewCollection } from './types.js';
	import { setTreeViewContext } from './context.js';
	import TreeNode from './TreeViewNode.svelte';
	import TreeViewNode from './TreeViewNode.svelte';

	const {
		// Animation
		animationConfig,
		// Data
		collection,
		// Root
		base = 'flex flex-col w-fit',
		bg = '',
		spaceY = 'space-y-4',
		border = ' rounded-base',
		padding = 'p-4',
		shadow = '',
		classes = '',
		// Node
		nodeBase,
		nodeBg,
		nodeClasses,
		// Control
		controlBase = 'flex gap-2',
		controlBg = '',
		controlSpaceY = '',
		controlHover = 'hover:preset-tonal-primary',
		controlBorder = 'rounded-base',
		controlPadding = 'p-2',
		controlShadow = '',
		controlClasses = '',
		// Content
		contentBase = 'flex gap-1',
		contentBg = '',
		contentSpaceY = '',
		contentBorder = controlBorder,
		contentPadding = '',
		contentShadow = '',
		contentClasses = '',
		// Item
		itemBase = 'flex gap-2',
		itemBg = '',
		itemSpaceY = '',
		itemHover = controlHover,
		itemBorder = contentBorder,
		itemPadding = controlPadding,
		itemShadow = '',
		itemClasses = '',
		// Indent
		indentAmount: indentFactor = '1.2rem',
		// Indicator
		indicatorOpenRotation,
		indicatorTransition,
		// Snippets
		branchIcon,
		itemIcon,
		nodeText,
		nodeIndicator,
		children,
		...zagProps
	}: TreeViewProps = $props();

	// Zag
	const treeCollection = tree.collection<(typeof collection)[number]>({
		nodeToValue: (node) => node.id,
		rootNode: {
			id: 'ROOT_NODE',
			value: '',
			children: collection
		}
	});
	const id = $props.id();
	const service = useMachine(tree.machine as tree.Machine<(typeof collection)[number]>, () => ({
		id: id,
		collection: treeCollection,
		...zagProps
	}));
	const api = $derived(tree.connect(service, normalizeProps));

	// Context
	setTreeViewContext({
		get api() {
			return api;
		},
		// Animation
		animationConfig,
		// Control
		controlBase,
		controlBg,
		controlSpaceY,
		controlHover,
		controlBorder,
		controlPadding,
		controlShadow,
		controlClasses,
		// Content
		contentBase,
		contentBg,
		contentSpaceY,
		contentBorder,
		contentPadding,
		contentShadow,
		contentClasses,
		// Item
		itemBase,
		itemBg,
		itemSpaceY,
		itemHover,
		itemBorder,
		itemPadding,
		itemShadow,
		itemClasses,
		// Indent
		indentAmount: indentFactor,
		// Indicator
		indicatorOpenRotation,
		indicatorTransition,
		branchIcon,
		itemIcon,
		nodeText,
		nodeIndicator
	});
</script>

<div class="{base} {bg} {spaceY} {border} {padding} {shadow} {classes}" {...api.getRootProps()}>
	<div {...api.getTreeProps()}>
		{#if treeCollection.rootNode.children}
			{#each treeCollection.rootNode.children as node, index}
				<TreeViewNode {node} indexPath={[index]} />
			{/each}
		{/if}
	</div>
</div>
