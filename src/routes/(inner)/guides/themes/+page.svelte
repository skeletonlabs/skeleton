<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	import DataTable from '$lib/components/Table/DataTable.svelte';
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

	// Tables
	const cSwatch: string = 'w-4 aspect-square rounded-full';
	const tableProps: any = {
		headings: ['Color', 'Name', 'Class', 'Description'],
		source: [
			[`<div class="${cSwatch} bg-primary-500" />`, 'Primary', '[x]-primary-[50-900]', 'Typically your primary brand color.'],
			[`<div class="${cSwatch} bg-accent-500" />`, 'Accent', '[x]-accent-[50-900]', 'A secondary offset color or supplementary value.'],
			[`<div class="${cSwatch} bg-tertiary-500" />`, 'Tertiary', '[x]-tertiary-[50-900]', 'A third and additional offset color. Great for informational alerts.'],
			[`<div class="${cSwatch} bg-warning-500" />`, 'Warning', '[x]-warning-[50-900]', 'May be used for warnings, alerts, and invalid inputs.'],
			[`<div class="${cSwatch} bg-surface-500" />`, 'Surface', '[x]-surface-[50-900]', 'May be used for backgrounds, card elements, and some typography.']
		]
	};
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
		<h2>Select a Theme</h2>
		<p>Choose from any of the curated preset themes or created your own.</p>
		<!-- Generator -->
		<div class="space-y-4">
			<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
				<div class="space-y-2">
					<h3>Theme Generator</h3>
					<p>Use the theme generator form to create a custom theme from scratch.</p>
				</div>
				<a class="btn btn-filled" href="/guides/themes/generator">Create a Theme &rarr;</a>
			</div>
		</div>
		<!-- Presets -->
		<div class="card card-body space-y-4">
			<h3>Preset Themes</h3>
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
			<p>Import your desired preset into <code>/src/layouts/LayoutBasic.astro</code> before your global stylesheet.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../styles/base.css';`} />
		{/if}
	</div>

	<hr />

	<!-- Theme Colors -->
	<section class="space-y-4">
		<h2>Theme Colors</h2>
		<p>Here's a quick reference for what each color represents.</p>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
		<h3>Using Theme Color Styles</h3>
		<p>Skeleton themes extend Tailwind's color palette and can be used anywhere within your project. Here's a few examples:</p>
		<CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-accent-500">Skeleton</div>`} />
		<CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="border border-primary-500/50">Skeleton</div>`} />
		<CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply text-primary-500; }`} />
		<CodeBlock language="css" code={`/* Using CSS custom properties. Note that colors are RGB values! */\nbody { background: rgba(var(--color-surface-900) / 1); }`} />
	</section>

	<hr />

	<!-- Design Tokens -->
	<section class="grid grid-cols-[1fr_auto] gap-4">
		<div class="space-y-4">
			<h2>Design Tokens</h2>
			<p>Special utility classes generated from your theme CSS properties. We've provide a dedicated documentation section for these.</p>
		</div>
		<a class="btn btn-ghost-surface place-self-center" href="/elements/tokens">Design Tokens &rarr;</a>
	</section>

	<hr />

	<!-- Next Steps -->
	<section class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's learn more about styling Skeleton.</p>
		<a class="btn btn-filled-accent" href="/guides/styling">
			<span>Styling</span>
			<span>&rarr;</span>
		</a>
	</section>
</div>
