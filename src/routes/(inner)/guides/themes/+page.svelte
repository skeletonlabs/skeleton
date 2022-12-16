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
	const ghPath = 'https://github.com/skeletonlabs/skeleton/blob/master/src/themes';
	// prettier-ignore
	const presets: any[] = [
		{ file: 'skeleton', name: 'Skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827', url: `${ghPath}/theme-skeleton.css` },
		{ file: 'rocket', name: 'Rocket', colors: ['#06b6d4', '#3b82f6', '#ec4899'], surface: '#3c4553', url: `${ghPath}/theme-rocket.css` },
		{ file: 'vintage', name: 'Vintage', colors: ['#f59e0b', '#22c55e', '#ef4444'], surface: '#1c1917', url: `${ghPath}/theme-vintage.css` },
		{ file: 'modern', name: 'Modern', colors: ['#ec4899', '#06b6d4', '#eab308'], surface: '#312e81', url: `${ghPath}/theme-modern.css` },
		{ file: 'sahara', name: 'Sahara', colors: ['#facc15', '#fb923c', '#14b8a6'], surface: '#881337', url: `${ghPath}/theme-sahara.css` },
		{ file: 'seafoam', name: 'Seafoam', colors: ['#14b8a6', '#8b5cf6', '#f59e0b'], surface: '#0c4a6e', url: `${ghPath}/theme-seafoam.css` },
		// Community:
		{ file: 'hamlindigo', name: 'Hamlindigo', colors: ['#6276A3', '#a58945', '#f59e0b'], surface: '#425071', url: `${ghPath}/theme-hamlindigo.css` },
		{ file: 'gold-nouveau', name: 'Gold Nouveau', colors: ['#e7c504', '#0697e5', '#cc1e8a'], surface: '#231631', url: `${ghPath}/theme-gold-nouveau.css` },
		{ file: 'crimson', name: 'Crimson', colors: ['#d4161d', '#3881b2', '#956056'], surface: '#0f1014', url: `${ghPath}/theme-crimson.css` },
	];

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

	<div class="space-y-4">
		<!-- Generator -->
		<div class="space-y-4">
			<div class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<div class="space-y-2">
					<h2>Theme Generator</h2>
					<p>This tool allows you to generate a custom Skeleton theme.</p>
				</div>
				<a class="btn btn-filled-accent" href="/guides/themes/generator">Create a Theme</a>
			</div>
		</div>
		<!-- Presets -->
		<div class="card p-4 space-y-4">
			<h2>Preset Themes</h2>
			<p>Tap any theme below to automatically copy the import statement to your clipboard.</p>
			<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each presets as preset}
					<!-- prettier-ignore -->
					<div
						class="card p-4 text-white flex justify-between items-center hover:!ring-white/20 cursor-pointer"
						style:background={preset.surface}
						target="_blank" rel="noreferrer"
						on:click={() => { copyThemeToClipboard(preset.file); }}
						on:keydown={() => { copyThemeToClipboard(preset.file); }}
					>
						<span class="text-sm font-bold">{preset.name}</span>
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
			<p>
				The CLI will automatically import your selected theme into <code>src/routes/+layout.svelte</code> before your global stylesheet. You
				may change this at any time.
			</p>
			<CodeBlock
				language="typescript"
				code={`import '@skeletonlabs/skeleton/themes/theme-skeleton.css'; // <--\nimport '../app.postcss';\n`}
			/>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Import your desired preset into <code>/src/main.js</code> before your global stylesheet.</p>
			<CodeBlock language="typescript" code={`import '@skeletonlabs/skeleton/themes/theme-{name}.css'; // <--\nimport '../app.css';\n`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				Astro does not provide a root layout by default, but we recommend creating <code>/src/layouts/LayoutRoot.astro</code>. See our
				<a href="/guides/frameworks/astro">See our Astro walkthrough</a> for assistance.
			</p>
			<CodeBlock language="typescript" code={`import '@skeletonlabs/skeleton/themes/theme-{name}.css'; // <--`} />
		{/if}
	</div>

	<hr />

	<section class="space-y-4">
		<h2>See Also</h2>
		<div class="card p-4 card-glass-accent space-y-4">
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
