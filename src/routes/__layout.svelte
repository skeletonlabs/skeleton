<script lang="ts">
	import Drawer from '$lib/Drawer/Drawer.svelte';
	import LightSwitch from '$lib/LightSwitch/LightSwitch.svelte';
	import Button from '$lib/Button/Button.svelte';
	import { Apollo, BlueNight, Emerald, GreenFall, Noir, NoirLight, Rustic, Summer84, XPro } from '$lib/Filters/filter';
	
	// Import CSS
	import 'highlight.js/styles/github-dark.css'; // Highlight.js
	import '../theme-bb.css'; // bb|st
	import '../app.css';

	// Drawer
	let drawerVisible: boolean = false;
	function drawerToggle(): void { drawerVisible = !drawerVisible; }
	function drawerClose(): void { drawerVisible = false; }
</script>

<!-- <svelte:window bind:scrollY={y}/> -->
<svelte:head>
	<title>Skeleton Documentation</title>
</svelte:head>

<!-- Filter SVG Components -->
<Apollo />
<BlueNight />
<Emerald />
<GreenFall />
<Noir />
<NoirLight />
<Rustic />
<Summer84 />
<XPro />

<!-- Page Layout -->
<div class="flex flex-row">

	<!-- Drawer -->
	<div class="-translate-x-full lg:translate-x-0 fixed lg:static top-0 left-0 z-50 transition-transform shadow-2xl lg:shadow-none" class:translate-x-0={drawerVisible}>
		<Drawer on:close={() => { drawerClose() }}>
			<!-- Header -->
			<svelte:fragment slot="header">
				<div class="flex justify-between items-center">
					<a href="/"><h1 class="text-[26px] uppercase">Skeleton</h1></a>
					<nav class="flex justify-between items-center space-x-6">
						<!-- Light Switch -->
						<LightSwitch></LightSwitch>
						<!-- Github -->
						<a href="https://github.com/Brain-Bones/skeleton" target="_blank" class="fill-primary-500">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
						</a>
					</nav>
				</div>
			</svelte:fragment>
		</Drawer>
	</div>

	<!-- Shim -->
	{#if drawerVisible}
	<div class="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-white/50 dark:bg-black/50" on:click={drawerToggle}></div>
	{/if}

    <!-- Mail -->
    <main class="w-screen h-screen overflow-y-auto p-8">
		<div class="container mx-auto">
			<!-- Hamburger Menu -->
			<header class="lg:hidden flex items-center mb-8 space-x-4" on:click={drawerToggle}>
				<Button variant="minimal">
					<svg class="fill-black dark:fill-white" viewBox="0 0 100 60" width="24" height="24">
						<rect width="100" height="10"></rect>
						<rect y="30" width="100" height="10"></rect>
						<rect y="60" width="100" height="10"></rect>
					</svg>
				</Button>
				<p>Menu</p>
			</header>
			<!-- Page -->
			<slot />
		</div>
    </main>

</div>
