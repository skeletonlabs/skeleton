<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { toastStore } from '$lib/utilities/Toast/stores';
	import type { ToastSettings } from '$lib/utilities/Toast/types';

	// Presets
	const presetUrl: string = 'https://github.com/Brain-Bones/skeleton/blob/master/src/themes';
	// prettier-ignore
	const presets: any[] = [
        { name: 'Skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827', url: `${presetUrl}/theme-skeleton.css` },
        { name: 'Rocket', colors: ['#06b6d4', '#3b82f6', '#ec4899'], surface: '#3c4553', url: `${presetUrl}/theme-rocket.css` },
        { name: 'Vintage', colors: ['#f59e0b', '#22c55e', '#ef4444'], surface: '#1c1917', url: `${presetUrl}/theme-vintage.css` },
        { name: 'Modern', colors: ['#ec4899', '#06b6d4', '#eab308'], surface: '#312e81', url: `${presetUrl}/theme-modern.css` },
        { name: 'Sahara', colors: ['#facc15', '#fb923c', '#14b8a6'], surface: '#881337', url: `${presetUrl}/theme-sahara.css` },
        { name: 'Seafoam', colors: ['#14b8a6', '#8b5cf6', '#f59e0b'], surface: '#0c4a6e', url: `${presetUrl}/theme-seafoam.css` },
		// Community:
        { name: 'Hamlindigo', colors: ['#6276A3', '#a58945', '#f59e0b'], surface: '#425071', url: `${presetUrl}/theme-hamlindigo.css` },
        { name: 'Gold Nouveau', colors: ['#e7c504', '#0697e5', '#cc1e8a'], surface: '#231631', url: `${presetUrl}/theme-gold-nouveau.css` },
        { name: 'Crimson', colors: ['#d4161d', '#3881b2', '#956056'], surface: '#0f1014', url: `${presetUrl}/theme-crimson.css` },
    ];

	// Copy Theme Import to Clipboard
	function copyThemeToClipboard(name: string): void {
		navigator.clipboard.writeText(`import '@brainandbones/skeleton/themes/theme-${name.toLowerCase()}.css';`).then(
			// Success
			() => {
				const t: ToastSettings = { message: 'Import statement copied to clipboard.' };
				toastStore.trigger(t);
			},
			// Error
			(error) => {
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
			Skeleton themes integrate with Tailwind using <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank" rel="noreferrer">CSS custom properties</a>. Themes
			support <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">color opacity</a>,
			<a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>, and the
			<a href="/elements/tokens">design token system</a>
		</p>
	</header>

	<hr />

	<div class="space-y-4">
		<!-- Generator -->
		<div class="space-y-4">
			<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<div class="space-y-2">
					<h2>Theme Generator</h2>
					<p>This tool provides a means to generate a custom theme.</p>
				</div>
				<a class="btn btn-filled-accent" href="/guides/themes/generator">Create a Theme</a>
			</div>
		</div>
		<!-- Presets -->
		<div class="card card-body space-y-4">
			<h2>Preset Themes</h2>
			<p>Tap any theme below to automatically copy the import statement to your clipboard.</p>
			<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each presets as preset}
					<!-- prettier-ignore -->
					<div
						class="card card-body text-white flex justify-between items-center hover:!ring-white/20 cursor-pointer"
						style:background={preset.surface}
						target="_blank" rel="noreferrer"
						on:click={() => { copyThemeToClipboard(preset.name); }}
						on:keydown={() => { copyThemeToClipboard(preset.name); }}
					>
						<span class="text-sm">{preset.name}</span>
						<ul class="grid grid-cols-3 gap-2">
							{#each preset.colors as color}
								<li class="aspect-square w-4 rounded-full" style:background={color} />
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</div>
		<!-- Implement -->
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import your desired preset into <code>src/routes/+layout.svelte</code> before your global stylesheet.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../app.postcss';\n`} />
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Import your desired preset into <code>/src/main.js</code> before your global stylesheet.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../app.css';\n`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				Astro does not provide a root layout by default, but we recommend creating <code>/src/layouts/LayoutRoot.astro</code>. See our
				<a href="/guides/frameworks/astro">See our Astro walkthrough</a> for assistance.
			</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--`} />
		{/if}
	</div>

	<hr />

	<!-- Design Tokens -->
	<section class="grid grid-cols-[1fr_auto] gap-4">
		<div class="space-y-4">
			<h2>Theme Styles</h2>
			<p>View recommendations for utilizing theme styles within your application.</p>
		</div>
		<a class="btn btn-filled-accent place-self-center" href="/guides/themes/styles">Theme Styles</a>
	</section>

	<hr />

	<!-- Next Steps -->
	<section class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's learn more about styling Skeleton.</p>
		<a class="btn btn-filled-primary" href="/guides/styling">Styling &rarr;</a>
	</section>
</div>
