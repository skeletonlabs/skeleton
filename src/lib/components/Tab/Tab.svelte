<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let borderWidth: string = getContext('borderWidth');
	export let borderColor: string = getContext('borderColor');
	export let color: string = getContext('color');
	export let fill: string = getContext('fill');
	export let hover: string = getContext('hover');
	export let rounded: string = getContext('rounded');

	// Props
	export let value: any = $selected.value;
	// A11y
	export let label: string = 'tab';

	// Base Classes
	const cBase: string = 'font-bold list-none py-2.5 px-4 flex items-center space-x-2 cursor-pointer';
	const cBorderColor: string = 'border-transparent';
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
	$: classesSelected = isSelected ? `${borderWidth} ${borderColor} ${color} ${fill}` : `${borderWidth} ${cBorderColor}`;
	$: classesBase = `${cBase} ${classesSelected} ${hover} ${rounded} ${$$props.class || ''}`;
	$: classesLead = isSelected ? `${fill}` : 'fill-surface-500';
	$: classesLabel = `${cBaseLabel}`;
</script>

<li
	class="tab ${classesBase}"
	on:click={() => {
		selected.set(value);
	}}
	data-testid="tab"
	on:keydown={onKeyDown}
	role="tab"
	tabindex="0"
>
	<!-- Slot: Lead -->
	{#if $$slots.lead}<div class="tab-lead {classesLead}"><slot name="lead" /></div>{/if}
	<!-- Slot: Default -->
	{#if $$slots.default}<div class="tab-label {classesLabel}" {label}><slot /></div>{/if}
</li>
