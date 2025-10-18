import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRawEngine } from 'shiki/engine/javascript';

export const highlighter = await createHighlighterCore({
	themes: [import('@shikijs/themes/dark-plus')],
	langs: [
		import('@shikijs/langs-precompiled/ts'),
		import('@shikijs/langs-precompiled/tsx'),
		import('@shikijs/langs-precompiled/svelte'),
		import('@shikijs/langs-precompiled/astro'),
		import('@shikijs/langs-precompiled/html'),
		import('@shikijs/langs-precompiled/bash'),
		import('@shikijs/langs-precompiled/diff'),
		import('@shikijs/langs-precompiled/json'),
	],
	engine: createJavaScriptRawEngine(),
});
