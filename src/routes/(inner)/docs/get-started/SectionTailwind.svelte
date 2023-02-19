<script lang="ts">
	import { storeFramework } from '$docs/stores/stores';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<!-- Header -->
<section class="space-y-4">
	<h2>Tailwind CSS</h2>
	<p>
		Skeleton features tight integration with <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.
	</p>
	<TabGroup regionPanel="space-y-4">
		<!-- Tabs -->
		<Tab bind:group={$storeFramework} name="cli" value="cli">Skeleton CLI</Tab>
		<Tab bind:group={$storeFramework} name="manu" value="manual">Manual Install</Tab>
		<!-- Panel -->
		<svelte:fragment slot="panel">
			{#if $storeFramework === 'cli'}
				<p>
					The CLI will automatically run <a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a>
					to install Tailwind within your project.
				</p>
			{:else if $storeFramework === 'manual'}
				<div class="space-y-4">
					<p>
						<a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> makes it trivial to install and
						setup Tailwind. Run the following command in your terminal.
					</p>
					<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
					<!-- prettier-ignore -->
					<p>Then open your global stylesheet in <code>/src/app.postcss</code> and remove the following <a href="https://tailwindcss.com/docs/functions-and-directives" target="_blank" rel="noreferrer">@tailwind directives</a> introduced by Svelte-Add. Skeleton will handle these for you.</p>
					<div class="space-y-[1px]">
						<del>@tailwind base;</del>
						<del>@tailwind components;</del>
						<del>@tailwind utilities;</del>
					</div>
				</div>
				<p>Apply these three changes to your <code>tailwind.config.cjs</code>, found in the root of your project.</p>
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
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
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
						Avoid mixing <strong>Skeleton</strong> with Tailwind plugins from other UI libraries such as <strong>Flowbite</strong> or
						<strong>Daisy</strong>. This is not currently spported.
					</div>
				</aside>
			{/if}
		</svelte:fragment>
	</TabGroup>

	<!-- Plugins -->
	<!-- <div class="flex items-center space-x-2">
		<h2>Tailwind Plugins</h2>
		<span class="badge bg-surface-200-700-token">Optional</span>
	</div>
	<p>
		Skeleton pairs well with all of the official Tailwind plugins. These are <u>optional</u> and should only be added if your project requires
		them.
	</p>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		<div class="card p-4 variant-glass-surface space-y-4 text-center">
			<h3>Forms</h3>
			<p>Provides a basic reset for form elements.</p>
			<a class="btn variant-ghost-surface" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">
				View Plugin
			</a>
		</div>
		<div class="card p-4 variant-glass-surface space-y-4 text-center">
			<h3>Typography</h3>
			<p>Typographic defaults for HTML you don't control.</p>
			<a class="btn variant-ghost-surface" href="https://tailwindcss.com/docs/typography-plugin" target="_blank" rel="noreferrer">
				View Plugin
			</a>
		</div>
		<div class="card p-4 variant-glass-surface space-y-4 text-center">
			<h3>Line Clamp</h3>
			<p>Provides utilities for visually truncating text.</p>
			<a class="btn variant-ghost-surface" href="https://github.com/tailwindlabs/tailwindcss-line-clamp" target="_blank" rel="noreferrer">
				View Plugin
			</a>
		</div>
	</div> -->
</section>
