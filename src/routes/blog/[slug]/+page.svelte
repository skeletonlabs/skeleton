<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';

	// Local
	const post = data.posts[0];

	const cArticle: string = 'space-y-4';
</script>

<div class="page-container">
	<Breadcrumb>
		<Crumb href="/blog">Blog</Crumb>
		<Crumb>{post.title}</Crumb>
	</Breadcrumb>
	<article class="blog-article {cArticle}">
		<h2>{post.title}</h2>
		<time class="block">{post.created_at}</time>
		<img src={post.feature_image} alt={post.title} />
		<div class="prose space-y-4">{@html post.html}</div>
		<!-- <hr />
		<pre>{JSON.stringify(post, null, 2)}</pre> -->
	</article>
</div>
