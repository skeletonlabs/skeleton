<script lang="ts">
	import { storeFramework } from '$docs/stores';
	import { Badge, Card, Divider, Button, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Forms</h1>
		<p>
			Given Skeleton's tight integration with Tailwind, we recommend the use of <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>. This provides a
			no-nonsense approach to applying clean and modern styling to <em>most</em> native form inputs. Then pair these with the custom Skeleton form components like Radio Groups, Slide Toggles, and Range
			Sliders.
		</p>
	</header>

	<!-- Preview -->
	<Card slotBody="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<div class="space-y-2">
			<p>We've provided a "kitchen sink" page to preview all form styles.</p>
		</div>
		<Button variant="filled-accent" href="/tailwind/forms/preview">Preview &rarr;</Button>
	</Card>

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
		<p>Finally, create your form elements using native HTML markup.</p>
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

	<!-- Next Steps -->
	<Card slotBody="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<p>Finally, let's add our first component.</p>
		<Button variant="filled-accent" href="/components/buttons">Add a Component</Button>
	</Card>
</div>
