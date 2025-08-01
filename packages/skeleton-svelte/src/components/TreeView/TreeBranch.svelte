<script lang="ts">
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import type { TreeBranchProps } from './types.js';

	let { id, value, children, disabled = false }: TreeBranchProps = $props();

	const treeContext = getTreeContext();
</script>

<!-- @component A Branch of a TreeView. -->

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node: nodeData, nodeProps })}
		<!-- Branch -->
		<div {...treeContext.api?.getBranchProps(nodeProps)} data-testid="tree-branch">
			<!-- Control -->
			<button
				class="{treeContext.controlBase} {treeContext.controlBackground} {treeContext.controlSpaceY} {treeContext.controlHover} {treeContext.controlBorder} {treeContext.controlPadding} {treeContext.controlShadow} {treeContext.controlClasses}"
				{...treeContext.api?.getBranchControlProps(nodeProps)}
				data-testid="tree-control"
				type="button"
			>
				<!-- Indicator -->
				<span
					class="flex items-center {treeContext.indicatorTransition} {treeContext.indicatorRotationClass}"
					{...treeContext.api?.getBranchIndicatorProps(nodeProps)}
					data-testid="tree-indicator"
				>
					{#if treeContext.branchIndicator}
						{@render treeContext.branchIndicator()}
					{/if}
				</span>
				<!-- Icon -->
				{#if treeContext.branchIcon}
					<div data-testid="tree-branch-icon">
						{@render treeContext.branchIcon()}
					</div>
				{/if}
				<!-- Text -->
				<span {...treeContext.api?.getBranchTextProps(nodeProps)} data-testid="tree-branch-text">
					{nodeData.value}
				</span>
			</button>

			<!-- Content -->
			<div
				class="{treeContext.contentBase} {treeContext.contentBackground} {treeContext.contentSpaceY} {treeContext.contentBorder} {treeContext.contentPadding} {treeContext.contentShadow} {treeContext.contentClasses}"
				{...treeContext.api?.getBranchContentProps(nodeProps)}
				data-testid="tree-content"
			>
				<!-- IndentGuide -->
				<div {...treeContext.api?.getBranchIndentGuideProps(nodeProps)} class={treeContext.indentAmount}></div>
				<!-- Children -->
				<div>
					{@render children()}
				</div>
			</div>
		</div>
	{/snippet}
</TreeNode>
