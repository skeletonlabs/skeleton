<script lang="ts">
	export let src: string = ''; // image source, default empty
	export let size: string = ''; // sm | md | lg | xl | 2xl | 3xl
	export let outlined: boolean = false;
    export let hover: boolean = false;
	export let filter: string = ''; // ex: #myFilterId
	
	const cBase: string = 'flex aspect-square overflow-hidden text-surface-500 font-semibold justify-center items-center rounded-full bg-surface-300 dark:bg-surface-700';
	let currentClasses: string = '';
	let currentStyles: string = '';

	// Set Outlined
	if (outlined) {
		currentClasses += ' ring ring-2 ring-offset-2 ring-primary-600';
	}
	// Set hover enabled
    if (hover) {
		currentClasses += ' hover:ring hover:ring-primary-600 ring-offset-2 cursor-pointer transition-all';
	}
	// Set size
	switch (size) {
		case 'sm': currentClasses += ' w-8 h-8 text-base'; break;
		case 'md': currentClasses += ' w-12 h-12 text-lg'; break;
		case 'lg': currentClasses += ' w-16 h-16 text-2xl'; break;	
		case 'xl': currentClasses += ' w-24 h-24 text-4xl'; break;
		case '2xl': currentClasses += ' w-32 h-32 text-4xl'; break;
		case '3xl': currentClasses += ' w-40 h-40 text-4xl'; break;
		default: currentClasses += 'w-full text 4-xl';
	}
	// Set Filter
	if (filter) { currentStyles = `filter: url(${filter})`; }
	
	$: classes = `${cBase} ${currentClasses} ${$$props.class}`;
</script>

<div on:click class="avatar {classes}">
	{#if src}
	<img class="w-full h-full object-cover" {src} style="{currentStyles}" alt="Avatar" />
	{:else}
	<p data-testid="placeholder">A</p>
	{/if}
</div>

