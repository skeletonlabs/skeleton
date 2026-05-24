/* Generate by @shikijs/codegen */
import { createSingletonShorthands, createBundledHighlighter } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';
import type { DynamicImportLanguageRegistration, DynamicImportThemeRegistration } from '@shikijs/types';

type BundledLanguage = 'ts' | 'tsx' | 'svelte';
type BundledTheme = 'github-light' | 'github-dark';

const bundledLanguages = {
	ts: () => import('@shikijs/langs/typescript'),
	tsx: () => import('@shikijs/langs/tsx'),
	svelte: () => import('@shikijs/langs/svelte'),
} satisfies Record<BundledLanguage, DynamicImportLanguageRegistration>;

const bundledThemes = {
	'github-light': () => import('@shikijs/themes/github-light'),
	'github-dark': () => import('@shikijs/themes/github-dark'),
} satisfies Record<BundledTheme, DynamicImportThemeRegistration>;

const createHighlighter = /* @__PURE__ */ createBundledHighlighter<BundledLanguage, BundledTheme>({
	langs: bundledLanguages,
	themes: bundledThemes,
	engine: () => createJavaScriptRegexEngine(),
});

export const { codeToHtml } = /* @__PURE__ */ createSingletonShorthands<BundledLanguage, BundledTheme>(createHighlighter);
