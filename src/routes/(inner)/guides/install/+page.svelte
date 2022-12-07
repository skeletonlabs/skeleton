<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1>Installation</h1>
		<!-- prettier-ignore -->
		<p>
			Let's setup our project and install Skeleton. For best results, we recommend you have at least moderate experience
			with <a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte</a>,
			<a href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a>, and any
			supported frameworks listed below. If you encounter issues, please refer to our <a href="/docs/faqs">frequently asked questions</a> section.
		</p>
	</header>

	<!-- Frameworks -->
	<section class="space-y-4">
		<!-- Tabs -->
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>
				View the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank" rel="noreferrer"
					>official documentation</a
				> for the latest instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create svelte@latest sveltekit-skeleton-app
	- Create a barebones project
	- Enable Typescript
cd sveltekit-skeleton-app
npm install
`}
			/>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>
				View the <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noreferrer"
					>official documentation</a
				> for the latest instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create vite@latest vite-skeleton-app -- --template svelte-ts
cd vite-skeleton-app
npm install
`}
			/>
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				View the <a href="https://docs.astro.build/en/install/auto/" target="_blank" rel="noreferrer">official documentation</a> for the latest
				instructions.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create astro@latest astro-skeleton-app
	- Create an empty project
	- Install all dependencies
	- Use 'Typescript: Strict'
cd astro-skeleton-app
`}
			/>
			<!-- Svelte -->
			<h2>Install Svelte</h2>
			<p>
				Add Svelte integration via <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" target="_blank" rel="noreferrer"
					>@astrojs/svelte</a
				>
			</p>
			<CodeBlock language="console" code={`npx astro add svelte`} />
		{/if}
	</section>

	<!-- Install Skeleton -->
	<section class="space-y-4">
		<h2>Install Skeleton</h2>
		<p>
			Install the core Skeleton package from <a href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer"
				>NPM</a
			>.
		</p>
		<CodeBlock language="console" code={`npm i @skeletonlabs/skeleton --save-dev`} />
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card p-4 !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's configure Tailwind for use with Skeleton.</p>
		<a class="btn btn-filled-primary" href="/guides/tailwind">
			<span>Tailwind</span>
			<span>&rarr;</span>
		</a>
	</div>
</div>
