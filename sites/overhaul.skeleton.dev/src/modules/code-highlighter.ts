import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

export const codeHighlighter = await createHighlighterCore({
	themes: [import('@shikijs/themes/dark-plus')],
	langs: [
		import('@shikijs/langs/typescript'),
		import('@shikijs/langs/tsx'),
		import('@shikijs/langs/svelte'),
		import('@shikijs/langs/astro'),
		import('@shikijs/langs/html'),
		import('@shikijs/langs/bash'),
		import('@shikijs/langs/diff'),
		import('@shikijs/langs/json'),
	],
	engine: createOnigurumaEngine(import('shiki/wasm')),
});
