<script lang="ts">
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Props (Listbox)
	/** Provide a writable store to maintain list selection.
	 * @type {writeable(any) | writable(any[])}
	 */
	export let selected: Writable<any> = writable(undefined);
	/** Provide classes to set vertical item spacing. */
	export let space = 'space-y-1';
	/** Provide to set scrollable listbox region height. */
	export let height = '';

	// Props (Item)
	/** Provide classes to set the item selected background. '!' recommended. */
	export let accent = '!bg-primary-active-token'; //
	/** Provide classes to set the item padding styles. */
	export let padding = 'px-4 py-3';
	/** Provide classes to set the item border radius styles. */
	export let rounded = 'rounded-token';
	/** Provide classes to set the item hover background color. */
	export let hover = 'bg-primary-hover-token';

	// Props (regions)
	/** Provide arbitrary classes to the label element. */
	export let regionLabel = '';
	/** Provide arbitrary classes to the scrollable listbox element. */
	export let regionList = '';

	// Props (a11y)
	/** Define a semantic ARIA label. */
	export let label = '';
	/**
	 * Set automatically based on the label text, but can be overwritten.
	 * @type {string}
	 */
	export let labelId: string = label?.toLowerCase().replace(' ', '-'); //AUDIT this doesn't seem to be consistently applied across Skeleton

	// Context
	setContext('selected', selected);
	setContext('accent', accent);
	setContext('padding', padding);
	setContext('rounded', rounded);
	setContext('hover', hover);

	// Base Classes
	const cBase = 'space-y-4';
	const cLabel = 'font-bold text-lg';
	const cListBox = 'list-none overflow-y-auto';

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
