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

	// Props (styles)
	/** Provide classes to style the select input. */
	export let select: CssClasses = 'select min-w-[150px]';
	/** Provide classes to set flexbox justification. */
	export let justify: CssClasses = 'justify-between';
	/** Provide classes to style page info text. */
	export let text = 'text-xs';
	/** Set the text for the amount selection input. */
	export let amountText = 'Items';
	/** Provide arbitrary classes to the next/previous buttons. */
	export let buttonClasses: CssClasses = 'btn-icon variant-filled';
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

	// Functionality
	function onChangeLength(): void {
		settings.offset = 0;
		/** @event {{ length: number }} amount - Fires when the amount selection input changes.  */
		dispatch('amount', settings.limit);
	}
	function onPrev(): void {
		settings.offset--;
		/** @event {{ offset: number }} page Fires when the next/back buttons are pressed. */
		dispatch('page', settings.offset);
	}
	function onNext(): void {
		settings.offset++;
		dispatch('page', settings.offset);
	}
	function onFirst(): void {
		settings.offset = 0;
		dispatch('page', settings.offset);
	}
	function onLast(): void {
		settings.offset = settings.size / settings.limit - 1;
		dispatch('page', settings.offset);
	}

	// Reactive Classes
	$: classesBase = `${cBase} ${justify} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesSelect = `${select}`;
	$: classesPageText = `${cPageText} ${text}`;
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
	<!-- Arrows -->
	<div class="paginator-arrows space-x-2">
		<button type="button" class="{buttonClasses}" on:click={() => { onFirst() }} disabled={disabled || settings.offset === 0}>
			{@html buttonTextFirst}
		</button>
		<button type="button" class="{buttonClasses}" on:click={() => { onPrev() }} disabled={disabled || settings.offset === 0}>
			{@html buttonTextPrevious}
		</button>
		<button type="button" class="{buttonClasses}" on:click={() => { onNext() }} disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}>
			{@html buttonTextNext}
		</button>
		<button type="button" class="{buttonClasses}" on:click={() => { onLast() }} disabled={disabled || (settings.offset + 1) * settings.limit >= settings.size}>
			{@html buttonTextLast}
		</button>
	</div>
</div>
