<script lang="ts">
	import { getTreeViewContext } from './context.js';
	import TreeViewNode from './TreeViewNode.svelte';
	import type { CollectionNode, TreeNodeProps } from './types.js';
	import { slide } from 'svelte/transition';

	// Props
	const {
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
		indentAmount,
		// Indicator
		indicatorOpenRotation,
		indicatorTransition,
		...zagProps
	}: TreeNodeProps = $props();

	// Context
	const ctx = getTreeViewContext();
	const {
		// Animation
		animationConfig = { duration: 200 },
		// Snippets
		branchIcon,
		itemIcon,
		nodeText,
		nodeIndicator
	} = ctx;

	// Node info
	const nodeState = ctx.api.getNodeState(zagProps);
	const { node, indexPath }: { node: CollectionNode; indexPath: number[] } = zagProps;
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
					style="--indicator-rotation:{indicatorOpenRotation};"
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
				<div {...ctx.api.getBranchIndentGuideProps(zagProps)} style="--indent-factor:{indentAmount}"></div>
				<div class="flex flex-col">
					{#if node.children}
						{#each node.children as childNode, index}
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
								node={childNode}
								indexPath={[...indexPath, index]}
							/>
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
