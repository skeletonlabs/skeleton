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
	import { storePreview } from '$docs/DocsThemer/stores';

	// Components & Utilities
	import AppShell from '$lib/components/AppShell/AppShell.svelte';
	import Modal from '$lib/utilities/Modal/Modal.svelte';
	import Toast from '$lib/utilities/Toast/Toast.svelte';

	// Docs Components
	import DocsAppBar from '$docs/DocsAppBar/DocsAppBar.svelte';
	import DocsSidebar from '$docs/DocsNavigation/DocsSidebar.svelte';
	import DocsDrawer from '$docs/DocsNavigation/DocsDrawer.svelte';
	import DocsFooter from '$docs/DocsFooter/DocsFooter.svelte';

	// Skeleton Stylesheets
	import '$lib/styles/all.css';
	// The Skeleton blog stylesheet
	import '$docs/DocsStyles/blog.css';
	// Global Stylesheets
	import '../app.postcss';

	// Theme stylesheet is loaded from LayoutServerData
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	$: ({ currentTheme } = data);

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);
	storePreview.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storePreview ? 'generator' : $storeTheme);
	}

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

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-black/5 lg:w-auto';
</script>

<svelte:head>
	<title>Skeleton — UI Toolkit for Svelte + Tailwind</title>
	<!-- Meta Tags -->
	<meta name="title" content="Skeleton — UI Toolkit for Svelte + Tailwind" />
	<meta
		name="description"
		content="Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind."
	/>
	<meta
		name="keywords"
		content="svelte, sveltekit, web, ui, components, responsive, reactive, accessibility, typescript, css, mobile web, open source"
	/>
	<meta name="theme-color" content="#242c46" />
	<meta name="author" content="Skeleton Labs" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Skeleton" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.skeleton.dev/" />
	<meta property="og:title" content="Skeleton" />
	<meta property="og:locale" content="en_US" />
	<meta
		property="og:description"
		content="Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind."
	/>
	<meta
		property="og:image"
		content="https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg"
	/>
	<meta
		property="og:image:secure_url"
		content="https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg"
	/>
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1707" />
	<meta property="og:image:height" content="1233" />
	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@SkeletonUI" />
	<meta name="twitter:creator" content="@SkeletonUI" />
	<meta name="twitter:title" content="Skeleton" />
	<meta
		name="twitter:description"
		content="Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind."
	/>
	<meta
		name="twitter:image"
		content="https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg"
	/>

	<!-- Select Preset Theme CSS DO NOT REMOVE ESCAPES-->
	{@html `\<style\>${currentTheme}}\</style\>`}
</svelte:head>

<!-- Overlays -->
<Modal />
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
