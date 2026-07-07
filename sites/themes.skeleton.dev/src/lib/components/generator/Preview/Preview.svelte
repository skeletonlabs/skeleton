<script lang="ts">
	// Components (common)
	import CodeBlock from '$lib/components/common/CodeBlock/CodeBlock.svelte';
	import { globals, settingsCustomFonts } from '$lib/state/generator.svelte';
	// Utils
	import { generateFontImports, generateFontInstallCommand } from '$lib/utils/generator/generate-font-install';
	import { generateTheme } from '$lib/utils/generator/generate-theme';
	// Components (generator)
	import PreviewComponents from './PreviewComponents.svelte';
	import PreviewPalette from './PreviewPalette.svelte';
	import PreviewTypography from './PreviewTypography.svelte';
	// Icons
	import CopyIcon from '@lucide/svelte/icons/copy';

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
			<section class="p-8 space-y-10">
				<PreviewComponents />
				<hr class="hr" />
				<PreviewPalette />
				<hr class="hr" />
				<PreviewTypography />
			</section>
		{:else}
			<!-- Theme Output -->
			<section class="p-8 space-y-5">
				{#if settingsCustomFonts.font1 || settingsCustomFonts.font2}
					<div class="space-y-5">
						<p class="opacity-60">Install you custom fonts via Fontsource.</p>
						<CodeBlock lang="console" code={generateFontInstallCommand()} />
						<p class="opacity-60">Import and register the fonts in your global CSS stylesheet.</p>
						<CodeBlock lang="css" code={generateFontImports()} />
					</div>
				{/if}
				<header class="flex justify-between items-center gap-4">
					<!-- prettier-ignore -->
					<p>
						<span class="opacity-60">Copy the theme code and follow the</span> <a href="https://www.skeleton.dev/docs/svelte/design/themes#custom-themes" target="_blank" class="anchor">documentation instructions</a>.
					</p>
					<button type="button" class="btn preset-filled" onclick={copyToClipboard}>
						<CopyIcon />
						<span>Copy</span>
					</button>
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
