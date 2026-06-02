<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Markdown from '$lib/components/markdown/markdown-renderer.svelte';
	import { getTutorialLesson } from '$lib/remote/tutorials/get-tutorials.remote';

	const lesson = $derived(await getTutorialLesson());
</script>

<PageHeader title={lesson?.title}>
	{#snippet description()}
		<p class="opacity-60">{lesson?.description}</p>
	{/snippet}
</PageHeader>

<div class="container-page">
	<Markdown content={lesson?.content ?? 'Content not found.'} />
</div>
