<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} content - Allows for an optional leading element, such as an icon.
	 * @slot {{}} lead - Provide the summary details of each item.
	 * @slot {{}} summary - Provide the content details of each item.
	 */
	// Events:
	// FORWARDED: do not document these, breaks the type definition
	// DISPATCHED: document directly above the definition, like props (ex: paginator)

	import { getContext } from 'svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';

	// Props
	/** Defines the default open state on page load .*/
	export let open: boolean = false;
	/** Provide semantic ID for ARIA summary element. */
	export let summaryId: string = '';
	/** Provide semantic ID for ARIA content element. */
	export let contentId: string = '';
	/** Provide arbitrary styles for the summary element region. */
	export let regionSummary: string = '';
	/** Provide arbitrary styles for the summary element region. */
	export let regionContent: string = '';

	// Context
	/** Provide classes to set the hover background color. */
	export let hover: string = getContext('hover');
	/** Provide classes to set vertical spacing. */
	export let spacing: string = getContext('spacing');
	/** Provide classes to set padding for summary and content regions. */
	export let padding: string = getContext('padding');
	/** Provide classes to set summary border radius. */
	export let rounded: string = getContext('rounded');

	// Base Classes
	const cBaseDetails: string = '';
	const cBaseSummary: string = 'list-none flex items-center space-x-4 cursor-pointer';
	const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing} ${$$props.class ?? ''}`;
	$: classesSummary = `${cBaseSummary} ${padding} ${rounded} ${hover} ${regionSummary}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesContent = `${padding} ${regionContent}`;
</script>

<!-- @component The Accordion child element. -->

<details bind:open class="accordion-item {classesDetails}" data-testid="accordion-item" on:click on:keydown on:keyup on:keypress>
	<!-- Summary -->
	<summary id={summaryId} class="accordion-summary {classesSummary}" aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div class="accordion-summary-lead"><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="accordion-summary-text flex-auto" role="button"><slot name="summary">(summary)</slot></div>
		<!-- Caret -->
		<div class="accordion-summary-caret {classesIcon}">
			<SvgIcon name="angle-down" class="opacity-50" />
		</div>
	</summary>

	<!-- Content -->
	<div id={contentId} class="accordion-content {classesContent}" role="region" aria-labelledby={summaryId}>
		<slot name="content">(content)</slot>
	</div>
</details>

<style>
	/* Hide the left-hande arrows for details/summary  */
	/* Note: let's keep this localized in case users want the arrows elsewhere */
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
