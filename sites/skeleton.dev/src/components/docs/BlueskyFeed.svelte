<script>
	import { blueSkyAgent } from '../../lib/bluesky';

	const postsPromise = blueSkyAgent
		.getAuthorFeed({
			actor: 'skeleton.dev',
			limit: 15,
			filter: 'posts_no_replies',
		})
		.then((result) =>
			result.data.feed
				.filter((item) => {
					return item.post.author.handle === 'skeleton.dev';
				})
				.map((item) => item.post),
		);
</script>

{#await postsPromise}
	{#each { length: 15 } as _ (_)}
		<div class="card bg-surface-100-900 opacity-50 animate-pulse h-96"></div>
	{/each}
{:then posts}
	{#each posts as post (post.cid)}
		<a href="https://bsky.app/profile/{post.author.handle}/post/{post.uri.split('/').at(-1)}" target="_blank" class="block">
			<article class="card preset-outlined-surface-200-800 hover:preset-tonal p-4 xl:p-10 space-y-4">
				<header class="flex justify-between items-center">
					<img
						class="w-10 rounded-full overflow-hidden"
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
										class="w-full bg-surface-500/10 hover:bg-surface-500 p-0.5 rounded-container overflow-hidden shadow"
										src={post.embed.external.thumb}
										alt={post.embed.external.title}
									/>
								{:else}
									<div class="card preset-outlined-surface-200-800 p-4 text-surface-800-200">
										{post.embed.external.title}
									</div>
								{/if}
							</div>
						{:else if post.embed.$type.includes('images')}
							{#each post.embed.images as image (image)}
								<img class="w-full bg-surface-500/10 p-1 rounded-container overflow-hidden shadow" src={image.thumb} alt={image.alt} />
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
