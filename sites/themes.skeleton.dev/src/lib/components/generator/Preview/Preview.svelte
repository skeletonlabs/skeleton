<script lang="ts">
	// State
	import { globals } from '$lib/state/generator.svelte';
	// Components (Skeleton)
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	// Components (common)
	import CodeBlock from '$lib/components/common/CodeBlock/CodeBlock.svelte';
	import Logo from '$lib/components/common/Logo/Logo.svelte';
	// Components (generator)
	import Lightswitch from '$lib/components/common/Lightswitch/Lightswitch.svelte';
	import PreviewComponents from './PreviewComponents.svelte';
	import PreviewPalette from './PreviewPalette.svelte';
	import PreviewTypography from './PreviewTypography.svelte';
	// Utils
	// import { generatePreviewCss } from '$lib/utils/generator/generate-css';
	import { generateTheme } from '$lib/utils/generator/generate-theme';

	function copyToClipboard() {
		if (!window.isSecureContext) {
			console.error('Needs secure context: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');
			return {};
		}
		navigator.clipboard.writeText(generateTheme());
	}
</script>

<section class="relative h-screen overflow-y-auto bg-body-color dark:bg-body-color-dark">
	<!-- Header -->
	<header class="sticky top-0 z-10 bg-surface-50/50 dark:bg-surface-950/50 backdrop-blur-xl p-10 py-5 shadow">
		<nav class="flex justify-between gap-4">
			<Logo />
			<Segment name="display" bind:value={globals.panel}>
				<Segment.Item value="preview" classes="btn-sm font-bold">Preview</Segment.Item>
				<Segment.Item value="code" classes="btn-sm font-bold">Code</Segment.Item>
			</Segment>
			<Lightswitch />
		</nav>
	</header>
	<!-- Content -->
	<article class="container mx-auto">
		{#if globals.panel === 'preview'}
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
			<section class="p-10 space-y-5">
				<header class="flex justify-between gap-4">
					<h2 class="h3">Theme Code</h2>
					<button type="button" class="btn preset-outlined-surface-300-700 hover:preset-tonal" onclick={copyToClipboard}>Copy</button>
				</header>
				<CodeBlock lang="ts" code={generateTheme()} />
			</section>
			<!-- Preview CSS Output -->
			<!-- <section class="p-10 space-y-5">
				<header><h2 class="h2">Preview CSS</h2></header>
				<CodeBlock lang="css" code={generatePreviewCss()} />
			</section> -->
		{/if}
	</article>
	<!-- Footer -->
	<footer class="p-10 py-5">
		<p class="text-xs text-center opacity-20">Built by Skeleton Labs and the Skeleton community.</p>
	</footer>
</section>
