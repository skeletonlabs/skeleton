<script>
	import { blueSkyAgent } from '../../lib/bluesky';

	const postsPromise = blueSkyAgent
		.getAuthorFeed({
			actor: 'skeletonlabs.bsky.social',
			limit: 15,
			filter: 'posts_no_replies',
		})
		.then((result) =>
			result.data.feed
				.filter((item) => {
					return item.post.author.handle === 'skeletonlabs.bsky.social';
				})
				.map((item) => item.post),
		);
</script>

{#await postsPromise}
	{#each { length: 15 }}
		<div class="card bg-surface-100-900 h-96 animate-pulse opacity-50"></div>
	{/each}
{:then posts}
	{#each posts as post (post.cid)}
		<a href="https://bsky.app/profile/{post.author.handle}/post/{post.uri.split('/').at(-1)}" target="_blank" class="block">
			<article class="card preset-outlined-surface-200-800 hover:preset-tonal space-y-4 p-4 xl:p-10">
				<header class="flex items-center justify-between">
					<img
						class="w-10 overflow-hidden rounded-full"
						src="https://avatars.githubusercontent.com/u/118298875?s=400&u=66ff2a8ff80de0400757270d5a4eb90d61c867f1&v=4"
						alt="avatar"
					/>
					<small class="opacity-60">{new Date(post.record.createdAt).toLocaleString()}</small>
				</header>
				<p class="xl:text-lg">{post.record.text}</p>
				<footer class="space-y-4">
					{#if post.embed}
						{#if post.embed.$type.includes('external')}
							<div class="block">
								{#if post.embed.external.thumb}
									<img
										class="bg-surface-500/10 hover:bg-surface-500 rounded-container w-full overflow-hidden p-0.5 shadow"
										src={post.embed.external.thumb}
										alt={post.embed.external.title}
									/>
								{:else}
									<div class="card preset-outlined-surface-200-800 text-surface-800-200 p-4">
										{post.embed.external.title}
									</div>
								{/if}
							</div>
						{:else if post.embed.$type.includes('images')}
							{#each post.embed.images as image}
								<img class="bg-surface-500/10 rounded-container w-full overflow-hidden p-1 shadow" src={image.thumb} alt={image.alt} />
							{/each}
						{/if}
					{/if}
				</footer>
			</article>
		</a>
	{/each}
{:catch error}
	<p class="text-center font-semibold">{error.message}</p>
{/await}
