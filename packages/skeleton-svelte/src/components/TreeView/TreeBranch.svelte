<script lang="ts">
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { TreeBranchProps } from './types.js';

	let {
		id,
		value,
		children,
		disabled = false,
		// Control
		base = 'flex gap-2',
		background = '',
		selected = 'preset-tonal-primary',
		spaceY = '',
		hover = 'hover:preset-tonal-primary',
		border = 'rounded-base',
		padding = 'p-2',
		shadow = '',
		classes = '',
		// Content
		contentBase = 'flex',
		contentBackground = '',
		contentSpaceY = '',
		contentBorder = border,
		contentPadding = '',
		contentShadow = '',
		contentClasses = '',
		// Indent
		indentAmount = 'w-6',
		// Indicator
		indicatorBase = 'inline-flex items-center',
		indicatorRotationClass = 'rotate-90',
		indicatorTransition = 'transition-transform origin-center transform-fill',
		// Snippets
		icon,
		indicator
	}: TreeBranchProps = $props();

	const treeContext = getTreeContext();

	const rxSelected = $derived([treeContext.api?.selectedValue.includes(id) && selected]);
</script>

<!-- @component A Branch of a TreeView. -->

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node: nodeData, nodeProps })}
		<!-- Branch -->
		<div {...treeContext.api?.getBranchProps(nodeProps)} data-testid="tree-branch">
			<!-- Control -->
			<button
				class="{base} {background} {spaceY} {hover} {border} {padding} {shadow} {classes} {rxSelected}"
				{...treeContext.api?.getBranchControlProps(nodeProps)}
				data-testid="tree-branch-control"
				type="button"
			>
				<!-- Indicator -->
				<span
					class="{indicatorBase} {indicatorTransition} {[treeContext.api?.expandedValue.includes(id) && indicatorRotationClass]}"
					{...treeContext.api?.getBranchIndicatorProps(nodeProps)}
					data-testid="tree-indicator"
				>
					{#if indicator}
						{@render indicator()}
					{:else}
						{@render chevron()}
					{/if}
				</span>
				<!-- Icon -->
				{#if icon}
					<div data-testid="tree-branch-icon">
						{@render icon()}
					</div>
				{/if}
				<!-- Text -->
				<span {...treeContext.api?.getBranchTextProps(nodeProps)} data-testid="tree-branch-text">
					{nodeData.value}
				</span>
			</button>

			<!-- Content -->
			<div
				class="{contentBase} {contentBackground} {contentSpaceY} {contentBorder} {contentPadding} {contentShadow} {contentClasses}"
				{...treeContext.api?.getBranchContentProps(nodeProps)}
				data-testid="tree-content"
			>
				<!-- IndentGuide -->
				<div {...treeContext.api?.getBranchIndentGuideProps(nodeProps)} class={indentAmount}></div>
				<!-- Children -->
				<div>
					{@render children()}
				</div>
			</div>
		</div>
	{/snippet}
</TreeNode>

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
