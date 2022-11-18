<script lang="ts">
	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	// Blog Utils
	import { blogDateFormatter } from './blog-utils';
</script>

<div class="page-container">
	<header class="text-center space-y-4">
		<p class="font-bold">All the latest Skeleton information, straight from the source.</p>
	</header>
	<section class="blog-list space-y-8">
		{#each data.posts as post, i}
			<a class="unstyled block hover:card card-body rounded-container-token" href="/blog/{post.slug}" data-sveltekit-prefetch>
				<article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 md:gap-8">
					{#if post.feature_image}
						<div
							class="bg-black/50 w-full md:w-64 aspect-square rounded-container-token shadow-xl bg-cover bg-center"
							style:background-image={`url(${post.feature_image})`}
						/>
					{/if}
					<div class="space-y-4">
						<time class="block">{blogDateFormatter(post.created_at)}</time>
						<h2>{post.title}</h2>
						<p>{post.excerpt}</p>
						<div class="flex items-center space-x-4">
							{#each post.tags as tag, i}
								<span class="text-xs font-bold opacity-50 capitalize">{tag.slug}</span>
							{/each}
						</div>
						<button class="btn btn-ghost-surface">Read Article &rarr;</button>
					</div>
				</article>
			</a>
		{/each}
	</section>
</div>
