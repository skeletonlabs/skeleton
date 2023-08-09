<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content at the top of the rail, e.g. a logo.
	 * @slot trail - Provides content at the bottom of the rail, e.g. account.
	 */

	import { setContext } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

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
	/** Provide classes to set the tile/anchor hover background color. */
	export let hover: CssClasses = 'bg-primary-hover-token';
	/** Provide classes to set the tile/anchor active tile background. */
	export let active: CssClasses = 'bg-primary-active-token';
	/** Provide classes to set the tile/anchor vertical spacing. */
	export let spacing: CssClasses = 'space-y-1';
	/** Provide classes to set the tile/anchor aspect ratio. */
	export let aspectRatio: CssClasses = 'aspect-square';

	// Context
	setContext('active', active);
	setContext('hover', hover);
	setContext('spacing', spacing);
	setContext('aspectRatio', aspectRatio);

	// Base Classes
	const cBase = 'grid grid-rows-[auto_1fr_auto] overflow-y-auto';
	const cRegionLead = 'box-border';
	const cRegionDefault = 'box-border';
	const cRegionTrail = 'box-border';

	// Reactive
	$: classesBase = `${cBase} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ''}`;
	$: classesRegionLead = `${cRegionLead} ${regionLead}`;
	$: classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
	$: classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
</script>

<!-- @component A vertical navigation rail component. -->

<div class="app-rail {classesBase}" data-testid="app-rail">
	<!-- Slot: lead -->
	<div class="app-bar-lead {classesRegionLead}"><slot name="lead" /></div>
	<!-- Slot: Default -->
	<div class="app-bar-default {classesRegionDefault}"><slot /></div>
	<!-- Slot: lead -->
	<div class="app-bar-trail {classesRegionTrail}"><slot name="trail" /></div>
</div>
