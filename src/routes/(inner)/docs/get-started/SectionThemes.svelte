<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';

	import { themes } from './themes';

	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { toastStore } from '$lib/utilities/Toast/stores';
	import type { ToastSettings } from '$lib/utilities/Toast/types';

	// Local
	let activeThemeName: string = '';
	let activeThemeStylesheet: string = '// Select a theme above';

	// Copy Theme Import to Clipboard
	function copyThemeToClipboard(file: string): void {
		// Set Active
		activeThemeName = file;
		activeThemeStylesheet = `import '@skeletonlabs/skeleton/themes/theme-${file.toLowerCase()}.css';`;
		// Copy
		navigator.clipboard.writeText(activeThemeStylesheet).then(
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

<!-- Header -->
<section class="space-y-4">
	<h2>Themes</h2>
	<!-- prettier-ignore -->
	<p>
		Skeleton themes <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">integrate with Tailwind</a> and support <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a>, <a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>, and our powerful <a href="/elements/tokens">design tokens system</a>.
	</p>

	<TabGroup regionPanel="space-y-4">
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manu" value="manual">Manual Install</Tab>
	</TabGroup>
	{#if $storeOnboardMethod === 'cli'}
		<p>
			The CLI will automatically import your selected theme in <code>src/routes/+layout.svelte</code>. You can change these at any time.
		</p>
	{:else if $storeOnboardMethod === 'manual'}
		<p>
			Select a theme, then copy the import statement into your root layout in <code>/src/routes/+layout.svelte</code>. Replace any existing
			theme.
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
						on:click={() => { copyThemeToClipboard(preset.file); }}
						on:keydown={() => { copyThemeToClipboard(preset.file); }}
					>
						<h3 class="text-center font-bold" data-toc-ignore>{preset.name}</h3>
						<ul class="flex justify-center items-center -space-x-1">
							{#each preset.colors as color}
								<li class="aspect-square w-4 xl:w-6 rounded-full" style:background={color} />
							{/each}
						</ul>
					</div>
			{/each}
		</nav>
		{#if activeThemeName}
			<CodeBlock language="ts" code={activeThemeStylesheet} />
			<p>
				To enable bonus features (ex: fonts and backgrounds) for preset themes, apply the following attribute in <code>app.html</code>.
			</p>
			<CodeBlock language="html" code={`<body data-theme="` + activeThemeName + `">`} />
		{/if}
	</div>

	<!-- Generator -->
	<div class="card variant-glass p-4">
		<div class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<p>Wish to create a custom theme? Try our theme generator tool.</p>
			<a class="btn variant-filled-secondary" href="/docs/generator">Theme Generator &rarr;</a>
		</div>
	</div>
</section>
