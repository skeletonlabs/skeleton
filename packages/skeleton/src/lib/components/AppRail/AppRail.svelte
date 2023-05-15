<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content at the top of the rail, e.g. a logo.
	 * @slot trail - Provides content at the bottom of the rail, e.g. account.
	 */

	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../..';

	// Props (rail)
	/** Rail: Provide classes to set the background color. */
	export let background: CssClasses = 'bg-surface-100-800-token';
	/** Rail: Provide classes to set the background color. */
	export let border: CssClasses = '';
	/** Rail: Provide classes to set the width. */
	export let width: CssClasses = 'w-20';
	/** Rail: Provide classes to set the height. */
	export let height: CssClasses = 'h-full';
	/** Rail: Provide a class to set the grid gap. */
	export let gap: CssClasses = 'gap-0';

	// Props (regions)
	/** Rail: Provide arbitrary classes to the lead region. */
	export let regionLead: CssClasses = '';
	/** Rail: Provide arbitrary classes to the default region. */
	export let regionDefault: CssClasses = '';
	/** Rail: Provide arbitrary classes to the trail region. */
	export let regionTrail: CssClasses = '';

	// Props (tiles/anchors)
	/** Tile: Provide classes to set the tile hover background color. */
	export let hover: CssClasses = 'bg-primary-hover-token';
	/** Tile: Provide classes to set the tile active tile background. */
	export let active: CssClasses = 'bg-primary-active-token';
	/** Tile: Provide classes to set the tile vertical spacing. */
	export let spacing: CssClasses = 'space-y-1';

	// Context
	setContext('active', active);
	setContext('hover', hover);
	setContext('spacing', spacing);

	// Base Classes
	const cBase = 'grid grid-rows-[auto_1fr_auto] overflow-y-auto';

	// Reactive
	$: classesBase = `${cBase} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ''}`;
</script>

<!-- @component A vertical navigation rail component. -->

<div class="app-rail {classesBase}" data-testid="app-rail">
	<!-- Slot: lead -->
	<div class="app-bar-lead {regionLead}"><slot name="lead" /></div>
	<!-- Slot: Default -->
	<div class="app-bar-default {regionDefault}"><slot /></div>
	<!-- Slot: lead -->
	<div class="app-bar-trail {regionTrail}"><slot name="trail" /></div>
</div>
