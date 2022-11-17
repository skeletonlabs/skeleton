<script lang="ts">
	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="page-container">
	<header class="space-y-4">
		<h2>Blog</h2>
	</header>
	<hr />
	<section class="blog-list space-y-8">
		{#each data.posts as post, i}
			<article class="blog-article grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
				{#if post.feature_image}
					<img src={post.feature_image} alt={post.title} class="max-w-[360px] rounded-container-token shadow-xl" />
				{/if}
				<div class="space-y-4">
					<h2>{post.title}</h2>
					<p>{post.excerpt}</p>
					<time class="block">{new Date(post.created_at).toLocaleDateString()}</time>
					<a class="btn btn-filled-accent" href="/blog/{post.slug}" data-sveltekit-prefetch>Read More</a>
				</div>
			</article>
			<!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
		{/each}
	</section>
</div>
