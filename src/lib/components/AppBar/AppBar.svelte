<script lang="ts">
	// Props (base)
	export let background: string = 'bg-surface-100-800-token';
	export let border: string = '';
	export let padding: string = 'p-4 md:py-6';
	export let shadow: string = 'shadow-lg';
	export let space: string = 'space-x-4';
	// Props (slots)
	export let slotLead: string = '';
	export let slotDefault: string = '';
	export let slotTrail: string = '';
	// Props (a11y)
	export let label: string | undefined = undefined;
	export let labelledby: string | undefined = undefined;

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
