<script lang="ts">
	import { getContext, createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props (state)
	/** Set open by default on load. */
	export let open = false;
	/** tree item checked, if undefined the checkbox is set to indeterminate */
	export let checked: boolean | undefined = false;

	// Classes
	const cBase = 'cursor-pointer text-left w-full space-y-2';
	const cSummary = 'list-none flex items-center space-x-2';
	const cControlCaret = 'fill-current w-3 transition-transform duration-[200ms]';
	const cCheckbox = 'checkbox';
	const cChildren = '';

	// Context API
	/** Provide checkboxes on tree items */
	export let checkable = getContext('checkable');
	// ---
	/** Provide classes to set the tree item padding styles. */
	export let padding: CssClasses = getContext('padding');
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
	export let regionSummary: CssClasses = getContext('regionSummary');
	/** Provide arbitrary classes to the caret icon region. */
	export let regionCaret: CssClasses = getContext('regionCaret');
	/** Provide arbitrary classes to the checkbox region. */
	export let regionCheckbox: CssClasses = getContext('regionCheckbox');
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = getContext('regionChildren');

	// locals
	let treeItem: HTMLDivElement;
	let children: HTMLSpanElement;

	// Functionality
	function onCheckChange(event: Event) {
		// check/uncheck all children
		children.querySelectorAll('input[type=checkbox]').forEach((cb) => {
			(cb as HTMLInputElement).checked = checked!;
		});
		/** @event {{ event }} check - Fires on checkbox check/uncheck.  */
		dispatch('check', event);
	}

	function onChildrenCheckChange(event: Event) {
		const childrenChecks: HTMLInputElement[] = [...children.querySelectorAll('input[type=checkbox]')] as HTMLInputElement[];
		if (childrenChecks.every((childCheck) => childCheck.checked)) checked = true;
		else if (childrenChecks.every((childCheck) => !childCheck.checked)) checked = false;
		else checked = undefined;

		/** @event {{ event }} childCheck - Fires when a child is checked/unchecked */
		dispatch('childCheck', event);
	}

	function onKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowRight':
				// move focus to first child
				if (open) children.firstElementChild?.querySelector('summary')?.focus();
				// open node
				else open = true;
				break;
			case 'ArrowLeft':
				// close node
				if (open) open = false;
				// move focus to parent
				else {
					if (treeItem.parentElement?.parentElement?.nodeName === 'DETAILS')
						treeItem.parentElement?.parentElement?.querySelector('summary')?.focus();
				}
				break;
		}
	}

	// Reactive Classes
	$: classesBase = `${cBase} ${padding} ${hover} ${rounded} ${$$props.class ?? ''}`;
	$: classesSummary = `${cSummary} ${regionSummary}`;
	$: classesCaretState = open ? caretOpen : caretClosed;
	$: classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
	$: classesCheckbox = `${cCheckbox} ${regionCheckbox}`;
	$: classesChildren = `${cChildren} ${regionChildren}`;
</script>

<div
	role="treeitem"
	aria-selected={checkable && checked !== undefined ? checked : false}
	aria-expanded={$$slots.children ? open : undefined}
	bind:this={treeItem}
>
	<details bind:open class="tree-item {classesBase}" data-testid="tree-item" on:keydown|stopPropagation={onKeyDown}>
		<summary class="tree-item-summary {classesSummary}">
			<!-- Caret -->
			{#if $$slots.children}
				<div class="tree-summary-caret {classesControlCaret}">
					<!-- SVG Caret -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
						/>
					</svg>
				</div>
			{/if}
			<!-- Checkbox -->
			{#if checkable}
				<input
					class="tree-item-checkbox {classesCheckbox}"
					type="checkbox"
					bind:checked
					indeterminate={checked === undefined}
					on:change={onCheckChange}
				/>
			{/if}
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
		<span class="tree-item-children {classesChildren}" bind:this={children} on:change={onChildrenCheckChange}>
			<slot name="children" />
		</span>
	</details>
</div>
