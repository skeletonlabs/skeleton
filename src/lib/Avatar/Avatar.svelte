<script lang="ts">

	export let src:         string = ''; // Image is defaulting to null
	export let size:        string = 'md'; // Size for the component
	export let outlined:    boolean = false;
    export let interactive: boolean = false;
	export let filter:		string = '';
	
	const cBase:       		string = 'flex justify-center items-center rounded-full bg-surface-300 dark:bg-surface-700 aspect-square'; // Refers to the overlaying div container + alignment properties
	let style: 				string = '';

	// Outlined props
	if (outlined) { style += ' outline outline-2 outline-offset-2 outline-accent-600 dark:outline-accent-300'; }
	// Hover state
    if(interactive) { style += ' hover:outline hover:outline-2 hover:outline-primary-600 outline-offset-2 hover:dark:outline-primary-300 cursor-pointer transition-all ease-in-out'; }
	// Size
	switch (size) {
		case 'sm': style += ' w-8 h-8 text-base'; break;
		case 'md': style += ' w-12 h-12 text-lg'; break;
		case 'lg': style += ' w-16 h-16 text-2xl'; break;	
		case 'xl': style += ' w-24 h-24 text-4xl'; break;
	}
	
	$: classes = `${cBase} ${style} ${$$props.class}`;

</script>

<!-- Avatar Component -->
<div style="filter: {filter}" on:click class="{classes}">
	{#if src}
		<img class="rounded-full object-contain" {src} alt="Avatar" />
	{:else}
		<p data-testid="placeholder">A</p>
	{/if}
</div>

<style lang="postcss">

</style>

