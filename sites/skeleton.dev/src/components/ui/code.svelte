<script lang="ts">
	import { codeToHtml } from '@/modules/shiki.bundle';

	interface Props {
		code: Parameters<typeof codeToHtml>[0];
		lang?: Parameters<typeof codeToHtml>[1]['lang'];
	}

	const props: Props = $props();
	const { code, lang = 'txt' } = $derived(props);

	const html = $derived(
		await codeToHtml(code, {
			lang,
			themes: {
				light: 'light-plus',
				dark: 'dark-plus',
			},
			defaultColor: 'light-dark()',
		}),
	);

	console.log('This is a codeblock');
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
