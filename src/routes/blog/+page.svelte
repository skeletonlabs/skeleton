<script lang="ts">
	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	// Blog Utils
	import { blogDateFormatter } from './blog-utils';
</script>

<div class="page-container">
	<header class="text-center">
		<p>All the latest Skeleton news, straight from the team.</p>
	</header>
	<hr />
	<section class="blog-list space-y-8">
		{#each data.posts as post, i}
			<a class="unstyled block hover:card card-body rounded-container-token" href="/blog/{post.slug}" data-sveltekit-prefetch>
				<article class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
					{#if post.feature_image}
						<img src={post.feature_image} alt={post.title} class="w-full md:max-w-[360px] rounded-container-token shadow-xl" />
					{/if}
					<div class="space-y-4">
						<h2>{post.title}</h2>
						<p>{post.excerpt}</p>
						<time class="block">{blogDateFormatter(post.created_at)}</time>
						<button class="btn btn-ghost-surface">Read More</button>
					</div>
				</article>
			</a>
		{/each}
	</section>
</div>
