<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// Types
	import type { PaginationSettings } from './types.js';
	import type { CssClasses } from '../../index.js';
	import { leftAngles, leftArrow, rightAngles, rightArrow } from './icons.js';

	// Event Dispatcher
	type PaginatorEvent = {
		amount: number;
		page: number;
	};
	const dispatch = createEventDispatcher<PaginatorEvent>();

	// Props
	/**
	 * Pass the page setting object.
	 * @type {PaginationSettings}
	 */
	export let settings: PaginationSettings = { page: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] };
	/** Sets selection and buttons to disabled state on-demand. */
	export let disabled = false;
	/** Show Previous and Next buttons. */
	export let showPreviousNextButtons = true;
	/** Show First and Last buttons. */
	export let showFirstLastButtons = false;
	/** Displays a numeric row of page buttons. */
	export let showNumerals = false;
	/** Maximum number of active page siblings in the numeric row.*/
	export let maxNumerals = 1;
	/** Provide classes to set flexbox justification. */
	export let justify: CssClasses = 'justify-between';

	// Props (select)
	/** Provide classes to style the select input. */
	export let select: CssClasses = 'select min-w-[150px]';
	/** Set the text for the amount selection input. */
	export let amountText = 'Items';

	// Props (control)
	/** Set the base classes for the control element. */
	export let regionControl: CssClasses = 'btn-group';
	/** Provide variant style for the control button group. */
	export let controlVariant: CssClasses = 'variant-filled';
	/** Provide separator style for the control button group.  */
	export let controlSeparator: CssClasses = '';

	// Props (buttons)
	/** Provide arbitrary classes to the active page buttons. */
	export let active: CssClasses = 'variant-filled-primary';
	/*** Set the base button classes. */
	export let buttonClasses: CssClasses = '!px-3 !py-1.5 fill-current';
	/**
	 * Set the label for the Previous button.
	 * @type {string}
	 */
	export let buttonTextPrevious: CssClasses = leftArrow;
	/**
	 * Set the label for the Next button.
	 * @type {string}
	 */
	export let buttonTextNext: CssClasses = rightArrow;
	/**
	 * Set the label for the First button.
	 * @type {string}
	 */
	export let buttonTextFirst: CssClasses = leftAngles;
	/**
	 * Set the label for the Last button.
	 * @type {string}
	 */
	export let buttonTextLast: CssClasses = rightAngles;
	/** Set the label for the pages separator. */
	export let separatorText = 'of';

	// Props (A11y)
	/** Provide the ARIA label for the First page button. */
	export let labelFirst = 'First page';
	/** Provide the ARIA label for the Previous page button. */
	export let labelPrevious = 'Previous page';
	/** Provide the ARIA label for the Next page button. */
	export let labelNext = 'Next page';
	/** Provide the ARIA label for the Last page button. */
	export let labelLast = 'Last page';

	// Base Classes
	const cBase = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel = 'w-full md:w-auto';

	// Local
	let lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
	let controlPages: number[] = getNumerals();

	function onChangeLength(): void {
		/** @event {{ length: number }} amount - Fires when the amount selection input changes.  */
		dispatch('amount', settings.limit);

		lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));

		// ensure page in limit range
		if (settings.page > lastPage) {
			settings.page = lastPage;
		}

		controlPages = getNumerals();
	}

	function gotoPage(page: number) {
		if (page < 0) return;

		settings.page = page;
		/** @event {{ page: number }} page Fires when the next/back buttons are pressed. */
		dispatch('page', settings.page);
		controlPages = getNumerals();
	}

	// Full row - no ellipsis
	function getFullNumerals() {
		const pages = [];
		for (let index = 0; index <= lastPage; index++) {
			pages.push(index);
		}
		return pages;
	}

	function getNumerals() {
		const pages = [];
		const isWithinLeftSection = settings.page < maxNumerals + 2;
		const isWithinRightSection = settings.page > lastPage - (maxNumerals + 2);

		if (lastPage <= maxNumerals * 2 + 1) return getFullNumerals();

		pages.push(0);
		if (!isWithinLeftSection) pages.push(-1);

		if (isWithinLeftSection || isWithinRightSection) {
			// mid section - with only one ellipsis
			const sectionStart = isWithinLeftSection ? 1 : lastPage - (maxNumerals + 2);
			const sectionEnd = isWithinRightSection ? lastPage - 1 : maxNumerals + 2;
			for (let i = sectionStart; i <= sectionEnd; i++) {
				pages.push(i);
			}
		} else {
			// mid section - with both ellipses
			for (let i = settings.page - maxNumerals; i <= settings.page + maxNumerals; i++) {
				pages.push(i);
			}
		}

		if (!isWithinRightSection) pages.push(-1);
		pages.push(lastPage);

		return pages;
	}

	function updateSize(size: number) {
		lastPage = Math.max(0, Math.ceil(size / settings.limit - 1));
		controlPages = getNumerals();
	}

	// State
	$: classesButtonActive = (page: number) => {
		return page === settings.page ? `${active} pointer-events-none` : '';
	};
	$: maxNumerals, onChangeLength();
	$: updateSize(settings.size);
	// Reactive Classes
	$: classesBase = `${cBase} ${justify} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesSelect = `${select}`;
	$: classesControls = `${regionControl} ${controlVariant} ${controlSeparator}`;
</script>

<div class="paginator {classesBase}" data-testid="paginator">
	<!-- Select Amount -->
	{#if settings.amounts.length}
		<label class="paginator-label {classesLabel}">
			<select
				bind:value={settings.limit}
				on:change={onChangeLength}
				class="paginator-select {classesSelect}"
				{disabled}
				aria-label="Select Amount"
			>
				{#each settings.amounts as amount}<option value={amount}>{amount} {amountText}</option>{/each}
			</select>
		</label>
	{/if}
	<!-- Controls -->
	<div class="paginator-controls {classesControls}">
		<!-- Button: First -->
		{#if showFirstLastButtons}
			<button
				type="button"
				aria-label={labelFirst}
				class={buttonClasses}
				on:click={() => {
					gotoPage(0);
				}}
				disabled={disabled || settings.page === 0}
			>
				{@html buttonTextFirst}
			</button>
		{/if}
		<!-- Button: Back -->
		{#if showPreviousNextButtons}
			<button
				type="button"
				aria-label={labelPrevious}
				class={buttonClasses}
				on:click={() => {
					gotoPage(settings.page - 1);
				}}
				disabled={disabled || settings.page === 0}
			>
				{@html buttonTextPrevious}
			</button>
		{/if}
		<!-- Center -->
		{#if showNumerals === false}
			<!-- Details -->
			<button type="button" class="{buttonClasses} pointer-events-none !text-sm">
				{settings.page * settings.limit + 1}-{Math.min(settings.page * settings.limit + settings.limit, settings.size)}&nbsp;<span
					class="opacity-50">{separatorText} {settings.size}</span
				>
			</button>
		{:else}
			<!-- Numeric Row -->
			{#each controlPages as page}
				<button type="button" class="{buttonClasses} {classesButtonActive(page)}" on:click={() => gotoPage(page)}>
					{page >= 0 ? page + 1 : '...'}
				</button>
			{/each}
		{/if}
		<!-- Button: Next -->
		{#if showPreviousNextButtons}
			<button
				type="button"
				aria-label={labelNext}
				class={buttonClasses}
				on:click={() => {
					gotoPage(settings.page + 1);
				}}
				disabled={disabled || (settings.page + 1) * settings.limit >= settings.size}
			>
				{@html buttonTextNext}
			</button>
		{/if}
		<!-- Button: last -->
		{#if showFirstLastButtons}
			<button
				type="button"
				aria-label={labelLast}
				class={buttonClasses}
				on:click={() => {
					gotoPage(lastPage);
				}}
				disabled={disabled || (settings.page + 1) * settings.limit >= settings.size}
			>
				{@html buttonTextLast}
			</button>
		{/if}
	</div>
</div>
