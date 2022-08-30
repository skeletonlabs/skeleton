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

	// Doc Components 
	import SkeletonAppBar from '$lib/_documentation/SkeletonAppBar/SkeletonAppBar.svelte';
	import SkeletonDrawer from '$lib/_documentation/SkeletonDrawer/SkeletonDrawer.svelte';
	import SkeletonFooter from '$lib/_documentation/SkeletonFooter/SkeletonFooter.svelte';

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
		// Scroll to top
		const elemPageContent = document.querySelector('#page-content');
		if (elemPageContent !== null) { elemPageContent.scrollTop = 0; }
	});

	// Disable left sidebar on homepage
	$: sidebarLeftWidth = $page.url.pathname === '/' ? 'w-0' : 'lg:w-[280px]';
</script>

<Dialog />
<Toast />

<AppShell {sidebarLeftWidth}>

	<!-- Header -->
	<svelte:fragment slot="header">
		<SkeletonAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<SkeletonDrawer />
	</svelte:fragment>

	<!-- Page: Content -->
	<slot />

	<!-- Page: Footer -->
	<svelte:fragment slot="pageFooter">
		<SkeletonFooter />
	</svelte:fragment>

</AppShell>
