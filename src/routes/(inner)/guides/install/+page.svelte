<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { TabGroup, Tab, Alert } from '@skeletonlabs/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// ******** TEMPORARY FIX ********
	// TODO: Remove this after this has run in production for a few weeks
	// Added December 17, 2022 by Chris
	if (!['cli', 'manual'].includes($storeFramework)) {
		storeFramework.set('cli');
	}
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1>Installation</h1>
		<!-- prettier-ignore -->
		<p>
			Let's scaffold a new Skeleton project. For best results, we recommend you have at least moderate experience
			with <a href="https://svelte.dev/tutorial/basics" target="_blank" rel="noreferrer">Svelte and SvelteKit</a> and
			<a href="https://tailwindcss.com/docs/utility-first" target="_blank" rel="noreferrer">Tailwind CSS</a>. If you have questions or encounter issues please refer to our <a href="/docs/faqs">FAQ</a>.
		</p>
	</header>

	<!-- Frameworks -->
	<section class="space-y-4">
		<!-- Tabs -->
		<TabGroup selected={storeFramework}>
			<Tab value="cli">Skeleton CLI</Tab>
			<Tab value="manual">Manual Install</Tab>
		</TabGroup>
		{#if $storeFramework === 'cli'}
			<p>
				We provide an interactive CLI app to scaffold a new SvelteKit project and automatically configure Skeleton. Note that PNPM and Yarn
				are supported.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax (recommended)
cd my-skeleton-app
npm run dev -- --open
				`}
			/>
			<p>
				Please continue through the additional guide sections to learn how the CLI has configures your app, how to set a custom theme, and
				how to style elements.
			</p>
		{:else if $storeFramework === 'manual'}
			<!-- prettier-ignore -->
			<p>
				If you're migrating from an existing SvelteKit project please refer to the <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">official documentation</a> for creating a new SvelteKit project.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create svelte@latest my-skeleton-app
cd my-skeleton-app
npm install
npm run dev -- --open
`}
			/>
			<!-- Install Skeleton -->
			<h2>Install Skeleton</h2>
			<!-- prettier-ignore -->
			<p>
				Install the core <a href="https://www.npmjs.com/package/@skeletonlabs/skeleton" target="_blank" rel="noreferrer">Skeleton package</a>.
			</p>
			<CodeBlock language="console" code={`npm i @skeletonlabs/skeleton --save-dev`} />
		{/if}
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card p-4 !flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's review configuration options Skeleton and Tailwind.</p>
		<a class="btn btn-filled-primary" href="/guides/tailwind">
			<span>Tailwind</span>
			<span>&rarr;</span>
		</a>
	</div>
</div>
