<script lang="ts">
	import { getContext } from 'svelte';

	// Context
	export let background = getContext('background');
	export let text = getContext('text');
	export let color = getContext('color');
	export let padding = getContext('padding');

	// Set tag and href values
	const tag: string = $$props.href ? 'a' : 'div';
	const href: any = $$props.href ? `href="${$$props.href}"` : undefined;

	// Base Classes
	const cBaseLogo: string = 'flex-auto text-center space-x-4 shadow';

	// Reactive Classes
	$: classesHover = $$props.href ? 'hover:brightness-110' : '';
	$: classesLogo = `${cBaseLogo} ${classesHover} ${background} ${text} ${color} ${padding} ${$$props.class || ''}`;

	// Prune $$restProps to avoid overwriting $$props.class
	function prunedRestProps(): any {
		delete $$restProps.class;
		return $$restProps;
	}
</script>

<svelte:element this={tag} {href} class="logo {classesLogo}" data-testid="logo" {...prunedRestProps()}>
	<!-- Slot: lead -->
	{#if $$slots.lead}<span class="logo-lead"><slot name="lead" /></span>{/if}
	<!-- Slot: Default -->
	{#if $$slots.default}<span class="logo-body text-lg"><slot /></span>{/if}
	<!-- Slot: Trail -->
	{#if $$slots.trail}<span class="logo-trail"><slot name="trail" /></span>{/if}
</svelte:element>
