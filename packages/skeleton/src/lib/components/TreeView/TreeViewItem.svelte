<!-- To access props and events using reference -->
<svelte:options accessors />

<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} lead - Allows for an optional leading element, such as an icon.
	 * @slot {{}} children - Provide TreeView item children.
	 */
	import { getContext, createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses, SvelteEvent, TreeViewItem } from '../../index.js';

	// Props (state)
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
	/** Set open by default on load. */
	export let open: boolean = getContext('open');
	/** Enable tree-view selection */
	export let selection: boolean = getContext('selection');
	/** Enable selection of multiple items. */
	export let multiple: boolean = getContext('multiple');
	/** Set the tree item disabled state */
	export let disabled: boolean = getContext('disabled');
	/** Set the check state to indeterminate(-). */
	export let indeterminate = false;
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

	// Props (work-around)
	/** Don't use this prop, workaround until svelte implements conditional slots */
	export let hideLead = false;
	/** Don't use this prop, workaround until svelte implements conditional slots */
	export let hideChildren = false;

	// Locals
	let checked = false;
	let treeItem: HTMLDetailsElement;
	let childrenDiv: HTMLDivElement;

	// Functionality
	function onSummaryClick(event: MouseEvent) {
		// prevent any action when disabled
		if (disabled) event.preventDefault();
	}
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
				group.push(value);
				group = group;
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}

	// called when a child's value is changed
	function onChildValueChange() {
		if (multiple) {
			// all groups must be arrays in multiple mode
			if (!Array.isArray(group)) return;
			const childrenValues = children.map((c) => c.value);
			const childrenGroup = children[0].group;
			const index = group.indexOf(value);
			// at least one child is indeterminate => indeterminate item
			if (children.some((c) => c.indeterminate)) {
				indeterminate = true;
			}
			// all children are checked => check item
			else if (childrenValues.every((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
				indeterminate = false;
				if (index < 0) {
					group.push(value);
					group = group;
				}
			}
			// not all children are checked => indeterminate item
			else if (childrenValues.some((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
				indeterminate = true;
			}
			// all children are unchecked => uncheck item
			else {
				indeterminate = false;
				if (index >= 0) {
					group.splice(index, 1);
					group = group;
				}
			}
		}
		// single selection mode
		else {
			if (group !== value) {
				// check item
				group = value;
			}
		}
		// important to notify parent of item
		dispatch('change');
	}

	// used to update children of item when checked / unchecked in multiple mode
	export function onParentChange() {
		if (!multiple || !children || children.length === 0) return;

		// group must by array in multiple mode
		if (!Array.isArray(group)) return;
		const index = group.indexOf(value);

		const checkChild = (child: TreeViewItem) => {
			if (!child || !Array.isArray(child.group)) return;
			child.indeterminate = false;
			if (child.group.indexOf(child.value) < 0) {
				// child.group = [...child.group, child.value] won't work here.
				child.group.push(child.value);
				child.group = child.group;
			}
		};
		const uncheckChild = (child: TreeViewItem) => {
			if (!child || !Array.isArray(child.group)) return;
			child.indeterminate = false;
			const childIndex = child.group.indexOf(child.value);
			if (childIndex >= 0) {
				child.group.splice(childIndex, 1);
				child.group = child.group;
			}
		};

		children.forEach((child) => {
			// if parent is checked, check all children, else uncheck all children
			index >= 0 ? checkChild(child) : uncheckChild(child);
			// notify children to update values
			child.onParentChange();
		});
	}

	// used to update children of item when checked / unchecked in single mode
	$: if (!multiple && group) {
		if (group !== value) {
			// uncheck all children
			children.forEach((child) => {
				if (child) child.group = [];
			});
		}
	}

	// events
	const dispatch = createEventDispatcher();
	/** @event {{ open: boolean }} toggle - Fires on open or close. */
	$: dispatch('toggle', { open: open });

	// whenever children are changed, reassign on:change events.
	$: children.forEach((child) => {
		if (child) child.$on('change', () => onChildValueChange());
	});

	// A11y Key Down Handler
	function onKeyDown(event: SvelteEvent<KeyboardEvent, HTMLDivElement>): void {
		function getRootTree(): HTMLDivElement | undefined {
			let currentElement: HTMLElement | null = treeItem;
			while (currentElement !== null) {
				if (currentElement.classList.contains('tree')) return currentElement as HTMLDivElement;
				currentElement = currentElement.parentElement;
			}
			return undefined;
		}

		let rootTree: HTMLDivElement | undefined = undefined;
		let lastVisibleElement: HTMLElement | undefined | null = null;

		switch (event.code) {
			case 'ArrowRight':
				if (!open) open = true;
				else if ($$slots.children && !hideChildren) {
					// focus on first child
					const child = childrenDiv.querySelector<HTMLElement>('details>summary');
					if (child) child.focus();
				}
				break;
			case 'ArrowLeft':
				if (open) open = false;
				else {
					// focus on parent
					const parent = treeItem.parentElement?.parentElement;
					if (parent && parent.tagName === 'DETAILS') parent.querySelector<HTMLElement>('summary')?.focus();
				}
				break;
			case 'Home':
				event.preventDefault();
				rootTree = getRootTree();
				// focus on first node
				if (rootTree) rootTree?.querySelector('summary')?.focus();
				break;
			case 'End':
				event.preventDefault();
				rootTree = getRootTree();
				// focus on last node
				if (rootTree) {
					const detailsElements = rootTree?.querySelectorAll('details');
					if (!detailsElements) return;
					// start from last details
					for (let i = detailsElements.length - 1; i >= 0; i--) {
						const details = detailsElements[i];
						// when details is on root level or the parent of details is open
						if (details.parentElement?.classList?.contains('tree') || details.parentElement?.parentElement?.getAttribute('open') !== null) {
							lastVisibleElement = details;
							break;
							// when details is not on root level but parent is not details
						} else if (details.parentElement?.parentElement?.tagName !== 'details') {
							lastVisibleElement = details.parentElement.parentElement;
							break;
						}
					}

					// focus on last visible node
					if (lastVisibleElement) {
						const summary = lastVisibleElement.querySelector('summary');
						if (summary) summary.focus();
					}
				}
				break;
		}
	}

	// Classes
	const cBase = '';
	// [&::-webkit-details-marker]:hidden -> hide default arrow on webkit browsers
	const cSummary = 'list-none [&::-webkit-details-marker]:hidden flex items-center cursor-pointer';
	const cSymbol = 'fill-current w-3 text-center transition-transform duration-[200ms]';
	const cChildren = '';
	const cDisabled = 'opacity-50 !cursor-not-allowed';

	// Reactive State Classes
	$: classesCaretState = open && $$slots.children && !hideChildren ? caretOpen : caretClosed;
	// Reactive Classes
	$: classesDisabled = disabled ? cDisabled : '';
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesSummary = `${cSummary} ${classesDisabled} ${spacing} ${rounded} ${padding} ${hover} ${regionSummary}`;
	$: classesSymbol = `${cSymbol} ${classesCaret} ${regionSymbol}`;
	$: classesCaret = `${classesCaretState}`;
	$: classesHyphen = `${hyphenOpacity}`;
	$: classesChildren = `${cChildren} ${indent} ${regionChildren}`;
</script>

<details bind:this={treeItem} bind:open class="tree-item {classesBase}" data-testid="tree-item" aria-disabled={disabled}>
	<summary
		class="tree-item-summary {classesSummary}"
		role="treeitem"
		aria-selected={selection ? checked : undefined}
		aria-expanded={$$slots.children ? open : undefined}
		on:click={onSummaryClick}
		on:click
		on:keydown={onKeyDown}
		on:keydown
		on:keyup
	>
		<!-- Symbol -->
		<div class="tree-summary-symbol {classesSymbol}">
			{#if $$slots.children && !hideChildren}
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
		{#if selection && name && group !== undefined}
			{#if multiple}
				<input
					class="checkbox tree-item-checkbox"
					type="checkbox"
					{name}
					{value}
					bind:checked
					bind:indeterminate
					on:click
					on:change
					on:change={onParentChange}
				/>
			{:else}
				<input class="radio tree-item-radio" type="radio" bind:group {name} {value} on:click on:change />
			{/if}
		{/if}

		<!-- Slot: Lead -->
		{#if $$slots.lead && !hideLead}
			<div class="tree-item-lead">
				<slot name="lead" />
			</div>
		{/if}
		<!-- Slot: Content -->
		<div class="tree-item-content">
			<slot />
		</div>
	</summary>
	<div bind:this={childrenDiv} class="tree-item-children {classesChildren}" role="group">
		<slot name="children" />
	</div>
</details>
