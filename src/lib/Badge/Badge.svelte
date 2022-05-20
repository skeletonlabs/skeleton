<script lang="ts">
	export let background: string = 'bg-surface-500';
	export let color: string = 'text-white';
	export let fill: string = 'fill-white';
	export let rounded: string = 'rounded';
	export let icon: boolean = false;
	
	// Base Classes
	let cBaseBadge: string = 'inline-flex items-center space-x-2 text-xs font-semibold';
	let cBaseIcon: string = icon ? ' w-[18px] h-[18px] justify-center' : ' px-1.5 py-[3px]';

	// If icon, set rounded-full
	if (icon) { rounded = 'rounded-full'; }

	// Responsive
	$: classesBadge = `${cBaseBadge} ${cBaseIcon} ${background} ${color} ${fill} ${rounded} ${$$props.class}`;
</script>

<span data-testid="badge" class="badge {classesBadge}">

	<!-- Slot: Lead -->
	{#if $$slots.lead}<div><slot name="lead" /></div>{/if}

	<!-- Content -->
	<div><slot /></div>

	<!-- Slot: Trail -->
	{#if $$slots.trail}<div><slot name="trail" /></div>{/if}

</span>


