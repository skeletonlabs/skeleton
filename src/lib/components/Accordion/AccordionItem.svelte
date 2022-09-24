<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Props
	export let open: boolean = false;
	export let hover: string = 'hover:bg-primary-500/10';
	export let spacing: string = 'space-y-2';
	export let padding: string = 'px-4 py-2';
	export let rounded: string = 'rounded-lg';
	// Props (slot)
	export let slotSummary: string | undefined = '';
	export let slotContent: string | undefined = '';
	// A11y
	export let summaryId: string | undefined = '';
	export let contentId: string | undefined = '';

	// Base Classes
	const cBaseDetails: string = '';
	const cBaseSummary: string = 'list-none flex items-center space-x-4 cursor-pointer';
	const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing} ${$$props.class || ''}`;
	$: classesSummary = `${cBaseSummary} ${padding} ${rounded} ${hover} ${slotSummary}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesContent = `${padding} ${slotContent}`;
</script>

<details bind:open class="accordion-item {classesDetails}" data-testid="accordion-item">
	<!-- Summary -->
	<summary id={summaryId} class="accordion-summary {classesSummary}" aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div class="summary-lead"><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="summary-text flex-auto" role="button"><slot name="summary"><code>(Missing: Summary Slot)</code></slot></div>
		<!-- Caret -->
		<div class="summary-caret {classesIcon}">
			<SvgIcon name="angle-down" class="opacity-50" />
		</div>
	</summary>

	<!-- Content -->
	<div id={contentId} class="accordion-content {classesContent}" role="region" aria-labelledby={summaryId}>
		<slot name="content"><code>(Missing: Content Slot)</code></slot>
	</div>
</details>

<style>
	/* Hide the left-hande arrows for details/summary  */
	/* Note: let's keep this localized in case users want the arrows elsewhere */
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
