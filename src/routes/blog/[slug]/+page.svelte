<script lang="ts">
	import { onMount } from 'svelte';

	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';

	// Highlight.js
	import hljs from 'highlight.js';
	onMount(() => {
		// hljs.highlightAll();
		document.querySelectorAll('pre code').forEach((el: any) => {
			console.log(el);
			hljs.highlightElement(el);
		});
	});

	// Local
	const post = data.posts[0];
</script>

<div class="page-container">
	<Breadcrumb>
		<Crumb href="/blog">Blog</Crumb>
		<Crumb>{post.title}</Crumb>
	</Breadcrumb>
	<article class="blog-post">
		<header class="space-y-4">
			<time class="block">{new Date(post.created_at).toLocaleDateString()}</time>
			<h1>{post.title}</h1>
			{#if post.feature_image}
				<img src={post.feature_image} alt={post.title} class="rounded-container-token shadow-xl" />
			{/if}
		</header>
		<div class="blog-html space-y-4">{@html post.html}</div>
		<!-- <hr />
		<pre>{JSON.stringify(post, null, 2)}</pre> -->
	</article>
</div>
