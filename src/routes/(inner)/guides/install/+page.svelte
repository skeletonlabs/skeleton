<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-10">
	<!-- Install -->
	<section class="space-y-4">
		<h1>Install Skeleton</h1>
		<p>
			Select your app framework of choice, then follow steps below. During this process you'll scaffold a project, install the Skeleton package, install and configure Tailwind, as well as implement a
			custom theme. Make sure to follow each guide carefully.
		</p>

		<TabGroup selected={storeFramework} class="pt-4">
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>

		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>
				View the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank">official documentation.</a>
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
            `.trim()}
			/>
			<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>
				View the <a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank">official documentation</a>.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create vite@latest my-app -- --template svelte-ts
cd my-app
npm install
npm run dev
            `.trim()}
			/>
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				View the <a href="https://docs.astro.build/en/install/auto/" target="_blank">official documentation</a>. Once setup of Skeleton is complete, please read the dedicated
				<a href="/guides/astro">Usage with Astro</a> guide.
			</p>
			<CodeBlock
				language="console"
				code={`
npm create astro@latest astro-skeleton-app
    - Create an empty project
    - Install all depedencies
    - Use 'Typescript: Strict'
cd astro-skeleton-app
npm run dev
            `.trim()}
			/>
			<!-- Svelte -->
			<h3>Install Svelte</h3>
			<p>
				Add Svelte integration via <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" target="_blank">@astrojs/svelte</a>
			</p>
			<CodeBlock language="console" code={`npx astro add svelte`} />
			<!-- Tailwind -->
			<h3>Install Tailwind</h3>
			<p>
				Add Tailwind integration via <a href="https://docs.astro.build/en/guides/integrations-guide/tailwind/" target="_blank">@astrojs/tailwind</a>
			</p>
			<CodeBlock language="console" code={`npx astro add tailwind`} />
			<p>Add <code>/src/styles/base.css</code> to house global styles and define the following @tailwind directives:</p>
			<CodeBlock language="css" code={`@tailwind base;\n@tailwind components;\n@tailwind utilities;`} />
		{/if}
	</section>

	<!-- Install Tailwind -->
	{#if ['sveltekit', 'vite'].includes($storeFramework)}
		<section class="space-y-4">
			<h3>Install Tailwind</h3>
			<p>
				<a href="https://github.com/svelte-add/tailwindcss" target="_blank">Svelte-Add</a> makes installation a trivial process.
			</p>
			<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
		</section>
	{/if}

	<!-- Install Skeleton -->
	<section class="space-y-4">
		<h3>Install Skeleton</h3>
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
