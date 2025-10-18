/* Generate by @shikijs/codegen */
import { createSingletonShorthands, createdBundledHighlighter } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';
import type { DynamicImportLanguageRegistration, DynamicImportThemeRegistration } from '@shikijs/types';

type BundledLanguage =
	| 'typescript'
	| 'ts'
	| 'tsx'
	| 'svelte'
	| 'astro'
	| 'html'
	| 'shellscript'
	| 'bash'
	| 'sh'
	| 'shell'
	| 'zsh'
	| 'diff'
	| 'json'
	| 'css';
type BundledTheme = 'light-plus' | 'dark-plus';

const bundledLanguages = {
	typescript: () => import('@shikijs/langs/typescript'),
	ts: () => import('@shikijs/langs/typescript'),
	tsx: () => import('@shikijs/langs/tsx'),
	svelte: () => import('@shikijs/langs/svelte'),
	astro: () => import('@shikijs/langs/astro'),
	html: () => import('@shikijs/langs/html'),
	shellscript: () => import('@shikijs/langs/shellscript'),
	bash: () => import('@shikijs/langs/shellscript'),
	sh: () => import('@shikijs/langs/shellscript'),
	shell: () => import('@shikijs/langs/shellscript'),
	zsh: () => import('@shikijs/langs/shellscript'),
	diff: () => import('@shikijs/langs/diff'),
	json: () => import('@shikijs/langs/json'),
	css: () => import('@shikijs/langs/css'),
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
	'light-plus': () => import('@shikijs/themes/light-plus'),
	'dark-plus': () => import('@shikijs/themes/dark-plus'),
} as Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createdBundledHighlighter<BundledLanguage, BundledTheme>({
	langs: bundledLanguages,
	themes: bundledThemes,
	engine: () => createJavaScriptRegexEngine(),
});

export const { codeToHtml } = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(createHighlighter);
