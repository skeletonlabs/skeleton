<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Props
	export let open: boolean = false;
	export let hover: string = 'hover:bg-primary-500/10';
	export let spacing: string = 'space-y-2';
	export let padding: string = 'px-4 py-2';
	export let rounded: string = 'rounded';
	// A11y
	export let summaryId: string | undefined = undefined;
	export let contentId: string | undefined = undefined;

	// Base Classes
	const cBaseDetails: string = '';
	const cBaseSummary: string = 'list-none flex items-center space-x-4 cursor-pointer';
	const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing}`;
	$: classesSummary = `${cBaseSummary} ${padding} ${rounded} ${hover}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesDesc = `${padding}`;
</script>

<details bind:open class="accordion-item {classesDetails} {$$props.class}" data-testid="accordion-item">
	<!-- Summary -->
	<summary id={summaryId} class={classesSummary} aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="flex-auto" role="button"><slot name="summary" /></div>
		<!-- Caret -->
		<div class={classesIcon}>
			<SvgIcon name="angle-down" class="opacity-50" />
		</div>
	</summary>

	<!-- Content -->
	<div id={contentId} role="region" aria-labelledby={summaryId} class={classesDesc}>
		<slot name="content" />
	</div>
</details>

<style>
	/* Hide the left-hande arrows for details/summary  */
	/* Note: let's keep this localized in case users want the arrows elsewhere */
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
