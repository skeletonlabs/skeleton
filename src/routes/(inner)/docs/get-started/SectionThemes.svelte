<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';
	import { themes } from './themes';
	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Local
	let activeThemeName: string = 'skeleton';
	$: activeThemeStylesheet = `import '@skeletonlabs/skeleton/themes/theme-${activeThemeName}.css';`;

	// Copy Theme Import to Clipboard
	function setActiveTheme(file: string): void {
		activeThemeName = file;
	}
</script>

<!-- Header -->
<section class="space-y-4">
	<h2>Themes</h2>
	<!-- prettier-ignore -->
	<p>
		Skeleton themes <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">integrate with Tailwind</a> and support <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a>, <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>, and our powerful <a href="/docs/tokens">design tokens system</a>.
	</p>

	<TabGroup regionPanel="space-y-4">
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manu" value="manual">Manual Install</Tab>
	</TabGroup>
	{#if $storeOnboardMethod === 'cli'}
		<p>
			The CLI will automatically import your preferred preset theme in <code>src/routes/+layout.svelte</code>. You may change this at any
			time.
		</p>
	{:else if $storeOnboardMethod === 'manual'}
		<!-- prettier-ignore -->
		<p>
			If you wish to use another preset theme, select it from the list below to reveal the import statement. Import it in your root layout in <code>/src/routes/+layout.svelte</code>. Take care to replace any existing theme.
		</p>
	{/if}

	<!-- Presets -->
	<div class="card variant-glass p-4 space-y-4">
		<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each themes as preset}
				<!-- prettier-ignore -->
				<div
						class="card p-4 text-white hover:ring-surface-500/50 cursor-pointer space-y-4"
						style:background={preset.surface}
						on:click={() => { setActiveTheme(preset.file); }}
						on:keydown={() => { setActiveTheme(preset.file); }}
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
			<p>Learn how to add background</p>
			<a class="btn variant-filled-secondary" href="/docs/themes">More Information &rarr;</a>
		</div>
	</div>

	<!-- Generator -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Want to create a custom theme? Try our theme generator.</p>
			<a class="btn variant-filled-secondary" href="/docs/generator">Theme Generator &rarr;</a>
		</div>
	</div>
</section>
