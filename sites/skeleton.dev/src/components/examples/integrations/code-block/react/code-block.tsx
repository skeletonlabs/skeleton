import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

const highlighter = await createHighlighterCore({
	langs: [import('@shikijs/langs/bash'), import('@shikijs/langs/css'), import('@shikijs/langs/html'), import('@shikijs/langs/javascript')],
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

export default function CodeBlock({
	code = '',
	lang = 'txt',
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
	const html = highlighter.codeToHtml(code, {
		lang,
		theme: 'github-dark',
	});
	return (
		<div
			dangerouslySetInnerHTML={{ __html: html }}
			className={`${base} ${background} ${rounded} ${shadow} ${classes} ${preBase} ${prePadding} ${preClasses}`}
		></div>
	);
}
