<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Props (a11y)
	/** Define a unique and semantic identifier for the item. */
	export let id = '';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Context
	/**
	 * Provide a writable store to maintain list selection.
	 * @type {Writable<T> | Writable<T[]>}
	 * @default undefined
	 */
	// @ts-ignore
	export let selected: Writable<T> = getContext('selected');
	/**
	 * Provide classes to set the item selected background.
	 * @type {CSSClasses}
	 * @default '!bg-active-token'
	 * @remarks It's recommended that you prepend this with `!` to mark the class as `!important`.
	 */
	export let accent = getContext('accent');
	/**
	 * Provide classes to set the item padding styles.
	 * @default 'px-4 py-3'
	 * @type {CSSClasses}
	 */
	export let padding = getContext('padding');
	/**
	 * Provide classes to set the item border radius styles.
	 * @default 'rounded-token'
	 * @type {CSSClasses}
	 */
	export let rounded = getContext('rounded');
	/**
	 * Provide classes to set the item hover background color.
	 * @default 'bg-hover-token'
	 * @type {CSSClasses}
	 */
	export let hover = getContext('hover');

	/**
	 * @slot lead - Positioned on the left of each row item.
	 * @slot trail - Positioned on the right of each row item.
	 */

	// Base Classes
	const cBase = 'flex items-center space-x-4 whitespace-nowrap cursor-pointer';

	// Local
	let elemItem: HTMLElement;

	// Input Handler
	function onClickHandler(event: Event): void {
		dispatch('click', event);
		if (!$selected || !$$props.value) {
			return;
		}
		typeof $selected === 'object' ? handleMultiSelect() : handleSingleSelect();
	}

	// Selection Handlers
	function handleSingleSelect(): void {
		selected.set($$props.value);
	}
	function handleMultiSelect(): void {
		const v = $$props.value;
		const local = $selected;
		// Add
		if (local.includes(v)) {
			local.splice(local.indexOf(v), 1);
			selected.set(local);
		}
		// Remove
		else {
			selected.set([...local, v]);
		}
	}

	// A11y Key Down Handler
	function onKeyDown(event: KeyboardEvent): void {
		dispatch('keydown', event);
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			elemItem.click();
		}
	}

	// Reactive
	$: selectionMatch = () => {
		if ($selected && $$props.value) {
			return typeof $selected === 'object' ? $selected.includes($$props.value) : $selected === $$props.value;
		}
		return false;
	};
	$: isSelected = selectionMatch() ? true : false;
	$: classesHighlight = isSelected ? `${accent}` : `${hover}`;
	$: classesBase = `${cBase} ${padding} ${rounded} ${classesHighlight} ${$$props.class ?? ''}`;
</script>

<!-- prettier-ignore -->
<!-- @component
	@augments HTMLListElement
	@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
	@childOf ListBox
	@tutorial {https://www.skeleton.dev/components/listboxes}
 -->
<li bind:this={elemItem} class="listbox-item {classesBase}" {id} on:click={onClickHandler} on:keydown={onKeyDown} role="option" aria-selected={isSelected} tabindex="0" data-testid="listbox-item">
	<!-- Slot: Lead -->
	{#if $$slots.lead}<span><slot name="lead" /></span>{/if}
	<!-- Slot: Default -->
	<div class="flex-1 "><slot /></div>
	<!-- Slot: Trail -->
	{#if $$slots.trail}<span><slot name="trail" /></span>{/if}
</li>
