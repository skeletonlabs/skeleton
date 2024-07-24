<script lang="ts">
	import '../app.pcss';
	import { genCssCode } from '$lib/generator.svelte';
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	// FIXME: this will need a major refactor
	let cssCode = $derived(genCssCode());
</script>

<!-- Live Preview CSS -->
<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `\<style\>${cssCode}\</style\>`}
</svelte:head>

{@render children?.()}
