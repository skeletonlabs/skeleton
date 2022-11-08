<!-- Layout: (root) -->
<script lang="ts">
	import hljs from 'highlight.js';
	import '$lib/styles/highlight-js.css'; // was: 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/utilities/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	// Stores
	import { storeCurrentUrl, storeTheme } from '$docs/stores';
	import { storePreview } from '$docs/DocsThemer/stores';

	// Components & Utilities
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import Dialog from '$lib/utilities/Dialog/Dialog.svelte';
	import Toast from '$lib/utilities/Toast/Toast.svelte';

	// Docs Components
	import DocsAppBar from '$docs/DocsAppBar/DocsAppBar.svelte';
	import DocsSidebar from '$docs/DocsNavigation/DocsSidebar.svelte';
	import DocsDrawer from '$docs/DocsNavigation/DocsDrawer.svelte';
	import DocsFooter from '$docs/DocsFooter/DocsFooter.svelte';

	// Themes
	// https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page
	import rocket from '$lib/themes/theme-rocket.css?inline';
	import modern from '$lib/themes/theme-modern.css?inline';
	import seafoam from '$lib/themes/theme-seafoam.css?inline';
	import vintage from '$lib/themes/theme-vintage.css?inline';
	import sahara from '$lib/themes/theme-sahara.css?inline';
	import hamlindigo from '$lib/themes/theme-hamlindigo.css?inline';
	import goldNouveau from '$lib/themes/theme-gold-nouveau.css?inline';
	import crimson from '$lib/themes/theme-crimson.css?inline';
	import seasonal from '$lib/themes/theme-seasonal.css?inline';

	// Default Theme, injected immediately:
	import skeleton from '$lib/themes/theme-skeleton.css';
	// Skeleton Stylesheets
	import '$lib/styles/all.css';
	// Global Stylesheets
	import '../app.postcss';

	// List of Themes
	const themes: any = { skeleton, rocket, modern, seafoam, vintage, sahara, hamlindigo, goldNouveau, crimson, seasonal };

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);
	storePreview.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storePreview ? 'generator' : $storeTheme);
	}

	// Lifecycle Events
	onMount(() => {
		// TEMPORARY FIX FOR: https://github.com/Brain-Bones/skeleton/issues/489
		const lsTailwindPallete = window.localStorage.getItem('storeTailwindPalette');
		if (lsTailwindPallete?.includes('ternary')) {
			console.log('TEMP FIX: LocalStorage Values Cleared. This should only ever run once!');
			window.localStorage.clear();
		}
	});
	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	// Disable left sidebar on homepage
	$: slotSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'bg-black/5 lg:w-auto';
</script>

<svelte:head>
	<!-- Select Preset Theme CSS -->
	{@html `\<style\>${themes[$storeTheme]}}\</style\>`}
</svelte:head>

<!-- Overlays -->
<Dialog />
<Toast />
<DocsDrawer />

<!-- App Shell -->
<AppShell {slotSidebarLeft} slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<DocsAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<DocsSidebar class="hidden lg:grid w-[360px] overflow-hidden" />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>
</AppShell>
