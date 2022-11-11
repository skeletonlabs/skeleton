<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// TODO: move to `types.ts` and export for reuse.
	interface PageSettings {
		/** Index of the first list item to display. */
		offset: number;
		/** Current number of items to display. */
		limit: number;
		/** The total size (length) of your source content. */
		size: number;
		/** List of amounts available to the select input */
		amounts: number[];
	}

	// Props
	/**
	 * Pass the page setting object.
	 * @type {PageSettings}
	 */
	export let settings: PageSettings;

	// Props (design)
	/** Provide classes to set flexbox justification. */
	export let justify: string = 'justify-between';
	/** Provide classes to style page info text. */
	export let text: string = 'text-xs';
	/** Provide arbitrary classes to style the select input. */
	export let select: string | undefined = undefined;

	// Props (buttons)
	/** Provide a button variant class or any abitrary CSS class. */
	export let buttons: string = 'btn-filled';

	// Base Classes
	const cBase: string = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel: string = 'w-full md:w-auto';
	const cPageText: string = 'whitespace-nowrap';

	// Functionality
	function onChangeLength(): void {
		settings.offset = 0;
		/** @event {{ length: number }} amount - Fires when the amount selection input changes.  */
		dispatch('amount', length);
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

	// Reactive Classes
	$: classesBase = `${cBase} ${justify} ${$$props.class ?? ''}`;
	$: classesLabel = `${cLabel}`;
	$: classesSelect = `${select}`;
	$: classesPageText = `${cPageText} ${text}`;
</script>

<div class="paginator {classesBase}" data-testid="paginator">
	<!-- Select Amount -->
	<label class="paginator-label {classesLabel}">
		<select bind:value={settings.limit} on:change={onChangeLength} class="paginator-select {classesSelect}" aria-label="Select Amount">
			{#each settings.amounts as amount}<option value={amount}>Show {amount}</option>{/each}
		</select>
	</label>
	<!-- Details -->
	<span class="paginator-details {classesPageText}">
		{settings.offset * settings.limit + 1} to {Math.min(settings.offset * settings.limit + settings.limit, settings.size)} of <strong>{settings.size}</strong>
	</span>
	<!-- Arrows -->
	<div class="paginator-arrows space-x-2">
		<button class="btn-icon {buttons}" on:click={onPrev} disabled={settings.offset === 0}>&larr;</button>
		<button class="btn-icon {buttons}" on:click={onNext} disabled={(settings.offset + 1) * settings.limit >= settings.size}>&rarr;</button>
	</div>
</div>
