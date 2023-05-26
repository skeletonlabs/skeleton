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
	/** Show First and Last buttons. */
	export let showFirstLastButtons = false;
	/** Show page controls */
	export let showPageControls = false;

	// Props (styles)
	/** Provide classes to style the select input. */
	export let select: CssClasses = 'select min-w-[150px]';
	/** Provide classes to set flexbox justification. */
	export let justify: CssClasses = 'justify-between';
	/** Provide classes to style page info text. */
	export let text = 'text-xs';
	/** Set the text for the amount selection input. */
	export let amountText = 'Items';
	/** Provide arbitrary classes to the controls. */
	export let controlsClasses: CssClasses = 'flex space-x-1';
	/** Provide arbitrary classes to the next/previous buttons. */
	export let buttonClasses: CssClasses = 'btn-icon btn-icon-sm variant-filled';
	/** Provide arbitrary classes to the page buttons group. */
	export let pageButtonsGroupClasses: CssClasses = 'btn-group variant-filled h-8';
	/** Provide arbitrary classes to the active page buttons. */
	export let activePageButtonClasses: CssClasses = 'bg-primary-600 pointer-events-none';
	/** Set the text label for the Previous button. */
	export let buttonTextPrevious: CssClasses = '&larr;';
	/** Set the text label for the Next button. */
	export let buttonTextNext: CssClasses = '&rarr;';
	/** Set the text label for the First button. */
	export let buttonTextFirst: CssClasses = '&laquo;';
	/** Set the text label for the Last button. */
	export let buttonTextLast: CssClasses = '&raquo;';

	// Base Classes
	const cBase = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel = 'w-full md:w-auto';
	const cPageText = 'whitespace-nowrap';

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
		const maxPagesToShow = 5;
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

	// Reactive Classes
	$: classesBase = `${cBase} ${justify} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesSelect = `${select}`;
	$: classesPageText = `${cPageText} ${text}`;
	$: classesControls = `${controlsClasses}`;
	$: classesPageButtons = `${pageButtonsGroupClasses}`;
</script>

<!-- prettier-ignore -->
<div class="paginator {classesBase}" data-testid="paginator">
	<!-- Select Amount -->
	<label class="paginator-label {classesLabel}">
		<select bind:value={settings.limit} on:change={() => { onChangeLength() }} class="paginator-select {classesSelect}" {disabled} aria-label="Select Amount">
			{#each settings.amounts as amount}<option value={amount}>{amount} {amountText}</option>{/each}
		</select>
	</label>
	<!-- Details -->
	<span class="paginator-details {classesPageText}">
		{settings.offset * settings.limit + 1} - {Math.min(settings.offset * settings.limit + settings.limit, settings.size)} <span class="opacity-50 px-2">/</span> <strong>{settings.size}</strong>
	</span>
	<!-- Controls -->
	<div class="paginator-controls {classesControls}">
		{#if showFirstLastButtons}
		<button type="button" class="{buttonClasses}" on:click={() => { gotoPage(0) }} disabled={disabled || settings.offset === 0}>
			{@html buttonTextFirst}
		</button>
		{/if}
		<button type="button" class="{buttonClasses}" on:click={() => { gotoPage(settings.offset - 1) }} disabled={disabled || settings.offset === 0}>
			{@html buttonTextPrevious}
		</button>
		{#if showPageControls}
		<div class={classesPageButtons}>
			{#each controlPages as page}
				<button type='button' class={page === settings.offset ? activePageButtonClasses : page < 0 ? 'pointer-events-none' : ''} 
					on:click={() => gotoPage(page)}>
					{page >= 0 ? page : '...'}
				</button>
			{/each}
		</div>
		{/if}
		<button type="button" class="{buttonClasses}" on:click={() => { gotoPage(settings.offset + 1) }} disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}>
			{@html buttonTextNext}
		</button>
		{#if showFirstLastButtons}
		<button type="button" class="{buttonClasses}" on:click={() => { gotoPage(lastPage) }} disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}>
			{@html buttonTextLast}
		</button>
		{/if}
	</div>
</div>
