<script lang="ts">
	// State
	// Components (common)
	import CodeBlock from '$lib/components/common/CodeBlock/CodeBlock.svelte';
	import { globals } from '$lib/state/generator.svelte';
	// Utils
	import { generateTheme } from '$lib/utils/generator/generate-theme';
	// Components (generator)
	import PreviewComponents from './PreviewComponents.svelte';
	import PreviewPalette from './PreviewPalette.svelte';
	import PreviewTypography from './PreviewTypography.svelte';

	function copyToClipboard() {
		if (!window.isSecureContext) {
			console.error('Needs secure context: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');
			return {};
		}
		navigator.clipboard.writeText(generateTheme());
	}
</script>

<!-- bg-gradient-skeleton -->
<section class="relative h-screen overflow-y-auto">
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
			<section class="py-10 px-5 space-y-5">
				<header class="flex justify-between gap-4">
					<!-- prettier-ignore -->
					<p>
						Copy the theme code below, then follow the <a href="https://skeleton.dev/docs/design/themes" target="_blank" class="anchor">documentation instructions</a>.
					</p>
					<button type="button" class="btn preset-outlined-surface-300-700 hover:preset-tonal" onclick={copyToClipboard}>Copy</button>
				</header>
				<CodeBlock lang="css" code={generateTheme()} />
			</section>
		{/if}
	</article>
	<!-- Footer -->
	<footer class="p-10 py-5">
		<p class="text-xs text-center opacity-20">Built by Skeleton Labs and the Skeleton community.</p>
	</footer>
</section>
