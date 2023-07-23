<!-- To access props and events using reference -->
<svelte:options accessors />

<script lang="ts">
	import { getContext, createEventDispatcher, onMount } from 'svelte';

	// Types
	import type { CssClasses, SvelteEvent, TreeViewItem } from '../../index.js';

	// Props (state)
	/** Set open by default on load. */
	export let open = false;
	/**
	 * Set the radio group binding value.
	 * @type {unknown}
	 */
	export let group: unknown = undefined;
	/**
	 * Set a unique name value for the input.
	 * @type {string | undefined}
	 */
	export let name: string | undefined = undefined;
	/**
	 * Set the input's value.
	 * @type {unknown}
	 */
	export let value: unknown = undefined;
	/**
	 * Provide children references to support relational checking.
	 * @type {TreeViewItem[]}
	 */
	export let children: TreeViewItem[] = [];
	// Props (styles)
	/** Provide classes to set the horizontal spacing. */
	export let spacing: CssClasses = 'space-x-4';
	// Context API
	/** Enable tree-view selection */
	export let selection: boolean = getContext('selection');
	/** Enable selection of multiple items. */
	export let multiple: boolean = getContext('multiple');
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
	export let regionSummary: CssClasses = getContext('regionSummary');
	/** Provide arbitrary classes to the symbol icon region. */
	export let regionSymbol: CssClasses = getContext('regionSymbol');
	/** Provide arbitrary classes to the children region. */
	export let regionChildren: CssClasses = getContext('regionChildren');

	// Locals
	let checked = false;
	let indeterminate = false;

	// Functionality
	// Svelte Checkbox Bugfix
	// GitHub: https://github.com/sveltejs/svelte/issues/2308
	// REPL: https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1
	$: if (multiple) updateCheckbox(group);
	$: if (multiple) updateGroup(checked);
	function updateCheckbox(group: unknown) {
		if (!Array.isArray(group)) return;
		checked = group.indexOf(value) >= 0;
	}
	function updateGroup(checked: boolean) {
		if (!Array.isArray(group)) return;

		const index = group.indexOf(value);
		if (checked) {
			if (index < 0) {
				group = [...group, value];
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}

	// called when a child's value is changed
	function onChildrenValueChange(event: SvelteEvent<Event, HTMLInputElement>, child: TreeViewItem) {
		if (multiple) {
			// all groups must be arrays in multiple mode
			if (!Array.isArray(group)) return;
			const childrenValues = children.map((c) => c.value);
			const index = group.indexOf(value);
			// all children are checked => check parent
			if (childrenValues.every((c) => Array.isArray(child.group) && child.group.includes(c))) {
				if (index < 0) {
					indeterminate = false;
					group = [...group, value];
				}
				// not all children are checked => uncheck parent
			} else {
				if (index >= 0) {
					group.splice(index, 1);
					group = group;
				}
				// set parent to indeterminate if some of the children are checked
				indeterminate = childrenValues.some((c) => Array.isArray(child.group) && child.group.includes(c));
			}
			// single selection mode
		} else {
			// child is checked, but parent isn't checked
			if (event.currentTarget.checked && group !== value) {
				// check parent
				group = value;
			}
		}
	}

	// called every time the group's value changes
	function onGroupValueChange(_group: unknown) {
		// don't override children groups when parent is set to indeterminate
		if (children.length === 0 || indeterminate) return;

		if (multiple) {
			// group must by array in multiple mode
			if (!Array.isArray(_group)) return;
			const index = _group.indexOf(value);

			const checkChild = (child: TreeViewItem) => {
				if (!child || !Array.isArray(child.group)) return;
				if (child.group.indexOf(child.value) < 0) {
					// child.group = [...child.group, child.value] won't work here.
					child.group.push(child.value);
					child.group = child.group;
				}
			};
			const uncheckChild = (child: TreeViewItem) => {
				if (!child || !Array.isArray(child.group)) return;
				const childIndex = child.group.indexOf(child.value);
				if (childIndex >= 0) {
					child.group.splice(childIndex, 1);
					child.group = child.group;
				}
			};

			// if parent is checked, check all children, else uncheck all children
			children.forEach(index >= 0 ? checkChild : uncheckChild);
			// single selection mode
		} else {
			// parent is not checked
			if (_group !== value) {
				// uncheck all children
				children.forEach((child) => {
					child.group = [];
				});
			}
		}
	}
	$: onGroupValueChange(group);

	// events
	const dispatch = createEventDispatcher();
	/** @event {{ open: boolean }} toggle - Fires on open or close. */
	$: dispatch('toggle', { open: open });

	// Lifecycle
	onMount(() => {
		children.forEach((child) => {
			child.$on('change', (event) => onChildrenValueChange(event as SvelteEvent<Event, HTMLInputElement>, child));
		});
	});

	// Classes
	const cBase = '';
	// [&::-webkit-details-marker]:hidden -> hide default arrow on webkit browsers
	const cSummary = 'list-none [&::-webkit-details-marker]:hidden flex items-center cursor-pointer';
	const cSymbol = 'fill-current w-3 text-center transition-transform duration-[200ms]';
	const cChildren = '';

	// Reactive State Classes
	$: classesCaretState = open && $$slots.children ? caretOpen : caretClosed;
	// Reactive Classes
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesSummary = `${cSummary} ${spacing} ${rounded} ${padding} ${hover} ${regionSummary}`;
	$: classesSymbol = `${cSymbol} ${classesCaret} ${regionSymbol}`;
	$: classesCaret = `${classesCaretState}`;
	$: classesHyphen = `${hyphenOpacity}`;
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
		{#if selection && name && group}
			{#if multiple}
				<input class="checkbox" type="checkbox" {name} {value} bind:checked bind:indeterminate on:click on:change />
			{:else}
				<input class="radio" type="radio" bind:group {name} {value} on:click on:change />
			{/if}
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
