<script lang="ts">
	import { getContext } from 'svelte';
	import Button from '$lib/Button/Button.svelte';

	// Props
	export let href: string = '';
	export let disabled: boolean = false;
	export let current: boolean = false;

	// Context
	export let variant: string = getContext('variant');
	export let size: string = getContext('size');
	export let separator: string = getContext('separator');

	// Styling
	if (current) { disabled = true; }
</script>

<div class="crumb-group flex items-center space-x-4">

	<Button {variant} {size} {href} class="crumb" data-testid="crumb" {disabled}>
		{#if $$slots.lead}<slot name="lead" />{/if}
		<slot />
	</Button>
	
	{#if !disabled && !current}
		<div class="separator flex fill-surface-500 text-surface-500 w-2">{@html separator}</div>
	{/if}

</div>