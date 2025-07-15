<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTreeContext } from './context.js';
	import TreeNode from './TreeNode.svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		id: string;
		value: string;
		disabled?: boolean;
		children: Snippet;
		// trigger?: import('svelte').Snippet<
		// 	[
		// 		{
		// 			nodeData: any;
		// 		}
		// 	]
		// >;
	}

	let { id, value, disabled = false, children }: Props = $props();

	const treeContext = getTreeContext();

	const handleClick = (event: MouseEvent, nodeProps: any) => {
		console.log(`🖱️ TreeBranch ${id} clicked:`, {
			event,
			nodeProps,
			triggerProps: treeContext.api?.getBranchControlProps(nodeProps),
			expandedValue: treeContext.api?.expandedValue,
			willExpand: treeContext.api?.expandedValue.includes(id)
		});
	};
</script>

<TreeNode {id} {value} {disabled}>
	{#snippet content({ node: nodeData, nodeProps })}
		<!-- Branch -->
		<pre>{JSON.stringify(nodeProps, undefined, 2)}</pre>
		<div {...treeContext.api?.getBranchProps(nodeProps)} data-testid="tree-branch">
			<!-- Control -->
			<button
				class="{treeContext.controlBase} {treeContext.controlBackground} {treeContext.controlSpaceY} {treeContext.controlHover} {treeContext.controlBorder} {treeContext.controlPadding} {treeContext.controlShadow} {treeContext.controlClasses}"
				{...treeContext.api?.getBranchControlProps(nodeProps)}
				data-testid="tree-control"
				type="button"
				onmousedown={(e) => handleClick(e, nodeProps)}
			>
				<span
					class="flex items-center {treeContext.indicatorTransition} {treeContext.indicatorRotationClass}"
					{...treeContext.api?.getBranchIndicatorProps(nodeProps)}
					data-testid="tree-indicator"
				>
					{#if treeContext.branchIndicator}
						{@render treeContext.branchIndicator()}
					{/if}
				</span>
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
				<div {...treeContext.api?.getBranchIndentGuideProps(nodeProps)} class={treeContext.indentAmount}></div>
				<div
					class="{treeContext.base} {treeContext.background} {treeContext.spaceY} {treeContext.border} {treeContext.padding} {treeContext.shadow} {treeContext.classes}"
				>
					{@render children()}
				</div>
			</div>
		</div>
	{/snippet}
</TreeNode>
