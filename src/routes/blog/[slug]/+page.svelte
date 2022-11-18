<script lang="ts">
	import hljs from 'highlight.js';
	import { onMount } from 'svelte';

	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	// Blog Utils
	import { blogDateFormatter } from '../blog-utils';

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
		document.querySelectorAll('pre code').forEach((el: any) => {
			hljs.highlightElement(el);
		});
	});

	function scrollToTop(): void {
		if (elemPage) elemPage.scrollTop = 0;
	}

	// Local
	const post = data.posts[0];
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/blog">Blog</Crumb>
		<Crumb>Article</Crumb>
	</Breadcrumb>
	<!-- Article -->
	<article class="blog-post">
		<!-- Header -->
		<header class="space-y-4">
			<div class="blog-meta flex justify-between items-center">
				<time class="block">{blogDateFormatter(post.created_at)}</time>
				<span class="hidden md:block text-xs opacity-50">{post.reading_time} min read</span>
			</div>
			<h1>{post.title}</h1>
			<div class="flex items-center space-x-4 py-4">
				<Avatar src={post.primary_author.profile_image} alt={post.primary_author.slug} />
				<div>
					<div class="text-sm">{post.primary_author.name}</div>
					<a class="text-sm" href="https://twitter.com/{post.primary_author.twitter}">{post.primary_author.twitter}</a>
				</div>
			</div>
			{#if post.feature_image}
				<img src={post.feature_image} alt={post.title} class="rounded-container-token shadow-xl" />
			{/if}
		</header>
		<!-- HTML Content -->
		<div class="blog-html space-y-4">{@html post.html}</div>
		<hr />
		<!-- Footer -->
		<footer class="flex justify-between items-center pb-28">
			<!-- Tags -->
			<div class="flex items-center space-x-4">
				{#each post.tags as tag, i}
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
