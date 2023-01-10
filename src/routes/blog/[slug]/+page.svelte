<script lang="ts">
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	// Blog Utils
	import { blogDateFormatter } from '../blog-service';

	// Components
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';

	// Local
	let elemPage: HTMLElement | null;

	onMount(() => {
		// Element Page
		elemPage = document.querySelector('#page');
		// CodeBlock Highlight
		document.querySelectorAll('pre code').forEach((elem: any) => {
			hljs.highlightElement(elem);
		});
		// Table
		document.querySelectorAll('table').forEach((elem: any) => {
			elem.classList.add('table');
		});
	});

	function scrollToTop(): void {
		if (elemPage) elemPage.scrollTop = 0;
	}

	// Local
	const post = data.posts[0];
</script>

<svelte:head>
	<title>Skeleton Blog — {post.title}</title>
	<!-- Meta -->
	<meta name="title" content={post.title} />
	<meta name="description" content={post.excerpt} />
	<!-- Open Graph -->
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:type" content="image/jpeg" />
	<meta property="og:url" content="https://www.skeleton.dev{$page.url.pathname}" />
	<meta property="og:image" content={post.feature_image} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@SkeletonUI" />
	<meta name="twitter:creator" content="@SkeletonUI" />
	<meta property="og:url" content="https://www.skeleton.dev{$page.url.pathname}" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:image" content={post.feature_image} />
</svelte:head>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/blog">Blog</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Article</li>
	</ol>
	<!-- Article -->
	<article class="blog-post">
		<!-- Header -->
		<header class="space-y-4">
			<!-- Timestamp / Read Time -->
			<div class="blog-meta flex justify-between items-center">
				<time class="block">{blogDateFormatter(post.updated_at)}</time>
				<span class="hidden md:block text-xs opacity-50">{post.reading_time} min read</span>
			</div>
			<h1>{post.title}</h1>
			<!-- Byline -->
			<div class="flex items-center space-x-4 py-4">
				<Avatar src={post.primary_author.profile_image} alt={post.primary_author.slug} />
				<div>
					<div class="text-sm">{post.primary_author.name}</div>
					<a class="text-secondary-500 text-xs" href="https://twitter.com/{post.primary_author.twitter}">{post.primary_author.twitter}</a>
				</div>
			</div>
			<!-- Featured Image -->
			{#if post.feature_image}<img
					src={post.feature_image}
					alt={post.title}
					class="w-full aspect-video rounded-container-token shadow-xl"
				/>{/if}
		</header>
		<!-- HTML Content -->
		<div class="blog-html space-y-4">{@html post.html}</div>
		<!-- Footer -->
		<footer class="card p-4 card-glass-surface flex justify-between items-center mb-28">
			<!-- Tags -->
			<div class="flex items-center space-x-4">
				{#each post.tags as tag}
					<span class="text-sm font-bold opacity-50 capitalize">{tag.slug}</span>
				{/each}
			</div>
			<!-- Scroll to Top -->
			<!-- prettier-ignore -->
			<button class="btn btn-ghost-surface" on:click={()=>{scrollToTop()}}>Scroll to Top &uarr;</button>
		</footer>
	</article>
	<!-- Twitter Embed Script -->
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
