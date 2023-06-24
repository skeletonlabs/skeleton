<script lang="ts">
	import { getContext, createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props (state)
	/** Set open by default on load. */
	export let open = false;
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
	// ---
	/** Provide arbitrary classes to the tree item summary region. */
	export let regionSummary: CssClasses = '';
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = getContext('regionCaret');
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = getContext('regionChildren');

	// events
	const dispatch = createEventDispatcher();
	/** @event {{ open: boolean }} toggle - Fires on open or close. */
	$: dispatch('toggle', { open: open });

	// Classes
	const cBase = '';
	const cSummary = 'list-none flex items-center cursor-pointer space-x-2';
	const cControlCaret = 'fill-current w-3 transition-transform duration-[200ms]';
	const cChildren = '';

	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesSummary = `${cSummary} ${regionSummary} ${rounded} ${padding} ${hover}`;
	$: classesCaretState = open ? caretOpen : caretClosed;
	$: classesCaretVisible = $$slots.children ? 'visible' : 'invisible';
	$: classesControlCaret = `${cControlCaret} ${classesCaretVisible} ${regionCaret} ${classesCaretState}`;
	$: classesChildren = `${cChildren} ${indent} ${regionChildren}`;
</script>

<details bind:open class="tree-item {classesBase}" data-testid="tree-item">
	<summary
		class="tree-item-summary {classesSummary}"
		role="treeitem"
		aria-selected="false"
		aria-expanded={$$slots.children ? open : undefined}
		on:click
		on:keydown
		on:keyup
	>
		<!-- Caret -->
		<div class="tree-summary-caret {classesControlCaret}">
			<!-- SVG Caret -->
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path
					d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
				/>
			</svg>
		</div>
		<!-- Lead -->
		{#if $$slots.lead}
			<div class="tree-item-lead">
				<slot name="lead" />
			</div>
		{/if}
		<div>
			<slot />
		</div>
	</summary>
	<div class="tree-item-children {classesChildren}" role="group">
		<slot name="children" />
	</div>
</details>
