<script lang="ts" module>
	import js from '@shikijs/langs/javascript';
	import svelte from '@shikijs/langs/svelte';
	import nord from '@shikijs/themes/nord';
	import { createHighlighterCoreSync } from 'shiki/core';
	import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

	const shiki = createHighlighterCoreSync({
		themes: [nord],
		langs: [js, svelte],
		engine: createJavaScriptRegexEngine(),
	});
</script>

<script lang="ts">
	interface Props {
		code: string;
		lang: string;
	}

	const props: Props = $props();
	const { code, lang } = $derived(props);
	const html = $derived(shiki.codeToHtml(code, { lang, theme: 'nord' }));
</script>

{@html html}

<style>
	:global(.shiki) {
		white-space: pre-wrap;
	}
</style>
