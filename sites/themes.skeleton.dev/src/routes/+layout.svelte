<script lang="ts">
	import '../app.pcss';
	import { genThemeCode, genCssCode } from '$lib/generator.svelte';

	let theme = $derived(genThemeCode());
	let cssCode = $derived(genCssCode(theme));
</script>

<!-- Live Preview of Generated Theme -->
<svelte:head>
	{@html `\<style\>${cssCode}\</style\>`}
</svelte:head>

<slot />
