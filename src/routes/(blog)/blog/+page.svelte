<script>
	export let data;
</script>

<h1>Blog</h1>

<div class="flex flex-row">
	{#each data.posts as post}
		<a href={post.path}>
			<div class="card">
				<header class="card-header">(header)</header>
				<div class="card-body">{post.meta.title}</div>
				<footer class="card-footer">Published {post.meta.date}</footer>
			</div>
		</a>
	{/each}
</div>
