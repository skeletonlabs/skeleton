<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	
	import 'highlight.js/styles/github-dark.css'; // Highlight.js
	import '../theme-bb.css'; // bb|st
	import '../app.css';
	
	import Divider from '$lib/Divider/Divider.svelte';

	// Navigation
	let navDocs: any[] = [
		{href: '/', label: 'Get Started'},
		{href: '/docs/themes', label: 'Themes'},
	]
	let navComponents: any[] = [
		{href: '/components/cards', label: 'Cards'},
		{href: '/components/buttons', label: 'Buttons'},
		{href: '/components/dividers', label: 'Dividers'},
		{href: '/components/logo-clouds', label: 'Logo Clouds'},
		{href: '/components/avatars', label: 'Avatars'},
		{href: '/components/gradient-headings', label: 'Gradient Heading'},
		{href: '/components/breadcrumbs', label: 'Breadcrumb'},
		{href: '/components/progress-bars', label: 'Progress Bars'},
		{href: '/components/radio-groups', label: 'Radio Groups'},
		{href: '/components/alerts', label: 'Alerts'},
	].sort((a, b) => (a.label > b.label) ? 1 : -1);
	let navUtilities: any[] = [
		{href: '/utilities/filters', label: 'Filters (beta)'},
	].sort((a, b) => (a.label > b.label) ? 1 : -1);
	
	// Handle Light/Dark Mode
	let darkMode: boolean;
	$: if (browser) {
		darkMode = ('theme' in localStorage) && localStorage.getItem('theme') === 'dark';
		document.documentElement.classList.toggle('dark', darkMode);
	}
	function toggleDisplayMode(): void {
		darkMode = !darkMode;
		if (browser) { localStorage.setItem('theme', darkMode ? 'dark' : 'light'); }
	}
</script>

<svelte:head>
	<title>Skeleton Documentation</title>
</svelte:head>

<!-- Page Layout -->
<div class="flex flex-row">

    <!-- NavBar -->
    <div class="basis-1/4 border-r-2 border-surface-200 py-8 space-y-8 bg-surface-50/75 dark:bg-surface-900/75 h-screen overflow-auto dark:border-surface-800">

		<!-- Header -->
        <header class="flex justify-between items-center mx-8">
			<h2>Skeleton</h2>
			<nav class="flex justify-between items-center space-x-4">
				<!-- Dark Mode Toggle -->
				<button on:click="{toggleDisplayMode}" class="fill-primary-500">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 512 512"><path d="M332.3 426.4c-93.13 17.75-178.5-53.63-178.5-147.6c0-54.25 29-104 76-130.9c7.375-4.125 5.45-15.12-2.8-16.62C108.7 109.4 0 200 0 320c0 106 85.76 192 191.8 192c59.25 0 113.2-26.79 148.9-71.04C346.1 434.5 340.3 424.8 332.3 426.4zM288 63.1l12.42 29.78c.6094 1.225 2.211 2.219 3.578 2.219s2.967-.9941 3.576-2.219l12.42-29.78l29.79-12.42C351 50.97 352 49.36 352 47.1c0-1.365-.9922-2.967-2.211-3.576l-29.79-12.42l-12.42-29.79c-.6094-1.227-2.209-2.217-3.576-2.217s-2.969 .9902-3.578 2.217l-12.42 29.79L258.2 44.42c-1.217 .6094-2.209 2.211-2.209 3.576c0 1.359 .9922 2.971 2.209 3.58L288 63.1zM507.6 216.9L448 192l-24.88-59.63C421.8 129.8 419 127.1 416 127.1s-5.75 1.75-7.125 4.375L384 192l-59.63 24.88C321.8 218.3 320 221 320 224s1.75 5.75 4.375 7.125L384 256l24.88 59.63C410.3 318.3 413 320 416 320s5.75-1.75 7.125-4.375L448 256l59.63-24.88C510.3 229.8 512 227 512 224S510.3 218.3 507.6 216.9z"/></svg>
				</button>
				<!-- Github -->
				<a href="https://github.com/Brain-Bones/skeleton" target="_blank" class="fill-primary-500">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
				</a>
			</nav>
		</header>

		<Divider />

		<!-- Nav: Docs -->
		<section class="space-y-4">
			<h5 class="text-primary-500 px-8">Docs</h5>
			<nav>
				{#each navDocs as {href,label} }
					<a {href} class="navlink" class:active={$page.url.pathname == href}>{label}</a>
				{/each}
			</nav>
		</section>

		<Divider />

		<!-- Nav: Components -->
		<section class="space-y-4">
			<h5 class="text-primary-500 px-8">Components</h5>
			<nav>
				{#each navComponents as {href,label} }
					<a {href} class="navlink" class:active={$page.url.pathname == href}>{label}</a>
				{/each}
			</nav>
		</section>

		<Divider />
		
		<!-- Nav: Utilities -->
		<section class="space-y-4">
			<h5 class="text-primary-500 px-8">Utilities</h5>
			<nav>
				{#each navUtilities as {href,label} }
					<a {href} class="navlink" class:active={$page.url.pathname == href}>{label}</a>
				{/each}
			</nav>
		</section>

    </div>

    <!-- Page -->
    <div id="page" class="container mx-auto basis-3/4 p-8 h-screen overflow-auto">
        <slot />
    </div>

</div>

<style lang="postcss">
	.active { @apply bg-primary-600; }
	.navlink { @apply block text-base px-8 py-4 hover:underline-offset-1; }
</style>
