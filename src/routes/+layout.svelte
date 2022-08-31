<!-- Layout: (root) -->

<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Components & Utilities
	import AppShell from '$lib/AppShell/AppShell.svelte';
	import Dialog from '$lib/Notifications/Dialog.svelte';
	import Toast from '$lib/Notifications/Toast.svelte';

	// Doc-Only Components 
	import SkeletonAppBar from '$lib/_documentation/SkeletonAppBar/SkeletonAppBar.svelte';
	import SkeletonSidebar from '$lib/_documentation/SkeletonNavigation/SkeletonSidebar.svelte';
	import SkeletonDrawer from '$lib/_documentation/SkeletonNavigation/SkeletonDrawer.svelte';
	import SkeletonFooter from '$lib/_documentation/SkeletonFooter/SkeletonFooter.svelte';

	// Stores
	import { storeCurrentUrl } from '$lib/_documentation/stores';

	// Skeleton Theme: skeleton|rocket|modern|seafoam|vintage|sahara|test
	import '$lib/styles/themes/theme-skeleton.css';
	// Skeleton Add-On Stylesheets
	import '$lib/styles/tailwind.css';
	import '$lib/styles/core.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/forms.css';
	// Global Stylesheets
	import '../app.postcss';

	// Lifecycle Events
	afterNavigate(() => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const elemPage = document.querySelector('#page');
		if (elemPage !== null) { elemPage.scrollTop = 0; }
	});

	// Disable left sidebar on homepage
	$: sidebarLeftWidth = $page.url.pathname === '/' ? 'w-0' : 'lg:w-auto';
</script>

<!-- Overlays -->
<Dialog />
<Toast />
<SkeletonDrawer />

<!-- App Shell -->
<AppShell {sidebarLeftWidth}>

	<!-- Header -->
	<svelte:fragment slot="header">
		<SkeletonAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<SkeletonSidebar class="hidden lg:block w-[300px]" />
	</svelte:fragment>

	<!-- Page: Content -->
	<slot />

	<!-- Page: Footer -->
	<svelte:fragment slot="pageFooter">
		<SkeletonFooter />
	</svelte:fragment>

</AppShell>
