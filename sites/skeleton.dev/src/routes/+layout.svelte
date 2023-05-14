<!-- Layout: (root) -->
<script lang="ts">
	// Dependency: Highlight JS
	import hljs from 'highlight.js';
	import '$docs/styles/highlight-js.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Dependency: Floating UI
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	// Types
	import type { ModalComponent } from '@skeletonlabs/skeleton';

	// Stores
	import { storeCurrentUrl, storeTheme } from '$docs/stores/stores';
	import { storePreview } from '$docs/layouts/DocsThemer/stores';

	// Components & Utilities
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';

	// Docs Components
	import DocsAppBar from '$docs/components/DocsAppBar/DocsAppBar.svelte';
	import DocsSidebar from '$docs/components/DocsSidebar/DocsSidebar.svelte';
	import DocsDrawer from '$docs/components/DocsDrawer/DocsDrawer.svelte';
	import DocsFooter from '$docs/components/DocsFooter/DocsFooter.svelte';
	// Modal Components
	import DocsSearch from '$docs/modals/DocsSearch/DocsSearch.svelte';
	// NOTE: (forms example uses direct method)
	import ModalExampleList from '$docs/modals/examples/ModalExampleList.svelte';
	import ModalExampleEmbed from '$docs/modals/examples/ModalExampleEmbed.svelte';
	import ModalExampleImage from '$docs/modals/examples/ModalExampleImage.svelte';

	// Skeleton Stylesheets
	// import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// import '@skeletonlabs/skeleton/styles/skeleton-minimal.css';
	// The Skeleton blog stylesheet
	import '$docs/styles/blog.css';
	// Global Stylesheets
	import '../app.postcss';

	// Handle Vercel Production Mode
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
	// Pass to Store for Ad Conditionals
	// IMPORTANT: DO NOT MODIFY THIS UNLESS YOU KNOW WHAT YOU'RE DOING
	import { storeVercelProductionMode } from '$docs/stores/stores';
	storeVercelProductionMode.set(data.vercelEnv === 'production');
	// Init Vercel Analytics
	if ($storeVercelProductionMode) import('@vercel/analytics').then((mod) => mod.inject());

	// SEO Meta tags
	const metaDefaults = {
		title: 'Skeleton — UI Toolkit for Svelte + Tailwind',
		description: 'Skeleton is a fully featured UI Toolkit for building reactive interfaces quickly using Svelte and Tailwind.',
		image: 'https://user-images.githubusercontent.com/1509726/212382766-f29b9c9a-82e3-44c2-b911-b17a9197e5b9.jpg'
	};
	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		// Article
		article: { publishTime: '', modifiedTime: '', author: '' },
		// Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};
	let isBlogArticle = false;

	// Registered list of Components for Modals
	const modalComponentRegistry: Record<string, ModalComponent> = {
		modalSearch: { ref: DocsSearch },
		exampleList: { ref: ModalExampleList },
		exampleEmbed: { ref: ModalExampleEmbed },
		exampleImage: { ref: ModalExampleImage }
	};

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	// Set body `data-theme` based on current theme status
	storeTheme.subscribe(setBodyThemeAttribute);
	storePreview.subscribe(setBodyThemeAttribute);
	function setBodyThemeAttribute(): void {
		if (!browser) return;
		document.body.setAttribute('data-theme', $storePreview ? 'generator' : $storeTheme);
	}

	// Scroll heading into view
	function scrollHeadingIntoView(): void {
		if (!window.location.hash) return;
		const elemTarget: HTMLElement | null = document.querySelector(window.location.hash);
		if (elemTarget) elemTarget.scrollIntoView({ behavior: 'smooth' });
	}

	// Lifecycle
	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
		// Scroll heading into view
		scrollHeadingIntoView();
	});
	page.subscribe((page) => {
		// Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		// Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;

		// If Blog Article
		isBlogArticle = page.data.posts && page.data.posts.length === 1;
		if (isBlogArticle) {
			const post = page.data.posts[0];
			const articleTitleLeadText = `Skeleton Blog`;
			// Post Data
			meta.title = `${articleTitleLeadText} — ${post.meta_title ?? post.title}`;
			meta.description = post.meta_description || post.excerpt;
			meta.image = post.og_image || post.feature_image;
			// Article
			meta.article.publishTime = post.created_at;
			meta.article.modifiedTime = post.updated_at;
			meta.article.author = post.primary_author.name;
			// Twitter
			meta.twitter.title = `${articleTitleLeadText} — ${post.twitter_title || post.meta_title || post.title}`;
			meta.twitter.description = post.twitter_description || post.meta_description || post.excerpt;
			meta.twitter.image = post.twitter_image || post.feature_image;
		}
	});

	// Reactive
	// Current Theme Data
	$: ({ currentTheme } = data);
	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto';
</script>

<svelte:head>
	<title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content="svelte, sveltekit, web, ui, components, reactive, accessibility, typescript, css, open source" />
	<meta name="theme-color" content="#242c46" />
	<meta name="author" content="Skeleton Labs" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="Skeleton" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.skeleton.dev{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
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
<Modal components={modalComponentRegistry} />
<Toast />
<DocsDrawer />

<!-- App Shell -->
<AppShell {slotSidebarLeft} regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
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
