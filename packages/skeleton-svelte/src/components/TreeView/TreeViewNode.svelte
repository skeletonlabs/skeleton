<script lang="ts">
	import * as tree from '@zag-js/tree-view';
	import { getTreeViewContext } from './context.js';
	import TreeViewNode from './TreeViewNode.svelte';
	import type { Node } from './types.js';
	import { slide } from 'svelte/transition';

	// Props
	const { ...zagProps }: tree.NodeProps = $props();

	// Context
	const ctx = getTreeViewContext();
	const {
		// Animation
		animationConfig = { duration: 200 },
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
		indicatorOpenRotation = '90deg',
		indicatorTransition = 'transition-all',
		// Snippets
		branchIcon,
		itemIcon,
		nodeText,
		nodeIndicator
	} = ctx;

	// Node info
	const nodeState = ctx.api.getNodeState(zagProps);
	const { node, indexPath }: { node: Node<string>; indexPath: number[] } = zagProps;
</script>

<!-- @component A tree node component. -->

{#if nodeState.isBranch}
	<!-- Branch -->
	<div {...ctx.api.getBranchProps(zagProps)}>
		<!-- Control -->
		<button
			class="{controlBase} {controlBg} {controlSpaceY} {controlHover} {controlBorder} {controlPadding} {controlShadow} {controlClasses}"
			{...ctx.api.getBranchControlProps(zagProps)}
		>
			{#if nodeIndicator}
				<span
					class={indicatorTransition}
					style="--indicator-rotation:{indicatorOpenRotation}"
					{...ctx.api.getBranchIndicatorProps(zagProps)}
				>
					{@render nodeIndicator()}
				</span>
			{/if}
			{#if branchIcon}
				<div>
					{@render branchIcon()}
				</div>
			{/if}
			<span {...ctx.api.getBranchTextProps(zagProps)}>
				{#if nodeText}
					{@render nodeText(node.value)}
				{:else}
					{node.value}
				{/if}
			</span>
		</button>

		<!-- Content -->
		{#if ctx.api.expandedValue.includes(node.id)}
			<div
				class="{contentBase} {contentBg} {contentSpaceY} {contentBorder} {contentPadding} {contentShadow} {contentClasses}"
				transition:slide={animationConfig}
				{...ctx.api.getBranchContentProps(zagProps)}
			>
				<div {...ctx.api.getBranchIndentGuideProps(zagProps)} style="--indent-factor:{indentFactor}"></div>
				<div class="flex flex-col">
					{#if node.children}
						{#each node.children as childNode, index}
							<TreeViewNode node={childNode} indexPath={[...indexPath, index]} />
						{/each}
					{/if}
				</div>
			</div>
		{/if}
	</div>
{:else}
	<button
		class="{itemBase} {itemBg} {itemSpaceY} {itemHover} {itemBorder} {itemPadding} {itemShadow} {itemClasses}"
		{...ctx.api.getItemProps(zagProps)}
	>
		{#if itemIcon}
			<div>
				{@render itemIcon()}
			</div>
		{/if}
		{#if nodeText}
			{@render nodeText(node.value)}
		{:else}
			{node.value}
		{/if}
	</button>
{/if}

<style>
	[data-scope='tree-view'][data-part='branch-indent-guide'] {
		width: calc(var(--indent-factor));
	}
	[data-scope='tree-view'][data-part='branch-indicator'] {
		&[data-state='open'] {
			transform: rotate(var(--indicator-rotation));
		}
	}
</style>
