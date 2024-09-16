<script lang="ts">
	// Components (Local)
	import Lightswitch from '$lib/components/Lightswitch/Lightswitch.svelte';
	import PreviewComponents from './PreviewComponents.svelte';
	import PreviewPalette from './PreviewPalette.svelte';
	import PreviewTypography from './PreviewTypography.svelte';
</script>

<section class="container mx-auto relative h-screen overflow-y-auto">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur-xl p-10 py-5">
		<nav class="flex justify-between gap-4">
			<span class="text-xl font-bold">Theme Preview</span>
			<Lightswitch />
		</nav>
	</header>
	<!-- Components -->
	<article class="p-10 space-y-10">
		<PreviewComponents />
		<hr class="hr" />
		<PreviewPalette />
		<hr class="hr" />
		<PreviewTypography />
	</article>
	<!-- Footer -->
	<footer class="p-10 py-5">
		<p class="text-xs text-center opacity-20">Built by Skeleton Labs and the Skeleton community.</p>
	</footer>
</section>
