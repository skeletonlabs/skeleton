<script lang="ts">
	import { storeFramework } from '$docs/stores';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tailwind CSS</h1>
		<p>
			Skeleton features tight integration with <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. Let's
			install Tailwind and configure all required settings.
		</p>
	</header>

	<!-- Tailwind Install -->
	<section class="space-y-8">
		<TabGroup selected={storeFramework}>
			<Tab value="cli">Skeleton CLI</Tab>
			<Tab value="manual">Manual Install</Tab>
		</TabGroup>
		{#if $storeFramework === 'cli'}
			<p>
				The CLI will automatically run <a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a>,
				which will install and configure Tailwind in your SvelteKit project.
			</p>
		{:else if $storeFramework === 'manual'}
			<p>
				<a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> makes it trivial to install and setup
				Tailwind. Run the following command in your terminal.
			</p>
			<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
		{/if}
	</section>

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Configure Tailwind</h2>
			<p>
				The following settings must be applied to your <code>tailwind.config.cjs</code>. This file can be found in the root of your project
				directory.
			</p>
		</div>
		<div class="space-y-4">
			<h3>Enabled Dark Mode Support</h3>
			<p>
				Append the following to enable
				<a href="https://tailwindcss.com/docs/dark-mode" target="_blank" rel="noreferrer">dark mode</a>. You can pair this with the
				<a href="/utilities/lightswitches">Lightswitch</a> utility to toggle light/dark modes.
			</p>
			<CodeBlock
				language="js"
				code={`
const config = {
	darkMode: 'class',
	// ...
}
`}
			/>
		</div>
		<div class="space-y-4">
			<h3>Update Content Settings</h3>
			<p>
				Add the following to the <a href="https://tailwindcss.com/docs/configuration" target="_blank" rel="noreferrer">content</a> settings.
				This resolves Skeleton's component styles within your project's <code>node_modules</code>.
			</p>
			<CodeBlock
				language="js"
				code={`
const config = {
	// ...
	content: [
		// Keep existing values and append the following:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	// ...
}
`}
			/>
		</div>
		<div class="space-y-4">
			<h3>Add the Skeleton Plugin</h3>
			<p>
				Add the Skeleton <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank" rel="noreferrer">plugin</a>. This
				will ensure Tailwind can generate the appropriate color and design token classes for your project.
			</p>
			<CodeBlock
				language="js"
				code={`
const config = {
	// ...
	plugins: [
		// Keep any existing plugins present and append the following:
		require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')
	]
}
`}
			/>
		</div>
	</section>

	<hr />

	<!-- Plugins -->
	<section class="space-y-4">
		<div class="flex items-center space-x-2">
			<h2>Tailwind Plugins</h2>
			<span class="badge bg-surface-200-700-token">Optional</span>
		</div>
		<p>
			Skeleton pairs well with all of the official Tailwind plugins. These are <u>optional</u> and should only be added if your project requires
			them.
		</p>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
			<div class="card p-4 card-glass-surface space-y-4 text-center">
				<h3>Forms</h3>
				<p>Provides a basic reset for form elements.</p>
				<a class="btn btn-ghost-surface" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">
					View Plugin
				</a>
			</div>
			<div class="card p-4 card-glass-surface space-y-4 text-center">
				<h3>Typography</h3>
				<p>Typographic defaults for HTML you don't control.</p>
				<a class="btn btn-ghost-surface" href="https://tailwindcss.com/docs/typography-plugin" target="_blank" rel="noreferrer">
					View Plugin
				</a>
			</div>
			<div class="card p-4 card-glass-surface space-y-4 text-center">
				<h3>Line Clamp</h3>
				<p>Provides utilities for visually truncating text.</p>
				<a class="btn btn-ghost-surface" href="https://github.com/tailwindlabs/tailwindcss-line-clamp" target="_blank" rel="noreferrer">
					View Plugin
				</a>
			</div>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, review our options for implementing Skeleton themes.</p>
		<a class="btn btn-filled-primary" href="/guides/themes">Themes &rarr;</a>
	</div>
</div>
