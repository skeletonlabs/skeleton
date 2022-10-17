<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Props (Listbox)
	export let selected: Writable<any> = writable(undefined);
	export let space: string = 'space-y-1';
	export let height: string | undefined = undefined;
	// Props (Item)
	export let accent: string = '!bg-active-token'; // '!' recommended
	export let padding: string = 'px-4 py-3';
	export let rounded: string = 'rounded-token';
	export let hover: string = 'bg-hover-token';
	// Props (regions)
	export let regionLabel: string | undefined = undefined;
	export let regionList: string | undefined = undefined;
	// Props (a11y)
	export let label: string | undefined = undefined;
	export let labelId: string | undefined = label?.toLowerCase().replace(' ', '-');

	// Context
	setContext('selected', selected);
	setContext('accent', accent);
	setContext('padding', padding);
	setContext('rounded', rounded);
	setContext('hover', hover);

	// Base Classes
	const cBase: string = 'space-y-4';
	const cLabel: string = 'font-bold text-lg';
	const cListBox: string = 'list-none overflow-y-auto';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesListBox = `${cListBox} ${height} ${space}`;
</script>

<div class="listbox {classesBase}" data-testid="listbox-area">
	<!-- Label -->
	{#if label}<span class="listbox-label {classesLabel} {regionLabel}" id={labelId}>{label}</span>{/if}
	<!-- Listbox -->
	<ul class="listbox-list {classesListBox} {regionList}" role="listbox" aria-labelledby={labelId}>
		<slot />
	</ul>
</div>
