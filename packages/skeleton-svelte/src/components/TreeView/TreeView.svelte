<script lang="ts" module>
	import { createRawSnippet } from 'svelte';

	const chevron = createRawSnippet(() => {
		return {
			render: () => /* html */ `
			<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
				<path d="m9 18 6-6-6-6" />
			</svg>
		`
		};
	});
</script>

<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { CollectionNode, TreeViewProps } from './types.js';
	import { slide } from 'svelte/transition';

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
		branchIndicator,
		...zagProps
	}: TreeViewProps = $props();

	// Zag
	const treeCollection = tree.collection<CollectionNode>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.value,
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
</script>

<!-- @component A collapsible TreeView. -->

<!-- Tree -->
<div class="{base} {bg} {spaceY} {border} {padding} {shadow} {classes}" {...api.getRootProps()} data-testid="tree">
	<div {...api.getTreeProps()}>
		{#if treeCollection.rootNode.children}
			{#each treeCollection.rootNode.children as node, index}
				{@render treeNode({ node, indexPath: [index] })}
			{/each}
		{/if}
	</div>
</div>

<!-- Node -->
{#snippet treeNode(nodeProps: tree.NodeProps)}
	{#if api.getNodeState(nodeProps).isBranch}
		<!-- Branch -->
		<div {...api.getBranchProps(nodeProps)} data-testid="tree-branch">
			<!-- Control -->
			<button
				class="{controlBase} {controlBg} {controlSpaceY} {controlHover} {controlBorder} {controlPadding} {controlShadow} {controlClasses}"
				{...api.getBranchControlProps(nodeProps)}
			>
				<span
					class="flex items-center {indicatorTransition}"
					style="--indicator-rotation:{indicatorOpenRotation};"
					{...api.getBranchIndicatorProps(nodeProps)}
					data-testid="tree-indicator"
				>
					{#if branchIndicator}
						{@render branchIndicator()}
					{:else}
						{@render chevron()}
					{/if}
				</span>
				{#if branchIcon}
					<div data-testid="tree-branch-icon">
						{@render branchIcon()}
					</div>
				{/if}
				<span {...api.getBranchTextProps(nodeProps)} data-testid="tree-branch-text">
					{nodeProps.node.value}
				</span>
			</button>

			<!-- Content -->
			{#if api.expandedValue.includes(nodeProps.node.id)}
				<div
					class="{contentBase} {contentBg} {contentSpaceY} {contentBorder} {contentPadding} {contentShadow} {contentClasses}"
					transition:slide={animationConfig}
					{...api.getBranchContentProps(nodeProps)}
				>
					<div {...api.getBranchIndentGuideProps(nodeProps)} style="--indent-factor:{indentAmount}"></div>
					<div class="flex flex-col">
						{#if nodeProps.node.children}
							{#each nodeProps.node.children as childNode, index}
								{@render treeNode({ node: childNode, indexPath: [...nodeProps.indexPath, index] })}
							{/each}
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{:else}
		<button
			class="{itemBase} {itemBg} {itemSpaceY} {itemHover} {itemBorder} {itemPadding} {itemShadow} {itemClasses}"
			{...api.getItemProps(nodeProps)}
		>
			{#if itemIcon}
				<div data-testid="tree-item-icon">
					{@render itemIcon()}
				</div>
			{/if}
			<span {...api.getItemTextProps(nodeProps)} data-testid="tree-item-text">
				{nodeProps.node.value}
			</span>
		</button>
	{/if}
{/snippet}

<style>
	[data-scope='tree-view'][data-part='branch-indent-guide'] {
		width: calc(var(--indent-factor));
	}
	[data-scope='tree-view'][data-part='branch-indicator'] {
		&[data-state='open'] {
			transform-box: fill-box;
			transform-origin: center;
			transform: rotate(var(--indicator-rotation));
		}
	}
</style>
