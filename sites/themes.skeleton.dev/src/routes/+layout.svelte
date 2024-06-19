<script lang="ts">
	import '../app.pcss';
	import { genCssCode } from '$lib/generator.svelte';

	let cssCode = $derived(genCssCode());
</script>

<!-- Live Preview CSS -->
<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `\<style\>${cssCode}\</style\>`}
</svelte:head>

<slot />
