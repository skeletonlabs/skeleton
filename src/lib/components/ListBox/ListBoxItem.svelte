<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Props (a11y)
	export let id: string | undefined = undefined;

	// Event Handler
	const dispatch = createEventDispatcher();

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let accent: string = getContext('accent');
	export let padding: string = getContext('padding');
	export let rounded: string = getContext('rounded');
	export let hover: string = getContext('hover');

	// Base Classes
	const cBase: string = 'flex items-center space-x-4 whitespace-nowrap cursor-pointer';

	// Local
	let elemItem: HTMLElement;

	// Input Handler
	function onClickHandler(event: any): void {
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
	role="option"
	aria-selected={isSelected}
	tabindex="0"
	data-testid="listbox-item"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<span><slot name="lead" /></span>{/if}
	<!-- Slot: Default -->
	<div class="flex-1 "><slot /></div>
	<!-- Slot: Trail -->
	{#if $$slots.trail}<span><slot name="trail" /></span>{/if}
</li>
