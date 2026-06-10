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

<div class="card bg-neutral-50 dark:bg-neutral-950 p-4 shadow-lg text-xs *:first:bg-transparent! *first:whitespace-pre-wrap">
	{@html html}
</div>
