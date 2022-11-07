<script>
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	export let data;
</script>

<div class="p-5">
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
		
		{#each data.posts as post}
			<a class="card overflow-hidden" href={post.path}>
				<!-- Header -->
				<header>
					<img src="/blog-assets/{post.meta.image}" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<!-- Body -->
				<div class="card-body space-y-4">
					{#if post.meta.category}
					<h6 class="text-primary-500">{post.meta.category}</h6>
					{/if}
					<h3>{post.meta.title}</h3>
					<article>
						<p>{post.meta.summary}
						</p>
					</article>
				</div>
				<hr />
				<!-- Footer -->
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src="https://github.com/{post.meta.author}.png" />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By {post.meta.author}</h6>
						<small>On {new Date(post.meta.date).toLocaleDateString()}</small>
					</div>
				</footer>
			</a>
		{/each}
	</section>
</div>
