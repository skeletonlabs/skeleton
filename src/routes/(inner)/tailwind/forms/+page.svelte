<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { Card, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Forms</h1>
		<p>
			This <a href="/guides/styling">stylesheet add-on</a> provides a theme supports to form elements when paired with the
			<a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>.
		</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/forms.css';`} />
	</header>

	<!-- Preview -->
	<Card slotBody="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<div class="space-y-2">
			<p>We've provided a "kitchen sink" page to preview all form styles.</p>
		</div>
		<a class="btn btn-filled-accent" href="/tailwind/forms/preview">Preview &rarr;</a>
	</Card>

	<!-- Setup -->
	<section class="space-y-4">
		<h2>Install Forms Plugin</h2>
		<p>Check out Tailwind's official YouTube video tutorial, or follow the written step-by-step guide below.</p>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- YouTube Video -->
			<section>
				<iframe
					class="w-full aspect-video"
					src="https://www.youtube-nocookie.com/embed/pONeWAzDsQg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</section>
			<!-- Written -->
			<div class="flex-auto space-y-4">
				<CodeBlock language="console" code={`npm install -D @tailwindcss/forms`} />
				<p>
					Add the <a href="https://tailwindcss.com/docs/plugins" target="_blank">plugin</a> to your
					<code>tailwind.config.cjs</code>
				</p>
				<CodeBlock
					language="js"
					code={`
module.exports = {
	// ...
	plugins: [
		// Insert before the Skeleton Tailwind plugin:
		require('@tailwindcss/forms'),
		// ...
	],
}
				`}
				/>
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<p>Finally, create your form elements using native HTML markup.</p>
		<CodeBlock
			language="html"
			code={`
<label for="name">
	<span>Name</span>
	<input type="text" id="name" bind:value={name} minlength="2" required>
</label>
		`}
		/>
		<CodeBlock
			language="html"
			code={`
<label for="color">
	<span>Color</span>
	<select name="color" id="color" bind:value={color}>
		<option value="red">red</option>
		<option value="green">green</option>
		<option value="blue">blue</option>
	</select>
</label>
		`}
		/>
	</section>
</div>
