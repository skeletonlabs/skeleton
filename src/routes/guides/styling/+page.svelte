<script lang="ts">
	import { storeFramework } from '../../stores';
	import { Card, Button, Divider, TabGroup, Tab } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Styling</h1>
		<p>Below we'll review best practices for global styles, as well as how to override and adjust individual component styling.</p>
	</header>

	<Divider />

	<!-- Global Styles -->
	<section class="space-y-4">
		<h2>Global Styles</h2>
		<TabGroup selected={storeFramework}>
			<Tab value="sveltekit">SvelteKit</Tab>
			<Tab value="vite">Vite (Svelte)</Tab>
			<Tab value="astro">Astro</Tab>
		</TabGroup>
		<!-- Framework: SvelteKit | Vite (Svelte) -->
		{#if $storeFramework === 'sveltekit'}
			<p>Your global stylesheet is located in <code>/src/app.postcss</code>.</p>
		{:else if $storeFramework === 'vite'}
			<p>Your global stylesheet is located in <code>/src/app.css</code>.</p>
		<!-- Framework: Astro -->
		{:else if $storeFramework === 'astro'}
			<p>Your global stylesheet is located in <code>/src/styles/base.css</code>.</p>
		{/if}
		<p>
			Use the basic <code>body</code> style below to get started. For a real world example, review how we implemented global styles for
			<a href="https://github.com/Brain-Bones/skeleton/blob/master/src/app.css" target="_blank">this documentation site</a>.
		</p>
		<CodeBlock language="css" code={`body { @apply bg-surface-100 dark:bg-surface-900 text-black dark:text-white p-4; }`} />
		<p>Here's a few suggested best practices to follow when creating global styles:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				One of the best uses for <a href="https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply" target="_blank">Tailwind @apply</a> is when defining global styles. Just be leery of using this elsewhere.
			</li>
			<li>
				Utilize the CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not" target="_blank">:not pseudo-class</a> to exclude and avoid overwriting Skeleton component's inherit styles.
			</li>
			<li>
				Utilize the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Tailwind Forms plugin</a>
				to handle form input styling. View our <a href="/guides/forms">Forms guide</a> for more details.
			</li>
		</ul>
	</section>

	<Divider />

	<!-- Per Component Styles -->
	<section class="space-y-4">
		<h2>Per Component Styles</h2>
		<p>
			Skeleton components automatically inherit and utilize each theme color value. However, there may be cases where you want to overwrite or extend the styling on a single component. To do this,
			simply add a <code>class</code> attribute to any component. You can then apply any valid CSS or Tailwind class as expected.
		</p>
		<CodeBlock
			language="html"
			code={`
<Button variant="filled-primary">Standard</Button>
<Button variant="filled-primary" class="text-3xl px-10 py-5">Big</Button>
        `.trim()}
		/>
		<p>
			When overwriting inherited styles, you may need to mark the styles as <code>!important</code>. Tailwind uses a leading exclamation mark to handle this.
		</p>
		<CodeBlock language="html" code={`<Button class="!p-10">Big</Button>`} />
		<p>
			Keep in mind that components are a single line HTML element and represent and contain a set of HTML elements within. This means you should be mindful of your target, as the <code>class</code> attribute
			is only applied to the top-most parent element. In rare cases you may need to generate a chained class definition, though we recommend using this technique sparingly.
		</p>
		<CodeBlock language="css" code={`.my-custom-class .menu-content { @apply bg-red-500; }`} />
		<CodeBlock language="html" code={`<Menu class="my-custom-class">...</Menu>`} />
	</section>

	<Divider />

	<!-- Next Steps -->
	<Card class="flex justify-between items-center space-x-4 space-y-0">
		<p>Next, let's review how to handle forms and inputs.</p>
		<Button variant="filled-accent" href="/guides/forms">Handling Forms</Button>
	</Card>
</div>
