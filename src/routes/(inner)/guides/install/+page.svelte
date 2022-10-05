<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Install -->
	<section class="space-y-4">
		<h1>Installation</h1>
		<p>Let's generate a basic project and install the Skeleton package. Make sure to follow each section in "Getting Started" very carefully.</p>
		<!-- Tabs -->
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>
				View the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank">official documentation</a> for the latest instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create svelte@latest sveltekit-skeleton-app
    - Create a barebones project
    - Enable Typescript
cd sveltekit-skeleton-app
npm install
npm run dev
            `}
			/>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>
				View the <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank">official documentation</a> for the latest instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create vite@latest my-app -- --template svelte-ts
cd my-app
npm install
npm run dev
            `}
			/>
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				View the <a href="https://docs.astro.build/en/install/auto/" target="_blank">official documentation</a> for the latest instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create astro@latest astro-skeleton-app
    - Create an empty project
    - Install all dependencies
    - Use 'Typescript: Strict'
cd astro-skeleton-app
npm run dev
            `}
			/>
			<!-- Svelte -->
			<h2>Install Svelte</h2>
			<p>
				Add Svelte integration via <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" target="_blank">@astrojs/svelte</a>
			</p>
			<CodeBlock language="console" code={`npx astro add svelte`} />
		{/if}
	</section>

	<!-- Install Skeleton -->
	<section class="space-y-4">
		<h2>Install Skeleton</h2>
		<p>
			Install the core Skeleton package from <a href="https://www.npmjs.com/package/@brainandbones/skeleton" target="_blank">NPM</a>.
		</p>
		<CodeBlock language="console" code={`npm i @brainandbones/skeleton --save-dev`} />
	</section>

	<Divider />

	<!-- Next Steps -->
	<div class="card card-body !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's configure Tailwind to work with Skeleton.</p>
		<a class="btn btn-filled-accent" href="/guides/tailwind">Configure Tailwind</a>
	</div>
</div>
