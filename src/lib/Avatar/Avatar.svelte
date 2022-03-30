<script lang="ts">
	import { afterUpdate } from "svelte";

	export let initials: string = 'A';
	export let src: string = ''; // image source, default empty
	export let size: string = ''; // sm | md | lg | xl | 2xl | 3xl
	export let outlined: boolean = false;
    export let hover: boolean = false;
	
	// Classes
	let cBase: string = 'flex aspect-square text-surface-50 font-semibold justify-center items-center rounded-full overflow-hidden bg-surface-500 transition-all';
	let cOutlined: string;
	let cHover: string;
	let cSize: string;
	let cText: string;

	// Set Outlined
	function setOutlined(): void {
		cOutlined = outlined === true ? 'ring ring-2 ring-offset-2 ring-offset-surface-50 dark:ring-offset-surface-900 ring-primary-600' : '';
	}

	// Set Hover
	function setHover(): void {
		cHover = hover === true ? 'ring-offset-2 ring-offset-surface-50 dark:ring-offset-surface-900 hover:ring hover:ring-primary-600 cursor-pointer' : '';
	}

	// Set size
	function setSize(): void {
		switch (size) {
			case 'sm':  cSize = ' w-10'; cText = 'text-base'; break;
			case 'md':  cSize = ' w-12'; cText = 'text-lg'; break;
			case 'lg':  cSize = ' w-16'; cText = 'text-2xl'; break;	
			case 'xl':  cSize = ' w-24'; cText = 'text-4xl'; break;
			case '2xl': cSize = ' w-32'; cText = 'text-5xl'; break;
			case '3xl': cSize = ' w-40'; cText = 'text-6xl'; break;
			default:    cSize = 'w-full max-w-[400px]'; cText = 'text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-9xl';
		}
	}

	// Reactive
	afterUpdate(() => {
		setOutlined();
		setHover();
		setSize();
	});
	$: classes = `${cBase} ${cSize} ${cOutlined} ${cHover} ${$$props.class}`;
</script>

<div data-testid='wrapper' on:click class="avatar {classes}">
	{#if src}
	<img class="w-full h-full object-cover" {src} alt="avatar" />
	{:else}
	<span class="{cText}" data-testid="placeholder">{initials.substring(0,2).toUpperCase()}</span>
	{/if}
</div>

