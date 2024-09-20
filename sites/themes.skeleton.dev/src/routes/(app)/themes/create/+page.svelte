<script lang="ts">
	// Components (local)
	import Preview from '$lib/components/generator/Preview/Preview.svelte';
	import Controls from '$lib/components/generator/Controls/Controls.svelte';
	// Utils
	import { generatePreviewCss } from '$lib/utils/generator/generate-css';
</script>

<!-- Live Preview CSS -->
<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `\<style\>${generatePreviewCss()}\</style\>`}
</svelte:head>

<main class="h-full grid grid-cols-[1fr_480px]" data-theme-preview>
	<Preview />
	<Controls />
</main>
