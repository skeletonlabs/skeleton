<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps, type PropTypes } from '@zag-js/svelte';
	import type { CollectionNode, TreeViewContext, TreeViewProps } from './types.js';
	import { setTreeContext } from './context.js';

	// interface Props {
	// 	children?: import('svelte').Snippet;
	// 	label?: import('svelte').Snippet;
	// }

	const {
		// Indent
		indentAmount = 'indent-guide',
		// Indicator
		indicatorRotationClass = 'branch-indicator-rotation',
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
		contentBase = 'flex',
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
		console.log('this is the update', node);
		if (nodes.has(node.id)) {
			nodes.set(node.id, node);
			nodes = new Map(nodes);
		}
	};

	const treeContext: TreeViewContext = {
		get api() {
			return api;
		},
		indentAmount,
		indicatorRotationClass,
		indicatorTransition,
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
</script>

<!-- @component A collapsible TreeView. -->

<!-- {@debug api} -->

<button onclick={() => api?.expand()}> Expand All </button>
<button onclick={() => api?.collapse()}> Collapse All </button>
<!-- Tree -->
<div class="{base} {background} {spaceY} {border} {padding} {shadow} {classes}" {...api?.getRootProps()} data-testid="tree">
	{#if label}
		<h3 {...api?.getLabelProps()}>
			{@render label()}
		</h3>
	{/if}

	<div {...api?.getTreeProps()}>
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
