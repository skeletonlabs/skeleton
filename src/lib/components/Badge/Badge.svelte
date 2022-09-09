<script lang="ts">
	// Props
	export let icon: boolean = false;
	export let background: string = 'bg-surface-300 dark:bg-surface-600';
	export let fill: string = 'fill-black dark:fill-white';
	export let text: string = 'text-xs';
	export let color: string = 'text-black dark:text-white';
	export let padding: string = 'px-2 py-[3px]';
	export let rounded: string = 'rounded';
	export let shadow: string | undefined = undefined;

	// Base Classes
	let cBaseBadge: string = 'font-semibold inline-flex items-center space-x-2 whitespace-nowrap';

	// Reactive Classes
	$: classesIcon = icon ? 'w-5 h-5 justify-center rounded-full translate-x-1 -translate-y-1' : `${padding} ${rounded}`;
	$: classesBadge = `${cBaseBadge} ${classesIcon} ${background} ${fill} ${text} ${color} ${shadow} ${$$props.class}`;
</script>

<span data-testid="badge" class="badge {classesBadge}">
	<!-- Slot: Lead -->
	{#if $$slots.lead}<div class="badge-lead"><slot name="lead" /></div>{/if}
	<!-- Slot: Default -->
	<div class="badge-content"><slot /></div>
	<!-- Slot: Trail -->
	{#if $$slots.trail}<div class="badge-trail"><slot name="trail" /></div>{/if}
</span>
