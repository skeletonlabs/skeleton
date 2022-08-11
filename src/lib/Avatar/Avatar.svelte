<script lang="ts">
	import { afterUpdate } from "svelte";
	import * as f from "$lib/Filters/filter";

	// Props
	export let initials: string = 'A';
	export let src: string = undefined;
	export let size: string = 'full';
	export let background: string = 'bg-surface-500';
	export let color: string = 'text-white';
	export let outlined: boolean = false;
    export let hover: boolean = false;
	export let filter: string = undefined; // filter id
	
	// Base Classes
	let cBase: string = 'flex aspect-square text-surface-50 font-semibold justify-center items-center rounded-full overflow-hidden';
	let cSize: string, cText: string;

	// Set Size
	function setSize(): void {
		switch (size) {
			case 'sm':  cSize = 'w-10'; cText = 'text-base'; break;
			case 'md':  cSize = 'w-12'; cText = 'text-lg'; break;
			case 'lg':  cSize = 'w-16'; cText = 'text-2xl'; break;	
			case 'xl':  cSize = 'w-24'; cText = 'text-4xl'; break;
			case '2xl': cSize = 'w-32'; cText = 'text-5xl'; break;
			case '3xl': cSize = 'w-40'; cText = 'text-6xl'; break;
			case 'full': cSize = 'w-full max-w-[400px]'; cText = 'text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-9xl'; break;
		}
	}

	// After Prop Update
	afterUpdate(() => { setSize(); });

	// Reactive Classes
	$: cOutlined = outlined === true ? 'ring ring-2 ring-offset-2 ring-offset-surface-50 dark:ring-offset-surface-900 ring-primary-600' : '';
	$: cHover = hover === true ? 'dark:ring-offset-surface-900 hover:ring hover:ring-black dark:hover:ring-white cursor-pointer' : '';
	$: classesAvatar = `${cBase} ${cSize} ${background} ${color} ${cOutlined} ${cHover} ${$$props.class}`;
</script>

<figure data-testid='wrapper' on:click class="avatar {classesAvatar}">
	{#if src}
	<img class="w-full h-full object-cover" {src} alt={$$props.alt||'avatar'} use:f.filter={filter} />
	{:else}
	<span class="{cText}" data-testid="placeholder">{initials.substring(0,2).toUpperCase()}</span>
	{/if}
</figure>

