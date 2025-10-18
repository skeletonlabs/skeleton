<script lang="ts" module>
	import { createHighlighterCore } from 'shiki/core';
	import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

	const highlighter = await createHighlighterCore({
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
</script>

<script lang="ts">
	interface Props {
		code: string;
		lang?: Parameters<typeof highlighter.codeToHtml>[1]['lang'];
	}

	const props: Props = $props();
	const { code, lang = 'txt' } = $derived(props);

	const html = $derived(
		highlighter.codeToHtml(code, {
			lang,
			theme: 'dark-plus',
		}),
	);
</script>

{@html html}
