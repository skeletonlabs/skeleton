<script lang="ts">
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	// Blog Utils
	import { blogDateFormatter } from '../blog-service';

	// Components
	import { Avatar } from '@skeletonlabs/skeleton';

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

<!-- NOTE: SEO handled in root page layout -->

<!-- blog-post -->
<div class="max-w-5xl mx-auto p-4 md:p-12 space-y-8">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/blog">Blog</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Article</li>
	</ol>
	<!-- Header -->
	<header class="space-y-4">
		<!-- Timestamp / Read Time -->
		<div class="blog-meta flex justify-between items-center">
			<time class="time block">{blogDateFormatter(post.updated_at)}</time>
			<span class="hidden md:block text-xs opacity-50">{post.reading_time} min read</span>
		</div>
		<h1 class="h1">{post.title}</h1>
		<!-- Byline -->
		<div class="flex items-center space-x-4 py-4">
			<Avatar src={post.primary_author.profile_image} alt={post.primary_author.slug} />
			<div>
				<span class="block">{post.primary_author.name}</span>
				<a class="anchor text-secondary-500 text-xs" href="https://twitter.com/{post.primary_author.twitter}"
					>{post.primary_author.twitter}</a
				>
			</div>
		</div>
		<!-- Featured Image -->
		{#if post.feature_image}<img
				src={post.feature_image}
				alt={post.title}
				class="w-full aspect-video rounded-container-token shadow-xl"
			/>{/if}
	</header>
	<!-- Article -->
	<article class="prose lg:prose-xl max-w-full space-y-8 md:space-y-12">
		{@html post.html}
	</article>
	<!-- Footer -->
	<footer class="card p-4 variant-glass-surface flex justify-between items-center mb-28">
		<!-- Tags -->
		<div class="flex items-center space-x-4">
			{#each post.tags as tag}
				<span class="text-sm font-bold opacity-50 capitalize">{tag.slug}</span>
			{/each}
		</div>
		<!-- Scroll to Top -->
		<!-- prettier-ignore -->
		<button class="btn variant-ghost-surface" on:click={()=>{scrollToTop()}}>Scroll to Top &uarr;</button>
	</footer>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
