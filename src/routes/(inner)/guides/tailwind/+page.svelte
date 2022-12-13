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
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		{#if $storeFramework === 'sveltekit'}
			<p>
				The CLI will automatically run <a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a>,
				which will install and configure Tailwind in your SvelteKit project.
			</p>
		{:else if $storeFramework === 'vite'}
			<p>
				<a href="https://github.com/svelte-add/tailwindcss" target="_blank" rel="noreferrer">Svelte-Add</a> makes it trivial to install and setup
				Tailwind. They provide options for including some Tailwind Plugins.
			</p>
			<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
		{:else if $storeFramework === 'astro'}
			<p>
				Add Tailwind integration via <a
					href="https://docs.astro.build/en/guides/integrations-guide/tailwind/"
					target="_blank"
					rel="noreferrer">@astrojs/tailwind</a
				>
			</p>
			<CodeBlock language="console" code={`npx astro add tailwind`} />
		{/if}
	</header>

	<hr />

	<!-- Usage -->
	<section class="space-y-8">
		<div class="space-y-4">
			<h2>Configure Tailwind</h2>
			<p>
				The following settings must be applied to your <code>tailwind.config.cjs</code>. This file can be found in the root of your project
				directory.
			</p>
		</div>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
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
${$storeFramework === 'astro' ? 'module.exports' : 'const config'} = {
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
${$storeFramework === 'astro' ? 'module.exports' : 'const config'} = {
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
				will ensure Tailwind can generate color classes based on your theme. We'll add a theme in the following guide section.
			</p>
			<CodeBlock
				language="js"
				code={`
${$storeFramework === 'astro' ? 'module.exports' : 'const config'} = {
	// ...
	plugins: [
		// Keep any existing plugins present and append the following:
		require('@skeletonlabs/skeleton/tailwind/theme.cjs')
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
			<div class="card p-4 card-glass space-y-4 text-center">
				<h3>Forms</h3>
				<p>Provides a basic reset for form elements.</p>
				<a class="btn btn-ghost-surface" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank" rel="noreferrer">
					View Plugin
				</a>
			</div>
			<div class="card p-4 card-glass space-y-4 text-center">
				<h3>Typography</h3>
				<p>Typographic defaults for HTML you don't control.</p>
				<a class="btn btn-ghost-surface" href="https://tailwindcss.com/docs/typography-plugin" target="_blank" rel="noreferrer">
					View Plugin
				</a>
			</div>
			<div class="card p-4 card-glass space-y-4 text-center">
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
		<p>Next, let's implement a Skeleton theme.</p>
		<a class="btn btn-filled-primary" href="/guides/themes">Themes &rarr;</a>
	</div>
</div>
