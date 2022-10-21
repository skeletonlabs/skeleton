<script lang="ts">
	import { getContext } from 'svelte';
	import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
	import type { CSSClasses } from '$lib/types';

	// Props
	/** Defines the default open state on page load.*/
	export let open: boolean = false;
	// Props (slot)
	export let slotSummary: string | undefined = undefined;
	export let slotContent: string | undefined = undefined;

	/**Provide semantic ID for ARIA summary element.
	 * @a11y
	*/
	export let summaryId: string | undefined = undefined;

	/**Provide semantic ID for ARIA content element.
	 * @a11y
	*/
	export let contentId: string | undefined = undefined;

	// Context
	/** Provide classes to set the hover background color. */
	export let hover: CSSClasses = getContext('hover');
	/** Provide classes to set spacing between title and description elements. */
	export let spacing: CSSClasses = getContext('spacing');
	/** Provide classes to set padding for summary and content regions. */
	export let padding: CSSClasses = getContext('padding');
	/** Provide classes to set summary border radius. */
	export let rounded: CSSClasses = getContext('rounded');

	// Base Classes
	const cBaseDetails: string = '';
	const cBaseSummary: string = 'list-none flex items-center space-x-4 cursor-pointer';
	const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing} ${$$props.class ?? ''}`;
	$: classesSummary = `${cBaseSummary} ${padding} ${rounded} ${hover} ${slotSummary}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesContent = `${padding} ${slotContent}`;
</script>

<!-- @component This is the AccordianItem description-->
<details bind:open class="accordion-item {classesDetails}" data-testid="accordion-item">
	<!-- Summary -->
	<summary id={summaryId} class="accordion-summary {classesSummary}" aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div class="accordion-summary-lead"><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="accordion-summary-text flex-auto" role="button"><slot name="summary"><code>(Missing: Summary Slot)</code></slot></div>
		<!-- Caret -->
		<div class="accordion-summary-caret {classesIcon}">
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
