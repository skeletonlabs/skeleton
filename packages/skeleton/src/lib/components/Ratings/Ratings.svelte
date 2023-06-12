<script lang="ts">
	// Slots:
	/**
	 * @slot {{}} empty - Provide an empty rating shape.
	 * @slot {{}} half - Provide a half rating shape.
	 * @slot {{}} full - Provide a full rating shape.
	 */

	// Types
	import type { CssClasses } from '../../index.js';

	// Props
	/** Current rating value. */
	export let value = 0;
	/** Maximum rating value. */
	export let max = 5;

	// Props (styles)
	/** Provide classes to set the text color. */
	export let text: CssClasses = 'text-token';
	/** Provide classes to set the SVG fill color. */
	export let fill: CssClasses = 'fill-token';
	/** Provide classes to set the flexbox justification. */
	export let justify: CssClasses = 'justify-center';
	/** Provide classes to set the horizontal spacing style. */
	export let spacing: CssClasses = 'space-x-2';

	// Classes
	const cBase = 'w-full flex';

	// Reactive
	$: classesBase = `${cBase} ${text} ${fill} ${justify} ${spacing} ${$$props.class ?? ''}`;
</script>

<div class="rating-bar {classesBase}" data-testid="rating-bar">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each Array(max) as _, i}
		{#if Math.floor(value) >= i + 1}
			<slot name="full" />
		{:else if value === i + 0.5}
			<slot name="half" />
		{:else}
			<slot name="empty" />
		{/if}
	{/each}
</div>
