<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	// Context
	export let selected: Writable<any> = getContext('selected');

	// Props
	export let value: any = $selected.value;
	// A11y
	export let label: string = 'tab';

	// Base Classes
	const cBaseItem: string =
		'list-none flex items-center border-b-2 pb-2 px-4 space-x-2 hover:opacity-70 cursor-pointer';
	const cBaseLabel: string = 'font-semibold whitespace-nowrap';

	// A11y Input Handlers
	function onKeyDown(event: any): void {
		// Enter/Space to toggle element
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.target.click();
		}
	}

	// Reactive Classes
	$: isSelected = value == $selected;
	$: cHighlight = isSelected ? getContext('highlight') : 'border-transparent';
	$: cTextColor = isSelected ? getContext('color') : '';
	$: classesItem = `${cBaseItem} ${cTextColor} ${cHighlight}`;
	$: classesLabel = `${cBaseLabel}`;
</script>

<!-- REMOVED: aria-checked={isSelected} -->
<li
	class="tab
    ${classesItem}
    {$$props.class}"
	on:click={() => {
		selected.set(value);
	}}
	data-testid="tab"
	on:keydown={onKeyDown}
	role="tab"
	tabindex="0"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<span><slot name="lead" /></span>{/if}

	<!-- Label -->
	{#if $$slots.default}<span class={classesLabel} {label}><slot /></span>{/if}
</li>
