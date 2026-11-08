<script lang="ts" module>
	export interface Props {
		code: Parameters<typeof codeToHtml>[0];
		lang: Parameters<typeof codeToHtml>[1]["lang"];
	}
</script>

<script lang="ts">
	import { codeToHtml } from "#lib/code-highlight/shiki.bundle.ts";

	const { code, lang }: Props = $props();

	const html = $derived(
		await codeToHtml(code, {
			lang,
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
			defaultColor: "light-dark()",
		}),
	);
</script>

<div
	class="card *first:whitespace-pre-wrap bg-neutral-50 p-4 text-xs shadow-lg *:first:bg-transparent! dark:bg-neutral-950"
>
	{@html html}
</div>
