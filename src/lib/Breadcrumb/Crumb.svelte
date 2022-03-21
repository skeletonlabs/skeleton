<script lang="ts">
	import { getContext } from 'svelte';
	import Button from '$lib/Button/Button.svelte';

	// Props
	export let href: string = '';
	export let disabled: boolean = false;
	export let active: boolean = false;

	// Context
	let display: string = getContext('display');
	let color: string = getContext('color');
	let separator: string = getContext('separator');

	// Styling
	const margin = ['filled', 'outlined'].includes(display) ? 'mx-4' : 'mx-0';
	if (active) { color = 'primary'; }
</script>

<div class="crumb-group flex items-center">

	<Button {display} {color} {href} class="crumb flex items-center" data-testid="crumb" {disabled}>
		{#if $$slots.icon}
			<div class="w-6 mr-4"><slot name="icon" /></div>
		{/if}
		<slot />
	</Button>
	
	{#if !disabled && !active}
		<div class="separator flex w-2 {margin}">{@html separator}</div>
	{/if}

</div>