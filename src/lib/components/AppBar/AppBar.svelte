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
	export let shadow = 'shadow-lg';
	/** Provide classes to set horizontal spacing. */
	export let space = 'space-x-4';

	// Props (regions)
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
	const cBase = 'flex items-center';
	const cLead = 'flex-none flex justify-between items-center';
	const cCenter = 'flex-auto';
	const cTrail = 'flex-none flex items-center space-x-4';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${border} ${padding} ${shadow} ${space} ${$$props.class ?? ''}`;
	$: classesLead = `${cLead} ${slotLead}`;
	$: classesCenter = `${cCenter} ${slotDefault}`;
	$: classesTrail = `${cTrail} ${slotTrail}`;
</script>

<div class="app-bar {classesBase}" data-testid="app-bar" role="toolbar" aria-label={label} aria-labelledby={labelledby}>
	<!-- Slot: lead -->
	{#if $$slots.lead}
		<div class="app-bar-lead {classesLead}"><slot name="lead" /></div>
	{/if}

	<!-- Slot: center -->
	<div class="app-bar-center {classesCenter}"><slot /></div>

	<!-- Slot: trail -->
	{#if $$slots.trail}
		<div class="app-bar-trail {classesTrail}"><slot name="trail" /></div>
	{/if}
</div>
