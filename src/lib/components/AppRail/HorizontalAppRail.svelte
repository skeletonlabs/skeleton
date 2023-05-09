<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content to the left of the rail.
	 * @slot trail - Provides content to the right of the rail.
	 */

	// Types
	import type { CssClasses } from '$lib';

	import { setContext } from 'svelte';
	import { writable, type Readable, type Writable } from 'svelte/store';

	// Props
	/** Provide a writable or readable store to maintain navigation selection.
	 * @type {Writable(any) | Readable(any)}
	 */
	export let selected: Writable<any> | Readable<any> = writable(undefined);
	/** Provide classes to set the background color. */
	export let background: CssClasses = 'bg-surface-100-800-token';
	/** Provide classes to set the background color. */
	export let border: CssClasses = '';
	/** Provide classes to set the tile active tile background. */
	export let active: CssClasses = 'bg-primary-active-token';
	/** Provide classes to set the tile hover background color. */
	export let hover: CssClasses = 'bg-primary-hover-token';
	/** Provide classes to set the width. */
	export let width: CssClasses = 'w-full';
	/** Provide classes to set the height. */
	export let height: CssClasses = 'h-14 sm:h-18';
	/** Provide a class to set the grid gap. */
	export let gap: CssClasses = 'gap-0';

	// Props (regions)
	/** Provide arbitrary classes to the lead region. */
	export let regionLead: CssClasses = '';
	/** Provide arbitrary classes to the default region. */
	export let regionDefault: CssClasses = '';
	/** Provide arbitrary classes to the trail region. */
	export let regionTrail: CssClasses = '';

	// Context
	setContext('selected', selected);
	setContext('active', active);
	setContext('hover', hover);

	// Base Classes
	const cBase = 'grid grid-cols-[auto_1fr_auto] overflow-x-auto';
	const cRegionDefault = 'flex';

	// Reactive
	$: classesBase = `${cBase} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ''}`;
	$: classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
</script>

<!-- @component A horizontal navigation rail component. -->

<div class="app-rail {classesBase}" data-testid="app-rail">
	<!-- Slot: lead -->
	<div class="app-bar-lead {regionLead}"><slot name="lead" /></div>
	<!-- Slot: Default -->
	<div class="app-bar-default {classesRegionDefault}"><slot /></div>
	<!-- Slot: trail -->
	<div class="app-bar-trail {regionTrail}"><slot name="trail" /></div>
</div>
