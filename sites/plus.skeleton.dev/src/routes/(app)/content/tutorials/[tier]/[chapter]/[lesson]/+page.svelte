<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import Markdown from '$lib/components/markdown/Markdown.svelte';
	import { getTutorialLesson } from '$lib/remote/tutorials/get-tutorials.remote';
	import kitchenSink from './kitchen-sink.md?raw';

	const lesson = $derived(await getTutorialLesson());
</script>

<PageHeader title={lesson?.title}>
	{#snippet description()}
		<p class="opacity-60">{lesson?.description}</p>
	{/snippet}
</PageHeader>

<div class="container-page">
	<Markdown content={kitchenSink} />
</div>
