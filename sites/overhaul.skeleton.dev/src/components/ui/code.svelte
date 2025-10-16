<script lang="ts" module>
	import { createHighlighterCore } from 'shiki/core';
	import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

	const highligher = await createHighlighterCore({
		themes: [import('@shikijs/themes/dark-plus')],
		langs: [import('@shikijs/langs/typescript'), import('@shikijs/langs/tsx'), import('@shikijs/langs/svelte')],
		engine: createOnigurumaEngine(import('shiki/wasm')),
	});
</script>

<script lang="ts">
	interface Props {
		code: string;
		lang: string;
	}

	const props: Props = $props();
	const { code, lang } = $derived(props);
	const html = $derived(highligher.codeToHtml(code, { lang, theme: 'dark-plus' }));
</script>

{@html html}

<style>
	:global(.shiki) {
		white-space: pre-wrap;
	}
</style>
