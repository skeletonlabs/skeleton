<script lang="ts">
	import { storeFramework } from './stores';

	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import LogoCloud from '$lib/LogoCloud/LogoCloud.svelte';
	import Logo from '$lib/LogoCloud/Logo.svelte';
	import TabGroup from '$lib/Tab/TabGroup.svelte';
	import Tab from '$lib/Tab/Tab.svelte';
</script>

<div class="space-y-8 lg:text-left">
	<!-- Early Access Message -->
	<section class="bg-accent-500/10 border-l-2 border-l-green-500 p-4 flex justify-between items-center space-x-4">
		<p class="!text-white">
			<span class="mr-2">🚧</span>
			Skeleton is available as a public beta. Expect breaking changes prior to v1.0. If you encounter issues please report them on GitHub.
		</p>
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
				<svg class="inline fill-surface-500" x="0px" y="0px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
					><path
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/></svg
				>
			</svelte:fragment>
			<svelte:fragment slot="label">Github</svelte:fragment>
		</Logo>
		<Logo href="https://discord.gg/EXqV7W8MtY" target="_blank">
			<svelte:fragment slot="lead">
				<svg class="inline fill-surface-500" x="0px" y="0px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
					><path
						d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
					/></svg
				>
			</svelte:fragment>
			<svelte:fragment slot="label">Discord</svelte:fragment>
		</Logo>
		<Logo href="https://twitter.com/SkeletonUI" target="_blank">
			<svelte:fragment slot="lead">
				<svg class="inline fill-surface-500" x="0px" y="0px" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
					/></svg
				>
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
				View the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank">official documentation</a>
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
# npm 6.x
npm create vite@latest vite-skeleton-app --template svelte-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest vite-skeleton-app -- --template svelte-ts
            `.trim()}
			/>
			<CodeBlock language="console" code={`cd vite-skeleton-app\nnpm install\nnpm run dev`} />
			<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>
				View the <a href="https://docs.astro.build/en/install/auto/" target="_blank">official documentation</a>.
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
				Svelte via <a href="https://docs.astro.build/en/guides/integrations-guide/svelte/" target="_blank">@astrojs/svelte</a>
			</p>
			<CodeBlock language="console" code={`npx astro add svelte`} />
			<p>
				Tailwind via <a href="https://docs.astro.build/en/guides/integrations-guide/tailwind/" target="_blank">@astrojs/tailwind</a>
			</p>
			<CodeBlock language="console" code={`npx astro add tailwind`} />
			<!-- More -->
			<h3>Astro Guide</h3>
			<p>
				Once setup of Skeleton is complete, we recommend trying our the dedicated <a href="/guides/astro">Astro guide</a>. This guide provides a walkthrough for scaffolding a simple Astro application,
				as well as explaining how to take advantage of Skeleton components within Astro's
				<a href="https://docs.astro.build/en/concepts/islands/" target="_blank">islands architecture</a>.
			</p>
		{/if}
	</section>

	<!-- Install Tailwind -->
	{#if ['sveltekit', 'vite'].includes($storeFramework)}
		<section class="space-y-4">
			<h3>Install Tailwind</h3>
			<p>
				<a href="https://github.com/svelte-add/tailwindcss" target="_blank">Svelte-Add</a> makes installation a trivia process.
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
