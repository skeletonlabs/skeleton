<script lang="ts">
	export let background: string = 'bg-surface-500';
	export let color: string = 'text-white';
	export let fill: string = 'fill-white';
	export let rounded: string = 'rounded';
	export let icon: boolean = false;
	
	// Styles
	let cBase: string = 'inline-flex items-center space-x-2 text-xs font-semibold';
	cBase += icon ? ' w-[18px] h-[18px] justify-center' : ' px-1.5 py-[3px]';
	if (icon) { rounded = 'rounded-full'; }

	// Responsive
	$: classes = `${cBase} ${background} ${color} ${fill} ${rounded} ${$$props.class}`;
</script>

<span data-testid="badge" class="badge {classes}">
	<!-- Icon: Lead -->
	{#if $$slots.lead}<div><slot name="lead" /></div>{/if}
	<!-- Content -->
	<div><slot /></div>
	<!-- Icon: Trail -->
	{#if $$slots.trail}<div><slot name="trail" /></div>{/if}
</span>


