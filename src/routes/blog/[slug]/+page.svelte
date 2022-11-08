<script lang="ts">
	export let data: any;
	import { Avatar } from '@brainandbones/skeleton';
	import { Breadcrumb, Crumb } from '@brainandbones/skeleton';
	//import DocsBreadCrumb from '$docs/DocsBreadCrumb/DocsBreadCrumb.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb> <a href="/blog" data-svelte-reload>Blog</a></Crumb>
		<Crumb>{data.title}</Crumb>
	</Breadcrumb>
	<article class="">
		<div>
			<h1>{data.title}</h1>
			<p>Published: {new Date(data.date).toLocaleDateString()} by {data.author} <Avatar src="https://github.com/{data.author}.png" /></p>
		</div>

		<svelte:component this={data.content} />
	</article>
</div>
