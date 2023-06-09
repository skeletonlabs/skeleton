<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} 0 - Provide an empty rating shape.
	 * @slot {{}} 0.5 - Provide a half full rating shape.
	 * @slot {{}} 1 - Provide a full rating shape.
	 */

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/** Maximum rating value */
	export let max = 5;
	/** Current rating value */
	export let value = 0;

	// Props (styles)
	/** Set the justification for the rating shapes */
	export let justify: CssClasses = 'justify-center';
	/** Provide class to set the horizontal spacing style. */
	export let spacing: CssClasses = 'space-x-1';

	// Classes
	const cBase = 'w-full flex';

	// Reactive
	$: classesBase = `${cBase} ${justify} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="rating-bar {classesBase}" data-testid="rating-bar">
	{#each Array(max) as _, i}
		{#if Math.floor(value) >= i + 1}
			<slot name="1" />
		{:else if value === i + 0.5}
			<slot name="0.5" />
		{:else}
			<slot name="0" />
		{/if}
	{/each}
</div>
