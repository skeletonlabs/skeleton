<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Docs
	import DocsThemer from '$docs/DocsThemer/DocsThemer.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/themes">Themes</Crumb>
		<Crumb>Generator</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Theme Generator</h1>
		<p>Use the form below to genreate a custom Skeleton theme.</p>
	</header>

	<hr />

	<!-- Generator (new) -->
	<DocsThemer />

	<!-- Instructions -->
	<section class="space-y-4">
		<h2>Importing Your Theme</h2>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		{#if $storeFramework === 'sveltekit'}
			<p>Add your custom theme to <code>/src/theme.postcss</code>, then import this file into <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '../theme.postcss';`} />
		{:else if $storeFramework === 'vite'}
			<p>Add your custom theme to <code>/src/theme.css</code>, then import this file into <code>/src/main.js</code>:</p>
			<CodeBlock language="typescript" code={`import '../theme.css';`} />
		{:else if $storeFramework === 'astro'}
			<p>Add your custom theme to <code>/src/styles/theme.css</code>, then import this file into <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '../styles/theme.css';`} />
		{/if}
	</section>

	<hr />

	<!-- Extras -->
	<section class="space-y-4">
		<h2>Advanced Color Curation</h2>
		<p>
			We recommend <a href="https://tailwind.simeongriggs.dev/blue/3B82F6" target="_blank" rel="noreferrer">Palette Generator</a> to curate a custom theme. This includes support for hue, saturation,
			and lightness adjustments. Pair this with the
			<a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank" rel="noreferrer">Hex-To-RGB extension</a>
			to convert each Hex color value to RGB in bulk with VS Code.
		</p>
	</section>
</div>
