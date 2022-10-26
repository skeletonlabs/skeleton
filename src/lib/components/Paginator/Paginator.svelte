<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props
	/** Index of the first list item to display.*/
	export let offset: number = 0;
	/** Current number of items to display.*/
	export let limit: number = 5;
	/** The total size (length) of your source content.*/
	export let size: number = 10;
	/** List of amounts available to the select input.*/
	export let amounts: number[] = [1, 5, 10, 50, 100];

	// Props (design)
	/** Provide classes to set flexbox justification.*/
	export let justify: string = 'justify-between';
	/** Provide classes to style page info text.*/
	export let text: string = 'text-xs md:text-base';
	/** Provide arbitrary classes to style the select input.*/
	export let select: string | undefined = undefined;

	// Props (buttons)
	//AUDIT link to https://www.skeleton.dev/elements/buttons ?
	/** Provide arbitrary casses to style the buttons.*/
	export let buttons: string = 'btn-filled';

	// Base Classes
	const cBase: string = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel: string = 'w-full md:w-auto';
	const cPageText: string = 'whitespace-nowrap';

	// Functionality
	function onChangeLength(): void {
		offset = 0;
		/** @event {{ length: number }} amount - Fires when the amount selection input changes.  */
		dispatch('amount', length);
	}
	function onPrev(): void {
		offset--;
		/** @event {{ offset: number }} page Fires when the next/back buttons are pressed. */
		dispatch('page', offset);
	}
	function onNext(): void {
		offset++;
		dispatch('page', offset);
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
		<select bind:value={limit} on:change={onChangeLength} class="paginator-select {classesSelect}" aria-label="Select Amount">
			{#each amounts as amount}<option value={amount}>Show {amount}</option>{/each}
		</select>
	</label>
	<!-- Details -->
	<p class="paginator-details {classesPageText}">
		{offset * limit + 1} to {offset * limit + limit} of <strong>{size}</strong>
	</p>
	<!-- Arrows -->
	<div class="paginator-arrows space-x-2">
		<button class="btn-icon {buttons}" on:click={onPrev} disabled={offset === 0}>&larr;</button>
		<button class="btn-icon {buttons}" on:click={onNext} disabled={(offset + 1) * limit >= size}>&rarr;</button>
	</div>
</div>
