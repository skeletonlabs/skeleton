<!-- Layout: (root) -->
<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/utilities/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Components & Utilities
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import Dialog from '$lib/utilities/Dialog/Dialog.svelte';
	import Toast from '$lib/utilities/Toast/Toast.svelte';

	// Docs Components
	import DocsAppBar from '$docs/DocsAppBar/DocsAppBar.svelte';
	import DocsSidebar from '$docs/DocsNavigation/DocsSidebar.svelte';
	import DocsDrawer from '$docs/DocsNavigation/DocsDrawer.svelte';
	import DocsFooter from '$docs/DocsFooter/DocsFooter.svelte';

	// Stores
	import { storeCurrentUrl } from '$docs/stores';

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
	$: slotSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'lg:w-auto';
</script>

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
		<DocsSidebar class="hidden lg:block w-[280px]" />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<DocsFooter />
	</svelte:fragment>
</AppShell>
