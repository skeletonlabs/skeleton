<script lang="ts">
	import { codeToHtml } from 'shiki';

	interface PropsCodeBlock {
		code: any;
		lang?: string;
		theme?: string;
	}

	// prettier-ignore
	const {
        code,
        lang = 'plaintext',
        theme = 'min-dark'
    } = $props<PropsCodeBlock>();

	// Generate Code Block HTML
	const genCodeBlock = codeToHtml(JSON.stringify(code, null, 2), { lang, theme });
</script>

{#await genCodeBlock then code}
	<div class="[&>.shiki]:type-scale-1 [&>.shiki]:p-4 [&>.shiki]:rounded-2xl">
		{@html code}
	</div>
{/await}
