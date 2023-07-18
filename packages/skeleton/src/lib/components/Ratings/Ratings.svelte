<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} empty - Provide an empty rating icon.
	 * @slot {{}} half - Provide a half rating icon.
	 * @slot {{}} full - Provide a full rating icon.
	 */

	import { createEventDispatcher } from 'svelte';

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/** Current rating value. */
	export let value = 0;
	/** Maximum rating value. */
	export let max = 5;
	/** Enables interactive mode for each rating icon. */
	export let interactive = false;

	// Props (styles)
	/** Provide classes to set the text color. */
	export let text: CssClasses = 'text-token';
	/** Provide classes to set the SVG fill color. */
	export let fill: CssClasses = 'fill-token';
	/** Provide classes to set the flexbox justification. */
	export let justify: CssClasses = 'justify-center';
	/** Provide classes to set the horizontal spacing style. */
	export let spacing: CssClasses = 'space-x-2';

	// Props (regions)
	/** Provide arbitrary classes to the icon region. */
	export let regionIcon: CssClasses = '';

	// Event Dispatcher
	type RatingsEvent = {
		icon: { index: number };
	};
	const dispatch = createEventDispatcher<RatingsEvent>();

	function iconClick(index: number): void {
		/** @event {{ index: number  }} icon - Fires when an icons is clicked */
		dispatch('icon', {
			index: index + 1
		});
	}

	function isFull(value: number, index: number) {
		return Math.floor(value) >= index + 1;
	}

	function isHalf(value: number, index: number) {
		return value === index + 0.5;
	}

	// Classes
	const cBase = 'w-full flex';

	// Reactive
	$: classesBase = `${cBase} ${text} ${fill} ${justify} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="ratings {classesBase}" data-testid="rating-bar">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array(max) as _, i}
		{#if interactive}
			<button class="rating-icon {regionIcon}" type="button" on:click={() => iconClick(i)}>
				{#if isFull(value, i)}
					<slot name="full" />
				{:else if isHalf(value, i)}
					<slot name="half" />
				{:else}
					<slot name="empty" />
				{/if}
			</button>
		{:else}
			<span class="rating-icon {regionIcon}">
				{#if isFull(value, i)}
					<slot name="full" />
				{:else if isHalf(value, i)}
					<slot name="half" />
				{:else}
					<slot name="empty" />
				{/if}
			</span>
		{/if}
	{/each}
</div>
