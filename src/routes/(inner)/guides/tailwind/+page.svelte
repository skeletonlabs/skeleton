<script lang="ts">
	import { Divider, Card, Button } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Tailwind Settings</h1>
		<p>
			Skeleton is fully compatible with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>, but requires a couple of extra steps to ensure everything works.
		</p>
	</header>

	<Divider />

	<!-- Usage -->
	<section class="space-y-4">
		<h3>Update Content</h3>
		<p>
			Add the following to <a href="https://tailwindcss.com/docs/configuration" target="_blank">content</a>
			within <code>tailwind.config.cjs</code>. This ensures Tailwind is aware of Skeleton's component classes within your local development server. Implement <code>darkMode: 'class'</code> only if you
			plan to make use of <a href="https://tailwindcss.com/docs/dark-mode" target="_blank">Tailwind's dark mode</a>
			feature.
		</p>
		<CodeBlock
			language="js"
			code={`
module.exports = {
	darkMode: 'class',
    content: [
        // ...
        "./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"
    ],
    // ...
}
        `.trim()}
		/>
		<h3>Add the Skeleton Plugin</h3>
		<p>
			Add the Skeleton <a href="https://tailwindcss.com/docs/plugins#official-plugins" target="_blank">plugin</a>
			to <code>tailwind.config.cjs</code>. This will automatically ingest and utilize your CSS variables defined in your theme.
		</p>
		<CodeBlock
			language="js"
			code={`
module.exports = {
    // ...
    plugins: [
        // ...
        require("@brainandbones/skeleton/tailwind.cjs")
    ]
}
        `.trim()}
		/>
	</section>

	<Divider />

	<!-- Plugins -->
	<section class="space-y-4">
		<h2>Tailwind Plugins</h2>
		<p>Skeleton pairs well with all of the official Tailwind plugins, however these are completely optional.</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Card slotBody="flex justify-between items-center space-x-4">
				<div>
					<h6>Forms</h6>
					<p>Provides a basic reset for form elements.</p>
				</div>
				<Button variant="ghost" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">View</Button>
			</Card>
			<Card slotBody="flex justify-between items-center space-x-4">
				<div>
					<h6>Typography</h6>
					<p>Typographic defaults for HTML you don't control.</p>
				</div>
				<Button variant="ghost" href="https://tailwindcss.com/docs/typography-plugin" target="_blank">View</Button>
			</Card>
			<Card slotBody="flex justify-between items-center space-x-4">
				<div>
					<h6>Aspect Ratio</h6>
					<p>Composable API for giving elements a fixed aspect ratio.</p>
				</div>
				<Button variant="ghost" href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio" target="_blank">View</Button>
			</Card>
			<Card slotBody="flex justify-between items-center space-x-4">
				<div>
					<h6>Line Clamp</h6>
					<p>Provides utilities for visually truncating text.</p>
				</div>
				<Button variant="ghost" href="https://github.com/tailwindlabs/tailwindcss-line-clamp" target="_blank">View</Button>
			</Card>
		</div>
	</section>

	<Divider />

	<!-- Next Steps -->
	<Card slotBody="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Next, let's create and implement a custom theme.</p>
		<Button variant="filled-accent" href="/guides/themes">Create a Theme</Button>
	</Card>
</div>
