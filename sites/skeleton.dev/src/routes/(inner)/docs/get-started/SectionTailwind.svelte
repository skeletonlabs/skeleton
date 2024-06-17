<script lang="ts">
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { Tab, TabGroup, CodeBlock } from '@skeletonlabs/skeleton';

	// Local
	let tabConfigFormat = 'ts';
</script>

<!-- Header -->
<section class="space-y-4">
	<h2 class="h2">Install Tailwind</h2>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeOnboardMethod === 'cli'}
				<aside class="alert variant-ghost p-4">
					<i class="fa-solid fa-circle-check" />
					<div class="alert-message">
						<p>The CLI will automatically install Tailwind and configure all required settings.</p>
					</div>
				</aside>
			{:else if $storeOnboardMethod === 'manual'}
				<div class="space-y-4">
					<!-- prettier-ignore -->
					<p>
						<a class="anchor" href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> automates the process of installing Tailwind in SvelteKit.
					</p>
					<CodeBlock language="shell" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
				</div>
				<h3 class="h3">Tailwind Configuration</h3>
				<p>
					Let's make a few modifications to the <code class="code">tailwind.config.[ts|js|cjs]</code>, found in the root of your project.
				</p>
				<TabGroup regionPanel="space-y-4">
					<!-- Tabs -->
					<Tab bind:group={tabConfigFormat} name="ts" value="ts">Typescript (.ts)</Tab>
					<Tab bind:group={tabConfigFormat} name="js" value="js">Javascript (.js)</Tab>
					<Tab bind:group={tabConfigFormat} name="cjs" value="cjs">CommonJS (.cjs)</Tab>
					<!-- Panel -->
					<svelte:fragment slot="panel">
						{#if tabConfigFormat === 'ts'}
							<p>For SvelteKit projects using Typescript, install the standard node type definitions.</p>
							<CodeBlock language="shell" code={`npm add -D @types/node`} />
							<p>Then, setup your Tailwind configuration using the <code class="code">.ts</code> file extension.</p>
							<CodeBlock
								language="ts"
								code={`
import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
} satisfies Config;

export default config;
						`}
							/>
						{:else if tabConfigFormat === 'js'}
							<p>
								For SvelteKit projects using Javascript or JSDoc, implement your Tailwind configuration using the <code class="code"
									>.js</code
								> file extension.
							</p>
							<CodeBlock
								language="js"
								code={`
// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
}
						`}
							/>
						{:else}
							<aside class="alert variant-ghost-warning">
								<p>Skeleton no longer recommends the CommonJS format. We've included this merely as reference.</p>
							</aside>
							<CodeBlock
								language="cjs"
								code={`

// @ts-check

// 1. Import the Skeleton plugin
const { skeleton } = require('@skeletonlabs/tw-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
}
						`}
							/>
						{/if}
					</svelte:fragment>
				</TabGroup>
				<aside class="alert variant-ghost">
					<p>
						See our <a class="anchor" href="/docs/themes#dark-mode" target="_blank">Themes</a> guide to learn more about using Tailwind's light
						and dark mode options.
					</p>
				</aside>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
