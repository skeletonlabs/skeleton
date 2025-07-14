<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { CollectionNode, TreeViewContext, TreeViewProps } from './types.js';
	import { slide } from 'svelte/transition';
	import { getTreeContext, setTreeContext } from './context.js';
	import { onMount } from 'svelte';

	// interface Props {
	// 	children?: import('svelte').Snippet;
	// 	label?: import('svelte').Snippet;
	// }

	const {
		// Indent
		indentAmount = 'indent-guide',
		// Indicator
		indicatorRotationClass = 'branch-indicator',
		indicatorTransition = 'transition-transform',
		// Animation
		animationConfig = { duration: 200 },
		// Data
		// collection,
		// Root
		base = 'flex flex-col w-fit',
		background = '',
		spaceY = 'space-y-4',
		border = ' rounded-base',
		padding = 'p-4',
		shadow = '',
		classes = '',
		// Control
		controlBase = 'flex gap-2',
		controlBackground = '',
		controlSpaceY = '',
		controlHover = 'hover:preset-tonal-primary',
		controlBorder = 'rounded-base',
		controlPadding = 'p-2',
		controlShadow = '',
		controlClasses = '',
		// Content
		contentBase = 'flex gap-1',
		contentBackground = '',
		contentSpaceY = '',
		contentBorder = controlBorder,
		contentPadding = '',
		contentShadow = '',
		contentClasses = '',
		// Item
		itemBase = 'flex gap-2',
		itemBackground = '',
		itemSpaceY = '',
		itemHover = controlHover,
		itemBorder = contentBorder,
		itemPadding = controlPadding,
		itemShadow = '',
		itemClasses = '',
		// Snippets
		branchIcon,
		itemIcon,
		branchIndicator,
		onSelectionChange,
		onExpandedChange,
		children,
		label,
		// Zag
		...zagProps
	}: TreeViewProps = $props();

	// let { selectionMode = 'single', expandOnClick = true, onSelectionChange, onExpandedChange, children, label }: Props = $props();

	let nodes = $state<Map<string, CollectionNode>>(new Map());
	let rootChildren = $state<CollectionNode[]>([]);

	const id = $props.id();

	let reactiveCollection = $derived(
		tree.collection<CollectionNode>({
			nodeToValue: (node) => node.id,
			nodeToString: (node) => node.value,
			rootNode: {
				id: 'ROOT',
				value: '',
				children: Array.from(nodes.values()),
				indexPath: []
			}
		})
	) as ReturnType<typeof tree.collection<CollectionNode>>;

	const service = $derived(
		useMachine(tree.machine as tree.Machine<CollectionNode>, {
			id,
			collection: reactiveCollection,
			...zagProps
		})
	);

	const api = $derived(tree.connect(service, normalizeProps));

	const registerNode = (node: CollectionNode) => {
		// Calculate indexPath for root nodes
		const index = nodes.size;
		const nodeWithIndex = {
			...node,
			indexPath: [index]
		};
		nodes.set(node.id, nodeWithIndex);
		nodes = new Map(nodes); // Trigger reactivity
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
		nodes = new Map(nodes); // Trigger reactivity
	};

	const updateNode = (node: CollectionNode) => {
		console.log('this is the update', node);
		if (nodes.has(node.id)) {
			nodes.set(node.id, node);
			nodes = new Map(nodes); // Trigger reactivity
		}
	};

	const treeContext: TreeViewContext = {
		get api() {
			return api;
		},
		animationConfig,
		registerNode,
		unregisterNode,
		updateNode,
		// Base
		background,
		spaceY,
		border,
		padding,
		shadow,
		classes,
		// Control
		controlBase,
		controlBackground,
		controlSpaceY,
		controlHover,
		controlBorder,
		controlPadding,
		controlShadow,
		controlClasses,
		// Content
		contentBase,
		contentBackground,
		contentSpaceY,
		contentBorder,
		contentPadding,
		contentShadow,
		contentClasses,
		// Item
		itemBase,
		itemBackground,
		itemSpaceY,
		itemHover,
		itemBorder,
		itemPadding,
		itemShadow,
		itemClasses,

		// Snippets
		branchIndicator: branchIndicator ?? chevron
	};

	setTreeContext(treeContext);
	// Zag
	// const treeCollection = tree.collection<CollectionNode>({
	// 	nodeToValue: (node) => node.id,
	// 	nodeToString: (node) => node.value,
	// 	rootNode: {
	// 		id: 'ROOT_NODE',
	// 		value: '',
	// 		children: collection
	// 	}
	// });
	// const id = $props.id();
	// const service = useMachine(tree.machine as tree.Machine<CollectionNode>, () => ({
	// 	id: id,
	// 	collection: treeCollection,
	// 	...zagProps
	// }));
	// const api = $derived(tree.connect(service, normalizeProps));

	// <div class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}" {...api.getRootProps()} data-testid="tree">
	// 	<div {...api.getTreeProps()}>
	// 		{@render children()}
	// 		<!-- {#if treeCollection.rootNode.children}
	// 			{#each treeCollection.rootNode.children as node, index}
	// 				{@render treeNode({ node, indexPath: [index] })}
	// 			{/each}
	// 		{/if} -->
	// 	</div>
	// </div>

	// <!-- Node -->
	// {#snippet treeNode(nodeProps: tree.NodeProps)}
	// {#if api.getNodeState(nodeProps).isBranch}
	// <!-- Branch -->
	// <div {...api.getBranchProps(nodeProps)} data-testid="tree-branch">
	// 	<!-- Control -->
	// 	<button
	// 		class="{controlBase} {controlBackground} {controlSpaceY} {controlHover} {controlBorder} {controlPadding} {controlShadow} {controlClasses}"
	// 		{...api.getBranchControlProps(nodeProps)}
	// 		data-testid="tree-control"
	// 		type="button"
	// 	>
	// 		<span
	// 			class="flex items-center {indicatorTransition} {indicatorRotationClass}"
	// 			{...api.getBranchIndicatorProps(nodeProps)}
	// 			data-testid="tree-indicator"
	// 		>
	// 			{#if branchIndicator}
	// 				{@render branchIndicator()}
	// 			{:else}
	// 				{@render chevron()}
	// 			{/if}
	// 		</span>
	// 		{#if branchIcon}
	// 			<div data-testid="tree-branch-icon">
	// 				{@render branchIcon()}
	// 			</div>
	// 		{/if}
	// 		<span {...api.getBranchTextProps(nodeProps)} data-testid="tree-branch-text">
	// 			{nodeProps.node.value}
	// 		</span>
	// 	</button>

	// 	<!-- Content -->
	// 	{#if api.expandedValue.includes(nodeProps.node.id)}
	// 		<div
	// 			class="{contentBase} {contentBackground} {contentSpaceY} {contentBorder} {contentPadding} {contentShadow} {contentClasses}"
	// 			transition:slide={animationConfig}
	// 			{...api.getBranchContentProps(nodeProps)}
	// 			data-testid="tree-content"
	// 		>
	// 			<div {...api.getBranchIndentGuideProps(nodeProps)} class={indentAmount}></div>
	// 			<div class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}">
	// 				{#if nodeProps.node.children}
	// 					{#each nodeProps.node.children as childNode, index}
	// 						{@render treeNode({ node: childNode, indexPath: [...nodeProps.indexPath, index] })}
	// 					{/each}
	// 				{/if}
	// 			</div>
	// 		</div>
	// 	{/if}
	// </div>
	// {:else}
	// <button
	// 	class="{itemBase} {itemBackground} {itemSpaceY} {itemHover} {itemBorder} {itemPadding} {itemShadow} {itemClasses}"
	// 	{...api.getItemProps(nodeProps)}
	// 	data-testid="tree-item"
	// 	type="button"
	// >
	// 		{#if itemIcon}
	// 			<div data-testid="tree-item-icon">
	// 				{@render itemIcon()}
	// 			</div>
	// 		{/if}
	// 		<span {...api.getItemTextProps(nodeProps)} data-testid="tree-item-text">
	// 			{nodeProps.node.value}
	// 		</span>
	// 	</button>
	// {/if}
	// {/snippet}
</script>

<!-- @component A collapsible TreeView. -->
<pre>{JSON.stringify(Array.from(nodes.values()), undefined, 2)}</pre>
<pre>{JSON.stringify(api.expandedValue)}</pre>

<button onclick={() => api.expand()}> Expand All </button>
<!-- Tree -->
<div class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}" {...api.getRootProps()} data-testid="tree">
	{#if label}
		<h3 {...api.getLabelProps()}>
			{@render label()}
		</h3>
	{/if}

	<div {...api.getTreeProps()}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

{#snippet chevron()}
	<svg
		stroke="currentColor"
		fill="none"
		stroke-width="2"
		viewBox="0 0 24 24"
		stroke-linecap="round"
		stroke-linejoin="round"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m9 18 6-6-6-6" />
	</svg>
{/snippet}
