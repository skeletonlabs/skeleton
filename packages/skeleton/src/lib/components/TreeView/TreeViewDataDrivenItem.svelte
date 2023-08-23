<script lang="ts">
	/**
	 * This component is only in Data-driven tree-view to add children recursively.
	 */
	import { getContext, onMount } from 'svelte';
	import TreeViewDataDrivenItem from './TreeViewDataDrivenItem.svelte';
	import TreeViewItem from './TreeViewItem.svelte';
	import type { TreeViewNode } from './types.js';

	// this can't be passed using context, since we have to pass it to recursive children.
	/** Provide data-driven nodes. */
	export let nodes: TreeViewNode[] = [];

	// Context API
	/** Enable tree-view selection */
	export let selection: boolean = getContext('selection');
	/** Enable selection of multiple items. */
	export let multiple: boolean = getContext('multiple');

	// Locals
	let group: unknown;
	let name = '';

	// Lifecycle
	onMount(() => {
		// random number as name
		name = String(Math.random());

		if (selection) {
			group = multiple ? [] : '';
			// manage group (checking) on initialization.
			if (multiple) {
				nodes.forEach((node) => {
					if (!Array.isArray(group)) return;
					// handle relations
					if (node.children && node.children.length > 0) {
						// at least one child is indeterminate => indeterminate item
						if (node.children.some((c) => c.indeterminate)) {
							node.indeterminate = true;
						}
						// all children are checked => check item
						else if (node.children.every((c) => c.checked)) {
							node.indeterminate = false;
							group.push(node.value);
							group = group;
						}
						// not all children are checked => indeterminate item
						else if (node.children.some((c) => c.checked)) {
							node.indeterminate = true;
						}
						// all children are unchecked => uncheck item
						else {
							node.indeterminate = false;
							node.checked = false;
						}
					} else if (node.checked) {
						group.push(node.value);
						group = group;
					}
				});
				// single selection mode
			} else {
				nodes.forEach((node) => {
					if (!node.checked) return;
					group = node.value;
				});
			}
		}
	});

	// Functionality
	function onGroupChange() {
		if (multiple) {
			nodes.forEach((node) => {
				if (!Array.isArray(group)) return;
				node.checked = group.includes(node.value);
			});
		} else {
			nodes.forEach((node) => {
				node.checked = node.value === group;
			});
		}
	}

	// important to pass children up to items (recursively)
	export let treeItems: TreeViewItem[] = [];
	let children: TreeViewItem[][] = [];
</script>

{#if nodes && nodes.length > 0}
	{#each nodes as node, i}
		<TreeViewItem
			bind:this={treeItems[i]}
			bind:open={node.open}
			hideLead={!node.lead}
			hideChildren={!node.children || node.children.length === 0}
			bind:disabled={node.disabled}
			bind:group
			bind:name
			bind:indeterminate={node.indeterminate}
			bind:value={node.value}
			bind:children={children[i]}
			on:change={onGroupChange}
			on:change
			on:click
			on:toggle
			on:keydown
			on:keyup
		>
			{@html node.content}
			<svelte:fragment slot="lead">
				{@html node.lead}
			</svelte:fragment>
			<svelte:fragment slot="children">
				<TreeViewDataDrivenItem bind:nodes={node.children} bind:treeItems={children[i]} />
			</svelte:fragment>
		</TreeViewItem>
	{/each}
{/if}
