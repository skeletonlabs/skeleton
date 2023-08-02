<script lang="ts">
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { Tab, TabGroup, CodeBlock } from '@skeletonlabs/skeleton';

	// Local
	let tabConfigFormat = 'cjs';
</script>

<!-- Header -->
<section class="space-y-4">
	<h2 class="h2">Tailwind CSS</h2>
	<p>
		Skeleton features tight integration with <a class="anchor" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"
			>Tailwind CSS</a
		>.
	</p>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeOnboardMethod} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeOnboardMethod} name="manual" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeOnboardMethod === 'cli'}
				<div class="card variant-glass p-4">
					<!-- prettier-ignore -->
					<p>
						The CLI will automatically install and configure Tailwind and PostCSS within your project.
					</p>
				</div>
			{:else if $storeOnboardMethod === 'manual'}
				<div class="space-y-4">
					<p>
						<a class="anchor" href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> makes it easy
						to setup Tailwind in your project. Run the following commands in your terminal.
					</p>
					<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
					<!-- prettier-ignore -->
					<p>
						Then open your global stylesheet in <code class="code">/src/app.postcss</code> and ensure the following
						<a class="anchor" href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> are present. Svelte-Add will implement this for you automatically.
					</p>
					<CodeBlock
						language="css"
						code={`
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;\n
/* (your custom styles here) */
					`}
					/>
				</div>
				<h3 class="h3">Tailwind Configuration</h3>
				<p>Apply the following changes to your <code class="code">tailwind.config.[cjs|js|ts]</code>, found in the root of your project.</p>
				<TabGroup regionPanel="space-y-4">
					<!-- Tabs -->
					<Tab bind:group={tabConfigFormat} name="cjs" value="cjs">CommonJS (.cjs)</Tab>
					<Tab bind:group={tabConfigFormat} name="js" value="js">Javascript (.js)</Tab>
					<Tab bind:group={tabConfigFormat} name="ts" value="ts">Typescript (.ts)</Tab>
					<!-- Panel -->
					<svelte:fragment slot="panel">
						{#if tabConfigFormat === 'cjs'}
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
						{:else if tabConfigFormat === 'js'}
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
						{/if}
					</svelte:fragment>
				</TabGroup>

				<!-- <aside class="alert variant-ghost-warning">
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
					<div class="alert-message">
						Skeleton's Tailwind plugin cannot operate alongside plugins from other UI libraries, such as <strong>Flowbite</strong> or
						<strong>Daisy</strong>. All three plugins modify similar settings, which means they will conflict.
					</div>
				</aside> -->
				<h3 class="h3">Dark Mode Support</h3>
				<p>
					Note that your app will default to light mode. If you wish to default to dark mode, append the following class to the HTML element
					within <code class="code">/src/app.html</code>. View
					<a class="anchor" href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's documentation</a> for more information.
				</p>
				<CodeBlock language="html" code={`<html class="dark">`} />
				<p>
					Skeleton also provides a <a class="anchor" href="/utilities/lightswitches" target="_blank">Lightswitch</a> utility if you wish toggle
					between light and dark modes.
				</p>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
