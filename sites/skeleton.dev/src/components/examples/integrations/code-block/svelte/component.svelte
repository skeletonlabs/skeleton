<script module>
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	import console from 'shiki/langs/console.mjs';
	import css from 'shiki/langs/css.mjs';
	import html from 'shiki/langs/html.mjs';
	import js from 'shiki/langs/javascript.mjs';
	import themeDarkPlus from 'shiki/themes/dark-plus.mjs';

	const shiki = createHighlighterCoreSync({
		engine: createJavaScriptRegexEngine(),
		// Implement your import theme.
		themes: [themeDarkPlus],
		// Implement your imported and supported languages.
		langs: [console, html, css, js],
	});

	interface CodeBlockProps {
		code: string;
		lang?: string;
		theme?: string;
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
		lang = 'console',
		theme = 'dark-plus',
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

	// Shiki convert to HTML
	const generatedHtml = shiki.codeToHtml(code, { lang, theme });
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	<!-- Output Shiki's Generated HTML -->
	{@html generatedHtml}
</div>
