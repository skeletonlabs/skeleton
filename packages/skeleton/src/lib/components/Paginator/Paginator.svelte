<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// Types
	import type { CssClasses, PaginationSettings } from '../..';

	const dispatch = createEventDispatcher();

	// Props
	/**
	 * Pass the page setting object.
	 * @type {PaginationSettings}
	 */
	export let settings: PaginationSettings = { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] };
	/** Sets selection and buttons to disabled state on-demand. */
	export let disabled = false;
	/** Show Previous and Next buttons. */
	export let showPreviousNextButtons = true;
	/** Show First and Last buttons. */
	export let showFirstLastButtons = false;
	/** Displays a numeric row of page buttons. */
	export let showNumericRow = false;
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
	export let buttonClasses: CssClasses = '!px-3 !py-1.5';
	/** Set the label for the Previous button. */
	export let buttonTextPrevious: CssClasses = '&larr;';
	/** Set the label for the Next button. */
	export let buttonTextNext: CssClasses = '&rarr;';
	/** Set the label for the First button. */
	export let buttonTextFirst: CssClasses = '&laquo;';
	/** Set the label for the Last button. */
	export let buttonTextLast: CssClasses = '&raquo;';

	// Base Classes
	const cBase = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel = 'w-full md:w-auto';

	// Local
	let lastPage = Math.ceil(settings.size / settings.limit - 1);
	let controlPages: number[] = getControlPages();

	// Functionality
	function onChangeLength(): void {
		settings.offset = 0;
		/** @event {{ length: number }} amount - Fires when the amount selection input changes.  */
		dispatch('amount', settings.limit);

		lastPage = Math.ceil(settings.size / settings.limit - 1);
		controlPages = getControlPages();
	}
	function gotoPage(page: number) {
		settings.offset = page;
		/** @event {{ offset: number }} page Fires when the next/back buttons are pressed. */
		dispatch('page', settings.offset);
		controlPages = getControlPages();
	}
	function getControlPages() {
		const maxPagesToShow = 3;
		const pages = [];

		if (lastPage <= maxPagesToShow) {
			for (let index = 0; index <= lastPage; index++) {
				pages.push(index);
			}
			return pages;
		}

		const isWithinLeftSection = settings.offset < maxPagesToShow - 1;
		const isWithinRightSection = settings.offset > lastPage - (maxPagesToShow - 1);
		pages.push(0);
		if (!isWithinLeftSection) {
			pages.push(-1);
		}
		if (!isWithinLeftSection && !isWithinRightSection) {
			for (let i = settings.offset - 1; i <= settings.offset + 1; i++) {
				pages.push(i);
			}
		} else {
			const start = isWithinLeftSection ? 1 : lastPage - (maxPagesToShow - 1);
			const end = isWithinRightSection ? lastPage - 1 : maxPagesToShow - 1;
			for (let i = start; i <= end; i++) {
				pages.push(i);
			}
		}
		if (!isWithinRightSection) {
			pages.push(-1);
		}
		pages.push(lastPage);
		return pages;
	}

	// State
	$: classesButtonActive = (page: number) => {
		return page === settings.offset ? `${active} pointer-events-none` : '';
	};
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
				class={buttonClasses}
				on:click={() => {
					gotoPage(0);
				}}
				disabled={disabled || settings.offset === 0}
			>
				{@html buttonTextFirst}
			</button>
		{/if}
		<!-- Button: Back -->
		{#if showPreviousNextButtons}
			<button
				type="button"
				class={buttonClasses}
				on:click={() => {
					gotoPage(settings.offset - 1);
				}}
				disabled={disabled || settings.offset === 0}
			>
				{@html buttonTextPrevious}
			</button>
		{/if}
		<!-- Center -->
		{#if showNumericRow === false}
			<!-- Details -->
			<button type="button" class="{buttonClasses} pointer-events-none !text-sm">
				{settings.offset * settings.limit + 1}-{Math.min(settings.offset * settings.limit + settings.limit, settings.size)}&nbsp;<span
					class="opacity-50">of {settings.size}</span
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
				class={buttonClasses}
				on:click={() => {
					gotoPage(settings.offset + 1);
				}}
				disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}
			>
				{@html buttonTextNext}
			</button>
		{/if}
		<!-- Button: last -->
		{#if showFirstLastButtons}
			<button
				type="button"
				class={buttonClasses}
				on:click={() => {
					gotoPage(lastPage);
				}}
				disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}
			>
				{@html buttonTextLast}
			</button>
		{/if}
	</div>
</div>
