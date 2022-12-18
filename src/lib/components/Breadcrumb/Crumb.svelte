<script lang="ts">
	// Slots
	/** @slot lead - A leading slot intended for icons. */

	import { getContext } from 'svelte';

	// Props
	/** Provide classes set the current page text color. */
	export let color = '';

	// Context
	export let separator: string = getContext('separator');

	// Local
	const tag: string = $$props.href ? 'a' : 'span';

	// Base Classes
	const cBase = 'flex items-center space-x-4';
	const cAnchor = 'flex justify-center items-center space-x-2';
	const cSeperator = 'font-bold flex fill-surface-500 text-surface-500 w-2';

	// Reactive Classes
	$: classesBase = `${cBase} ${color} ${$$props.class ?? ''}`;
</script>

<!-- NOTE: avoid forwarding events on <svelte:element> tags -->
<!-- https://github.com/skeletonlabs/skeleton/issues/727#issuecomment-1356859261 -->
<li class="crumb {classesBase}" data-testid="crumb" on:click on:keydown on:keyup on:keypress>
	<!-- Anchor -->
	<svelte:element
		this={tag}
		href={$$props.href}
		class="crumb-anchor {cAnchor}"
		data-testid="crumb-anchor"
		aria-current={!$$props.href ? 'page' : undefined}
	>
		{#if $$slots.lead}<span class="crumb-lead"><slot name="lead" /></span>{/if}
		<span class="crumb-text"><slot /></span>
	</svelte:element>
	<!-- Seperator -->
	{#if $$props.href}
		<div class="crumb-seperator {cSeperator}">{@html separator}</div>
	{/if}
</li>
