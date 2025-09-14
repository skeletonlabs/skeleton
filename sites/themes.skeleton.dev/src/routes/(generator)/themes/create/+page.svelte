<script lang="ts">
	// Components (generator)
	import Logo from '$lib/components/common/Logo/Logo.svelte';
	import Controls from '$lib/components/generator/Controls/Controls.svelte';
	import Preview from '$lib/components/generator/Preview/Preview.svelte';
	// Utils
	import { generatePreviewCss } from '$lib/utils/generator/generate-css';
</script>

<!-- Live Preview CSS -->
<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<style>${generatePreviewCss()}</style>`}
</svelte:head>

<!-- Warning: Mobile Not Supported -->
<div class="lg:hidden absolute top-0 z-50 left-0 w-full h-full bg-surface-50-950 flex justify-center items-center p-4">
	<div class="card bg-surface-100-900 max-w-96 p-10 space-y-5 shadow-xl">
		<Logo />
		<h2 class="h2">Not Available.</h2>
		<p class="opacity-60">
			The theme generator is not currently available for small screen devices. We recommend using either a tablet or desktop.
		</p>
	</div>
</div>

<main class="h-full grid grid-cols-[1fr_480px]">
	<Preview />
	<Controls />
</main>
