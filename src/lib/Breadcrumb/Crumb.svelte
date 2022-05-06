<script lang="ts">
	import { getContext } from 'svelte';
	import Button from '$lib/Button/Button.svelte';

	// Props
	export let href: string = '';
	export let disabled: boolean = false;
	export let current: boolean = false;

	// Context
	export let variant: string = getContext('variant') || 'minimal';
	export let separator: string = getContext('separator');

	// Styling
	if (current) { disabled = true; }
</script>

<div class="crumb-group flex items-center space-x-4">

	<Button {variant} {href} {disabled} data-testid="crumb">
		<div class="flex justify-center items-center space-x-2">
			<!-- Slot: Lead -->
            {#if $$slots.lead}<slot name="lead"></slot>{/if}
			<!-- Label -->
            <slot />
        </div>
	</Button>
	
	{#if !disabled && !current}
		<div class="separator flex fill-surface-500 text-surface-500 w-2">{@html separator}</div>
	{/if}

</div>