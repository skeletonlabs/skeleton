<script lang="ts">
	import { storeFramework } from '$docs/stores';

	import { presets } from './presets';

	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { toastStore } from '$lib/utilities/Toast/stores';
	import type { ToastSettings } from '$lib/utilities/Toast/types';

	// Copy Theme Import to Clipboard
	function copyThemeToClipboard(file: string): void {
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
			<a class="btn btn-filled-secondary" href="/guides/themes/generator">Create a Theme &rarr;</a>
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
		<div class="card card-glass-surface p-4 space-y-4">
			<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each presets as preset}
					<!-- prettier-ignore -->
					<div
						class="card p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"
						style:background={preset.surface}
						target="_blank" rel="noreferrer"
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
			<!-- prettier-ignore -->
			<small class="block text-center">
				TIP: Want to clone and modify a preset theme? <a href="https://github.com/skeletonlabs/skeleton/tree/master/src/lib/themes" target="_blank" rel="noreferrer">View these themes on GitHub.</a>
			</small>
		</div>
		<!-- Implement -->
		<TabGroup selected={storeFramework}>
			<Tab value="cli">Skeleton CLI</Tab>
			<Tab value="manual">Manual Install</Tab>
		</TabGroup>
		{#if $storeFramework === 'cli'}
			<p>
				The CLI will automatically import your selected theme into <code>src/routes/+layout.svelte</code> before your global stylesheet. You
				may change this at any time.
			</p>
		{:else if $storeFramework === 'manual'}
			<p>Import your desired preset into <code>/src/main.js</code> before your global stylesheet.</p>
		{/if}
		<CodeBlock
			language="typescript"
			code={`import '@skeletonlabs/skeleton/themes/theme-skeleton.css'; // <--\nimport '../app.postcss';\n`}
		/>
		<!-- prettier-ignore -->
		<p>
			Some preset themes include special styles, such as a background. To use these, set the <code>data-theme</code> attribute in
			your <code>app.html</code> body tag.
		</p>
		<CodeBlock language="html" code={`<body data-theme="skeleton">`} />
	</div>

	<hr />

	<section class="space-y-4">
		<h2>See Also</h2>
		<div class="card p-4 card-glass-surface space-y-4">
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's theme color system.</p>
				<a class="btn btn-ghost-surface" href="/guides/themes/colors">Theme Colors &rarr;</a>
			</div>
			<hr class="opacity-30" />
			<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<p>Learn more about Skeleton's design token sytem.</p>
				<a class="btn btn-ghost-surface" href="/elements/tokens">Design Tokens &rarr;</a>
			</div>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<section class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's learn more about styling Skeleton.</p>
		<a class="btn btn-filled-primary" href="/guides/styling">Styling &rarr;</a>
	</section>
</div>
