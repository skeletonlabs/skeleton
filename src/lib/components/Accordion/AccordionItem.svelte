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

	// Props
	/** Defines the default open state on page load .*/
	export let open = false;
	/** Provide semantic ID for ARIA summary element. */
	export let summaryId = '';
	/** Provide semantic ID for ARIA content element. */
	export let contentId = '';
	/** Provide arbitrary styles for the summary element region. */
	export let regionSummary = '';
	/** Provide arbitrary styles for the summary element region. */
	export let regionContent = '';

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
	const cBaseDetails = '';
	const cBaseSummary = 'list-none flex items-center space-x-4 cursor-pointer';
	const cBaseIcon = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing} ${$$props.class ?? ''}`;
	$: classesSummary = `${cBaseSummary} ${padding} ${rounded} ${hover} ${regionSummary}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesContent = `${padding} ${regionContent}`;
</script>

<!-- @component The Accordion child element. -->

<details bind:open class="accordion-item {classesDetails}" data-testid="accordion-item" on:click on:keydown on:keyup on:keypress on:toggle>
	<!-- Summary -->
	<summary id={summaryId} class="accordion-summary {classesSummary}" aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div class="accordion-summary-lead"><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="accordion-summary-text flex-auto" role="button"><slot name="summary">(summary)</slot></div>
		<!-- Caret -->
		<div class="accordion-summary-caret {classesIcon}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="opacity-50">
				<path
					d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
				/>
			</svg>
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
