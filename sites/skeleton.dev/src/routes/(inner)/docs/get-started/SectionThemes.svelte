<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';
	import { themes } from '$docs/themes';
	// Components
	import { TabGroup, Tab, CodeBlock } from '@skeletonlabs/skeleton';

	// Local
	let activeTheme = themes[1];
	$: activeThemeStylesheet = `import '@skeletonlabs/skeleton/themes/theme-${activeTheme.file}.css';`;

	// Copy Theme Import to Clipboard
	function setActiveTheme(theme: any): void {
		activeTheme = theme;
	}
</script>

<!-- Header -->
<section class="space-y-4">
	<h2 class="h2">Themes</h2>
	<!-- prettier-ignore -->
	<p>
		Skeleton themes <a class="anchor" href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">integrate with Tailwind</a> and support <a class="anchor" href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a>, <a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>, and our powerful <a class="anchor" href="/docs/tokens">design tokens system</a>.
	</p>

	<TabGroup regionPanel="space-y-4">
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
	</TabGroup>
	{#if $storeOnboardMethod === 'cli'}
		<p>
			The CLI will automatically import your preferred preset theme in <code class="code">src/routes/+layout.svelte</code>. You may change
			this at any time.
		</p>
	{:else if $storeOnboardMethod === 'manual'}
		<!-- prettier-ignore -->
		<p>
			If you wish to use another preset theme, select it from the list below to reveal the import statement. Import it in your root layout in <code class="code">/src/routes/+layout.svelte</code>. Take care to replace any existing theme.
		</p>
	{/if}

	<!-- Presets -->
	<div class="card variant-glass p-4 space-y-4">
		<nav class="grid grid-cols-1 md:grid-cols-3 gap-5">
			{#each themes.slice(1, themes.length) as preset}
				<div
					class="card p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4 hover:scale-105 transition-transform"
					style:background={preset.surface}
					class:scale-105={preset.file === activeTheme.file}
					on:click={() => {
						setActiveTheme(preset);
					}}
					on:keydown={() => {
						setActiveTheme(preset);
					}}
				>
					<p class="text-center font-bold !text-lg" data-toc-ignore>{preset.name}</p>
					<ul class="flex justify-center items-center -space-x-1">
						{#each preset.colors as color}
							<li class="aspect-square w-4 xl:w-5 rounded-full" style:background={color} />
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
		<CodeBlock language="ts" code={activeThemeStylesheet} />
	</div>

	<!-- Theme Customization -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Learn how extend preset themes, customize backgrounds, and add custom fonts.</p>
			<a class="btn variant-filled-secondary" href="/docs/themes">Themes &rarr;</a>
		</div>
	</div>

	<!-- Generator -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Interested in creating your own custom theme? Try the Skeleton theme generator.</p>
			<a class="btn variant-filled-secondary" href="/docs/generator">Generator &rarr;</a>
		</div>
	</div>
</section>
