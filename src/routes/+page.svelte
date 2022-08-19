<script lang="ts">
	import { storeFramework } from './stores';
	import { Card, LogoCloud, Divider, Logo, Button, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';
</script>

<div class="space-y-8 lg:text-left">
	<!-- Early Access Message -->
	<section class="bg-accent-500/30 border-l-2 border-l-accent-500 p-4 flex justify-between items-center space-x-4">
		<span class="text-base">
			<span class="mr-2">🚧</span>
			Skeleton is available as a public beta. Expect breaking changes prior to v1.0. If you encounter issues please report them on GitHub.
		</span>
		<Button variant="ghost" href="https://github.com/Brain-Bones/skeleton/issues">Report Issue</Button>
	</section>

	<!-- Hero -->
	<header>
		<div class="max-w-[90%] lg:max-w-[80%] mx-auto space-y-6 py-10 md:py-20">
			<h1 class="text-3xl md:text-5xl lg:text-6xl">
				<span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Skeleton</span>
			</h1>
			<h2 class="text-4xl md:text-6xl lg:text-7xl">A fully featured Svelte component library.</h2>
			<p class="text-xl">
				Skeleton allows you to build fast and reactive web UI using the power of <a href="https://svelte.dev/" target="_blank">Svelte</a>
				+ <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.
			</p>
			<nav class="flex space-x-4">
				<Button variant="filled-primary" href="#getStarted">Get Started</Button>
				<Button variant="ghost" href="/docs/why">Why Skeleton</Button>
			</nav>
		</div>
	</header>

	<LogoCloud>
		<Logo href="https://github.com/Brain-Bones/skeleton" target="_blank">
			<svelte:fragment slot="lead">
				<SvgIcon name="github" width="w-8" height="h-8" class="opacity-50" />
			</svelte:fragment>
			<svelte:fragment slot="label">Github</svelte:fragment>
		</Logo>
		<Logo href="https://discord.gg/EXqV7W8MtY" target="_blank">
			<svelte:fragment slot="lead">
				<SvgIcon name="discord" width="w-8" height="h-8" class="opacity-50" viewBox="0 0 640 512" />
			</svelte:fragment>
			<svelte:fragment slot="label">Discord</svelte:fragment>
		</Logo>
		<Logo href="https://twitter.com/SkeletonUI" target="_blank">
			<svelte:fragment slot="lead">
				<SvgIcon name="twitter" width="w-8" height="h-8" class="opacity-50" />
			</svelte:fragment>
			<svelte:fragment slot="label">Twitter</svelte:fragment>
		</Logo>
	</LogoCloud>

	<Divider />

	<!-- Install -->
	<section id="getStarted" class="space-y-4">
		<h2>Get Started</h2>
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
			<CodeBlock language="console" code={`npm create vite@latest my-app -- --template svelte-ts\ncd my-app\nnpm install\nnpm run dev`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				View the <a href="https://docs.astro.build/en/install/auto/" target="_blank">official documentation</a>. Once setup of Skeleton is complete, please read the dedicated <a href="/guides/astro">Astro guide</a>. This provides a walkthrough for scaffolding a simple Astro application, as well as explaining how to take advantage of Skeleton components within 
				<a href="https://docs.astro.build/en/concepts/islands/" target="_blank"> Astro's islands architecture</a>.
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
			<!-- Integrations -->
			<h3>Integrations</h3>
			<p>
				Add Svelte integration via <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" target="_blank">@astrojs/svelte</a>
			</p>
			<CodeBlock language="console" code={`npx astro add svelte`} />
			<p>
				Add Tailwind integration via <a href="https://docs.astro.build/en/guides/integrations-guide/tailwind/" target="_blank">@astrojs/tailwind</a>
			</p>
			<CodeBlock language="console" code={`npx astro add tailwind`} />
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
	<Card class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's configure Tailwind to work with Skeleton.</p>
		<Button variant="filled-accent" href="/guides/tailwind">Configure Tailwind</Button>
	</Card>
</div>
