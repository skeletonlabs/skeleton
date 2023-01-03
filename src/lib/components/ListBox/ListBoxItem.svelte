<script lang="ts">
	// Slots
	/**
	 * @slot lead - Positioned on the left of each row item.
	 * @slot trail - Positioned on the right of each row item.
	 */

	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Props (a11y)
	/** Define a unique and semantic identifier for the item. */
	export let id = '';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let accent: string = getContext('accent');
	export let padding: string = getContext('padding');
	export let rounded: string = getContext('rounded');
	export let hover: string = getContext('hover');

	// Base Classes
	const cBase = 'flex items-center space-x-4 whitespace-nowrap cursor-pointer -outline-offset-[3px]';

	// Local
	let elemItem: HTMLElement;

	// Input Handler
	function onClickHandler(event: any): void {
		if (!$$props.value) return;
		typeof $selected === 'object' ? handleMultiSelect() : handleSingleSelect();
		/** @event {{ event }} click - Fires when the component is clicked.  */
		dispatch('click', event);
	}

	// Selection Handlers
	function handleSingleSelect(): void {
		selected.set($$props.value);
	}
	function handleMultiSelect(): void {
		const v: any = $$props.value;
		const local: any[] = $selected;
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
		/** @event {{ event: KeyboardEvent }} keydown - Fires when the component is focused and key is pressed.  */
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
<li
	bind:this={elemItem}
	class="listbox-item {classesBase}"
	{id}
	on:click={onClickHandler}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="option"
	aria-selected={isSelected}
	tabindex="0"
	data-testid="listbox-item"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<span class="listbox-item-lead"><slot name="lead" /></span>{/if}
	<!-- Slot: Default -->
	<div class="listbox-item-content flex-1"><slot /></div>
	<!-- Slot: Trail -->
	{#if $$slots.trail}<span class="listbox-item-trail"><slot name="trail" /></span>{/if}
</li>
