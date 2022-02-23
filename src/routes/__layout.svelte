<script lang="ts">
	import { browser } from '$app/env';
	import Button from '$lib/button/Button.svelte';
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

<div class="flex flex-row">

    <!-- NavBar -->
    <section class="basis-1/4 border-r-2 border-surface-200 p-10 h-screen overflow-auto dark:border-surface-800">
        <div class="flex justify-between items-center">
			<h1 class="text-4xl font-bold">Skeleton UI</h1>
			<a href="https://github.com/Brain-Bones/skeleton" target="_blank" class="fill-white">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg>
			</a>
		</div>
		<hr class="border-t-1 border-surface-700 my-4">
        <nav class="space-y-4">
			<a href="/" class="block">Welcome</a>
			<a href="/cards" class="block">Cards</a>
			<a href="/buttons" class="block">Buttons</a>
        </nav>
    </section>

    <!-- Content -->
    <section class="basis-3/4 p-10 h-screen overflow-auto">
        <slot />
    </section>

</div>
