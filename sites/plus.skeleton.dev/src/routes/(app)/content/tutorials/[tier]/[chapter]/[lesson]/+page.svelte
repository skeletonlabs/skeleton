<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { markdownComponents } from '$lib/components/markdown';
	import { getTutorialLesson } from '$lib/remote/tutorials/get-tutorials.remote';
	import kitchenSink from './kitchen-sink.md?raw';
	import { ComarkRenderer } from '@comark/svelte';
	import { parse } from '@comark/svelte/parse';

	const lesson = $derived(await getTutorialLesson());
	const kitchenSinkTree = $derived(await parse(kitchenSink));
</script>

<PageHeader title={lesson?.title}>
	{#snippet description()}
		<p class="opacity-60">{lesson?.description}</p>
	{/snippet}
</PageHeader>

<div class="container-page">
	<ComarkRenderer tree={kitchenSinkTree} components={markdownComponents} class="space-y-4" />
</div>
