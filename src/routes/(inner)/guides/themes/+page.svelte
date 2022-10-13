<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	import { DataTable, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Stores
	import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';

	// Presets
	const presetUrl: string = 'https://github.com/Brain-Bones/skeleton/blob/master/src/themes';
	// prettier-ignore
	const presets: any[] = [
        { name: 'skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827', url: `${presetUrl}/theme-skeleton.css` },
        { name: 'rocket', colors: ['#06b6d4', '#3b82f6', '#ec4899'], surface: '#3c4553', url: `${presetUrl}/theme-rocket.css` },
        { name: 'vintage', colors: ['#f59e0b', '#22c55e', '#ef4444'], surface: '#1c1917', url: `${presetUrl}/theme-vintage.css` },
        { name: 'modern', colors: ['#ec4899', '#06b6d4', '#eab308'], surface: '#312e81', url: `${presetUrl}/theme-modern.css` },
        { name: 'sahara', colors: ['#facc15', '#fb923c', '#14b8a6'], surface: '#881337', url: `${presetUrl}/theme-sahara.css` },
        { name: 'seafoam', colors: ['#14b8a6', '#8b5cf6', '#f59e0b'], surface: '#0c4a6e', url: `${presetUrl}/theme-seafoam.css` },
    ];

	// Copy Theme Import to Clipboard
	function copyThemeToClipboard(name: string): void {
		navigator.clipboard.writeText(`import '@brainandbones/skeleton/themes/theme-${name}.css';`).then(
			// Success
			() => {
				const t: ToastMessage = { message: 'Import statement copied to clipboard.' };
				toastStore.trigger(t);
			},
			// Error
			(error) => {
				const t: ToastMessage = { message: 'Sorry, copy to clipboard not supported.' };
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
			[`<div class="${cSwatch} bg-accent-500" />`, 'Accent', '[x]-accent-[50-900]', 'An accent for offsets or supplementary values.'],
			[`<div class="${cSwatch} bg-ternary-500" />`, 'Ternary', '[x]-ternary-[50-900]', 'A third and additional offset color. Great for informational alerts.'],
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
			Skeleton themes integrate with Tailwind using <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">CSS custom properties</a> converted to RGB values.
			This enables the use of <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank">background opacity</a> as well as support for
			<a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a>. Components intelligently adapt to your theme color palette.
		</p>
	</header>

	<hr />

	<!-- Select Theme -->
	<section class="space-y-4">
		<h2>Select a Theme</h2>
		<p>Select from any of our curated preset themes or use the theme generator to create your own custom theme.</p>
		<div class="card card-body space-y-4">
			<!-- Presets -->
			<p>Tap any theme below to automatically copy the import statement to your clipboard.</p>
			<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each presets as preset}
					<!-- prettier-ignore -->
					<div
						on:click={() => { copyThemeToClipboard(preset.name); }}
						class="card card-body text-white flex justify-between items-center hover:!ring-white/20 cursor-pointer"
						style:background={preset.surface}
						target="_blank"
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
			<!-- Implement -->
			<TabGroup selected={storeFramework}>
				<Tab value="sveltekit">SvelteKit</Tab>
				<Tab value="vite">Vite (Svelte)</Tab>
				<Tab value="astro">Astro</Tab>
			</TabGroup>
			<!-- Framework: SvelteKit -->
			{#if $storeFramework === 'sveltekit'}
				<p>Import your desired preset into <code>src/routes/+layout.svelte</code>.</p>
				<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../app.postcss';\n`} />
				<!-- Framework: Vite (Svelte) -->
			{:else if $storeFramework === 'vite'}
				<p>Import your desired preset into <code>/src/main.js</code>.</p>
				<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../app.css';\n`} />
				<!-- Framework: Astro -->
			{:else if $storeFramework === 'astro'}
				<p>Import your desired preset into <code>/src/layouts/LayoutBasic.astro</code>.</p>
				<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/themes/theme-{name}.css'; // <--\nimport '../styles/base.css';`} />
			{/if}
		</div>
		<!-- Generator -->
		<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<p>Create your own custom theme.</p>
			</div>
			<a class="btn btn-filled-accent" href="/guides/themes/generator">Themes Generator &rarr;</a>
		</div>
	</section>

	<hr />

	<!-- Theme Colors -->
	<section class="space-y-4">
		<h3>Theme Colors</h3>
		<p>
			Theme colors are not limited to Skeleton components. You may utilize them anywhere within your app following Tailwind's standard conventions. Feel free to mix or extend them with <a
				href="https://tailwindcss.com/docs/customizing-colors"
				target="_blank">Tailwind's default color palette</a
			>.
		</p>
		<CodeBlock language="html" code={`<!-- Inlined classes -->\n<div class="bg-primary-500 text-accent-500">Skeleton</div>`} />
		<CodeBlock language="html" code={`<!-- Tailwind opacity scale -->\n<div class="bg-primary-500/50">Skeleton</div>`} />
		<CodeBlock language="css" code={`/* Using Tailwind @apply */\n.example { @apply bg-primary-500; }`} />
		<CodeBlock language="css" code={`/* Using CSS custom properties */\nbody { background: var(--color-surface-900); }`} />
		<p>Here's a brief reference of what each color should represent within your project.</p>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<hr />

	<!-- Design Tokens -->
	<section class="space-y-4">
		<h3>Design Tokens</h3>
		<!-- prettier-ignore -->
		<p>
			Skeleton themes are combined with a <a href="https://vimeo.com/showcase/9653752/video/724689965" target="_blank">Design Token System</a> to create utility classes based on theme settings for common styles - including backgrounds, border radius, fonts, and more. Tokens are used as the base styles for most components, which means they auto-adapt to your theme style for minimal configuration out of the box.
		</p>
		<a href="/guides/frameworks/sveltekit" class="card p-4 grid grid-cols-[1fr_auto] gap-4">
			<div class="flex items-center">
				<p>While we formalize this feature, please see the stylesheet directly as a source reference.</p>
			</div>
			<a class="btn btn-filled-accent place-self-center" href="https://github.com/Brain-Bones/skeleton/tree/master/src/lib/styles/tokens.css" target="_blank">View Source &rarr;</a>
		</a>
		<p>However, these are available to use anywhere in your project. Below are a few examples showing how to use tokens within your project.</p>
		<CodeBlock language="html" code={`<!-- Class containing your theme's rounding style -->\n<div class="w-10 h-10 bg-primary-500 rounded-token">Rounded</div>`} />
		<CodeBlock language="html" code={`<!-- Class containing your theme's font family -->\n<span class="font-token">Font Family</span>`} />
		<CodeBlock language="html" code={`<!-- Text color that updates for light/dark themes -->\n<span class="text-token">Skeleton</span>`} />
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card card-body !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's create a simple project within one of Skeleton's supported frameworks.</p>
		<a class="btn btn-filled-accent" href="/guides/frameworks">Framework Guides</a>
	</div>
</div>
