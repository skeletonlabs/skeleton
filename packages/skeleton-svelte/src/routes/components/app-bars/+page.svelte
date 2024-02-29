<script lang="ts">
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
</script>

<h1 class="h1">App Bar</h1>

<h3 class="h3">App Bar</h3>

<AppBar>
	{#snippet lead()}
		<span>💀</span>
		<span>Skeleton</span>
	{/snippet}
	Skeleton
	{#snippet trail()}
		<span>Skeleton</span>
		<span>💀</span>
	{/snippet}
</AppBar>

<h3 class="h3">Headline</h3>
<AppBar headlineBase="text-center">
	{#snippet lead()}
		<span>💀</span>
		<span>Skeleton</span>
	{/snippet}
	{#snippet trail()}
		<span>Skeleton</span>
		<span>💀</span>
	{/snippet}
	{#snippet headline()}
		<h1 class="h1">Headline</h1>
	{/snippet}
</AppBar>
