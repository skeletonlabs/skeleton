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
		<p>
			Enable edit mode to enable a live theme preview. You can browse the entire site while edit mode is enabled. Don't worry, your settings
			here will below will not be lost. When you are finished, tap the "Reset Theme" button to return to normal.
		</p>
	</header>

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
			<p>
				Copy and paste your theme CSS into <code>/src/theme.postcss</code>, then in<code>/src/routes/+layout.svelte</code> remove any preset
				theme and replace with your theme.
			</p>
			<CodeBlock language="typescript" code={`import '../theme.postcss';`} />
		{:else if $storeFramework === 'vite'}
			<p>Copy and paste your theme CSS into <code>/src/theme.css</code>, then import it in <code>/src/main.js</code>:</p>
			<CodeBlock language="typescript" code={`import '../theme.css';`} />
		{:else if $storeFramework === 'astro'}
			<p>
				Copy and paste your theme CSS into <code>/src/styles/theme.css</code>, then import it in
				<code>/src/layouts/LayoutBasic.astro</code>.
			</p>
			<CodeBlock language="typescript" code={`import '../styles/theme.css';`} />
		{/if}
		<p>Import this <u>before</u> your global stylesheet.</p>
	</section>

	<hr />

	<!-- Extras -->
	<section class="space-y-4">
		<h2>Advanced Color Curation</h2>
		<p>
			Looking for deeper customization? We recommend using <a
				href="https://tailwind.simeongriggs.dev/blue/3B82F6"
				target="_blank"
				rel="noreferrer">Palette Generator</a
			>. This includes support for hue, saturation, and lightness adjustments. Pair this with the
			<a href="https://marketplace.visualstudio.com/items?itemName=dakshmiglani.hex-to-rgba" target="_blank" rel="noreferrer"
				>Hex-To-RGB extension</a
			>
			to convert each Hex color value to RGB in bulk with VS Code.
		</p>
	</section>
</div>
