<script>
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	export let data;
</script>

<div class="p-5">
	<h1>Skeleton UI Blog</h1>
	
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
		{#each data.posts as post}
			<a class="md:col-span-2 card overflow-hidden" href={post.path}>
				<!-- Header -->
				<header>
					<img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<!-- Body -->
				<div class="card-body space-y-4">
					<h6 class="text-primary-500">Announcements</h6>
					<h3>{post.meta.title}</h3>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
							cum expedita architecto itaque quae rem.
						</p>
					</article>
				</div>
				<hr />
				<!-- Footer -->
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src="https://i.pravatar.cc/160?img=5" />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By {post.meta.author}</h6>
						<small>On {new Date(post.meta.date).toLocaleDateString()}</small>
					</div>
				</footer>
			</a>
		{/each}
	</section>
</div>
