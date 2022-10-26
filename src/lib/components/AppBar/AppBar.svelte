<script lang="ts">
	// Slots
	/**
	 * @slot lead - Provides content on the left end of the bar, e.g. a logo.
	 * @slot trail - Provides content on the right end of the bar, e.g. navigation elements.
	 */

	// Props (base)
	/** Provide classes to set background color. */
	export let background: string = 'bg-surface-100-800-token';
	/** Provide classes to set border styles. */
	export let border: string = '';
	/** Provide classes to set padding. */
	export let padding: string = 'p-4 md:py-6';
	/** Provide classes to define a box shadow. */
	export let shadow: string = 'shadow-lg';
	/** Provide classes to set horizontal spacing. */
	export let space: string = 'space-x-4';

	// Props (regions)
	/** Classes to apply to the lead slot container element */
	export let slotLead: string = '';
	/** Classes to apply to the default slot container element */
	export let slotDefault: string = '';
	/** Classes to apply to the trail slot container element */
	export let slotTrail: string = '';

	// Props (a11y)
	/** Provide a semantic ID for the ARIA label. */
	export let label: string = '';
	/** Provide the ID of the element that labels the toolbar. */
	export let labelledby: string = '';

	// Base Classes
	const cBase: string = 'flex items-center';
	const cLead: string = 'flex-none flex justify-between items-center';
	const cCenter: string = 'flex-auto';
	const cTrail: string = 'flex-none flex items-center space-x-4';

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
