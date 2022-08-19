<script lang="ts">
	import { getContext } from 'svelte';

	// Context
	export let background = getContext('background');
	export let color = getContext('color');
	export let text = getContext('text');

	// Set tag and href values
	const tag: string = $$props.href ? 'a' : 'div';
	const href: any = $$props.href ? `href="${$$props.href}"` : undefined;

	// Base Classes
	const cBaseLogo: string = 'flex-auto text-center py-10 space-x-4';

	// Reactive Classes
	$: classesHover = $$props.href ? 'hover:brightness-110' : '';
	$: classesLogo = `${cBaseLogo} ${classesHover} ${background} ${color} ${text}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<svelte:element this={tag} class="logo {classesLogo} {$$props.class}" data-testid="logo" {...prunedRestProps()}>
	<!-- Slot: lead -->
	{#if $$slots.lead}<slot name="lead" />{/if}

	<!-- Slot: Label -->
	{#if $$slots.label}<span class="text-lg"><slot name="label" /></span>{/if}

	<!-- Default -->
	{#if !$$slots.lead && !$$slots.label}<slot />{/if}
</svelte:element>
