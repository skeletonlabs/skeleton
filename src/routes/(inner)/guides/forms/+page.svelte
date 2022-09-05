<script lang="ts">
	import { storeFramework } from '$lib/_documentation/stores';
	import { Badge, Card, Divider, Button, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>
			Forms
			<Badge background="bg-accent-500" class="-translate-y-3">Optional</Badge>
		</h1>
		<p>
			If you have experience with other UI component libraries, you may expect Skeleton to provide dedicated components for form inputs, select, checkboxes, and similar. However, this is not the case.
			The Skeleton team takes the stance that this is generally a bad practice.
		</p>
		<p>
			Wrapping inputs within a component tends to hurt accessibility, limit error handling and validation, and makes it much more difficult to customize inline attributes. While also dramatically
			impacting your ability to customize and style each input.
		</p>
		<p>
			However, given Skeleton's tight integration with Tailwind, an elegant solution is available via the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">official Tailwind Forms plugin</a>. This provides a no-nonsense approach to applying clean and modern styling to <em>most</em> inputs.
		</p>
		<p>Tailwind provides an example page to <a href="https://tailwindcss-forms.vercel.app/kitchen-sink.html" target="_blank">preview the default styles here</a>. These default styles can then be tailored to adapt your theme styling use Skeleton's modular stylesheet add-on for forms.</p>
	</header>

	<Divider />

	<!-- Forms and Input Styles -->
	<section class="space-y-4">
		<h2>Tailwind Forms Plugin</h2>
		<p>If you use form elements in your project, check out Tailwind's official YouTube video tutorial, or follow our step-by-step guide below.</p>
		<Card>
			<iframe
				class="w-full max-w-[800px] mx-auto aspect-video"
				src="https://www.youtube-nocookie.com/embed/pONeWAzDsQg"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</Card>
		<p>Install the plugin via NPM or similar package manager.</p>
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
        require('@tailwindcss/forms'),
        // ...
    ],
}
        `.trim()}
		/>
		<p>We provide simple stylesheet add-on that allows form elements to adapt to your Skeleton theme.</p>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit -->
		{#if $storeFramework === 'sveltekit'}
			<p>Import form element styles before your global stylesheet in <code>/src/routes/+layout.svelte</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/forms.css'; // <--\nimport '../app.postcss';`} />
		<!-- Framework: Vite (Svelte) -->
		{:else if $storeFramework === 'vite'}
			<p>Import form element styles before your global stylesheet in <code>/src/main.js</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/forms.css'; // <--\nimport '../app.css';`} />
		<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>Import form element styles before your global stylesheet in <code>/src/layouts/LayoutBasic.astro</code>.</p>
			<CodeBlock language="typescript" code={`import '@brainandbones/skeleton/styles/forms.css'; // <--\nimport '../styles/base.css';`} />
		{/if}
		<p>Finally, create your form elements using standard HTML markup.</p>
		<CodeBlock
			language="html"
			code={`
<label for="name">
    <span>Name</span>
    <input type="text" id="name" bind:value={name} minlength="2" required>
</label>
        `.trim()}
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
        `.trim()}
		/>
	</section>

	<Divider />

	<!-- Non-Supported -->
	<section class="space-y-4">
		<h2>Non-Supported Inputs</h2>
		<p>
			While the Tailwind Forms plugin covers most common inputs, there are <a href="https://tailwindcss-forms.vercel.app/kitchen-sink.html" target="_blank">a few exceptions</a> (see page bottom). However, Skeleton provides a robust <a href="/components/range-sliders">Range Slider</a>
			alternative, as well as custom components for <a href="/components/slide-toggles">Slide Toggles</a> and <a href="/components/radio-groups">Radio Groups</a>. Expect to see more of these in the future.
		</p>
	</section>

	<Divider />

	<!-- Next Steps -->
	<Card body="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Finally, let's add our first component.</p>
		<Button variant="filled-accent" href="/components/buttons">Add a Component</Button>
	</Card>
</div>
