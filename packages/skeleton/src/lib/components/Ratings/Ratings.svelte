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

	// Classes
	const cBase = 'w-full flex';

	// Reactive
	$: elemInteractive = interactive ? 'button' : 'span';
	$: attrInteractive = interactive ? { type: 'button' } : {};
	$: classesBase = `${cBase} ${text} ${fill} ${justify} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="ratings {classesBase}" data-testid="rating-bar">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array(max) as _, i}
		{#if Math.floor(value) >= i + 1}
			<!-- FIXME: resolve a11y warnings -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<svelte:element this={elemInteractive} {...attrInteractive} class="rating-icon {regionIcon}" on:click={() => iconClick(i)}>
				<slot name="full" />
			</svelte:element>
		{:else if value === i + 0.5}
			<!-- FIXME: resolve a11y warnings -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<svelte:element this={elemInteractive} {...attrInteractive} class="rating-icon {regionIcon}" on:click={() => iconClick(i)}>
				<slot name="half" />
			</svelte:element>
		{:else}
			<!-- FIXME: resolve a11y warnings -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<svelte:element this={elemInteractive} {...attrInteractive} class="rating-icon {regionIcon}" on:click={() => iconClick(i)}>
				<slot name="empty" />
			</svelte:element>
		{/if}
	{/each}
</div>
