<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { writable, type Writable } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';

	import { Button, Dialog, Toast } from '@brainandbones/skeleton';
	import NavDrawer from '$lib/_documentation/NavDrawer/NavDrawer.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Skeleton Theme
	// Available themes: skeleton|rocket|modern|seafoam|vintage|sahara|test
	import '$lib/styles/themes/theme-skeleton.css';
	// Skeleton Add-On Stylesheets
	import '$lib/styles/tailwind.css';
	import '$lib/styles/core.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/forms.css';
	// Global Stylesheets
	import '../app.postcss';

	// Drawer
	const drawer: Writable<boolean> = writable(false);
	const drawerOpen = () => { drawer.set(true); };

	// Lifecycle Events
	afterNavigate(() => {
		// Scroll to top of page content
		const elemMain = document.querySelector('#page-content');
		if (elemMain !== null) { elemMain.scrollTop = 0; }
	});
</script>

<Dialog />
<Toast />

<!-- Page Layout -->
<main class="flex flex-row">

	<!-- Drawer -->
	<NavDrawer visible={drawer} />

	<!-- Page Content -->
	<div id="page-content" class="w-screen h-screen overflow-y-auto">

		<!-- Mobile-Only Header -->
		<header class="lg:hidden flex p-8 space-x-4">
			<!-- Hamburger Menu -->
			<Button variant="minimal" on:click={drawerOpen}>
				<svelte:fragment slot="lead">
					<SvgIcon name="bars" width="w-6" height="h-6" class="!block opacity-50" />
				</svelte:fragment>
				<span class="text-surface-500 font-bold">Menu</span>
			</Button>
		</header>

		<!-- Page Slot -->
		<div class="container mx-auto p-8">
			<slot />
		</div>

	</div>

</main>
