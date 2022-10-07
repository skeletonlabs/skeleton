<!-- Layout: (root) -->
<script lang="ts">
	import hljs from 'highlight.js';
	import '$lib/styles/highlight-js.css'; // was: 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/utilities/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Stores
	import { storeCurrentUrl, storeTheme } from '$docs/stores';

	// Components & Utilities
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import Dialog from '$lib/utilities/Dialog/Dialog.svelte';
	import Toast from '$lib/utilities/Toast/Toast.svelte';

	// Docs Components
	import DocsAppBar from '$docs/DocsAppBar/DocsAppBar.svelte';
	import DocsSidebar from '$docs/DocsNavigation/DocsSidebar.svelte';
	import DocsDrawer from '$docs/DocsNavigation/DocsDrawer.svelte';
	import DocsFooter from '$docs/DocsFooter/DocsFooter.svelte';

	// Theme Imports
	// import style from "swiper/css/bundle.css?inline";
	import skeleton from '$lib/themes/theme-skeleton.css?inline';
	import rocket from '$lib/themes/theme-rocket.css?inline';
	import modern from '$lib/themes/theme-modern.css?inline';
	import seafoam from '$lib/themes/theme-seafoam.css?inline';
	import vintage from '$lib/themes/theme-vintage.css?inline';
	import sahara from '$lib/themes/theme-sahara.css?inline';
	const themes: any = { skeleton, rocket, modern, seafoam, vintage, sahara };

	// Skeleton Theme: skeleton|rocket|modern|seafoam|vintage|sahara|test
	import '$lib/themes/theme-skeleton.css';
	// Skeleton Stylesheets
	import '$lib/styles/all.css';
	// Global Stylesheets
	import '../app.postcss';

	// Lifecycle Events
	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.routeId !== params.to.routeId;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	// Disable left sidebar on homepage
	$: slotSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'bg-white/20 dark:bg-black/5 lg:w-auto';
	$: currentTheme = `\<style\>${themes[$storeTheme]}}\</style\>`;

	// Enable bg-mesh only if Skeleton theme in use.
	$: if (browser) document.body.classList.toggle('bg-mesh', $storeTheme === 'skeleton');
</script>

<svelte:head>
	{@html currentTheme}
</svelte:head>

<!-- Overlays -->
<Dialog />
<Toast background="bg-accent-500" />
<DocsDrawer />

<!-- App Shell -->
<AppShell {slotSidebarLeft} slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<DocsAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<DocsSidebar class="hidden lg:block w-[280px]" />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>
</AppShell>
