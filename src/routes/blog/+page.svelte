<script lang="ts">
	// +page.ts
	import type { PageData } from './$types';
	export let data: PageData;

	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	// Blog Utils
	import { getBlogList, blogDateFormatter } from './blog-service';

	function onPrevPage(): void {
		getBlogList(data.meta.pagination.page - 1).then((res) => (data = res));
	}

	function onNextPage(): void {
		getBlogList(data.meta.pagination.page + 1).then((res) => (data = res));
	}

	function copyRSSToClipboard(): void {
		navigator.clipboard.writeText('https://www.skeleton.dev/blog/rss/');
		const t: ToastSettings = { message: 'RSS feed copied to clipboard.' };
		toastStore.trigger(t);
	}
</script>

<div class="page-container">
	<header class="flex justify-between items-center">
		<div class="space-y-4">
			<h2>The Skeleton Blog</h2>
			<p>Keep up with the latest news, tutorials, and releases for Skeleton.</p>
		</div>
		<!-- RSS Icon -->
		<button class="btn btn-icon-sm !bg-orange-500" on:click={copyRSSToClipboard} on:keypress>
			<i class="fa-solid fa-square-rss text-xl" />
		</button>
	</header>
	<hr />
	<!-- Blog List -->
	<section class="blog-list space-y-8">
		{#each data.posts as post}
			<a class="unstyled block hover:card p-4 rounded-container-token" href="/blog/{post.slug}" data-sveltekit-preload-data="hover">
				<article class="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8">
					<!-- Featured Image -->
					{#if post.feature_image}
						<img
							class="bg-black/50 w-full lg:max-w-sm aspect-video rounded-container-token shadow-xl bg-cover bg-center"
							src={post.feature_image}
							alt="thumbnail"
						/>
					{/if}
					<!-- Content -->
					<div class="space-y-4">
						<time class="block">{blogDateFormatter(post.updated_at)}</time>
						<h2>{post.title}</h2>
						<p>{post.excerpt}</p>
						<div class="flex items-center space-x-4">
							{#each post.tags as tag}
								<span class="text-xs font-bold opacity-50 capitalize">{tag.slug}</span>
							{/each}
						</div>
						<button class="btn btn-ghost-surface">Read Article &rarr;</button>
					</div>
				</article>
			</a>
		{/each}
	</section>
	<hr />
	<!-- Pagination -->
	<footer class="flex justify-between items-center space-x-4">
		<div>
			<small class="opacity-50">Page {data.meta.pagination.page} of {data.meta.pagination.pages}</small>
		</div>
		<div class="flex items-center space-x-4">
			<button class="btn-icon btn-filled" on:click={onPrevPage} disabled={!data.meta.pagination.prev}>&larr;</button>
			<button class="btn btn-filled" on:click={onNextPage} disabled={!data.meta.pagination.next}>Next &rarr;</button>
		</div>
	</footer>
</div>
