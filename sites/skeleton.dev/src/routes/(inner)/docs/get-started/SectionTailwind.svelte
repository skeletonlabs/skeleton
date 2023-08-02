<script lang="ts">
	import { storeOnboardMethod } from '$lib/stores/stores';
	// Components
	import { Tab, TabGroup, CodeBlock } from '@skeletonlabs/skeleton';
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
				<p>
					Apply these following three changes to your <code class="code">tailwind.config.[cjs|js|ts]</code>, found in the root of your
					project.
				</p>
				<CodeBlock
					language="js"
					code={`
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
