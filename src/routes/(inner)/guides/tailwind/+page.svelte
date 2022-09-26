<script lang="ts">
	import { storeFramework } from '$docs/stores';
	// Components
	import Tab from '$lib/components/Tab/Tab.svelte';
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tailwind CSS</h1>
		<p>
			Skeleton features tight integration with <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. Let's install Tailwind and set a few configuration settings.
		</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		{#if ['sveltekit', 'vite'].includes($storeFramework)}
			<p><a href="https://github.com/svelte-add/tailwindcss" target="_blank">Svelte-Add</a> makes installation a trivial process.</p>
			<CodeBlock language="console" code={`npx svelte-add@latest tailwindcss\nnpm install`} />
		{:else if $storeFramework === 'astro'}
			<p>Add Tailwind integration via <a href="https://docs.astro.build/en/guides/integrations-guide/tailwind/" target="_blank">@astrojs/tailwind</a></p>
			<CodeBlock language="console" code={`npx astro add tailwind`} />
		{/if}
	</header>

	<hr />

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Configure Tailwind</h2>
		<p>Let's modify a few settings in <code>tailwind.config.cjs</code>. This is usually located in the root of your project directory.</p>
		<h3>Enabled Dark Mode Support</h3>
		<p>
			Append <code>darkMode: class</code> to support <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a>. You can pair this with the
			<a href="/utilities/light-switch">lightswitch</a> utility to toggle light/dark modes.
		</p>
		<CodeBlock
			language="js"
			code={`
module.exports = {
	darkMode: 'class',
    // ...
}
        `}
		/>
		<h3>Update Content Settings</h3>
		<p>
			Add the following to the <a href="https://tailwindcss.com/docs/configuration" target="_blank">content</a> settings. This ensures the Tailwind compiler sees utility classes for components within
			<code>node_modules</code>.
		</p>
		<CodeBlock
			language="js"
			code={`
module.exports = {
	// ...
    content: [
        // Keep any existing values present and append the following:
        "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"
    ],
    // ...
}
        `}
		/>
		<h3>Add the Skeleton Plugin</h3>
		<p>
			Add the Skeleton <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank">plugin</a>. This will automatically ingest and utilize the CSS variables defined in your theme.
			We'll setup the theme in the next step.
		</p>
		<CodeBlock
			language="js"
			code={`
module.exports = {
    // ...
    plugins: [
        // Keep any existing plugins present and append the following:
        require("@brainandbones/skeleton/tailwind/theme.cjs")
    ]
}
        `}
		/>
	</section>

	<hr />

	<!-- Plugins -->
	<section class="space-y-4">
		<h2>Tailwind Plugins</h2>
		<p>Skeleton pairs well with all of the official Tailwind plugins. These are completely optional though.</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="card card-body flex justify-between items-center space-x-4">
				<div class="space-y-2">
					<h3>Forms</h3>
					<p>Provides a basic reset for form elements.</p>
				</div>
				<a class="btn btn-ghost" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">View</a>
			</div>
			<div class="card card-body flex justify-between items-center space-x-4">
				<div class="space-y-2">
					<h3>Typography</h3>
					<p>Typographic defaults for HTML you don't control.</p>
				</div>
				<a class="btn btn-ghost" href="https://tailwindcss.com/docs/typography-plugin" target="_blank">View</a>
			</div>
			<div class="card card-body flex justify-between items-center space-x-4">
				<div class="space-y-2">
					<h3>Aspect Ratio</h3>
					<p>
						Composable aspect ratios. <a href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio#compatibility-with-default-aspect-ratio-utilities" target="_blank">See compatability</a>.
					</p>
				</div>
				<a class="btn btn-ghost" href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio" target="_blank">View</a>
			</div>
			<div class="card card-body flex justify-between items-center space-x-4">
				<div class="space-y-2">
					<h3>Line Clamp</h3>
					<p>Provides utilities for visually truncating text.</p>
				</div>
				<a class="btn btn-ghost" href="https://github.com/tailwindlabs/tailwindcss-line-clamp" target="_blank">View</a>
			</div>
		</div>
	</section>

	<hr />

	<!-- Next Steps -->
	<div class="card card-body flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's create and implement a custom theme.</p>
		<a class="btn btn-filled-accent" href="/guides/themes">Create a Theme</a>
	</div>
</div>
