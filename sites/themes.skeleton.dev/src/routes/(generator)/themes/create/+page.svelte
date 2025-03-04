<script lang="ts">
	// Components (generator)
	import Logo from '$lib/components/common/Logo/Logo.svelte';
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

<!-- Warning: Mobile Not Supported -->
<div class="bg-surface-50-950 absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center p-4 lg:hidden">
	<div class="card bg-surface-100-900 max-w-96 space-y-5 p-10 shadow-xl">
		<Logo />
		<h2 class="h2">Not Available.</h2>
		<p class="opacity-60">
			The theme generator is not currently available for small screen devices. We recommend using either a tablet or desktop.
		</p>
	</div>
</div>

<main class="grid h-full grid-cols-[1fr_480px]">
	<Preview />
	<Controls />
</main>
