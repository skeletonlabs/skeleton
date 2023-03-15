<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	// Types
	import type { CssClasses } from '$lib';

	// Event Handler
	const dispatch = createEventDispatcher<{ click: MouseEvent }>();

	// Props
	/**
	 * Provide a unique value, active tiles will be highlighted.
	 * @type {any}
	 */
	export let value: any | undefined = undefined;
	/** Provide the element tag. Button or Anchor recommended. */
	export let tag = 'button';
	/** Provide the vislble text label. */
	export let label = '';

	// Props (region)
	/** Provide arbitrary classes to style the icon region. */
	export let regionIcon: CssClasses = '';
	/** Provide arbitrary classes to style the label region. */
	export let regionLabel: CssClasses = '';

	// Context
	export let selected: Writable<CssClasses> = getContext('selected');
	export let active: Writable<CssClasses> = getContext('active');
	export let hover: Writable<CssClasses> = getContext('hover');

	// Base Classes
	const cBase = 'unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer';
	const cLabel = 'font-bold text-xs text-center';

	// Input Handler
	function onClickHandler(event: MouseEvent): void {
		if (!$selected || !value) return;
		$selected = value;
		/** @event {{ event }} click - Fires when the component is clicked.  */
		dispatch('click', event);
	}

	// Reactive
	$: classesActive = $selected && value && $selected === value ? `${active}` : '';
	$: classesBase = `${cBase} ${hover} ${classesActive} ${$$props.class || ''}`;
	$: classesLabel = `${cLabel} ${regionLabel}`;

	// RestProps
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<!-- @component A navigation tile for the App Rail component. -->

<div on:click={onClickHandler} on:click on:keydown on:keyup on:keypress>
	<!-- IMPORTANT: avoid forwarding events on <svelte:element> tags per: -->
	<!-- https://github.com/skeletonlabs/skeleton/issues/727#issuecomment-1356859261 -->
	<svelte:element this={tag} {...prunedRestProps()} class="app-rail-tile {classesBase}">
		<!-- Slot: Default (icon) -->
		{#if $$slots.default}
			<div class="app-rail-tile-icon {regionIcon}"><slot /></div>
		{/if}
		<!-- Label -->
		{#if label}
			<div class="app-rail-tile-label {classesLabel}">{label}</div>
		{/if}
	</svelte:element>
</div>
