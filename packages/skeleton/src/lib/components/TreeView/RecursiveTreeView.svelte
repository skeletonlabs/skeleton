<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';

	// Types
	import type { CssClasses, TreeViewNode } from '../../index.js';
	import RecursiveTreeViewItem from './RecursiveTreeViewItem.svelte';

	// Props (parent)
	/** Enable tree-view selection. */
	export let selection = false;
	/** Enable selection of multiple items. */
	export let multiple = false;
	/** Enable relational checking. */
	export let relational = false;
	/**
	 * Provide data-driven nodes.
	 * @type {TreeViewNode[]}
	 */
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
	/** Provide classes to set the tree width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (children)
	/** Provide classes to set the tree item padding styles. */
	export let padding: CssClasses = 'py-4 px-4';
	/** Provide classes to set the tree children indentation */
	export let indent: CssClasses = 'ml-4';
	/** Provide classes to set the tree item hover styles. */
	export let hover: CssClasses = 'hover:variant-soft';
	/** Provide classes to set the tree item rounded styles. */
	export let rounded: CssClasses = 'rounded-container-token';

	// Props (symbols)
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = 'rotate-180';
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = '';
	/* Set the hyphen symbol opacity for non-expandable rows. */
	export let hyphenOpacity: CssClasses = 'opacity-10';

	// Props (regions)
	/** Provide arbitrary classes to the tree item summary region. */
	export let regionSummary: CssClasses = '';
	/** Provide arbitrary classes to the symbol icon region. */
	export let regionSymbol: CssClasses = '';
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = '';

	// Props A11y
	/** Provide the ARIA labelledby value. */
	export let labelledby = '';

	// Context API
	setContext('selection', selection);
	setContext('multiple', multiple);
	setContext('relational', relational);
	setContext('padding', padding);
	setContext('indent', indent);
	setContext('hover', hover);
	setContext('rounded', rounded);
	setContext('caretOpen', caretOpen);
	setContext('caretClosed', caretClosed);
	setContext('hyphenOpacity', hyphenOpacity);
	setContext('regionSummary', regionSummary);
	setContext('regionSymbol', regionSymbol);
	setContext('regionChildren', regionChildren);

	// events
	const dispatch = createEventDispatcher();

	function onClick(event: CustomEvent<{ id: string }>) {
		/** @event {{id:string}} click - Fires on tree item click */
		dispatch('click', {
			id: event.detail.id
		});
	}

	function onToggle(event: CustomEvent<{ id: string }>) {
		/** @event {{id:string}} toggle - Fires on tree item toggle */
		dispatch('toggle', {
			id: event.detail.id
		});
	}

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="tree {classesBase}" data-testid="tree" role="tree" aria-multiselectable={multiple} aria-label={labelledby}>
	{#if nodes && nodes.length > 0}
		<RecursiveTreeViewItem
			{nodes}
			bind:expandedNodes
			bind:disabledNodes
			bind:checkedNodes
			bind:indeterminateNodes
			on:click={onClick}
			on:toggle={onToggle}
		/>
	{/if}
</div>
