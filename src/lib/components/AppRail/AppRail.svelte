<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content at the top of the rail, e.g. a logo.
	 * @slot trail - Provides content at the bottom of the rail, e.g. account.
	 */

	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { CSS } from '$lib';

	// Props
	/** Provide a writable store to maintain navigation selection.
	 * @type {writeable(any)}
	 */
	export let selected: Writable<any> = writable(undefined);
	/** Provide classes to set the background color. */
	export let background:CSS = 'bg-surface-100-800-token';
	/** Provide classes to set the tile active tile background. */
	export let active:CSS = 'bg-primary-active-token';
	/** Provide classes to set the tile hover background color. */
	export let hover:CSS = 'bg-primary-hover-token';
	/** Provide classes to set the width. */
	export let width:CSS = 'w-[70px] sm:w-20';
	/** Provide classes to set the height. */
	export let height:CSS = 'h-full';
	/** Provide a class to set the grid gap. */
	export let gap:CSS = 'gap-0';

	// Props (regions)
	/** Provide arbitrary classes to the lead region. */
	export let regionLead = '';
	/** Provide arbitrary classes to the default region. */
	export let regionDefault = '';
	/** Provide arbitrary classes to the trail region. */
	export let regionTrail = '';

	// Context
	setContext('selected', selected);
	setContext('active', active);
	setContext('hover', hover);

	// Base Classes
	const cBase = 'grid grid-rows-[auto_1fr_auto] overflow-y-auto';

	// Reactive
	$: classesBase = `${cBase} ${background} ${width} ${height} ${gap} ${$$props.class || ''}`;
</script>

<!-- @component A side navigation rail component. -->

<div class="app-rail {classesBase}">
	<!-- Slot: lead -->
	<div class="app-bar-lead {regionLead}"><slot name="lead" /></div>
	<!-- Slot: Default -->
	<div class="app-bar-default {regionDefault}"><slot /></div>
	<!-- Slot: lead -->
	<div class="app-bar-trail {regionTrail}"><slot name="trail" /></div>
</div>
