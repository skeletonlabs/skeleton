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

	// SEO Metatags
	let isBlogArticle = false;
	const meta = {
		title: '',
		description: '',
		image: '',
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: { title: '', description: '', image: '' }
	};
	page.subscribe((page) => {
		// Page Defaults
		meta.title = 'Skeleton — UI Toolkit for Svelte + Tailwind';
		meta.description = 'Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind.';
		meta.image = 'https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg';
		// If Blog Article
		isBlogArticle = page.data.posts && page.data.posts.length === 1;
		if (isBlogArticle) {
			const post = page.data.posts[0];
			// Post Data
			meta.title = `Skeleton Blog — ${post.meta_title ?? post.title}`;
			meta.description = post.meta_description || post.excerpt;
			meta.image = post.og_image || post.feature_image;
			// Article
			meta.article.publishTime = post.created_at;
			meta.article.modifiedTime = post.updated_at;
			meta.article.author = post.primary_author.name;
			// Twitter
			meta.twitter.title = post.twitter_title || post.meta_title || post.title;
			meta.twitter.description = post.twitter_description || post.meta_description || post.excerpt;
			meta.twitter.image = post.twitter_image || post.feature_image;
		}
	});

	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-black/5 lg:w-auto';
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta
		name="keywords"
		content="svelte, sveltekit, web, ui, components, responsive, reactive, accessibility, typescript, css, mobile web, open source"
	/>
	<meta name="theme-color" content="#242c46" />
	<meta name="author" content="Skeleton Labs" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Skeleton" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.skeleton.dev{$page.url.pathname}" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="1707" />
	<meta property="og:image:height" content="1233" />
	<!-- OG: Article -->
	{#if isBlogArticle}
		<meta property="article:published_time" content={meta.article.publishTime} />
		<meta property="article:modified_time" content={meta.article.modifiedTime} />
		<meta property="article:author" content={meta.article.author} />
	{/if}
	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@SkeletonUI" />
	<meta name="twitter:creator" content="@SkeletonUI" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />

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
