<script lang="ts">
	import { setContext } from 'svelte';

	// Types
	import type { CssClasses, TreeViewNode } from '../../index.js';
	import TreeViewDataDrivenItem from './TreeViewDataDrivenItem.svelte';

	// Props (parent)
	/** Enable tree-view selection. */
	export let selection = false;
	/** Enable selection of multiple items. */
	export let multiple = false;
	/**
	 * Provide data-driven nodes.
	 * @type {TreeViewNode[]}
	 */
	export let nodes: TreeViewNode[] = [];
	/** Provide classes to set the tree width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the vertical spacing between items. */
	export let spacing: CssClasses = 'space-y-1';

	// Props (children)
	/** Set open by default on load. */
	export let open = false;
	/** Set the tree disabled state */
	export let disabled = false;
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

	// Functionality
	/**
	 * expands all tree view items.
	 * @type {() => void}
	 */
	export function expandAll(): void {
		const detailsElements = [...tree.querySelectorAll('details.tree-item')] as HTMLDetailsElement[];
		detailsElements.forEach((details) => {
			if (!details.open) {
				const summary: HTMLElement | null = details.querySelector('summary.tree-item-summary');
				if (summary) summary.click();
			}
		});
	}
	/**
	 * collapses all tree view items.
	 * @type {() => void}
	 */
	export function collapseAll(): void {
		const detailsElements = [...tree.querySelectorAll('details.tree-item')] as HTMLDetailsElement[];
		detailsElements.forEach((details) => {
			if (details.open) {
				const summary: HTMLElement | null = details.querySelector('summary.tree-item-summary');
				if (summary) summary.click();
			}
		});
	}
	/**
	 * select all tree view items. Only available in Multiple selection mode.
	 * @type {() => void}
	 */
	export function selectAll(): void {
		const detailsElements = [...tree.querySelectorAll('details.tree-item')] as HTMLDetailsElement[];
		detailsElements.forEach((details) => {
			const input: HTMLInputElement | null = details.querySelector('input[type="checkbox"].tree-item-checkbox');
			if (!input) return;
			if (!input.checked) {
				// needs delay
				setTimeout(() => {
					input.click();
				}, 5);
			}
		});
	}
	/**
	 * deselect all tree view items. Only available in Multiple selection mode.
	 * @type {() => void}
	 */
	export function deselectAll(): void {
		const detailsElements = [...tree.querySelectorAll('details.tree-item')] as HTMLDetailsElement[];
		detailsElements.forEach((details) => {
			const input: HTMLInputElement | null = details.querySelector('input[type="checkbox"].tree-item-checkbox');
			if (!input) return;
			if (input.checked) {
				// needs delay
				setTimeout(() => {
					input.click();
				}, 5);
			}
		});
	}

	// Context API
	setContext('open', open);
	setContext('selection', selection);
	setContext('multiple', multiple);
	setContext('disabled', disabled);
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

	// Reactive
	$: classesBase = `${width} ${spacing} ${$$props.class ?? ''}`;

	// Locals
	let tree: HTMLDivElement;
</script>

<div
	bind:this={tree}
	class="tree {classesBase}"
	data-testid="tree"
	role="tree"
	aria-multiselectable={multiple}
	aria-label={labelledby}
	aria-disabled={disabled}
>
	{#if nodes && nodes.length > 0}
		<TreeViewDataDrivenItem bind:nodes />
	{:else}
		<slot />
	{/if}
</div>
