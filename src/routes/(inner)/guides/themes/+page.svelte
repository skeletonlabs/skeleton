<script lang="ts">
	import { storeFramework } from '$docs/stores/stores';

	import { presets } from './presets';

	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { toastStore } from '$lib/utilities/Toast/stores';
	import type { ToastSettings } from '$lib/utilities/Toast/types';

	// Local
	let activeDataTheme = 'skeleton';

	// Copy Theme Import to Clipboard
	function copyThemeToClipboard(file: string): void {
		// Set Active
		activeDataTheme = file;
		// Copy
		navigator.clipboard.writeText(`import '@skeletonlabs/skeleton/themes/theme-${file.toLowerCase()}.css';`).then(
			// Success
			() => {
				const t: ToastSettings = { message: 'Import statement copied to clipboard.' };
				toastStore.trigger(t);
			},
			// Error
			() => {
				const t: ToastSettings = { message: 'Sorry, copy to clipboard not supported.' };
				toastStore.trigger(t);
			}
		);
	}
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Themes</h1>
		<p>
			Skeleton themes integrate with Tailwind using <a
				href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
				target="_blank"
				rel="noreferrer">CSS custom properties</a
			>. Skeleton themes support
			<a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a>,
			<a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>, and
			<a href="/elements/tokens">design token</a>.
		</p>
	</header>

	<hr />

	<!-- Generator -->
	<div class="space-y-4">
		<div class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<h2>Theme Generator</h2>
				<p>This tool allows you to generate a custom Skeleton theme.</p>
			</div>
			<a class="btn variant-filled-secondary" href="/guides/themes/generator">Create a Theme &rarr;</a>
		</div>
	</div>

	<hr />

	<!-- Presets -->
	<div class="space-y-4">
		<h2>Preset Themes</h2>
		<p>
			Use the theme picker at the top of the page to preview each option. Tap any theme automatically copy the import statement to your
			clipboard.
		</p>
		<!-- Implement -->
		<TabGroup regionPanel="space-y-4">
			<Tab bind:group={$storeFramework} name="cli" value="cli">Skeleton CLI</Tab>
			<Tab bind:group={$storeFramework} name="manu" value="manual">Manual Install</Tab>
			<!-- Panel -->
			<svelte:fragment slot="panel">
				{#if $storeFramework === 'cli'}
					<p>
						The CLI will automatically import your selected theme into <code>src/routes/+layout.svelte</code>, just before your global
						stylesheet
						<code>app.postcss</code>.
					</p>
				{:else if $storeFramework === 'manual'}
					<p>
						Select any theme below, then import this preset into the root layout in <code>/src/routes/+layout.svelte</code>, just before
						your global stylesheet <code>app.postcss</code>.
					</p>
				{/if}
			</svelte:fragment>
		</TabGroup>
		<div class="card variant-glass-surface p-4 space-y-4">
			<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each presets as preset}
					<!-- prettier-ignore -->
					<div
						class="card p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"
						style:background={preset.surface}
						on:click={() => { copyThemeToClipboard(preset.file); }}
						on:keydown={() => { copyThemeToClipboard(preset.file); }}
					>
						<h3 class="text-center font-bold">{preset.name}</h3>
						<ul class="flex justify-center items-center -space-x-1">
							{#each preset.colors as color}
								<li class="aspect-square w-4 xl:w-6 rounded-full" style:background={color} />
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</div>
		<!-- prettier-ignore -->
		<p class="text-center">
			Prest themes can be found on <a href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/themes" target="_blank" rel="noreferrer">GitHub</a> if you wish to clone and modify them.
		</p>
		<div class="flex items-center space-x-2">
			<h3>Theme Extras</h3>
			<span class="badge variant-filled-warning">Optional</span>
		</div>
		<p>
			Preset themes include custom fonts, background gradients, and other bonus features. You may enable these by pairing with the matching <code
				>data-theme</code
			>
			attribute in your
			<code>app.html</code> body tag. Selecting a theme preset above will update the snippet below.
		</p>
		<CodeBlock language="html" code={`<body data-theme="` + activeDataTheme + `">`} />
	</div>

	<hr />

	<section class="space-y-4">
		<h2>See Also</h2>
		<div class="card p-4 variant-glass-surface space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's theme color system.</p>
				<a class="btn variant-ghost-surface" href="/guides/themes/colors">Theme Colors &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's design token sytem.</p>
				<a class="btn variant-ghost-surface" href="/elements/tokens">Design Tokens &rarr;</a>
			</div>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<section class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's learn more about styling Skeleton.</p>
		<a class="btn variant-filled-primary" href="/guides/styling">Styling &rarr;</a>
	</section>
</div>
