<script lang="ts">
	/**
	 * This component is only in Data-driven tree-view to add children recursively.
	 */
	import { createEventDispatcher, getContext, onMount } from 'svelte';
	import TreeViewDataDrivenItem from './TreeViewDataDrivenItem.svelte';
	import TreeViewItem from './TreeViewItem.svelte';
	import type { TreeViewNode } from './types.js';

	// events
	const dispatch = createEventDispatcher();

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
			nodes.forEach((node) => {
				if (!node.checked) return;

				if (multiple) {
					if (!Array.isArray(group)) return;
					group.push(node.value);
				} else {
					group = node.value;
				}
			});
		}
	});

	// Functionality
	function onCheckChange() {
		nodes.forEach((node) => {
			if (multiple) {
				if (!Array.isArray(group)) return;
				node.checked = group.includes(node.value);
			} else {
				node.checked = group === node.value;
			}
		});
		nodes = nodes;
		// notify parent to update values. Important to recursively update parents.
		dispatch('change');
	}

	export let parents: TreeViewItem[] = [];
	let children: TreeViewItem[][] = [];
</script>

{#if nodes && nodes.length > 0}
	{#each nodes as node, i}
		<TreeViewItem
			bind:this={parents[i]}
			bind:open={node.open}
			hideLead={!node.lead}
			hideChildren={!node.children || node.children.length === 0}
			bind:disabled={node.disabled}
			bind:group
			bind:name
			bind:indeterminate={node.indeterminate}
			bind:value={node.value}
			bind:children={children[i]}
			on:change={onCheckChange}
			on:click
			on:toggle
		>
			{@html node.content}
			<svelte:fragment slot="lead">
				{@html node.lead}
			</svelte:fragment>
			<svelte:fragment slot="children">
				<TreeViewDataDrivenItem nodes={node.children} on:change={onCheckChange} bind:parents={children[i]} />
			</svelte:fragment>
		</TreeViewItem>
	{/each}
{/if}
