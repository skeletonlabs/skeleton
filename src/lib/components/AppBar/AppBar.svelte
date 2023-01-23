<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content on the left end of the bar, e.g. a logo.
	 * @slot trail - Provides content on the right end of the bar, e.g. navigation elements.
	 */

	// Props (base)
	/** Provide classes to set background color. */
	export let background = 'bg-surface-100-800-token';
	/** Provide classes to set border styles. */
	export let border = '';
	/** Provide classes to set padding. */
	export let padding = 'p-4';
	/** Provide classes to define a box shadow. */
	export let shadow = '';
	/** Provide classes to set the vertical spacing between rows. */
	export let space = 'space-y-4';
	/** Provide classes to set grid columns for the main row. */
	export let gridColumns = 'grid-cols-[auto_1fr_auto]';
	/** Provide classes to set gap spacing for the main row. */
	export let gap = 'gap-4';

	// Props (regions)
	/** Provide abitrary classes to style the top (main) row. */
	export let regionRowMain = '';
	/** Provide abitrary classes to style the bottom (headline) row. */
	export let regionRowHeadline = '';
	/** Classes to apply to the lead slot container element */
	export let slotLead = '';
	/** Classes to apply to the default slot container element */
	export let slotDefault = '';
	/** Classes to apply to the trail slot container element */
	export let slotTrail = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby = '';

	// Base Classes
	const cBase = 'flex flex-col space-y-4';
	// ---
	const cRowMain = 'grid items-center'; //  bg-blue-500
	const cRowHeadline = ''; //  bg-green-500
	// ---
	const cSlotLead = 'flex-none flex justify-between items-center';
	const cSlotDefault = 'flex-auto';
	const cSlotTrail = 'flex-none flex items-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${border} ${space} ${padding} ${shadow} ${$$props.class ?? ''}`;
	$: classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
	$: classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
	$: classesSlotLead = `${cSlotLead} ${slotLead}`; // bg-red-500
	$: classesSlotDefault = `${cSlotDefault} ${slotDefault}`; // bg-blue-500
	$: classesSlotTrail = `${cSlotTrail} ${slotTrail}`; // bg-green-500
</script>

<div class="app-bar {classesBase}" data-testid="app-bar" role="toolbar" aria-label={label} aria-labelledby={labelledby}>
	<!-- Row: Main -->
	<div class="app-bar-row-main {classesRowMain}">
		<!-- Slot: lead -->
		{#if $$slots.lead}
			<div class="app-bar-slot-lead {classesSlotLead}"><slot name="lead" /></div>
		{/if}
		<!-- Slot: default -->
		<div class="app-bar-slot-default {classesSlotDefault}"><slot /></div>
		<!-- Slot: trail -->
		{#if $$slots.trail}
			<div class="app-bar-slot-trail {classesSlotTrail}"><slot name="trail" /></div>
		{/if}
	</div>
	<!-- Row: Headline -->
	{#if $$slots.headline}
		<div class="app-bar-row-headline {classesRowHeadline}"><slot name="headline" /></div>
	{/if}
</div>
