<script lang="ts">
	// Components (generator)
	import Logo from "#lib/components/common/Logo/Logo.svelte";
	import Controls from "#lib/components/generator/Controls/Controls.svelte";
	import Preview from "#lib/components/generator/Preview/Preview.svelte";
	// Utils
	import { generatePreviewCss } from "#lib/utils/generator/generate-css.ts";
	import { generateFontFaces } from "#lib/utils/generator/generate-font-faces.ts";
</script>

<!-- Live Preview CSS -->
<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<style>${generatePreviewCss()}</style>`}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<style>${generateFontFaces()}</style>`}
</svelte:head>

<!-- Warning: Mobile Not Supported -->
<div
	class="bg-surface-50-950 absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center p-4 lg:hidden"
>
	<div class="card bg-surface-100-900 max-w-96 space-y-5 p-10 shadow-xl">
		<Logo />
		<h2 class="h2">Not Available.</h2>
		<p class="opacity-60">
			The theme generator is not currently available for small screen devices. We recommend
			using either a tablet or desktop.
		</p>
	</div>
</div>

<main class="grid h-full grid-cols-[1fr_480px]">
	<Preview />
	<Controls />
</main>
