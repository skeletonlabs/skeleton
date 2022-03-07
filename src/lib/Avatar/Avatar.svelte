<script lang="ts">
	export let src: string = ''; // image source, default empty
	export let size: string = 'md'; // sm | md | lg | xl
	export let outlined: boolean = false;
    export let hover: boolean = false;
	export let filter: string = ''; // ex: #myFilterId
	
	const cBase: string = 'flex text-surface-500 font-semibold justify-center items-center rounded-full bg-surface-300 dark:bg-surface-700';
	let style: string = '';

	// Set Outlined
	if (outlined) {
		style += ' outline outline-2 outline-offset-2 outline-primary-600';
	}
	// Set hover enabled
    if(hover) {
		style += ' hover:outline hover:outline-primary-600 outline-offset-2 cursor-pointer transition-all';
	}
	// Set size
	switch (size) {
		case 'sm': style += ' w-8 h-8 text-base'; break;
		case 'md': style += ' w-12 h-12 text-lg'; break;
		case 'lg': style += ' w-16 h-16 text-2xl'; break;	
		case 'xl': style += ' w-24 h-24 text-4xl'; break;
	}
	
	$: classes = `${cBase} ${style} ${$$props.class}`;
</script>

<div on:click class="{classes} overflow-hidden">
	{#if src}
	<img class="aspect-square object-cover" {src} style="filter: url({filter})" alt="Avatar" />
	{:else}
	<p data-testid="placeholder">A</p>
	{/if}
</div>

