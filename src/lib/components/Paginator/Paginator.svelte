<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Props
	export let offset: number = 0;
	export let limit: number = 5;
	export let size: number = 10;
	export let amounts: number[] = [1, 5, 10, 50, 100];
	// Props (design)
	export let justify: string = 'justify-between';
	export let text: string = 'text-xs md:text-base';
	export let select: string | undefined = undefined;
	// Props (buttons)
	export let buttons: string = 'btn-ghost';

	// Base Classes
	const cBase: string = 'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4';
	const cLabel: string = 'w-full md:w-auto';
	const cPageText: string = 'opacity-60 whitespace-nowrap';

	// Functionality
	function onChangeLength(): void {
		offset = 0;
		dispatch('amount', length);
	}
	function onPrev(): void {
		offset--;
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
	<!-- Page Text -->
	<p class="paginator-text {classesPageText}">
		{offset * limit + 1} to {offset * limit + limit} of <strong>{size}</strong>
	</p>
	<!-- Arrows -->
	<div class="paginator-nav space-x-2">
		<button class="btn {buttons}" on:click={onPrev} disabled={offset === 0}>&larr;</button>
		<button class="btn {buttons}" on:click={onNext} disabled={(offset + 1) * limit >= size}>&rarr;</button>
	</div>
</div>
