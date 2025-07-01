<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { CollectionNode, TreeViewProps } from './types.js';
	import { setTreeViewContext } from './context.js';
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
		indentAmount = '1.2rem',
		// Indicator
		indicatorOpenRotation = '90deg',
		indicatorTransition = 'transition-transform',
		// Snippets
		branchIcon,
		itemIcon,
		nodeText,
		nodeIndicator,
		children,
		...zagProps
	}: TreeViewProps = $props();

	// Zag
	const treeCollection = tree.collection<CollectionNode>({
		nodeToValue: (node) => node.id,
		rootNode: {
			id: 'ROOT_NODE',
			value: '',
			children: collection
		}
	});
	const id = $props.id();
	const service = useMachine(tree.machine as tree.Machine<CollectionNode>, () => ({
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
				<TreeViewNode
					{controlBase}
					{controlBg}
					{controlSpaceY}
					{controlHover}
					{controlBorder}
					{controlPadding}
					{controlShadow}
					{controlClasses}
					{contentBase}
					{contentBg}
					{contentSpaceY}
					{contentBorder}
					{contentPadding}
					{contentShadow}
					{contentClasses}
					{itemBase}
					{itemBg}
					{itemSpaceY}
					{itemHover}
					{itemBorder}
					{itemPadding}
					{itemShadow}
					{itemClasses}
					{indentAmount}
					{indicatorOpenRotation}
					{indicatorTransition}
					{node}
					indexPath={[index]}
				/>
			{/each}
		{/if}
	</div>
</div>
