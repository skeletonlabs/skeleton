<script lang="ts">
	import { storeFramework } from '$docs/stores';

	// Components
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';

	// Docs
	import DocsThemer from '$docs/DocsThemer/DocsThemer.svelte';
</script>

<div class="space-y-8">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/guides/themes">Themes</Crumb>
		<Crumb>Generator</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<h1>Theme Generator</h1>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		{#if $storeFramework === 'sveltekit'}
			<p>Add your custom theme to <code>/src/theme.postcss</code>, then import this file into <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '../theme.postcss'; // <--\nimport '../app.postcss';\n`} />
		{:else if $storeFramework === 'vite'}
			<p>Add your custom theme to <code>/src/theme.css</code>, then import this file into <code>/src/main.js</code>:</p>
			<CodeBlock language="typescript" code={`import '../theme.css'; // <--\nimport '../app.css';\n`} />
		{:else if $storeFramework === 'astro'}
			<p>Add your custom theme to <code>/src/styles/theme.css</code>, then import this file into <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '../styles/theme.css'; // <--\nimport '../styles/base.css';`} />
		{/if}
	</header>

	<hr />

	<!-- Generator (new) -->
	<section>
		<DocsThemer />
	</section>

	<!-- Extras -->
	<Alert>
		<svelte:fragment slot="title">Pro Tip</svelte:fragment>
		Use <a href="https://tailwind.simeongriggs.dev/blue/3B82F6" target="_blank">Palette Generator</a> to curate a theme from scratch, then pair with the
		<a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank">Hex-To-RGB extension</a>
		to convert colors to RGB in bulk with VS Code.
	</Alert>
</div>
