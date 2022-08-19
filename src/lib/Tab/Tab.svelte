<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let border: string = getContext('border');
	export let fill: string = getContext('fill');
	export let color: string = getContext('color');

	// Props
	export let value: any = $selected.value;
	// A11y
	export let label: string = 'tab';

	// Base Classes
	const cBase: string = 'list-none flex items-center py-2 px-4 space-x-2 cursor-pointer border-b-2 opacity-60 hover:opacity-100';
	const cBaseLabel: string = 'font-bold whitespace-nowrap';

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
	$: cHighlight = isSelected ? `${border} ${color} opacity-100` : 'border-transparent';
	$: classesBase = `${cBase} ${cHighlight}`;
	$: classesIcon = isSelected ? fill : 'fill-surface-500';
</script>

<li
	class="tab ${classesBase} {$$props.class||''}"
	on:click={() => { selected.set(value); }}
	data-testid="tab"
	on:keydown={onKeyDown}
	role="tab"
	tabindex="0"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<div class={classesIcon}><slot name="lead" /></div>{/if}

	<!-- Label -->
	{#if $$slots.default}<div class={cBaseLabel} {label}><slot /></div>{/if}
</li>
