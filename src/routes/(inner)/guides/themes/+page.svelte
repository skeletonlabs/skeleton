<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { storeFramework } from '$docs/stores';

	import { DataTable, Divider, RadioGroup, RadioItem, TabGroup, Tab } from '@brainandbones/skeleton';
	import { toastStore, type ToastMessage } from '$lib/utilities/Toast/stores';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import DocsThemerTailwind from '$docs/DocsThemer/DocsThemerTailwind.svelte';
	import DocsThemerHex from '$docs/DocsThemer/DocsThemerHex.svelte';

	// Stores
	const storeGenerator: Writable<string> = writable('tailwind'); // tailwind | hex

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
	// prettier-ignore
	const tableProps: any = {
        headings: ['Name', 'Class', 'Description'],
        source: [
            {n: 'Primary', c:'[x]-primary-[50-900]', d:'Typically your primary brand color.'},
            {n: 'Accent', c:'[x]-accent-[50-900]', d:'An accent for offsets or supplementary values.'},
            {n: 'Warning', c:'[x]-warning-[50-900]', d:'May be used for warnings, alerts, and invalid inputs.'},
            {n: 'Surface', c:'[x]-surface-[50-900]', d:'May be used for backgrounds, card elements, and some typography.'},
        ],
    };
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Themes</h1>
		<p>
			Skeleton themes integrate with Tailwind using <a href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" target="_blank">CSS custom properties</a> converted to RGB values.
			This enables the use of <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank">background opacity</a> as well as support for
			<a href="https://tailwindcss.com/docs/dark-mode" target="_blank">dark mode</a>. Components intelligently implement each color from the theme's palette.
		</p>
	</header>

	<Divider />

	<!-- Presets -->
	<section class="space-y-4">
		<h2>Preset Themes</h2>
		<p>A handful of curated preset themes are available below.</p>
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
		<!-- Preset Previews -->
		<p>Tap any theme below to automatically copy the import statement to your clipboard.</p>
		<nav class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each presets as preset}
				<div
					on:click={() => {
						copyThemeToClipboard(preset.name);
					}}
					class="theme-set"
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
	</section>

	<Divider />

	<!-- Theme Generator -->
	<section class="space-y-4">
		<h2>Theme Generator</h2>
		<p>Use the form below to craft a custom theme. Each color represents swatch 500 (ex: <code>bg-primary-500</code>).</p>
		<!-- Card -->
		<div class="card">
			<header class="card-header flex flex-col md:items-center space-y-4">
				<RadioGroup selected={storeGenerator} display="flex md:inline-flex">
					<RadioItem value="tailwind">Tailwind Mode</RadioItem>
					<RadioItem value="hex">Hex Mode</RadioItem>
				</RadioGroup>
				<!-- Messaging -->
				{#if $storeGenerator === 'tailwind'}
					<span class="block text-center">
						Create a theme using <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Tailwind's color palette</a>. This typically provides the best results.
					</span>
				{/if}
				{#if $storeGenerator === 'hex'}
					<span class="block text-center"> For advanced users. Enterhex color values to generate a completely unique theme. </span>
				{/if}
			</header>
			<div class="card-body">
				<!-- Generator Components -->
				{#if $storeGenerator === 'tailwind'}<DocsThemerTailwind />{/if}
				{#if $storeGenerator === 'hex'}<DocsThemerHex />{/if}
			</div>
		</div>
		<p class="block">
			TIP: Use <a href="https://tailwind.simeongriggs.dev/blue/3B82F6" target="_blank">Palette Generator</a> to complete custom palatte curation. The
			<a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank">Hex-To-RGB extension</a>
			can convert colors from <strong>Hex &rarr; RGB</strong> in bulk within <strong>VS Code</strong>.
		</p>
		<!-- Instructions -->
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Add your custom theme to <code>/src/theme.postcss</code>, then import this file into <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '../theme.postcss'; // <--\nimport '../app.postcss';\n`} />
			<!-- Framework. Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Add your custom theme to <code>/src/theme.css</code>, then import this file into <code>/src/main.js</code>:</p>
			<CodeBlock language="typescript" code={`import '../theme.css'; // <--\nimport '../app.css';\n`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>Add your custom theme to <code>/src/styles/theme.css</code>, then import this file into <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '../styles/theme.css'; // <--\nimport '../styles/base.css';`} />
		{/if}
	</section>

	<Divider />

	<!-- Usage -->
	<section class="space-y-4">
		<h3>Usage</h3>
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
	</section>

	<Divider />

	<!-- Reference -->
	<section class="space-y-4">
		<h3>Reference</h3>
		<p>Here's a brief reference of what each color should represent within your project.</p>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<Divider />

	<!-- Next Steps -->
	<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's review best practices for handling CSS styles and overrides.</p>
		<a class="btn btn-filled-accent" href="/guides/styling">Styles and Stylesheets</a>
	</div>
</div>

<style lang="postcss">
	.theme-set {
		@apply p-4 !no-underline !text-white flex justify-between items-center border border-white/10 rounded shadow cursor-pointer hover:border-white/50;
	}
</style>
