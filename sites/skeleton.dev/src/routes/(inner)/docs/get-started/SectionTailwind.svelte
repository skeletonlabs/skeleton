<script lang="ts">
	import { storeOnboardMethod } from '$docs/stores/stores';
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
						The CLI uses <a class="anchor" href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> to install and configure Tailwind within your project.
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
					<p>Then open your global stylesheet in <code class="code">/src/app.postcss</code> and remove the following three <a class="anchor" href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> introduced by Svelte-Add. These are redundant as Skeleton automatically handles these in our stylesheets for you.</p>
					<div class="space-y-[1px]">
						<del class="del">@tailwind base;</del>
						<del class="del">@tailwind components;</del>
						<del class="del">@tailwind utilities;</del>
					</div>
				</div>
				<p>Apply these following three changes to your <code class="code">tailwind.config.cjs</code>, found in the root of your project.</p>
				<CodeBlock
					language="js"
					code={`
/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
}
			`}
				/>
				<aside class="alert variant-ghost-warning">
					<i class="fa-solid fa-triangle-exclamation text-2xl" />
					<div class="alert-message">
						Skeleton's Tailwind plugin cannot operate alongside plugins from other UI libraries, such as <strong>Flowbite</strong> or
						<strong>Daisy</strong>. All three plugins modify similar settings, which means they will conflict.
					</div>
				</aside>
				<p>
					Note that your app will default to light mode. To manually set dark mode, append the following class to the HTML element within <code
						class="code">/src/app.html</code
					>.
				</p>
				<CodeBlock language="html" code={`<html class="dark">`} />
				<p>
					If you wish to be able to toggle dark mode, review the <a class="anchor" href="/utilities/lightswitches">Lightswitch</a> utility features
					when you complete this setup process.
				</p>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
