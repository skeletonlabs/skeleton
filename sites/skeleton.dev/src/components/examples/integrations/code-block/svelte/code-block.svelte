<script lang="ts" module>
	import { createHighlighterCore } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

	const highlighter = await createHighlighterCore({
		langs: [
			import('@shikijs/langs/bash'),
			import('@shikijs/langs/css'),
			import('@shikijs/langs/html'),
			import('@shikijs/langs/javascript'),
		],
		themes: [import('@shikijs/themes/github-dark')],
		engine: createJavaScriptRegexEngine(),
	});

	interface CodeBlockProps {
		code: Parameters<typeof highlighter.codeToHtml>[0];
		lang?: Parameters<typeof highlighter.codeToHtml>[1]['lang'];
		// Base Style Props
		base?: string;
		background?: string;
		rounded?: string;
		shadow?: string;
		classes?: string;
		// Pre Style Props
		preBase?: string;
		prePadding?: string;
		preClasses?: string;
	}
</script>

<script lang="ts">
	const {
		code = '',
		lang = 'txt',
		// Base Style Props
		base = ' overflow-hidden',
		rounded = 'rounded-container',
		shadow = '',
		classes = '',
		// Pre Style Props
		preBase = '',
		prePadding = '[&>pre]:p-4',
		preClasses = '',
	}: CodeBlockProps = $props();

	const generatedHtml = highlighter.codeToHtml(code, {
		lang,
		theme: 'github-dark',
	});
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	<!-- Output Shiki's Generated HTML -->
	{@html generatedHtml}
</div>
