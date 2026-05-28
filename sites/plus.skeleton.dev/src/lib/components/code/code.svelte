<script lang="ts" module>
	export interface Props {
		code: Parameters<typeof codeToHtml>[0];
		lang: Parameters<typeof codeToHtml>[1]['lang'];
	}
</script>

<script lang="ts">
	import { codeToHtml } from '$lib/code-highlight/shiki.bundle';

	const { code, lang }: Props = $props();

	const html = $derived(
		await codeToHtml(code, {
			lang,
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			defaultColor: 'light-dark()',
		}),
	);
</script>

<div class="*:first:card *:first:bg-white dark:*:first:bg-black *:first:p-4">
	{@html html}
</div>
