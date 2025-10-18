<script lang="ts">
	import { highlighter } from '@/modules/highlighter';

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

<style>
	@reference "../../app.css";

	:global(.shiki) {
		white-space: pre-wrap;
		padding: --spacing(2);
		border-radius: var(--radius-container);
		border: 1px solid var(--color-surface-200);

		@variant dark {
			border-color: var(--color-surface-800);
		}
	}
</style>
