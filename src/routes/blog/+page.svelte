<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const cBlogList: string = 'space-y-8';
	const cArticle: string = 'space-y-4';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h2>Blog</h2>
	</header>
	<hr />
	<section class="blog-list {cBlogList}">
		{#each data.posts as post, i}
			<article class="blog-article {cArticle}">
				<img src={post.feature_image} alt={post.title} class="max-w-[480px]" />
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>
				<time class="block">{post.created_at}</time>
				<a class="btn btn-filled-accent" href="/blog/{post.slug}">Read More</a>
			</article>
			<!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
		{/each}
	</section>
</div>
