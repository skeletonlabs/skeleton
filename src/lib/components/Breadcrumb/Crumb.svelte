<script lang="ts">
	import { getContext } from 'svelte';

	// Props
	export let text: string = 'text-base';
	export let color: string | undefined = undefined;

	// Context
	export let separator: string = getContext('separator');

	// Local
	const tag: string = $$props.href ? 'a' : 'span';

	// Base Classes
	const cBase: string = 'flex items-center space-x-4';
	const cAnchor: string = 'flex justify-center items-center space-x-2';
	const cSeperator: string = 'font-bold flex fill-surface-500 text-surface-500 w-2';

	// Reactive Classes
	$: classesBase = `${cBase} ${text} ${color} ${$$props.class ?? ''}`;
</script>

<li class="crumb {classesBase}" data-testid="crumb">
	<!-- Anchor -->
	<svelte:element this={tag} href={$$props.href} class="crumb-anchor {cAnchor}" data-testid="crumb-anchor" aria-current={!$$props.href ? 'page' : undefined}>
		{#if $$slots.lead}<span><slot name="lead" /></span>{/if}
		<span class="crumb-text"><slot /></span>
	</svelte:element>
	<!-- Seperator -->
	{#if $$props.href}
		<div class="crumb-seperator {cSeperator}">{@html separator}</div>
	{/if}
</li>
