'use client';

import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import console from 'shiki/langs/console.mjs';
import css from 'shiki/langs/css.mjs';
import html from 'shiki/langs/html.mjs';
import js from 'shiki/langs/javascript.mjs';
import svelte from 'shiki/langs/svelte.mjs';
import themeDarkPlus from 'shiki/themes/dark-plus.mjs';

// https://shiki.style/guide/sync-usage
const shiki = createHighlighterCoreSync({
	engine: createJavaScriptRegexEngine(),
	// Implement your import theme.
	themes: [themeDarkPlus],
	// Implement your imported and supported languages.
	langs: [console, html, css, js, svelte],
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

export default function CodeBlock({
	code = '',
	lang = 'console',
	theme = 'dark-plus',
	// Base Style Props
	base = 'overflow-hidden',
	background = 'bg-neutral-950',
	rounded = 'rounded-container',
	shadow = '',
	classes = '',
	// Pre Style Props
	preBase = '',
	prePadding = '[&>pre]:p-4',
	preClasses = '',
}: CodeBlockProps) {
	// Shiki convert to HTML
	const generatedHtml = shiki.codeToHtml(code, { lang, theme });

	return (
		<div
			dangerouslySetInnerHTML={{ __html: generatedHtml }}
			className={`${base} ${background} ${rounded} ${shadow} ${classes} ${preBase} ${prePadding} ${preClasses}`}
		></div>
	);
}
