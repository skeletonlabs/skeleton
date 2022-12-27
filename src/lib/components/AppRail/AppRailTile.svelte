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
	export let tag = 'button';
	/** Provide the vislble text label. */
	export let label = '';

	// Props (region)
	/** Provide abitrary classes to style the icon region. */
	export let regionIcon = '';
	/** Provide abitrary classes to style the label region. */
	export let regionLabel = '';

	// Context
	export let selected: Writable<any> = getContext('selected');
	export let active: Writable<any> = getContext('active');
	export let hover: Writable<any> = getContext('hover');

	// Base Classes
	const cBase = 'unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer';
	const cLabel = 'text-xs text-center';

	// Input Handler
	function onClickHandler(event: any): void {
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

<!-- @component A navigation tile for the App Rail. -->

<!-- NOTE: avoid forwarding events on <svelte:element> tags -->
<!-- https://github.com/skeletonlabs/skeleton/issues/727#issuecomment-1356859261 -->
<div on:click={onClickHandler} on:keydown on:keyup on:keypress>
	<!-- NOTE: do not add event forwarding to <svelte:element> tags. See issue above. -->
	<svelte:element this={tag} {...prunedRestProps()} class="app-rail-tile {classesBase}">
		<!-- Slot: Default (icon) -->
		<div class="app-rail-tile-icon {regionIcon}"><slot /></div>
		<!-- Label -->
		{#if label}<div class="app-rail-tile-label {classesLabel}">{label}</div>{/if}
	</svelte:element>
</div>
