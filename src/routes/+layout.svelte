<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	storeHighlightJs.set(hljs);

	import { afterNavigate } from '$app/navigation';

	import { Dialog, Toast } from '@brainandbones/skeleton';
	import AppShell from '$lib/AppShell/AppShell.svelte';
	import AppBar from '$lib/AppBar/AppBar.svelte';
	
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
		// Scroll to top of main page content
		const elemMain = document.querySelector('main');
		if (elemMain !== null) { elemMain.scrollTop = 0; }
	});
</script>

<Dialog />
<Toast />

<AppShell>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<SkeletonDrawer />
	</svelte:fragment>

	<!-- Page: Header -->
	<svelte:fragment slot="header">
		<AppBar />
	</svelte:fragment>

	<!-- Page: Content -->
	<slot />

	<!-- Page: Footer -->
	<svelte:fragment slot="footer">
		<SkeletonFooter />
	</svelte:fragment>

</AppShell>
