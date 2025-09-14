<!-- @component Code Block based on: https://shiki.style/ -->

<script module>
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
	// Languages
	// https://shiki.style/languages
	import console from 'shiki/langs/console.mjs';
	import css from 'shiki/langs/css.mjs';
	import html from 'shiki/langs/html.mjs';
	import js from 'shiki/langs/javascript.mjs';
	import ts from 'shiki/langs/typescript.mjs';
	// Themes
	// https://shiki.style/themes
	import auroraX from 'shiki/themes/aurora-x.mjs';

	// https://shiki.style/guide/sync-usage
	const shiki = createHighlighterCoreSync({
		engine: createJavaScriptRegexEngine(),
		// Implement your import theme.
		themes: [auroraX],
		// Implement your imported and supported languages.
		langs: [console, html, css, js, ts],
	});
</script>

<script lang="ts">
	import type { CodeBlockProps } from './types';

	let {
		code = '',
		lang = 'console',
		theme = 'aurora-x',
		// Base Style Props
		base = ' overflow-hidden',
		rounded = 'rounded-container',
		shadow = '',
		classes = '',
		// Pre Style Props
		preBase = 'border border-surface-200-800 text-xs',
		prePadding = '[&>pre]:p-4',
		preClasses = '',
	}: CodeBlockProps = $props();

	const generatedHtml = $derived(shiki.codeToHtml(code, { lang, theme }));
</script>

<div class="{base} {rounded} {shadow} {classes} {preBase} {prePadding} {preClasses}">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html generatedHtml}
</div>
