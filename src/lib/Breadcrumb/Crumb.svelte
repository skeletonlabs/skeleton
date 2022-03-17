<script lang="ts">
	// Get the contexts from the parent
	import { getContext, onMount } from 'svelte';
	let separator: string = getContext('seperatorContext');
	let style: string = getContext('styleContext');
    let outlined: boolean = getContext('outlined');

	// Set from the Breadcrumb Component
	export let currentPage: boolean = false;
	export let inactive: boolean = false;
	export let link: string = '';

    // Set inactive state
    if (outlined && inactive) { style = 'text-surface-400 font-medium pl-0';} 
    else if (inactive)                      { style = 'text-surface-400 font-medium'; }

</script>

<div data-testid="crumb" class="flex justify-evenly align-middle">
	<!-- Link -->
	{#if $$slots.icon}
		<div class="w-5 m-2 flex">
			<slot name="icon" />
		</div>
	{/if}

	<!-- Link -->
	{#if link}
		<a href={link} class="${$$props.class} {style} p-2">
			<slot />
		</a>
	{:else}
		<p class="${$$props.class} {style} p-2">
			<slot />
		</p>
	{/if}

	<!-- Separator -->
	{#if !currentPage}
		<div class="w-2 mr-4 ml-4 flex dark:invert opacity-20">
			{@html separator}
		</div>
	{/if}
</div>
