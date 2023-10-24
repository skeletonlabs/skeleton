<script lang="ts">
	import TreeViewItem from './TreeViewItem.svelte';
	import RecursiveTreeViewItem from './RecursiveTreeViewItem.svelte';
	import type { TreeViewNode } from './types.js';
	import { createEventDispatcher, getContext, onMount, tick } from 'svelte';

	// this can't be passed using context, since we have to pass it to recursive children.
	/** Provide data-driven nodes. */
	export let nodes: TreeViewNode[] = [];

	/**
	 * provides id's of expanded nodes
	 * @type {string[]}
	 */
	export let expandedNodes: string[] = [];
	/**
	 * provides id's of disabled nodes
	 * @type {string[]}
	 */
	export let disabledNodes: string[] = [];
	/**
	 * provides id's of checked nodes
	 * @type {string[]}
	 */
	export let checkedNodes: string[] = [];
	/**
	 * provides id's of indeterminate nodes
	 * @type {string[]}
	 */
	export let indeterminateNodes: string[] = [];

	// Context API
	let selection: boolean = getContext('selection');
	let multiple: boolean = getContext('multiple');
	let relational: boolean = getContext('relational');

	let tempCheckedNodes: string[] = [];

	// Locals
	let group: unknown;
	let name = '';

	// events
	const dispatch = createEventDispatcher();

	function toggleNode(node: TreeViewNode, open: boolean) {
		// toggle only nodes with children
		if (!node.children?.length) return;
		if (open) {
			// node is not registered as opened
			if (!expandedNodes.includes(node.id)) {
				expandedNodes.push(node.id);
				expandedNodes = expandedNodes;
			}
		} else {
			// node is registered as open
			if (expandedNodes.includes(node.id)) {
				expandedNodes.splice(expandedNodes.indexOf(node.id), 1);
				expandedNodes = expandedNodes;
			}
		}
	}

	function checkNode(node: TreeViewNode, checked: boolean, indeterminate: boolean) {
		if (checked) {
			// node is not registered as checked
			if (!checkedNodes.includes(node.id)) {
				checkedNodes.push(node.id);
				checkedNodes = checkedNodes;
			}

			// node is not indeterminate but registered as indeterminate
			if (!indeterminate && indeterminateNodes.includes(node.id)) {
				indeterminateNodes.splice(indeterminateNodes.indexOf(node.id), 1);
				indeterminateNodes = indeterminateNodes;
			}
		} else {
			// node is registered as checked
			if (checkedNodes.includes(node.id)) {
				checkedNodes.splice(checkedNodes.indexOf(node.id), 1);
				checkedNodes = checkedNodes;
			}

			// node is indeterminate but not registered as indeterminate
			if (indeterminate && !indeterminateNodes.includes(node.id)) {
				indeterminateNodes.push(node.id);
				indeterminateNodes = indeterminateNodes;
				// node is not indeterminate but registered as indeterminate
			} else if (!indeterminate && indeterminateNodes.includes(node.id)) {
				indeterminateNodes.splice(indeterminateNodes.indexOf(node.id), 1);
				indeterminateNodes = indeterminateNodes;
			}
		}
	}

	// init check flow will messup the checked nodes, so we save it to reassign it onMount.
	tempCheckedNodes = [...checkedNodes];
	onMount(async () => {
		if (selection) {
			// random number as name
			name = String(Math.random());

			// init groups if not initialized yet
			if (group === undefined) {
				if (multiple) {
					group = [];
					nodes.forEach((node) => {
						if (checkedNodes.includes(node.id) && Array.isArray(group)) group.push(node.id);
					});
					group = group;
				} else if (!nodes.some((node) => checkedNodes.includes(node.id))) {
					group = '';
				}
			}

			// remove relational links
			if (!relational) treeItems = [];

			// reassign checkNodes to ensure component starting with the correct check values.
			checkedNodes = [];
			await tick();
			checkedNodes = [...tempCheckedNodes];
		}
	});

	// important to pass children up to items (recursively)
	export let treeItems: TreeViewItem[] = [];
	let children: TreeViewItem[][] = [];
</script>

{#if nodes && nodes.length > 0}
	{#each nodes as node, i}
		<TreeViewItem
			bind:this={treeItems[i]}
			bind:children={children[i]}
			bind:group
			bind:name
			bind:value={node.id}
			hideLead={!node.lead}
			hideChildren={!node.children || node.children.length === 0}
			open={expandedNodes.includes(node.id)}
			disabled={disabledNodes.includes(node.id)}
			checked={checkedNodes.includes(node.id)}
			indeterminate={indeterminateNodes.includes(node.id)}
			on:toggle={(e) => toggleNode(node, e.detail.open)}
			on:groupChange={(e) => checkNode(node, e.detail.checked, e.detail.indeterminate)}
			on:click={() =>
				dispatch('click', {
					id: node.id
				})}
			on:toggle={() => {
				dispatch('toggle', {
					id: node.id
				});
			}}
		>
			{#if typeof node.content === 'string'}
				{@html node.content}
			{:else}
				<svelte:component this={node.content} {...node.contentProps} />
			{/if}
			<svelte:fragment slot="lead">
				{#if typeof node.lead === 'string'}
					{@html node.lead}
				{:else}
					<svelte:component this={node.lead} {...node.leadProps} />
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="children">
				<RecursiveTreeViewItem
					nodes={node.children}
					bind:expandedNodes
					bind:disabledNodes
					bind:checkedNodes
					bind:indeterminateNodes
					bind:treeItems={children[i]}
					on:click={(e) =>
						dispatch('click', {
							id: e.detail.id
						})}
					on:toggle={(e) =>
						dispatch('toggle', {
							id: e.detail.id
						})}
				/>
			</svelte:fragment>
		</TreeViewItem>
	{/each}
{/if}
