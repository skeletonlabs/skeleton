<script lang="ts">
	import { getContext, createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props (state)
	/** Set open by default on load. */
	export let open = false;
	/** Set selection state. */
	export let selected = false;
	// Props (styles)
	/** Provide classes to set the horizontal spacing. */
	export let spacing: CssClasses = 'space-x-4';
	// Context API
	// ---
	/** Provide classes to set the tree item padding styles. */
	export let padding: CssClasses = getContext('padding');
	/** Provide classes to set the tree children indentation */
	export let indent: CssClasses = getContext('indent');
	/** Provide classes to set the tree item hover styles. */
	export let hover: CssClasses = getContext('hover');
	/** Provide classes to set the tree item rounded styles. */
	export let rounded: CssClasses = getContext('rounded');
	// ---
	/** Set the rotation of the item caret in the open state. */
	export let caretOpen: CssClasses = getContext('caretOpen');
	/** Set the rotation of the item caret in the closed state. */
	export let caretClosed: CssClasses = getContext('caretClosed');
	/* Set the hyphen symbol opacity for non-expandable rows. */
	export let hyphenOpacity: CssClasses = getContext('hyphenOpacity');
	// ---
	/** Provide arbitrary classes to the tree item summary region. */
	export let regionSummary: CssClasses = '';
	/** Provide arbitrary classes to the symbol icon region. */
	export let regionSymbol: CssClasses = getContext('regionSymbol');
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = getContext('regionChildren');

	// Locals
	let selection: 'multi' | 'single' | 'none' = getContext('selection');
	let treeItem: HTMLDetailsElement;

	// events
	const dispatch = createEventDispatcher();
	/** @event {{ open: boolean }} toggle - Fires on open or close. */
	$: dispatch('toggle', { open: open });

	// Classes
	const cBase = '';
	const cSummary = 'list-none flex items-center cursor-pointer';
	const cSymbol = 'fill-current w-3 text-center transition-transform duration-[200ms]';
	const cChildren = '';

	// Functionality
	function onMultiSelectionChange() {
		// select/unselect all children
		treeItem.querySelectorAll('input[type="checkbox"].tree-item-checkbox').forEach((input) => {
			(input as HTMLInputElement).checked = selected;
		});
		// update state of parents
		getParents().forEach((parent) => {
			let checkboxes = [...parent.querySelectorAll('input[type="checkbox"].tree-item-checkbox')] as HTMLInputElement[];
			// save parents checkbox, and delete it from array
			const parentCheckbox = checkboxes[0];
			checkboxes = checkboxes.slice(1);
			// all children are checked => check parent
			if (checkboxes.every((checkbox) => checkbox.checked)) {
				parentCheckbox.checked = true;
				parentCheckbox.indeterminate = false;
			}
			// some children are checked => Indeterminate parent
			else if (checkboxes.some((checkbox) => checkbox.checked)) {
				parentCheckbox.checked = false;
				parentCheckbox.indeterminate = true;
			}
			// no children are checked => uncheck parent
			else {
				parentCheckbox.checked = false;
				parentCheckbox.indeterminate = false;
			}
		});
	}

	function getParents(): HTMLDetailsElement[] {
		let treeItemParents: HTMLDetailsElement[] = [];
		let currentParent = treeItem.parentElement;

		// get all parents until the first div with class 'tree' (root)
		while (currentParent && !currentParent.classList.contains('tree')) {
			if (currentParent.tagName === 'DETAILS') treeItemParents.push(currentParent as HTMLDetailsElement);

			currentParent = currentParent.parentElement;
		}

		return treeItemParents;
	}

	// Reactive State Classes
	$: classesCaretState = open ? caretOpen : caretClosed;
	// $: classesCaretVisible = $$slots.children ? 'block' : 'hidden';
	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesSummary = `${cSummary} ${spacing} ${rounded} ${padding} ${hover} ${regionSummary}`;
	$: classesSymbol = `${cSymbol} ${classesCaret} ${regionSymbol}`;
	$: classesCaret = `${classesCaretState}`;
	$: classesHyphen = `${hyphenOpacity}`;
	$: classesChildren = `${cChildren} ${indent} ${regionChildren}`;

	$: console.log(selected);
</script>

<details bind:open class="tree-item {classesBase}" data-testid="tree-item" bind:this={treeItem}>
	<summary
		class="tree-item-summary {classesSummary}"
		role="treeitem"
		aria-selected={selected}
		aria-expanded={$$slots.children ? open : undefined}
		on:click
		on:keydown
		on:keyup
	>
		<!-- Symbol -->
		<div class="tree-summary-symbol {classesSymbol}">
			{#if $$slots.children}
				<!-- SVG Caret -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-3 {classesHyphen}">
					<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
				</svg>
			{/if}
		</div>
		<!-- Selection -->
		{#if selection === 'multi'}
			<input class="checkbox tree-item-checkbox" type="checkbox" bind:checked={selected} on:change={onMultiSelectionChange} on:change />
		{/if}
		<!-- Slot: Lead -->
		{#if $$slots.lead}
			<div class="tree-item-lead">
				<slot name="lead" />
			</div>
		{/if}
		<!-- Slot: Content -->
		<div class="tree-item-content">
			<slot />
		</div>
	</summary>
	<div class="tree-item-children {classesChildren}" role="group">
		<slot name="children" />
	</div>
</details>
