<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Event Handler
	const dispatch = createEventDispatcher();

	// Props
	/**
	 * Provide a unique value, active tiles will be highlighted.
	 * @type {any}
	 */
	export let value: any | undefined = undefined;
	/** Provide the element tag. Button or Anchor recommended. */
	export let tag: string = 'button';
	/** Provide the vislble text label. */
	export let label: string = '';
	/** Provide classes to set the background color. */
	export let background: string = 'bg-hover-token';

	// Props (region)
	/** Provide abitrary classes to style the icon region. */
	export let regionIcon: string = '';
	/** Provide abitrary classes to style the label region. */
	export let regionLabel: string = 'text-xs';

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let accent: Writable<any> = getContext('accent');

	// Base Classes
	const cBase: string = 'grid place-content-center place-items-center w-full aspect-square space-y-1.5';

	// Input Handler
	function onClickHandler(event: any): void {
		/** @event {{ event }} click - Fires when the component is clicked.  */
		dispatch('click', event);
		if (!$selected || !value) return;
		$selected = value;
	}

	// Reactive
	$: classesActive = $selected && value && $selected === value ? `${accent}` : '';
	$: classesBase = `${cBase} ${background} ${classesActive} ${$$props.class || ''}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<!-- @component A navigation tile for the App Rail. -->

<svelte:element this={tag} {...prunedRestProps()} class="app-rail-tile {classesBase}" on:click={onClickHandler} on:keydown on:keyup on:keypress>
	<!-- Slot: Default (icon) -->
	<div class="app-rail-tile-icon {regionIcon}"><slot /></div>
	<!-- Label -->
	{#if label}<div class="app-rail-tile-label {regionLabel}">{label}</div>{/if}
</svelte:element>
