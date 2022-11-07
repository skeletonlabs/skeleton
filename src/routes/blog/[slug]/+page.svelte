<script lang="ts">
	export let data: any;
</script>

<div class="px-24">
	<article class="">
		<h1>{data.title}</h1>
		<p>Published: {new Date(data.date).toLocaleDateString()}</p>
		<svelte:component this={data.content} />
	</article>
</div>
