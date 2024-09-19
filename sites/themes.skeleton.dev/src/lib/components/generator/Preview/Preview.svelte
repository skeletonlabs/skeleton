<script lang="ts">
	// Components (Skeleton)
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	// Components (Local)
	import Lightswitch from '$lib/components/Lightswitch/Lightswitch.svelte';
	import PreviewComponents from './PreviewComponents.svelte';
	import PreviewPalette from './PreviewPalette.svelte';
	import PreviewTypography from './PreviewTypography.svelte';
	import ThemeCodeBlock from '../ThemeCodeBlock/ThemeCodeBlock.svelte';

	// State
	let display: 'preview' | 'code' = $state('code');
</script>

<section class="relative h-screen overflow-y-auto">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-surface-50/50 dark:bg-surface-950/50 backdrop-blur-xl p-10 py-5 shadow">
		<nav class="flex justify-between gap-4">
			<Segment name="display" bind:value={display as string}>
				<Segment.Item value="preview" classes="btn-sm font-bold">Preview</Segment.Item>
				<Segment.Item value="code" classes="btn-sm font-bold">Code</Segment.Item>
			</Segment>
			<Lightswitch />
		</nav>
	</header>
	<article class="container mx-auto">
		{#if display === 'preview'}
			<!-- Components -->
			<section class="p-10 space-y-10">
				<PreviewComponents />
				<hr class="hr" />
				<PreviewPalette />
				<hr class="hr" />
				<PreviewTypography />
			</section>
		{:else}
			<!-- Theme Output -->
			<section class="p-10 space-y-10">
				<ThemeCodeBlock />
			</section>
		{/if}
	</article>
	<!-- Footer -->
	<footer class="p-10 py-5">
		<p class="text-xs text-center opacity-20">Built by Skeleton Labs and the Skeleton community.</p>
	</footer>
</section>
