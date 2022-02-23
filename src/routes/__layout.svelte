<script lang="ts">
	import { browser } from '$app/env';
	import '../app.css';

	// Set Display Mode (dark/light)
	// https://stackoverflow.com/questions/63259289/svelte-add-noscroll-classname-to-body-from-component
	let mode = true; // t: dark, f: light
	$: if (browser) document.documentElement.classList.toggle('dark', mode);
	function toggleDisplayMode(): void { mode = !mode; }
</script>

<svelte:head>
	<title>Skeleton: UI Component Library for SvelteKit</title>
</svelte:head>

<div
	on:click="{toggleDisplayMode}"
	class="absolute right-4 bottom-4 w-12 h-12 rounded-full bg-gray-500 text-white flex justify-center items-center cursor-pointer"
>D</div>

<div class="m-10">
	<slot />
</div>
