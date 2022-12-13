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
			Let's set up our project and install Skeleton. For best results, we recommend you have at least moderate experience
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
			<p>We provide an interactive CLI app to scaffold SvelteKit and automatically configure Skeleton. PNPM and Yarn are also supported.</p>
			<CodeBlock
				language="console"
				code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax
cd my-skeleton-app
npm run dev
				`}
			/>
			<p>
				The CLI is a great starting point, however, we encourage you to read through the the additional guides to learn more about how
				Skeleton is configured.
			</p>
			<ul class="list-disc list-inside space-y-1">
				<li>Review the Tailwind configuration and optionally install Tailwind Plugins.</li>
				<li>Learn more about Skeleton themes, as well as how to implement a custom theme.</li>
				<li>See how stylesheets are imported, and how to customize components and other features.</li>
				<li>Finally, we've provided an optional guide for creating a basic demo app.</li>
			</ul>
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
npm create vite@latest my-skeleton-app -- --template svelte-ts
cd my-skeleton-app
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
npm create astro@latest my-skeleton-app
	- Create an empty project
	- Install all dependencies
	- Use 'Typescript: Strict'
cd my-skeleton-app
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
	{#if $storeFramework !== 'sveltekit'}
		<section class="space-y-4">
			<h2>Install Skeleton</h2>
			<p>
				Install the core Skeleton package from <a
					href="https://www.npmjs.com/package/@skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer">NPM</a
				>.
			</p>
			<CodeBlock language="console" code={`npm i @skeletonlabs/skeleton --save-dev`} />
		</section>
	{/if}

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
