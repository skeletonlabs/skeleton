<script lang="ts">
	import type { CSSClasses } from '$lib';
	import { setContext, getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	// Props (Listbox)
	/**
	 * Provide a writable store to maintain list selection.
	 * @type {Writable<T> | Writable<T[]>}
	 * @default undefined
	 */
	export let selected = writable();
	/**
	 * Provide classes to set vertical item spacing.
	 * @type {CSSClasses}
	 */
	export let space: CSSClasses = 'space-y-1';
	/**
	 * Provide to set scrollable listbox region height.
	 * @type {CSSClasses}
	 * @remarks By default the ListBox will expand infinitely. Set a fixed height to enable overflow scrolling.
	 */
	export let height = '';
	// Props (regions)
	/**
	 * Provide arbitrary classes to the label element.
	 * @type {CSSClasses}
	 */
	export let regionLabel = '';
	/**
	 * Provide arbitrary classes to the scrollable listbox element.
	 * @type {CSSClasses}
	 */
	export let regionList = '';
	// Props (Item)
	/**
	 * Provide classes to set the item selected background.
	 * @type {CSSClasses}
	 * @default '!bg-active-token'
	 * @remarks It's recommended that you prepend this with `!` to mark the class as `!important`.
	 */
	export let accent = '!bg-active-token';
	/**
	 * Provide classes to set the item padding styles.
	 * @default 'px-4 py-3'
	 * @type {CSSClasses}
	 */
	export let padding = 'px-4 py-3';
	/**
	 * Provide classes to set the item border radius styles.
	 * @default 'rounded-token'
	 * @type {CSSClasses}
	 */
	export let rounded = 'rounded-token';
	/**
	 * Provide classes to set the item hover background color.
	 * @default 'bg-hover-token'
	 * @type {CSSClasses}
	 */
	export let hover = 'bg-hover-token';
	// Props (a11y)
	/**
	 * Define a semantic ARIA label.
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
	 */
	export let label: string = '';
	/**
	 * 	Set automatically based on the label text, but can be overwritten.
	 */
	export let labelId: string = label?.toLowerCase().replace(' ', '-');

	// Context
	setContext('selected', selected);
	setContext('accent', accent);
	setContext('padding', padding);
	setContext('rounded', rounded);
	setContext('hover', hover);

	// Base Classes
	const cBase: CSSClasses = 'space-y-4';
	const cLabel: CSSClasses = 'font-bold text-lg';
	const cListBox: CSSClasses = 'list-none overflow-y-auto';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesListBox = `${cListBox} ${height} ${space}`;
</script>

<!-- @component
	@augments HTMLInputElement `<input type='radio'>`
	@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
	@parentOf ListBoxItem
	@tutorial {https://www.skeleton.dev/components/listboxes}
 -->
<div class="listbox-area {classesBase}" data-testid="listbox-area">
	<!-- Label -->
	{#if label}<span class="listbox-label {classesLabel} {regionLabel}" id={labelId}>{label}</span>{/if}
	<!-- Listbox -->
	<ul class="listbox {classesListBox} {regionList}" role="listbox" aria-labelledby={labelId}>
		<slot />
	</ul>
</div>
